<template>
  <div class="home">
    <h1 class="header" @click="alertHome">Hello World!</h1>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Home extends Vue {
  alertHome() {
    alert('Home!')
  }
}
</script>

