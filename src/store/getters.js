export default {
  $getShowingJokes (state) {
    let filteredJokes = state.filteredJokes
    return filteredJokes.slice(0, state.pagination.currentPageIndex * state.pagination.perPage)
  }
}
