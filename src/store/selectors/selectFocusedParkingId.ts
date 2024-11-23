import { RootState } from '../types/rootState.ts'

const selectFocusedParkingId = (state: RootState) => state.settings.focusedParkingId

export default selectFocusedParkingId