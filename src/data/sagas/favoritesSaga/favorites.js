import { put, call } from 'redux-saga/effects'
import { loadFavorites, addFavorite, deleteFavorite } from '../../api/favorites'
import {
  loadFavoritesStart,
  loadFavoritesSuccess,
  loadFavoritesFail,
  addFavoriteStart,
  addFavoriteSuccess,
  addFavoriteFail,
  deleteFavoriteStart,
  deleteFavoriteSuccess,
  deleteFavoriteFail
} from '../../actions/favorites.js'

export function * loadFavoritesSaga (source) {
  yield put(loadFavoritesStart())
  try {
    const result = yield call(loadFavorites, source.source)
    yield put(loadFavoritesSuccess(result.data))
  } catch (error) {
    yield put(loadFavoritesFail(error))
  }
}

export function * addFavoriteSaga (favorite) {
  yield put(addFavoriteStart())
  try {
    const result = yield call(addFavorite, favorite)
    yield put(addFavoriteSuccess(JSON.parse(result.config.data)))
  } catch (error) {
    yield put(addFavoriteFail(error))
  }
}

export function * deleteFavoriteSaga (favorite) {
  yield put(deleteFavoriteStart())
  try {
    yield call(deleteFavorite, favorite)
    yield put(deleteFavoriteSuccess(favorite.favorite))
  } catch (error) {
    yield put(deleteFavoriteFail(error))
  }
}
