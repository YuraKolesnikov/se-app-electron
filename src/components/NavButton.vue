<template>
  <router-link tag="a" :to="to">
    <button class="nav-button">{{title}}</button>
  </router-link>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class NavButton extends Vue {
  @Prop({default: '/'})
  to: string

  @Prop({default: 'Home'})
  title: string
}

</script>

<style lang="scss">
.nav-button {
  background-color: #fff;
  border: 1px solid rgb(10, 110, 200);
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  height: 36px;
  letter-spacing: normal;
  margin: 0 10px;
  min-width: 36px;
  color: rgb(10, 110, 200);
  transition: all .25s ease;
  -webkit-font-smoothing: antialiased;
  vertical-align: middle;

  &:hover {
    background-color: rgb(10, 110, 200);
    color: #fff;
  }

  &:active, &:focus {
    background-color: #fff;
    color: rgb(10, 110, 200);
  }
}
</style>
