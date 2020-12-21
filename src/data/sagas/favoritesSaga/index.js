import { takeLatest } from 'redux-saga/effects'
import action from '../../../constants/actions.js'
import { loadFavoritesSaga, addFavoriteSaga, deleteFavoriteSaga } from './favorites.js'

export function * watchFavorites () {
  yield takeLatest(action.FAVORITES_LOAD_ACTION, loadFavoritesSaga)
  yield takeLatest(action.FAVORITE_ADD_ACTION, addFavoriteSaga)
  yield takeLatest(action.FAVORITE_DELETE_ACTION , deleteFavoriteSaga)
}