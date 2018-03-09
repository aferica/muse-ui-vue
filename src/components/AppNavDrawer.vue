<template>
<mu-drawer @hide="handleHide" @close="handleClose" :open="open" :docked="docked" :overlay="docked" class="app-drawer" :zDepth="1">
  <mu-appbar :zDepth="0" class="exmaples-nav-appbar">
    <a @click="handleMenuChange('#/')" href="#/main" class="exmaples-appbar-title">书适阅读</a>
  </mu-appbar>
  <mu-divider/>
  <div class="exmaple-drawer-content">
    <mu-list @change="handleMenuChange" :value="menuVal">
      <mu-list-item value="#/main" title="主页"><mu-icon slot="left" value="home"/></mu-list-item>
      <mu-list-item title="用户" toggleNested :open=false><mu-icon slot="left" value="book"/>
        <mu-list-item slot="nested" value="#/user/login" title="登录"><mu-icon slot="left" value="whatshot" color="red"/></mu-list-item>
        <mu-list-item slot="nested" value="#/user/register" title="注册"><mu-icon slot="left" value="pie_chart" color="red"/></mu-list-item>
        <mu-list-item slot="nested" value="#/user/register" title="注销"><mu-icon slot="left" value="beenhere" color="red"/></mu-list-item>
        <mu-list-item slot="nested" value="#/user/register" title="个人中心"><mu-icon slot="left" value="reorder" color="red"/></mu-list-item>
      </mu-list-item>
      <mu-list-item title="小说" toggleNested :open=false><mu-icon slot="left" value="book"/>
        <mu-list-item slot="nested" value="#/book/rank" title="排行"><mu-icon slot="left" value="whatshot" color="red"/></mu-list-item>
        <mu-list-item slot="nested" value="#/book/cate" title="分类"><mu-icon slot="left" value="pie_chart" color="red"/></mu-list-item>
        <mu-list-item slot="nested" value="#/book/love" title="收藏"><mu-icon slot="left" value="beenhere" color="red"/></mu-list-item>
        <mu-list-item slot="nested" value="#/book/list" title="书单"><mu-icon slot="left" value="reorder" color="red"/></mu-list-item>
      </mu-list-item>
      <mu-list-item title="图片" toggleNested :open=false><mu-icon slot="left" value="panorama"/>
          <mu-list-item slot="nested" value="#/image/rank" title="排行"><mu-icon slot="left" value="whatshot" color="red"/></mu-list-item>
          <mu-list-item slot="nested" value="#/image/cate" title="分类"><mu-icon slot="left" value="pie_chart" color="red"/></mu-list-item>
          <mu-list-item slot="nested" value="#/image/love" title="收藏"><mu-icon slot="left" value="beenhere" color="red"/></mu-list-item>
      </mu-list-item>
      <mu-list-item title="其它" toggleNested :open=false><mu-icon slot="left" value="link"/>
          <mu-list-item slot="nested" value="#/other/Meizitu" title="妹子图"></mu-list-item>
          <mu-list-item slot="nested" value="#/raisedButton" title="绝对领域"></mu-list-item>
          <mu-list-item slot="nested" value="#/iconButton" title="MMJEPG"></mu-list-item>
          <mu-list-item slot="nested" value="#/floatButton" title="更多..."></mu-list-item>
      </mu-list-item>
    </mu-list>
    <mu-divider/>
    <mu-list>
      <mu-list-item value="#/main" title="设置"><mu-icon slot="left" value="settings"/></mu-list-item>
      <mu-list-item href="https://github.com/aferica/muse-ui-vue" target="_blank" title="GitHub">
        <mu-icon slot="left" value="help_outline"/>
      </mu-list-item>
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
