import { all } from 'redux-saga/effects'

import { watchSource } from '../../data/sagas/sourceSaga'
import { watchWatched } from '../../data/sagas/watchedSaga'
import { watchFavorites } from '../../data/sagas/favoritesSaga'

export default function * rootSaga () {
  yield all([
    watchSource(),
    watchWatched(),
    watchFavorites()
  ])
}