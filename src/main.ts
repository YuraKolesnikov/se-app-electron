import Vue from 'vue'
import '@/assets/scss/main.scss'
import App from './App.vue'
import router from './router'


new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')