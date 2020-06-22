<template>
  <div id='all'>
    <IndexLbt id='index'></IndexLbt>
    <About id='about'></About>
    <Product id='product'></Product>
    <Philosophy id='philosophy'></Philosophy>
    <Team id='team'></Team>
    <Cooperate id='cooperate'></Cooperate>
  </div>
</template>

<script lang='ts'>
import {
  About,
  Philosophy,
  Cooperate,
  Product,
  Team,
  IndexLbt
} from "@/components";
import { Vue, Component } from "vue-property-decorator";
@Component({
  components: {
    About,
    Philosophy,
    Cooperate,
    Product,
    Team,
    IndexLbt
  }
})
export default class extends Vue {

}
</script>

<style lang="" scoped>
</style>