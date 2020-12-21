import { combineReducers } from 'redux'

// This is the place for future reducers to combine them all
import source from '../../data/reducers/source.js'
import watched from '../../data/reducers/watched.js'
import favorites from '../../data/reducers/favorites.js'

export default combineReducers({
  source,
  watched,
  favorites
})