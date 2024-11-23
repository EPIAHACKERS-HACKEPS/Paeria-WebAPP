import { ParkingStatus } from '../../constants.ts'

export interface Parking {
  name: string,
  id: string,
  size: number,
  occupation: number,
  status: ParkingStatus,
  map_url: string,
}