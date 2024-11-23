import { Parking } from './parking.ts'

export interface RootState {
  settings: {
    focusedParkingId: string | null
  },
  parkings: Parking[]
}