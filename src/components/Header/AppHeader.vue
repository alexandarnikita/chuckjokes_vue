<template>
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
          src=../../assets/images/menu.png
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
      }
    },
    data () {
      return {
        collapse: false,
        toggleSidebar: false,
        navItems
      }
    }
  }

</script>

<style lang="scss">
</style>
