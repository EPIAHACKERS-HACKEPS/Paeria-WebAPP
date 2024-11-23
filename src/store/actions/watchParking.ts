import { Action } from 'redux'

export const WATCH_PARKING = 'WATCH_PARKING'

interface WatchParkingArgs {
  parkingId: string
}

interface WatchParkingAction extends Action {
  type: typeof WATCH_PARKING
  parkingId: string
}

type WatchParking = (args: WatchParkingArgs) => WatchParkingAction

export const watchParking: WatchParking = ({ parkingId }) => ({
  type: WATCH_PARKING,
  parkingId
})

export function isWatchParkingAction(action: Action): action is WatchParkingAction {
  return action.type === WATCH_PARKING && typeof (action as WatchParkingAction).parkingId === 'string'
}
