import { Action } from 'redux'
import { History } from '../types/history'

export const SET_PARKING_HISTORY = 'SET_PARKING_HISTORY'

interface SetParkingHistoryArgs {
  history: History[]
  parkingId: string
}

interface SetParkingHistoryAction extends Action {
  history: History[]
  parkingId: string
  type: typeof SET_PARKING_HISTORY
}

type SetParkingHistory = (args: SetParkingHistoryArgs) => SetParkingHistoryAction

export const setParkingHistory: SetParkingHistory = ({ parkingId, history }) => ({
  history,
  parkingId,
  type: SET_PARKING_HISTORY
})

export function isSetParkingHistoryAction(action: Action): action is SetParkingHistoryAction {
  return action.type === SET_PARKING_HISTORY && Array.isArray((action as SetParkingHistoryAction).history) && typeof (action as SetParkingHistoryAction).parkingId === 'string'
}