import Vue from 'vue'
import Router from 'vue-router'
const Recommend = () => import('@/views/Recommend')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    }
  ]
})