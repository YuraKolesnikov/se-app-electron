<template>
  <div id="app">
    <NavButton
    v-for="(button, index) in buttons"
    :key=index
    :title=button.title
    :to=button.path
    />
    <!-- <NavButton :title=myTitle :to=to /> -->
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import NavButton from './components/NavButton.vue'
@Component({components: {NavButton}})
export default class App extends Vue {
  data() {
    return {
      myTitle: 'Its working!',
      to: '/test',
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
