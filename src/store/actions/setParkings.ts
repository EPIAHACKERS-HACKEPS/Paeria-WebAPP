import { Action } from 'redux'

import { Parking } from '../types'

export const SET_PARKINGS = 'SET_PARKINGS'

interface SetParkingsArgs {
  parkings: Parking[]
}

interface SetParkingsAction extends Action {
  type: typeof SET_PARKINGS
  parkings: Parking[]
}

type SetParkings = (args: SetParkingsArgs) => SetParkingsAction

export const setParkings: SetParkings = ({ parkings }) => ({
  type: SET_PARKINGS,
  parkings
})

export function isSetParkingsAction(action: Action): action is SetParkingsAction {
  return action.type === SET_PARKINGS && Array.isArray((action as SetParkingsAction).parkings)
}
