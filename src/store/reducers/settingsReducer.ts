import { Action } from 'redux'

import {
  FOCUS_PARKING,
  isFocusParkingAction,
  isUnwatchParkingAction,
  isWatchParkingAction,
  UNWATCH_PARKING,
  WATCH_PARKING
} from '../actions'
import { RootState } from '../types'

const initialState: RootState['settings'] = {
  focusedParkingId: null,
  watchedParkings: [],
  isLoading: false
}

const parkingsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FOCUS_PARKING: {
      if (!isFocusParkingAction(action)) return state

      return { ...state, focusedParkingId: action.parkingId }
    }
    case WATCH_PARKING: {
      if (!isWatchParkingAction(action)) return state

      const { parkingId } = action

      if (state.watchedParkings.includes(parkingId)) return state

      return { ...state, watchedParkings: [...state.watchedParkings, parkingId] }
    }
    case UNWATCH_PARKING: {
      if (!isUnwatchParkingAction(action)) return state

      const { parkingId } = action

      return { ...state, watchedParkings: state.watchedParkings.filter(id => id !== parkingId) }
    }
    default:
      return state
  }
}

export default parkingsReducer