<template>
  <div id="app">
    <router-link tag="a" to="/"><a>Home</a></router-link>
    <router-link tag="a" to="products"><a>Products</a></router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  
}
</script>
