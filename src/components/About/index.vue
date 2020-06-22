<template>
<div>
      <div class='zhhd-title'>
            ABOUT <span class='zhhd-title-once'>US</span>
      </div>
      <div class='zhhd-about'>
            <div class='zhhd-about-block' v-for="item in AboutLists" :key="item['html']" v-html="item['html']"></div>
      </div>
</div>
</template>

<script lang='ts'>
import footerListInterface from '@/interface/interface_footers';
import {Vue , Component} from 'vue-property-decorator';
import store from '@/store';
@Component
export default class extends Vue{
      AboutLists:footerListInterface[] = store.getters.getAbout;
}
</script>

<style lang="" scoped>
   
</style>