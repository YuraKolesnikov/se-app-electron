<template>
  <div class="home">
    <h1 class="header" @click="alertProducts">Products</h1>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Products extends Vue {
  alertProducts() {
    alert('Products!')
  }
}
</script>