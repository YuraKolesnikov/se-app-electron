import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Gui from './views/Gui.vue'

Vue.use(Router)
export default new Router({
  /* TODO: Read about router modes */
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gui',
      name: 'gui',
      component: Gui
    },
    { path: '*', redirect: '/' }
  ],
})