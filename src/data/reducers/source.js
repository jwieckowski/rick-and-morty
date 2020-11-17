import actions from '../../constants/actions.js'

const initialState = {
  data: {},
  loading: false,
  loadError: undefined
}

const fetchSourceStart = (state, action) => {
  return {
    ...state,
    loading: true,
    loadError: undefined
  }
}

const fetchSourceSuccess = (state, action) => {
  return {
    ...state,
    data: action.data,
    loading: false,
    loadError: undefined
  }
}

const fetchSourceFail = (state, action) => {
  return {
    ...state,
    loading: false,
    loadError: action.error
  }
}

const fetchMoreSourceStart = (state, action) => {
  return {
    ...state,
    loading: true,
    loadError: undefined
  }
}

const fetchMoreSourceSuccess = (state, action) => {
  return {
    ...state,
    data: {
      info: action.data.info,
      results: [...state.data.results, ...action.data.results]
    },
    loading: false,
    loadError: undefined
  }
}

const fetchMoreSourceFail = (state, action) => {
  return {
    ...state,
    loading: false,
    loadError: action.error
  }
}

export default function home (state = initialState, action) {
  switch (action.type) {
    case actions.SOURCE_FETCH_START:
      return fetchSourceStart(state, action)
    case actions.SOURCE_FETCH_SUCCESS:
      return fetchSourceSuccess(state, action)
    case actions.SOURCE_FETCH_FAIL:
      return fetchSourceFail(state, action)
    case actions.SOURCE_FETCH_MORE_START:
      return fetchMoreSourceStart(state, action)
    case actions.SOURCE_FETCH_MORE_SUCCESS:
      return fetchMoreSourceSuccess(state, action)
    case actions.SOURCE_FETCH_MORE_FAIL:
      return fetchMoreSourceFail(state, action)
    default:
      return state
  }
}