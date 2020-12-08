import actions from '../../constants/actions.js'

const initialState = {
  data: [],
  loading: false,
  loadError: undefined,
  checkError: undefined
}

const loadWatchedStart = (state, action) => {
  return {
    ...state,
    loading: true,
    loadError: undefined
  }
}

const loadWatchedSuccess = (state, action) => {
  return {
    ...state,
    data: action.data,
    loading: false
  }
}

const loadWatchedFail = (state, action) => {
  return {
    ...state,
    loading: false,
    loadError: action.error
  }
}

const checkWatchedStart = (state, action) => {
  return {
    ...state,
    loading: true,
    checkError: undefined
  }
}

const checkWatchedSuccess = (state, action) => {
  return {
    ...state,
    data: state.data.map(d => {
      d.watched = d.id === action.id
        ? !d.watched
        : d.watched
      return d
    })
  }
}

const checkWatchedFail = (state, action) => {
  return {
    ...state,
    loading: false,
    checkError: action.error
  }
}

const uncheckWatchedStart = (state, action) => {
  return {
    ...state,
    loading: true,
    checkError: undefined
  }
}

const uncheckWatchedSuccess = (state, action) => {
  return {
    ...state,
    data: state.data.map(d => {
      d.watched = d.id === action.id
        ? !d.watched
        : d.watched
      return d
    })
  }
}

const uncheckWatchedFail = (state, action) => {
  return {
    ...state,
    loading: false,
    checkError: action.error
  }
}


export default function watched (state = initialState, action) {
  switch (action.type) {
    case actions.WATCHED_LOAD_START:
      return loadWatchedStart(state, action)
    case actions.WATCHED_LOAD_SUCCESS:
      return loadWatchedSuccess(state, action)
    case actions.WATCHED_LOAD_FAIL:
      return loadWatchedFail(state, action)
    case actions.WATCHED_CHECK_START:
      return checkWatchedStart(state, action)
    case actions.WATCHED_CHECK_SUCCESS:
      return checkWatchedSuccess(state, action)
    case actions.WATCHED_CHECK_FAIL:
      return checkWatchedFail(state, action)
    case actions.WATCHED_UNCHECK_START:
      return uncheckWatchedStart(state, action)
    case actions.WATCHED_UNCHECK_SUCCESS:
      return uncheckWatchedSuccess(state, action)
    case actions.WATCHED_UNCHECK_FAIL:
      return uncheckWatchedFail(state, action)
    default:
      return state
  }
}