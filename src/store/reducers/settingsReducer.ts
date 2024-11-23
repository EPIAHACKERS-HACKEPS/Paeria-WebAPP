import { Action } from 'redux'
import { FOCUS_PARKING, isFocusParkingAction } from '../actions'
import { RootState } from '../types/rootState.ts'

const initialState: RootState['settings'] = {
  focusedParkingId: null
}

const parkingsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FOCUS_PARKING: {
      if (!isFocusParkingAction(action)) return state

      return { ...state, focusedParkingId: action.parkingId }
    }
    default:
      return state
  }
}

export default parkingsReducer