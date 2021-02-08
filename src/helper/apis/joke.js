import $ajax from '../ajax'
import $utils from '../utils'

let serverUrl = $utils.serverUrl

export default {
  getCategories () {
    return $ajax.get(serverUrl('/categories'))
  },
  getJokes ({query}) {
    return $ajax.get(serverUrl(`/search?query=${query}`))
  }
}
