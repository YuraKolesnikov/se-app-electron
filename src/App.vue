<template>
  <div id="app">
    <NavButton
      v-for="(button, index) in buttons"
      :key=index
      :button=button
    />
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
        { title: 'Home', path: '/', active: true },
        { title: 'Connect GUI', path: 'gui', active: true },
        { title: 'Connect WDA', path: 'wda', active: true },
        { title: 'Connect FE', path: 'fe', active: true },
        { title: 'Connect Ref App', path: 'ref', active: false}
      ]
    }
  }
}
</script>
