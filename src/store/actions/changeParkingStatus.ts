import { Action } from 'redux'
import { ParkingStatus } from '../../constants.ts'

export const CHANGE_PARKING_STATUS = 'CHANGE_PARKING_STATUS'

interface ChangeParkingStatusArgs {
  status: ParkingStatus
  parkingId: string
}

interface ChangeParkingStatusAction extends Action {
  status: ParkingStatus
  parkingId: string
  type: typeof CHANGE_PARKING_STATUS
}

type ChangeParkingStatus = (args: ChangeParkingStatusArgs) => ChangeParkingStatusAction

export const changeParkingStatus: ChangeParkingStatus = ({ parkingId, status }) => ({
  status,
  parkingId,
  type: CHANGE_PARKING_STATUS
})

export function isChangeParkingStatusAction(action: Action): action is ChangeParkingStatusAction {
  return action.type === CHANGE_PARKING_STATUS && typeof (action as ChangeParkingStatusAction).status === 'string' && typeof (action as ChangeParkingStatusAction).parkingId === 'string'
}