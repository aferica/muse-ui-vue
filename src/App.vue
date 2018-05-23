<template>
  <div id="app">
    <mu-appbar v-if="!isHomePage" :zDepth="0" :title="title === 'index' ? '' : title" class="example-appbar" :class="{'nav-hide': !open}">
      <mu-icon-button @click="toggleNav" icon="menu" slot="left"/>
      <mu-switch label="开关" slot="right" class="demo-switch" />
    </mu-appbar>
    <app-nav v-if="!isHomePage" @change="handleMenuChange" @close="toggleNav" :open="open" :docked="docked" />
    <div class="example-content" :class="{'nav-hide': !open, 'home-page': isHomePage}">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppNavDrawer from './components/AppNavDrawer'
export default {
  data () {
    const desktop = isDesktop()
    return {
      open: desktop,
      docked: false,
      desktop: desktop,
      title: '',
      menuVal: '#/'
    }
  },
  computed: {
    isHomePage () {
      return this.$route.fullPath === '/'
    }
  },
  mounted () {
    this.routes = this.$router.options.routes
    this.setTitle()
    this.changeNav()
    this.handleResize = () => {
      this.changeNav()
    }
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('hashchange', () => {
      this.setTitle()
    })
  },
  methods: {
    toggleNav () {
      this.open = !this.open
    },
    changeNav () {
      const desktop = isDesktop()
      this.docked = desktop
      if (desktop === this.desktop) return
      if (!desktop && this.desktop && this.open) {
        this.open = false
      }
      if (desktop && !this.desktop && !this.open) {
        this.open = true
      }
      this.desktop = desktop
    },
    handleMenuChange (path) {
      if (!this.desktop) this.open = false
    },
    handleUserMenuChange (val) {
      this.menuVal = val
      if (this.docked) {
        window.location.hash = this.menuVal
      } else {
        this.changeHref = true
      }
      this.$emit('change', val)
    },
    setTitle () {
      let path = window.location.hash
      // console.log(path)
      if (path && path.length > 1) path = path.substring(1)
      for (let i = 0; i < this.routes.length; i++) {
        var route = this.routes[i]
        if (route.path === path) {
          // console.log(route)
          this.title = route.name || ''
          return
        }
      }
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  components: {
    'app-nav': AppNavDrawer
  }
}

function isDesktop () {
  return window.innerWidth > 993
}
</script>

<style lang="less" scoped>

// @import "../src/styles/import.less";
.example-appbar{
  position: fixed;
  left: 256px;
  right: 0;
  top: 0;
  width: auto;
  z-index: 100;
  // transition: all .45s @easeOutFunction;
  &.nav-hide {
    left: 0;
  }
}

.example-content{
  padding-top: 56px;
  padding-left: 256px;
  // transition: all .45s @easeOutFunction;
  &.nav-hide {
    padding-left: 0;
  }
}

.content-wrapper{
  padding: 48px 72px;
}

@media (min-width: 480px) {
  .example-content{
    padding-top: 64px;
  }
}

@media (max-width: 993px) {
  .example-appbar {
    left: 0;
  }
  .example-content{
    padding-left: 0;
  }
  .content-wrapper {
    padding: 24px 36px;
  }
}
.home-page{
  padding: 0;
  .example-content {
    transition-duration: 0s;
  }
}
</style>
