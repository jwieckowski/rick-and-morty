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

export default function home (state = initialState, action) {
  switch (action.type) {
    case actions.SOURCE_FETCH_START:
      return fetchSourceStart(state, action)
    case actions.SOURCE_FETCH_SUCCESS:
      return fetchSourceSuccess(state, action)
    case actions.SOURCE_FETCH_FAIL:
      return fetchSourceFail(state, action)
    default:
      return state
  }
}