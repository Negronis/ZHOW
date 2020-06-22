<template>
  <div>
      <div>
            <Headers></Headers>
      </div>
      <div>
            <router-view id='roter-content'></router-view>
      </div>
      <div>
            <Footers></Footers>
      </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import Headers from "@/components/headers";
import Footers from "@/components/footers";

import store from "@/store";
@Component({
  components: {
    Headers,
    Footers
  }
})
export default class extends Vue {
  isComputer: boolean = store.getters.getType;
  constructor() {
    super();
  }
}
</script>

<style lang="less" scoped>
</style>