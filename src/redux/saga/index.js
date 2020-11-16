import { all } from 'redux-saga/effects'

import { watchSource } from '../../data/sagas/sourceSaga'

export default function * rootSaga () {
  yield all([
    watchSource()
  ])
}