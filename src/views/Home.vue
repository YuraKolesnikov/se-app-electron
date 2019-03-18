<template>
  <div class="home">
    <NavButton
      v-for="(button, index) in buttons"
      :key=index
      :button=button
    />
    <h1 class="header">Hello World!</h1>
  </div>
</template>
<script lang="ts">
import NavButton from '../components/NavButton.vue'
import { Vue, Component } from 'vue-property-decorator'
@Component({components: {NavButton}})

export default class Home extends Vue {
  data() {
    return {
      myTitle: 'Its working!',
      to: '/test',
      buttons: [
        { title: 'Home', path: '/', active: true },
        { title: 'Connect GUI', path: 'gui', active: true },
        { title: 'Connect WDA', path: 'wda', active: true },
        { title: 'Connect FE', path: 'fe', active: false },
        { title: 'Connect Ref App', path: 'ref', active: false}
      ]
    }
  }
}
</script>