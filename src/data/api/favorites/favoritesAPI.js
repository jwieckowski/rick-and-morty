import axios from 'axios'

export function * loadFavorites (source) {
  return yield axios.get(source)
}

export function * addFavorite ({ favorite }) {
  return yield axios.post('/favorites', {content: favorite})
}

export function * deleteFavorite ({ favorite }) {
  return yield axios.delete('/favorites', { data: { favorite }})
}