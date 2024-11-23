import { RootState } from '../types'

const selectWatchedParkings = (state: RootState) => {
  return state.settings.watchedParkings
}

export default selectWatchedParkings