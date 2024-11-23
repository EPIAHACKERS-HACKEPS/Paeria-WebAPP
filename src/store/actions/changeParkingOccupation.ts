import { Action } from 'redux'

export const CHANGE_PARKING_OCCUPATION = 'CHANGE_PARKING_OCCUPATION'

interface ChangeParkingOccupationArgs {
  occupation: number
  parkingId: string
}

interface ChangeParkingOccupationAction extends Action {
  occupation: number
  parkingId: string
  type: typeof CHANGE_PARKING_OCCUPATION
}

type ChangeParkingOccupation = (args: ChangeParkingOccupationArgs) => ChangeParkingOccupationAction

export const changeParkingOccupation: ChangeParkingOccupation = ({ parkingId, occupation }) => ({
  occupation,
  parkingId,
  type: CHANGE_PARKING_OCCUPATION
})

export function isChangeParkingOccupationAction(action: Action): action is ChangeParkingOccupationAction {
  return action.type === CHANGE_PARKING_OCCUPATION && typeof (action as ChangeParkingOccupationAction).occupation === 'number' && typeof (action as ChangeParkingOccupationAction).parkingId === 'string'
}