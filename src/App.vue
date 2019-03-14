<template>
  <div id="app">
    <NavButton
    v-for="(button, index) in buttons"
    :key=index
    :title=button.title
    :to=button.path
    />
    <router-view></router-view>
  </div>
</template>
<script>
import Vue from 'vue'
import NavButton from './components/NavButton'
export default {
  components: {
    NavButton
  },
  data() {
    return {
      title: 'Home',
      path: '/',
      buttons: [
        { title: 'Home', path: '/' },
        { title: 'Connect GUI', path: 'gui' },
        { title: 'Connect WDA', path: 'wda' },
        { title: 'Connect FE', path: 'fe' },
        { title: 'Connect Ref App', path: 'ref'}
      ]
    }
  }
}
</script>
