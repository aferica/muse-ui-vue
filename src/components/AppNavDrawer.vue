<template>
<mu-drawer @hide="handleHide" @close="handleClose" :open="open" :docked="docked" :overlay="docked" class="app-drawer" :zDepth="1">
  <mu-appbar :zDepth="0" class="exmaples-nav-appbar">
    <a @click="handleMenuChange('#/')" href="#/" class="exmaples-appbar-title">美图鉴赏</a>
  </mu-appbar>
  <mu-divider/>
  <div class="exmaple-drawer-content">
    <mu-list @change="handleMenuChange" :value="menuVal">
      <mu-list-item title="分类" toggleNested :open=false>
          <mu-list-item slot="nested" value="#/image/qingchun" title="清纯"></mu-list-item>
          <mu-list-item slot="nested" value="#/image/xinggan" title="性感"></mu-list-item>
          <mu-list-item slot="nested" value="#/image/xiaohua" title="校花"></mu-list-item>
          <mu-list-item slot="nested" value="#/image/more" title="更多..."></mu-list-item>
      </mu-list-item>
      <mu-list-item title="排行" toggleNested :open=false>
          <mu-list-item slot="nested" value="#/flatButton" title="清纯"></mu-list-item>
          <mu-list-item slot="nested" value="#/raisedButton" title="性感"></mu-list-item>
          <mu-list-item slot="nested" value="#/iconButton" title="校花"></mu-list-item>
          <mu-list-item slot="nested" value="#/floatButton" title="更多..."></mu-list-item>
      </mu-list-item>
      <mu-list-item title="其它" toggleNested :open=false>
          <mu-list-item slot="nested" value="#/flatButton" title="妹子图"></mu-list-item>
          <mu-list-item slot="nested" value="#/raisedButton" title="绝对领域"></mu-list-item>
          <mu-list-item slot="nested" value="#/iconButton" title="MMJEPG"></mu-list-item>
          <mu-list-item slot="nested" value="#/floatButton" title="更多..."></mu-list-item>
      </mu-list-item>
    </mu-list>
    <mu-divider/>
    <mu-list>
      <mu-list-item href="https://github.com/museui/muse-ui" target="_blank" title="GitHub"/>
    </mu-list>
  </div>
</mu-drawer>
</template>

<script>
// import Vue from 'vue'
// import packageJson from '../../package.json'
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    },
    docked: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      menuVal: '#/'
    }
  },
  computed: {
    lang () {
      return Vue.config.lang
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    handleMenuChange (val) {
      this.menuVal = val
      if (this.docked) {
        window.location.hash = this.menuVal
      } else {
        this.changeHref = true
      }
      this.$emit('change', val)
    },
    handleHide () {
      if (!this.changeHref) return
      window.location.hash = this.menuVal
      this.changeHref = false
    },
  },
  mounted () {
    this.menuVal = window.location.hash
    window.addEventListener('hashchange', () => {
      this.menuVal = window.location.hash
    })
    // var xhr = new window.XMLHttpRequest()
    // xhr.open('GET', '/version.json', true)
    // xhr.onload = () => {
    //   if (xhr.readyState === 4) {
    //     if (xhr.status === 200) {
    //       this.versions = JSON.parse(xhr.responseText)
    //       console.log(this.versions, this.version)
    //     } else {
    //       console.error(xhr.statusText)
    //     }
    //   }
    // }
    // xhr.send()
  },
  // locales: {
  //   zh,
  //   en
  // }
}
</script>

<style scoped>
/* @import "../../src/styles/import.less"; */
.app-drawer{
  display: flex;
  flex-direction: column;
}

.exmaples-nav-appbar.mu-appbar{
  flex-shrink: 0;
}
.exmaple-drawer-content{
  flex: 1;
  /* .scrollable(); */
  /* .no-scrollbar(); */
}
.exmaples-appbar-title{
  color: inherit;
  display: inline-block;
}


.exmaples-nav-sub-header {
  padding-left: 34px;
}

</style>
