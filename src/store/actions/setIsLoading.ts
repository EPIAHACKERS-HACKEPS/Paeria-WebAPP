import { Action } from 'redux'

export const SET_IS_LOADING = 'SET_IS_LOADING'

interface SetIsLoadingArgs {
  isLoading: boolean
}

interface SetIsLoadingAction extends Action {
  type: typeof SET_IS_LOADING
  isLoading: boolean
}

type SetIsLoading = (args: SetIsLoadingArgs) => SetIsLoadingAction

export const setIsLoading: SetIsLoading = ({ isLoading }) => ({
  type: SET_IS_LOADING,
  isLoading
})

export function isSetIsLoadingAction(action: Action): action is SetIsLoadingAction {
  return action.type === SET_IS_LOADING && typeof (action as SetIsLoadingAction).isLoading === 'boolean'
}
