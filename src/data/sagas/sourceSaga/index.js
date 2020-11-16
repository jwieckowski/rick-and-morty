import { takeLatest } from 'redux-saga/effects'
import action from '../../../constants/actions.js'
import { fetchSourceSaga } from './source.js'

export function * watchSource () {
  yield takeLatest(action.SOURCE_FETCH_ACTION , fetchSourceSaga)
}