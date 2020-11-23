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

export function fetchSourceSuccess (data, source) {
  return {
    type: action.SOURCE_FETCH_SUCCESS,
    data,
    source
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

export function fetchMoreSourceSuccess (data, source) {
  return {
    type: action.SOURCE_FETCH_MORE_SUCCESS,
    data,
    source
  }
}

export function fetchMoreSourceFail (error) {
  return {
    type: action.SOURCE_FETCH_MORE_FAIL,
    error
  }
}

export function setCharacter (data) {
  return {
    type: action.SET_CHARACTER_ACTION,
    data
  }
}
