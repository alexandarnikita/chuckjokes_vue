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
    commit('$vuexSetJokes', res.result)
  },
  $setSelectedCategory ({commit, state}, category) {
    commit('$vuexSetSelectedCategory', category)
    let filteredJokes = []
    if (category.name === 'all') {
      filteredJokes = state.jokes
    } else if (category.name === 'uncategorized') {
      filteredJokes = state.jokes.filter(joke =>
        joke.categories.length === 0
      )
    } else {
      filteredJokes = state.jokes.filter(joke =>
        joke.categories.indexOf(category.name) > -1
      )
    }
    commit('$vueSetFilteredJokes', filteredJokes)
    commit('$vuexResetPagination')
  },
  $showMoreJokes({commit, state}) {
    commit('$vuexShowMoreJokes', state.pagination.currentPageIndex + 1)
  }
}
