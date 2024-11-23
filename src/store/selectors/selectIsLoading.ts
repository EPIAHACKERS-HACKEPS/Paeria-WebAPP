import { RootState } from '../types'

const selectIsLoading = (state: RootState) => {
  return state.settings.isLoading
}

export default selectIsLoading