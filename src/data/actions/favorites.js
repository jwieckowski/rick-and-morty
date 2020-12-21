import action from '../../constants/actions.js'

export function loadFavorites (source) {
  return {
    type: action.FAVORITES_LOAD_ACTION,
    source
  }
}

export function loadFavoritesStart () {
  return {
    type: action.FAVORITES_LOAD_START
  }
}

export function loadFavoritesSuccess (data) {
  return {
    type: action.FAVORITES_LOAD_SUCCESS,
    data
  }
}

export function loadFavoritesFail (error) {
  return {
    type: action.FAVORITES_LOAD_FAIL,
    error
  }
}

export function addFavorite (favorite) {
  return {
    type: action.FAVORITE_ADD_ACTION,
    favorite
  }
}

export function addFavoriteStart () {
  return {
    type: action.FAVORITE_ADD_START
  }
}

export function addFavoriteSuccess (favorite) {
  return {
    type: action.FAVORITE_ADD_SUCCESS,
    favorite
  }
}

export function addFavoriteFail (error) {
  return {
    type: action.FAVORITE_ADD_FAIL,
    error
  }
}

export function deleteFavorite (favorite) {
  return {
    type: action.FAVORITE_DELETE_ACTION,
    favorite
  }
}

export function deleteFavoriteStart () {
  return {
    type: action.FAVORITE_DELETE_START
  }
}

export function deleteFavoriteSuccess (favorite) {
  return {
    type: action.FAVORITE_DELETE_SUCCESS,
    favorite
  }
}

export function deleteFavoriteFail (error) {
  return {
    type: action.FAVORITE_DELETE_FAIL,
    error
  }
}


