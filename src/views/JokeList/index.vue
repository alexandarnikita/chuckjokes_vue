<template>
  <div class="container">
    <div class="categories-section">

    </div>
    <div class="joke-list">

    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: { },
  props: {},
  computed: {},
  mounted () {
    this.$getCategories()
    this.$getJokes({query: 'all'})
  },
  methods: {

  },
  data () {
    return {
    }
  }
}

</script>

<style lang="scss">
</style>
