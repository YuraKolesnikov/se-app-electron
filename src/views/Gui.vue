<template>
  <div class="gui">
    <NavButton
      v-for="(button, index) in guiButtons"
      :key=index
      :button=button
    />
  </div>
</template>
<script lang="ts">
import NavButton from '../components/NavButton.vue'
import { Vue, Component } from 'vue-property-decorator'
@Component({components: {NavButton}})
export default class Gui extends Vue {
  data() {
    return {
      guiButtons: [
        { title: 'Log off', path: '/', active: true },
        { title: 'First Page', path: '', active: true },
        { title: 'Previous Page', path: '', active: true },
        { title: 'Add to Favorites', path: '', active: true },
        { title: 'Delete Favorites', path: '', active: false}
      ]
    }
  }
}
</script>