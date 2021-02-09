<template>
  <div>
    <div class="app-header" :class="toggleSidebar ? 'open-sidebar' :''">
      <div class="container d-flex justify-content-between h-100">
        <div class="logo h-100">
          <router-link to="/">
            <img src="../../assets/images/vehiculum-logo.png" class="logo-img" alt="Logo" />
          </router-link>
        </div>
        <div class="top-navbar h-100">
          <ul>
            <div
              v-for="item in navItems"
              :key="item.key"
            >
              <li v-if="!item.toggle">
                {{ item.name }}
              </li>
              <div
                class="toggle-menu"
                v-if="item.toggle"
              >
                <li class="hover-menu">
                  <img src="../../assets/images/user.png" alt="menu-icon" class="menu-icon" />
                  {{ item.name }}
                  <img src="../../assets/images/chevron-down.png" alt="arrow-icon" class="arrow-icon" />
                </li>
                <div class="collapsed-menu-container">
                  <div class="collapsed-menu">
                    <p
                      v-for="(child, index) in item.children"
                      :key="index"
                    >
                      {{ child }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
        <div class="mobile-menu-icon">
          <img
            src="../../assets/images/menu.png"
            class="menu-icon"
            alt="Menu Icon"
            @click="collapseSidebar(true)"
          />
        </div>
      </div>
      <div class="sidebar">
        <img src="../../assets/images/vehiculum-logo.png" class="logo-img" alt="Logo" />
        <div class="sidebar-menus">
          <div
            v-for="item in navItems"
            :key="item.key"
          >
            <p
              class="menu-item"
              v-if="!item.toggle"
            >
              {{ item.name }}
            </p>
            <div
              class="toggle-menu"
              :class="collapse ? 'collapsed': ''"
              v-if="item.toggle"
            >
              <p
                class="menu-item"
                @click="collapseMenu()"
              >
                {{ item.name }}
                <img src="../../assets/images/chevron-down.png" alt="arrow-icon" class="arrow-icon" />
              </p>
              <div class="collapsed-menu-container">
                <div class="collapsed-menu">
                  <p
                    v-for="(child, index) in item.children"
                    :key="index"
                    class="menu-item"
                  >
                    {{ child }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="backdrop"
        @click=collapseSidebar(false) />
    </div>
    <div class="page-banner">
    <h1>The Joke Bible</h1>
    <p class="banner-lead">Daily Laughs for you and yours</p>
    <div class="banner-search">
      <div class="search-bar">
        <input
          type="text"
          class="search-input"
          placeholder="How can we make you laugh today?"
          v-model="searchKeyWord"
          @keyup="setSearchKeyword"
        />
        <img src="../../assets/images/search-white.png" alt="Search" class="search-icon" />
      </div>
      <div class="search-result" :class="searchResult.length > 0 ? 'show' : ''">
        <div
          v-for="joke in searchResult"
          :key="joke.id"
          class="list-item"
          @click="showJokeDetailPage(joke.id)"
        >
          <p v-if="joke.categories.length > 0">{{ joke.categories.join(', ') }} Jokes: Joke Title</p>
          <p v-else>UnCategorized Jokes: Joke Title</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  const navItems = [
    {
      key: 'Funktioniert',
      name: "So Funktioniert's",
      toggle: false,
      url: '#'
    },
    {
      key: 'Sonderangebote',
      name: 'Sonderangebote',
      toggle: false,
      url: '#'
    },
    {
      key: 'MeinBereich',
      name: 'Mein Bereich',
      toggle: true,
      children: ['My published jokes', 'My saved jokes', 'Account Information', 'Publish new joke']
    }
  ]

  export default {
    name: 'AppHeader',
    components: { },
    props: {},
    computed: {},
    methods: {
      collapseSidebar (show) {
        this.toggleSidebar = show
        document.querySelector('body').style.overflow = (show ? 'hidden' : 'auto')
        this.collapse = false
      },
      collapseMenu () {
        this.collapse = !this.collapse
      },
      setSearchKeyword (e) {
        this.searchKeyWord = e.target.value
        this.getSearchResult(e.target.value)
      },
      getSearchResult(keyword) {
        if (keyword === '') {
          this.searchResult = []
          return
        }
        const jokes = this.$store.state.jokes

        const searchKey = keyword.toLowerCase()
        const result = jokes.filter(joke =>
          joke.value.toLowerCase().indexOf(searchKey) !== -1
        )

        this.searchResult = result
        if (result.length === 1) {
          window.setTimeout(() => {
            this.showJokeDetailPage(result[0].id)
          }, 1000)
        }
      },
      showJokeDetailPage(jokeId) {
        this.$router.push(`/joke/${jokeId}`)
        this.searchKeyWord = ''
        this.searchResult = []
      }
    },
    data () {
      return {
        collapse: false,
        toggleSidebar: false,
        searchKeyWord: '',
        navItems,
        searchResult: []
      }
    }
  }

</script>

<style lang="scss">
</style>
