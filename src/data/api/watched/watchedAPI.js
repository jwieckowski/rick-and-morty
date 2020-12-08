import axios from 'axios'

export function * loadWatched (source) {
  return yield axios.get(source)
}

export function * toggleCheckWatched (watched) {
  return yield axios.post('/db', {id: watched.id, watched: watched.watched})
}
