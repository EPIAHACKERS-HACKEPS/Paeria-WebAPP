import { store } from '../store'
import { setParkingPredictions } from '../store/actions/setParkingPredictions'
import { Prediction } from '../store/types/prediction'

const voidPredictions = [] as Prediction[]

const fetchPrediction = async (parkingId: string) => {
  try {
    const response = await fetch(`https://hackeps.ddns.net/backend/api/v1/statistics/${parkingId}`)
    const predictions = await response.json()

    store.dispatch(setParkingPredictions({ predictions, parkingId }))
  } catch {
    store.dispatch(setParkingPredictions({ predictions: voidPredictions, parkingId }))
  }
}

export default fetchPrediction