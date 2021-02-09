<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <button
          class="back-button"
          @click="goBack"
        >
          <img src='../../assets/images/back.png' alt="Back" class="back-icon" />
        </button>
      </div>
    </div>
    <div class="row joke-detail">
      <div class="col-md-8 d-flex flex-column justify-content-between">
        <div class="joke-card">
          <div class="joke-header justify-content-between">
            <p v-if="!joke.categories || joke.categories.length === 0" class="badge uncategorized-badge">Un_Categorized</p>
            <p
              v-for="category in joke.categories"
              class="badge"
              :class="category + '-badge'"
              :key="category"
              :style="{backgroundColor: getCategoryColor(category)}"
            >
              {{ `• ${category} Jokes` }}
            </p>
            <p class="like-label" :class="getLikeLabel(joke.like, joke.dislike).class">
              • {{ getLikeLabel(joke.like, joke.dislike).value }}
            </p>
          </div>
          <div class="card-content">
            <div class="title-content d-flex justify-content-between">
              <p class="title">Joke Title</p>
              <p class="number">NO #1</p>
            </div>
            <p class="description">{{ joke.value }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
    </div>
  </div>
</template>

<script>

export default {
  name: 'JokeDetail',
  components: { },
  props: {},
  computed: {
    joke () {
      return this.$store.state.jokes.filter(item => item.id === this.$route.params.id)[0]
    }
  },
  mounted () {
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    getCategoryColor (categoryName) {
      const category = this.$store.state.categories.find((jc) => jc.name === categoryName)
      return category ? category.color : '#000'
    },
    getLikeLabel (like, dislike) {
      if (dislike > like) {
        return { value: 'chestnut', class: 'chestnut' }
      } else if (like > 0 && like < 50) {
        return { value: 'new in town', class: 'new-town' }
      } else if (like > 51 && like < 100) {
        return { value: 'trending', class: 'trending' }
      } else if (like > 101) {
        return { value: 'hall of fame', class: 'chestnut' }
      }
      return { value: 'hall of fame', class: 'hall-fame' }
    }
  },
  data () {
    return {

    }
  }
}

</script>

<style lang="scss">
</style>
