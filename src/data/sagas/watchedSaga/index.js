import { takeLatest } from 'redux-saga/effects'
import action from '../../../constants/actions.js'
import { loadWatchedSaga, toggleCheckWatchedSaga } from './watched.js'

export function * watchWatched () {
  yield takeLatest(action.WATCHED_LOAD_ACTION , loadWatchedSaga)
  yield takeLatest(action.WATCHED_CHECK_ACTION , toggleCheckWatchedSaga)
  yield takeLatest(action.WATCHED_UNCHECK_ACTION , toggleCheckWatchedSaga)
}