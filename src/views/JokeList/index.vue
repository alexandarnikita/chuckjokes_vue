<template>
  <div class="container">
    <div class="categories-section">
      <div
        v-for="category in $store.state.categories"
        class="filter-col"
        :key="category.name"
      >
        <button
          class="filter-button"
          :class="$store.state.selectedCategory.name === category.name ? 'active' :''"
          :style="{backgroundColor: category.color}"
          @click="handleSelectCategory(category)"
        >
          {{ category.name }}
        </button>
      </div>
      <div class="filter-col">
        <button
          class="filter-button"
          :class="$store.state.selectedCategory.name === UN_CATEGORIZED.name ? 'active' :''"
          :style="{backgroundColor: UN_CATEGORIZED.color}"
          @click="handleSelectCategory(UN_CATEGORIZED)"
        >
          {{ UN_CATEGORIZED.name }}
        </button>
      </div>
      <div class="filter-col">
        <button
          class="filter-button"
          :class="$store.state.selectedCategory.name === ALL_CATEGORIES.name ? 'active' :''"
          :style="{backgroundColor: ALL_CATEGORIES.color}"
          @click="handleSelectCategory(ALL_CATEGORIES)"
        >
          View All
        </button>
      </div>
    </div>
    <div class="joke-list">
      <span
        class="filter-badge"
        :style="{ backgroundColor: $store.state.selectedCategory.color }"
      >
        {{ $store.state.selectedCategory.name }}
      </span>
      <div class="row">
        <div
          v-for="joke in $store.getters.$getShowingJokes"
          class="col-md-4"
          :key="joke.id"
        >
          <div class="joke-card">
            <p class="card-title">
              <img src='../../assets/images/green-light.png' alt="Card Icon" class="card-icon" />
              Joke
            </p>
            <p class="joke-text">{{ joke.value }}</p>
            <router-link :to="'/joke/' + joke.id" class="see-stats">
              See Stats
              <img src='../../assets/images/arrow-right.png' alt="Stats Icon" class="stats-icon" />
            </router-link>
          </div>
        </div>
        <div v-if="$store.getters.$getShowingJokes.length === 0" class="no-jokes">
          <p>No Jokes</p>
        </div>
      </div>
      <div
        class="d-flex justify-content-center"
        v-if="$store.getters.$getShowingJokes.length > 0"
      >
        <button
          class="view-more"
          :disabled="$store.getters.$getShowingJokes.length >= $store.state.filteredJokes.length"
          @click="onClickViewMoreBtn"
        >
          View More
          <img src='../../assets/images/arrow-right.png' class="view-all-icon" alt="View More" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>

const UN_CATEGORIZED = {
  name: 'uncategorized',
  color: '#6c757d'
}

const ALL_CATEGORIES = {
  name: 'all',
  color: '#d1bb91'
}

export default {
  name: 'Home',
  components: { },
  props: {},
  computed: {},
  async mounted () {
    await this.$getCategories()
    await this.$getJokes({query: 'all'})
    this.$setSelectedCategory(ALL_CATEGORIES)
  },
  methods: {
    handleSelectCategory(category) {
      this.$setSelectedCategory(category)
    },
    onClickViewMoreBtn() {
      this.$showNextPage()
    }
  },
  data () {
    return {
      UN_CATEGORIZED: UN_CATEGORIZED,
      ALL_CATEGORIES: ALL_CATEGORIES
    }
  }
}

</script>

<style lang="scss">
</style>
