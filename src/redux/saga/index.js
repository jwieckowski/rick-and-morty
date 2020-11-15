import { all } from 'redux-saga/effects'

import { watchHome } from '../../data/sagas/home.js'

export default function * rootSaga () {
  yield all([
    watchHome()
  ])
}