import { Parking } from './parking.ts'

export interface RootState {
  settings: {
    focusedParkingId: string | null,
    watchedParkings: string[],
    isLoading: boolean
  },
  parkings: Parking[]
}