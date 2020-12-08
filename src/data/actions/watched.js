import action from '../../constants/actions.js'

export function loadWatched (source) {
  return {
    type: action.WATCHED_LOAD_ACTION,
    source
  }
}

export function loadWatchedStart () {
  return {
    type: action.WATCHED_LOAD_START
  }
}

export function loadWatchedSuccess (data) {
  return {
    type: action.WATCHED_LOAD_SUCCESS,
    data
  }
}

export function loadWatchedFail (error) {
  return {
    type: action.WATCHED_LOAD_FAIL,
    error
  }
}

export function checkWatched (id, watched) {
  return {
    type: action.WATCHED_CHECK_ACTION,
    id,
    watched
  }
}

export function checkWatchedStart () {
  return {
    type: action.WATCHED_CHECK_START
  }
}

export function checkWatchedSuccess (id) {
  return {
    type: action.WATCHED_CHECK_SUCCESS,
    id
  }
}

export function checkWatchedFail (error) {
  return {
    type: action.WATCHED_CHECK_FAIL,
    error
  }
}

export function uncheckWatched (id, watched) {
  return {
    type: action.WATCHED_UNCHECK_ACTION,
    id,
    watched
  }
}

export function uncheckWatchedStart () {
  return {
    type: action.WATCHED_UNCHECK_START
  }
}

export function uncheckWatchedSuccess (id) {
  return {
    type: action.WATCHED_UNCHECK_SUCCESS,
    id
  }
}

export function uncheckWatchedFail (error) {
  return {
    type: action.WATCHED_UNCHECK_FAIL,
    error
  }
}


