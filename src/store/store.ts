import { combineReducers, legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'

import * as reducers from './reducers'


const rootReducer = combineReducers(reducers)

const store = createStore(rootReducer, composeWithDevTools())

export default store