import { Action } from 'redux'

import { RootState } from '../types'
import { isSetParkingHistoryAction, SET_PARKING_HISTORY } from '../actions/setParkingHistory'

const initialState: RootState['history'] = {}

const historyReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_PARKING_HISTORY: {
      if (!isSetParkingHistoryAction(action)) return state

      const { parkingId, history } = action

      return {
        ...state,
        [parkingId]: history
      }
    }
    default:
      return state
  }
}

export default historyReducer