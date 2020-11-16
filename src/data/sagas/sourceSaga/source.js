import { put, call } from 'redux-saga/effects'
import { fetchSource } from '../../api/source'
import {
  fetchSourceStart,
  fetchSourceSuccess,
  fetchSourceFail
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
