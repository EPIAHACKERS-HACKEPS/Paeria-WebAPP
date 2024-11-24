import { Parking } from './parking'
import { Prediction } from './prediction'
import { History } from './history'

export interface RootState {
  settings: {
    focusedParkingId: string | null,
    watchedParkings: string[],
    isLoading: boolean
  },
  parkings: Parking[],
  predictions: {
    [parkingId: string]: Prediction[]
  },
  history: {
    [parkingId: string]: History[]
  }
}