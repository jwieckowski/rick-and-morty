import action from '../../constants/actions.js'

export function fetchSource (source) {
  return {
    type: action.SOURCE_FETCH_ACTION,
    source
  }
}

export function fetchSourceStart () {
  return {
    type: action.SOURCE_FETCH_START
  }
}

export function fetchSourceSuccess (data) {
  return {
    type: action.SOURCE_FETCH_SUCCESS,
    data
  }
}

export function fetchSourceFail (error) {
  return {
    type: action.SOURCE_FETCH_FAIL,
    error
  }
}
