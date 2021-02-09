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
    <div class="row joke-detail" v-if="joke">
      <div class="col-md-8 d-flex flex-column justify-content-between">
        <div class="joke-detail-card">
          <div class="joke-header justify-content-between">
            <p v-if="!joke.categories || joke.categories.length === 0" class="badge uncategorized-badge">• Un_Categorized</p>
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
              <div class="title-divider"/>
              <p class="number">NO #1</p>
            </div>
            <p class="description">{{ joke.value }}</p>
          </div>
        </div>
        <div class="option-content">
          <div class="like-group">
            <div class="like counter">
              <div class="circle">
                <img src='../../assets/images/like.png' alt="Like" class="hand-icon" />
              </div>
              <span>100</span>
            </div>
            <div class="dislike counter">
              <div class="circle">
                <img src='../../assets/images/dislike.png' alt="Dislike" class="hand-icon" />
              </div>
              <span>100</span>
            </div>
          </div>
          <div class="pagination-group">
            <button
              class="prev-button"
              @click="prevJoke(joke.id)"
            >
              <img src="../../assets/images/back.png" alt="Prev Icon" />
              Prev Joke
            </button>
            <button
              class="next-button"
              @click="nextJoke(joke.id)"
            >
              Next Joke
              <img src="../../assets/images/next.png" alt="Next Icon" />
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="top-jokes">
          <h3>The Top 10 Jokes This Week</h3>
          <router-link
            v-for="joke in topJokes"
            :to="'/joke/' + joke.id"
            :key="joke.id"
          >
            <p class="title-list">{{ joke.title }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const topJokes = [
  {
    id: 1,
    title: 'Smoking Joke'
  },
  {
    id: 2,
    title: 'My Boss Joke'
  },
  {
    id: 3,
    title: 'Dirty Millionaire Joke'
  },
  {
    id: 4,
    title: 'The annoying neighbour'
  },
  {
    id: 5,
    title: 'Knock Knock'
  },
  {
    id: 6,
    title: 'Why Tyson lisps'
  },
  {
    id: 7,
    title: 'The drunk Police officer'
  },
  {
    id: 8,
    title: 'My hip dad (Dad joke)'
  },
  {
    id: 9,
    title: 'What not to say in an elevator'
  }
]

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
      this.$router.push('/home')
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
    },
    gotoJoke(id, offset) {
      const jokeList = this.$store.state.jokes
      let index = jokeList.findIndex((joke) => joke.id === id)
      index = (index + offset + jokeList.length) % jokeList.length
      const nextJokeId = jokeList[index].id
      this.$router.push('/joke/' + nextJokeId)
    },
    prevJoke(id) {
      this.gotoJoke(id, -1)
    },
    nextJoke(id) {
      this.gotoJoke(id, 1)
    }
  },
  data () {
    return {
      topJokes: topJokes
    }
  }
}

</script>

<style lang="scss">
</style>
