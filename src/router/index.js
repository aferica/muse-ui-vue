import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import MyMain from '@/pages/Main'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: '首页', component: Home },
    { path: '/main', name: '主页', component: MyMain },
    { path: '/image/qingchun', name: '清纯', component: MyMain },
    { path: '/image/xinggan', name: '性感', component: MyMain },
    { path: '/image/xiaohua', name: '校花', component: MyMain },
    { path: '/image/more', name: '更多...', component: MyMain },
  ]
})
