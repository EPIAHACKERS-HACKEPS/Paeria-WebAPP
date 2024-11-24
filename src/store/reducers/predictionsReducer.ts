import { Action } from 'redux'

import { RootState } from '../types'
import { isSetParkingPredictionsAction, SET_PARKING_PREDICTIONS } from '../actions/setParkingPredictions'

const initialState: RootState['predictions'] = {}

const predictionsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_PARKING_PREDICTIONS: {
      if (!isSetParkingPredictionsAction(action)) return state

      const { parkingId, predictions } = action

      return {
        ...state,
        [parkingId]: predictions
      }
    }
    default:
      return state
  }
}

export default predictionsReducer