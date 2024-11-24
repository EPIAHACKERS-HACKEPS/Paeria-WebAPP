import { ParkingStatus } from '../../constants'

export interface Parking {
  name: string,
  parkingId: string,
  size: number,
  occupation: number,
  status: ParkingStatus,
  url_embed: string,
}