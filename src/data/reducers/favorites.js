import actions from '../../constants/actions.js'

const initialState = {
  data: [],
  loading: false,
  loadError: undefined,
  addError: undefined,
  deleteError: undefined
}

const loadFavoritesStart = (state, action) => {
  return {
    ...state,
    loading: true,
    loadError: undefined
  }
}

const loadFavoritesSuccess = (state, action) => {
  return {
    ...state,
    data: action.data,
    loading: false
  }
}

const loadFavoritesFail = (state, action) => {
  return {
    ...state,
    loading: false,
    loadError: action.error
  }
}

const addFavoriteStart = (state, action) => {
  return {
    ...state,
    loading: true,
    addError: undefined
  }
}

const addFavoriteSuccess = (state, action) => {
  return {
    ...state,
    data:  [...state.data, {
      _id: state.data.length + 1,
      content: action.favorite.content
    }]
  }
}

const addFavoriteFail = (state, action) => {
  return {
    ...state,
    loading: false,
    addError: action.error
  }
}

const deleteFavoriteStart = (state, action) => {
  return {
    ...state,
    loading: true,
    deleteError: undefined
  }
}

const deleteFavoriteSuccess = (state, action) => {
  return {
    ...state,
    data: [...state.data.filter(d => {
      if (d.content.tileType !== action.favorite.tileType) return d
      if (d.content.id !== action.favorite.id) return d
    })]
  }
}

const deleteFavoriteFail = (state, action) => {
  return {
    ...state,
    loading: false,
    deleteError: action.error
  }
}


export default function favorites (state = initialState, action) {
  switch (action.type) {
    case actions.FAVORITES_LOAD_START:
      return loadFavoritesStart(state, action)
    case actions.FAVORITES_LOAD_SUCCESS:
      return loadFavoritesSuccess(state, action)
    case actions.FAVORITES_LOAD_FAIL:
      return loadFavoritesFail(state, action)
    case actions.FAVORITE_ADD_START:
      return addFavoriteStart(state, action)
    case actions.FAVORITE_ADD_SUCCESS:
      return addFavoriteSuccess(state, action)
    case actions.FAVORITE_ADD_FAIL:
      return addFavoriteFail(state, action)
    case actions.FAVORITE_DELETE_START:
      return deleteFavoriteStart(state, action)
    case actions.FAVORITE_DELETE_SUCCESS:
      return deleteFavoriteSuccess(state, action)
    case actions.FAVORITE_DELETE_FAIL:
      return deleteFavoriteFail(state, action)
    default:
      return state
  }
}