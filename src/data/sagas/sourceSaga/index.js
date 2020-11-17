import { takeLatest } from 'redux-saga/effects'
import action from '../../../constants/actions.js'
import { fetchSourceSaga, fetchMoreSourceSaga } from './source.js'

export function * watchSource () {
  yield takeLatest(action.SOURCE_FETCH_ACTION , fetchSourceSaga)
  yield takeLatest(action.SOURCE_FETCH_MORE_ACTION , fetchMoreSourceSaga)
}