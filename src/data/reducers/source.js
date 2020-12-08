import actions from '../../constants/actions.js'

const initialState = {
  data: {},
  loading: false,
  loadError: undefined,
  characters: {},
  characterData: {},
  locations: {},
  episodes: {}
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
    data: !action.source.includes('character') &&
          !action.source.includes('location') &&
          !action.source.includes('episode')
      && action.data,
    characters: action.source.includes('character')
      && action.data,
    locations: action.source.includes('location')
      && action.data,
    episodes: action.source.includes('episode')
      && action.data,
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
    characters: action.source.includes('character') && 
    {
      info: action.data.info,
      results: [...state.characters.results, ...action.data.results]
    },
    episodes: action.source.includes('episode') &&
    {
      info: action.data.info,
      results: [...state.episodes.results, ...action.data.results]
    },
    locations: action.source.includes('location') &&
    {
      info: action.data.info,
      results: [...state.locations.results, ...action.data.results]
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

const setCharacter = (state, action) => {
  return {
    ...state,
    characterData: action.data
  }
}

export default function source (state = initialState, action) {
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
    case actions.SET_CHARACTER_ACTION:
      return setCharacter(state, action)
    default:
      return state
  }
}