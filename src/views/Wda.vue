<template>
  <div class="Wda">
    <div class="Wda__navigation">
      <NavButton :button="homeButton"/>
    </div>
    <div class="Wda__main">
      <h4>Purchase Order Details</h4>
      <hr>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import NavButton from '../components/NavButton.vue'
@Component({components: {NavButton}})
export default class Wda extends Vue {
  data() {
    return {
      homeButton: { title: 'Save and Back', path: '/', id:'home', active: true}
    }
  }
}
</script>
<style lang="scss">
.Wda {
  background-color: #e5e5e5;
  padding: 20px;
  height: 100vh;

  &__navigation {
    margin-bottom: 30px;
  }

  &__main {
    background-color: #fff;
    padding: 20px;
  }
}
</style>
