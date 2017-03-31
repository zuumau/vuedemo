import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'

Vue.use(Router)

export default new Router({
  mode: 'history',     // html5模式， 缓存已加载页面
  routes: [
    {
      path: '/',
      component: IndexPage
    }
  ]
})
