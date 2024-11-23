import { RootState } from '../types/rootState.ts'

const selectParkingById = (state: RootState, id: string) => {
  return state.parkings.parkings.find(parking => parking.id === id)
}

export default selectParkingById