import { Action } from 'redux'
import { Prediction } from '../types/prediction'

export const SET_PARKING_PREDICTIONS = 'SET_PARKING_PREDICTIONS'

interface SetParkingPredictionsArgs {
  predictions: Prediction[]
  parkingId: string
}

interface SetParkingPredictionsAction extends Action {
  predictions: Prediction[]
  parkingId: string
  type: typeof SET_PARKING_PREDICTIONS
}

type SetParkingPredictions = (args: SetParkingPredictionsArgs) => SetParkingPredictionsAction

export const setParkingPredictions: SetParkingPredictions = ({ parkingId, predictions }) => ({
  predictions,
  parkingId,
  type: SET_PARKING_PREDICTIONS
})

export function isSetParkingPredictionsAction(action: Action): action is SetParkingPredictionsAction {
  return action.type === SET_PARKING_PREDICTIONS && Array.isArray((action as SetParkingPredictionsAction).predictions) && typeof (action as SetParkingPredictionsAction).parkingId === 'string'
}