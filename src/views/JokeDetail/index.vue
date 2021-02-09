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
  </div>
</template>

<script>

export default {
  name: 'JokeDetail',
  components: { },
  props: {},
  computed: {
    jokeData () {
      return this.$store.state.jokes.filter(item => item.id === this.$route.params.id)[0]
    }
  },
  mounted () {
  },
  methods: {
    goBack() {
      this.$router.go(-1)
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
