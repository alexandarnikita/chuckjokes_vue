export default {
  $getShowingJokes (state) {
    let filteredJokes = state.filteredJokes
    console.log(filteredJokes)
    return filteredJokes.slice(0, state.pagination.currentPageIndex * state.pagination.perPage)
  }
}
