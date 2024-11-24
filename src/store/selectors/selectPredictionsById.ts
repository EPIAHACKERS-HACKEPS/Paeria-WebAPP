import { RootState } from '../types'
import { Prediction } from '../types/prediction.ts'

const voidPredictions = [] as Prediction[]

const selectPredictionsById = (state: RootState, id: string) => {
  return state.predictions[id] ?? voidPredictions
}

export default selectPredictionsById