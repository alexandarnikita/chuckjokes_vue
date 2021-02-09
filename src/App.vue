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
    this.$setSelectedCategory({
      name: 'all',
      color: '#d1bb91'
    })
  },
  created () {
  }
}
</script>

<style lang="scss">
@import "./assets/scss/index.scss";
</style>
