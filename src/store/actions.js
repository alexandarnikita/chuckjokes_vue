import JokeApis from '../helper/apis/joke'

export default {
  async $getCategories ({commit}) {
    let res = await JokeApis.getCategories()
    commit('$vuexSetCategories', res)
  },
  async $getJokes ({commit}, query) {
    let res = await JokeApis.getJokes(query)
    commit('$vuexSetJokes', res.results)
  }
}
