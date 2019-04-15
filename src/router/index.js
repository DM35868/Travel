import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home.vue'
import City from '@/components/city/City.vue'
import Detail from '@/components/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
