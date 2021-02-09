<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  async mounted () {
    await this.$getCategories()
    await this.$getJokes({query: 'all'})
  },
  created () {
  }
}
</script>

<style lang="scss">
@import "./assets/scss/index.scss";
</style>
