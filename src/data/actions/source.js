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

export function fetchMoreSource (source) {
  return {
    type: action.SOURCE_FETCH_MORE_ACTION,
    source
  }
}

export function fetchMoreSourceStart () {
  return {
    type: action.SOURCE_FETCH_MORE_START
  }
}

export function fetchMoreSourceSuccess (data) {
  return {
    type: action.SOURCE_FETCH_MORE_SUCCESS,
    data
  }
}

export function fetchMoreSourceFail (error) {
  return {
    type: action.SOURCE_FETCH_MORE_FAIL,
    error
  }
}
