import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import MyMain from '@/pages/Main'
import Meizitu from '@/pages/other/Meizitu'
import MeizituInfo from '@/pages/other/MeizituInfo'
import Login from '@/pages/user/Login'
import Register from '@/pages/user/Register'
import BookInfo from '@/pages/book/BookInfo.vue'
import ImageInfo from '@/pages/image/ImageInfo'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: '首页', component: Home },
    { path: '/main', name: '主页', component: MyMain },
    { path: '/book/rank', name: '小说-排行', component: MyMain },
    { path: '/book/cate', name: '小说-分类', component: MyMain },
    { path: '/book/love', name: '小说-收藏', component: MyMain },
    { path: '/book/list', name: '小说-书单', component: MyMain },
    { path: '/book/info/:_id', name: '小说-详情', component: BookInfo },
    { path: '/image/rank', name: '图片-排行', component: MyMain },
    { path: '/image/cate', name: '图片-分类', component: MyMain },
    { path: '/image/love', name: '图片-收藏', component: MyMain },
    { path: '/image/info/:_id', name: '图片-展示', component: ImageInfo },
    { path: '/other/Meizitu', name: '妹子图', component: Meizitu },
    { path: '/other/meizituinfo', name: '妹子图-详情', component: MeizituInfo, props: true },
    { path: '/user/login', name: '登录', component: Login },
    { path: '/user/register', name: '注册', component: Register },
  ]
})
