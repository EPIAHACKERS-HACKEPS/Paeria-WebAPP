import { RootState } from '../types'

const selectParkings = (state: RootState) => {
  return state.parkings
}

export default selectParkings