import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const state = {
  userInfo: null,
  categories: ['a', 'b'],
  jokes: [],
  selectedCategory: {
    name: 'View All',
    color: '#FFFFFF'
  },
  colors: ['#ff5b5b', '#ff915b', '#ffbe5b', '#ffdf5b', '#8fe360', '#57e690', '#57dbe6']
}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
