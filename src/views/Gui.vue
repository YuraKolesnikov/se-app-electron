<template>
  <div class="gui">
    <NavButton
      :button=button
    />
    <h1 class="header">GUI Connected</h1>
  </div>
</template>
<script lang="ts">
import NavButton from '../components/NavButton.vue'
import { Vue, Component } from 'vue-property-decorator'
@Component({components: {NavButton}})
export default class Gui extends Vue {
  data() {
    return {
      button: { title: 'Home', path: '/', active: true }
    }
  }
}
</script>