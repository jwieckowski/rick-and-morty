import { all } from 'redux-saga/effects'

import { watchSource } from '../../data/sagas/sourceSaga'
import { watchWatched } from '../../data/sagas/watchedSaga'

export default function * rootSaga () {
  yield all([
    watchSource(),
    watchWatched()
  ])
}