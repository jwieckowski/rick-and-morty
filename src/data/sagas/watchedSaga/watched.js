import { put, call } from 'redux-saga/effects'
import { loadWatched, toggleCheckWatched } from '../../api/watched'
import {
  loadWatchedStart,
  loadWatchedSuccess,
  loadWatchedFail,
  checkWatchedStart,
  checkWatchedSuccess,
  checkWatchedFail,
  uncheckWatchedStart,
  uncheckWatchedSuccess,
  uncheckWatchedFail
} from '../../actions/watched.js'

export function * loadWatchedSaga (source) {
  yield put(loadWatchedStart())
  try {
    const result = yield call(loadWatched, source.source)
    yield put(loadWatchedSuccess(result.data))
  } catch (error) {
    yield put(loadWatchedFail(error))
  }
}

export function * toggleCheckWatchedSaga (watched) {
  watched.watched === true
    ? yield put(uncheckWatchedStart())
    : yield put(checkWatchedStart())
  try {
    const result = yield call(toggleCheckWatched, watched)
    watched.watched === true
      ? yield put(uncheckWatchedSuccess(watched.id))
      : yield put(checkWatchedSuccess(watched.id))
  } catch (error) {
    watched.watched === true
      ? yield put(uncheckWatchedFail(error))
      : yield put(checkWatchedFail(error))
  }
}
