import { Action } from 'redux'

export const FOCUS_PARKING = 'FOCUS_PARKING'

interface FocusParkingArgs {
  parkingId: string
}

interface FocusParkingAction extends Action {
  type: typeof FOCUS_PARKING
  parkingId: string
}

type FocusParking = (args: FocusParkingArgs) => FocusParkingAction

export const focusParking: FocusParking = ({ parkingId }) => ({
  type: FOCUS_PARKING,
  parkingId
})

export function isFocusParkingAction(action: Action): action is FocusParkingAction {
  return action.type === FOCUS_PARKING && typeof (action as FocusParkingAction).parkingId === 'string'
}
