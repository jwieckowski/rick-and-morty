import { put, call } from 'redux-saga/effects'
import { fetchSource } from '../../api/source'
import {
  fetchSourceStart,
  fetchSourceSuccess,
  fetchSourceFail,
  fetchMoreSourceStart,
  fetchMoreSourceSuccess,
  fetchMoreSourceFail
} from '../../actions/source.js'

export function * fetchSourceSaga (source) {
  yield put(fetchSourceStart())
  try {
    const result = yield call(fetchSource, source.source)
    yield put(fetchSourceSuccess(result.data))
  } catch (error) {
    yield put(fetchSourceFail(error))
  }
}

export function * fetchMoreSourceSaga (source) {
  yield put(fetchMoreSourceStart())
  try {
    const result = yield call(fetchSource, source.source)
    yield put(fetchMoreSourceSuccess(result.data))
  } catch (error) {
    yield put(fetchMoreSourceFail(error))
  }
}
