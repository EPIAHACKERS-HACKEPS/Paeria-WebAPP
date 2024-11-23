import { RootState } from '../types'

const selectFocusedParkingId = (state: RootState) => state.settings.focusedParkingId

export default selectFocusedParkingId