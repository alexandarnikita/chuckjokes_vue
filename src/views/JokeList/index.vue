<template>
  <div class="container">
    <div class="categories-section">

    </div>
    <div class="joke-list">

    </div>
  </div>
</template>

<script>
import JokeService from '../../helper/apis/joke'

export default {
  name: 'Home',
  components: { },
  props: {},
  computed: {},
  async mounted () {
    await this.getCategories()
    await this.getJokes()
  },
  methods: {
    async getCategories() {
      return JokeService
        .getCategories()
        .then(res => {
          this.categories = res
        })
        .catch(e =>
          console.log(e)
        )
    },
    async getJokes() {
      return JokeService
        .getJokes({ query: 'all' })
        .then(res => {
          this.jokes = res
        })
        .catch(e =>
          console.log(e)
        )
    }
  },
  data () {
    return {
      jokes: [],
      categories: []
    }
  }
}

</script>

<style lang="scss">
</style>
