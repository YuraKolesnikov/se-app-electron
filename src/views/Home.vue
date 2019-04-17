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
/* Comment out 13 - 16 lines for testing in web. */
import {ipcRenderer} from 'electron'
ipcRenderer.on('navigate', (e: any, id: string) => {
  let a = document.querySelector(`#${id}`) as HTMLButtonElement
  let trigger = a.parentNode as HTMLAnchorElement
  trigger.click()
})
import NavButton from '../components/NavButton.vue'
import { Vue, Component } from 'vue-property-decorator'
@Component({components: {NavButton}})

export default class Home extends Vue {
  
  data() {
    return {
      buttons: [
        { title: 'Home',            id: 'home', path: '/',    active: true },
        { title: 'Connect GUI',     id: 'gui',  path: 'gui',  active: true },
        { title: 'Connect WDA',     id: 'wda',  path: 'wda',  active: true },
        { title: 'Connect FE',      id: 'fe',   path: 'fe',   active: false },
        { title: 'Connect Ref App', id: 'ref',  path: 'ref',  active: false }
      ]
    }
  }
}
</script>