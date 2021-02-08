import JokeApis from '../helper/apis/joke'

export default {
  async $getCategories ({commit, state}) {
    let res = await JokeApis.getCategories()
    if (res.length > 0) {
      const categories = res.map((item, index) => {
        return {
          name: item,
          color: state.colors[index % state.colors.length]
        }
      })
      commit('$vuexSetCategories', categories)
    }
  },
  async $getJokes ({commit}, query) {
    let res = await JokeApis.getJokes(query)
    commit('$vuexSetJokes', res.results)
  },
  $setSelectedCategory ({commit, state}, category) {
    commit('$vuexSetSelectedCategory', category)
  }
}
