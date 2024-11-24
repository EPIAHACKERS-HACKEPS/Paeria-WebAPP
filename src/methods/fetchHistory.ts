import { store } from '../store'
import { setParkingHistory } from '../store/actions/setParkingHistory'
import { History } from '../store/types/history'

const voidHistory = [] as History[]

const fetchHistory = async (parkingId: string) => {
  try {
    const response = await fetch(`https://hackeps.ddns.net/backend/api/v1/history/${parkingId}`)
    const history = await response.json()

    store.dispatch(setParkingHistory({ history, parkingId }))
  } catch {
    store.dispatch(setParkingHistory({ history: voidHistory, parkingId }))
  }
}

export default fetchHistory