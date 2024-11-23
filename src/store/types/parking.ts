export interface Parking {
  name: string,
  id: string,
  size: number,
  occupation: number,
  status: 'OFFLINE' | 'ONLINE',
  map_url: string,
}