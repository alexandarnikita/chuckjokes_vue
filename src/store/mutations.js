// import {STORAGE_KEY} from '@constants/index'
// import { $utils } from '@helper'

export default {
  $vuexSetCategories (state, value) {
    state.categories = value
  },
  $vuexSetJokes (state, value) {
    state.jokes = value
  }
}
