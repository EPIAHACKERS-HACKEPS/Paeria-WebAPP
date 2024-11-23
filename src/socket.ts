import { io } from 'socket.io-client'

import { changeParkingOccupation, changeParkingStatus, setIsLoading, setParkings } from './store/actions'
import { ParkingStatus, SOCKET_URL } from './constants'
import { selectParkingById } from './store/selectors'
import { store } from './store'
import selectWatchedParkings from './store/selectors/selectWatchedParkings.ts'
import { LocalNotifications } from '@capacitor/local-notifications'
import { Parking } from './store/types'
import selectIsLoading from './store/selectors/selectIsLoading.ts'

const socket = io(SOCKET_URL)


socket.on('connect', () => {
  if (socket.connected) {
    store.dispatch(setIsLoading({ isLoading: false }))
    socket.emit('status', {})
  } else if (!selectIsLoading(store.getState())) {
    store.dispatch(setIsLoading({ isLoading: true }))
  }
})

socket.on('disconnect', () => {
  if (selectIsLoading(store.getState())) {
    store.dispatch(setIsLoading({ isLoading: true }))
  }
})

socket.on('status', (parkings: Parking[]) => {
  store.dispatch(setParkings({ parkings }))
})


interface Data {
  parkingId: string,
  status: ParkingStatus
  occupation: number
}

socket.on('change_parking', async (data: Data) => {
  const parking = selectParkingById(store.getState(), data.parkingId)

  if (!parking) return

  if (data.status && parking.status !== data.status) {
    store.dispatch(changeParkingStatus({ parkingId: data.parkingId, status: data.status }))
  }

  if (data.occupation !== undefined && parking.occupation !== data.occupation) {
    const watchedParkings = selectWatchedParkings(store.getState())

    store.dispatch(changeParkingOccupation({ parkingId: data.parkingId, occupation: data.occupation }))

    if (watchedParkings.includes(data.parkingId)) {
      if (parking.occupation === parking.size && data.occupation < parking.size) {
        await LocalNotifications.schedule({
          notifications: [{
            id: 1,
            title: 'Places lliures',
            body: `Hi ha places disponibles al parking ${parking.name}`,
            channelId: 'parking_channel'
          }]
        })
      } else if (parking.occupation < parking.size && data.occupation === parking.size) {
        await LocalNotifications.schedule({
          notifications: [{
            id: 1,
            title: 'Parking ple',
            body: `El parking ${parking.name} està ple`,
            channelId: 'parking_channel'
          }]
        })
      }
    }
  }
})

export default socket