import { Action } from 'redux'
import {
  CHANGE_PARKING_OCCUPATION,
  isChangeParkingOccupationAction,
  isSetParkingsAction,
  SET_PARKINGS
} from '../actions'
import { RootState } from '../types/rootState.ts'

const initialState: RootState['parkings'] = []


const parkingsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_PARKINGS: {
      if (!isSetParkingsAction(action)) return state

      return action.parkings
    }
    case CHANGE_PARKING_OCCUPATION: {
      if (!isChangeParkingOccupationAction(action)) return state

      const { parkingId, occupation } = action

      return state.map(parking => {
        if (parking.id === parkingId) return { ...parking, occupation }
        return parking
      })
    }
    default:
      return state
  }
}

export default parkingsReducer