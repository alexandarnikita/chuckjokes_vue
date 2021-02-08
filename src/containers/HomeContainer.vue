<template>
  <div class="main-frame">
    <app-header/>
    <app-footer/>
  </div>
</template>

<script>
  import AppHeader from '../components/Header/AppHeader'
  import AppFooter from '../components/Footer/AppFooter'

  export default {
    name: 'Home',
    components: {
      AppHeader,
      AppFooter
    },
    props: {},
    computed: {},
    data () {
      return {}
    }
  }

</script>

<style lang="scss" scoped>
  .main-frame {
    width: 100%;
    height: 100%;
  }
</style>
