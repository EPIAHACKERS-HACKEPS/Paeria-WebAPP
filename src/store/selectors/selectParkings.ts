import { RootState } from '../types/rootState.ts'

const selectParkings = (state: RootState) => {
  return state.parkings
}

export default selectParkings