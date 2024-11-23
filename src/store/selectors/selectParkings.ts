import { RootState } from '../types/rootState.ts'

const selectParkings = (state: RootState) => {
  return state.parkings.parkings
}

export default selectParkings