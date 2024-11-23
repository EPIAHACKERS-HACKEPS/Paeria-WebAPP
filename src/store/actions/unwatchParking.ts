import { Action } from 'redux'

export const UNWATCH_PARKING = 'UNWATCH_PARKING'

interface UnwatchParkingArgs {
  parkingId: string
}

interface UnwatchParkingAction extends Action {
  type: typeof UNWATCH_PARKING
  parkingId: string
}

type UnwatchParking = (args: UnwatchParkingArgs) => UnwatchParkingAction

export const unwatchParking: UnwatchParking = ({ parkingId }) => ({
  type: UNWATCH_PARKING,
  parkingId
})

export function isUnwatchParkingAction(action: Action): action is UnwatchParkingAction {
  return action.type === UNWATCH_PARKING && typeof (action as UnwatchParkingAction).parkingId === 'string'
}
