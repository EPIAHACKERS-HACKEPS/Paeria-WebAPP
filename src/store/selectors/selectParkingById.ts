import { RootState } from '../types'

const selectParkingById = (state: RootState, id: string) => {
  return state.parkings.find(parking => parking.parkingId === id)
}

export default selectParkingById