import { RootState } from '../types'
import { History } from '../types/history'

const voidHistory = [] as History[]

const selectHistoryById = (state: RootState, id: string) => {
  return state.history[id] ?? voidHistory
}

export default selectHistoryById