import axios from 'axios'

export function * fetchSource (source) {
  return yield axios.get(source)
}
