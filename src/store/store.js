import {createStore , applyMiddleware} from 'redux'
import movieReducer from '../reducers/reducer'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import {watchSaga} from '../actions/actions'

const saga = createSagaMiddleware()
const store = createStore(movieReducer,composeWithDevTools(applyMiddleware(saga)))
saga.run(watchSaga)
export default store;