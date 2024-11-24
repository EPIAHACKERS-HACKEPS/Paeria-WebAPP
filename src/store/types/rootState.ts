import { Parking } from './parking'
import { Prediction } from './prediction.ts'


export interface RootState {
  settings: {
    focusedParkingId: string | null,
    watchedParkings: string[],
    isLoading: boolean
  },
  parkings: Parking[],
  predictions: {
    [parkingId: string]: Prediction[]
  }
}