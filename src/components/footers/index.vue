<template>
<div> 
      <div :class='zhhdfooter' id='call'>
            <div v-for="item in footerList" :key="item['title']" class='zhhd-footer-block'>
                  <div class='zhhd-footer-list-title'>{{item['title']}}</div>
                  <div v-for="itemChild in item['children']" :key="itemChild['html']" v-html="itemChild['html']"></div>
            </div>
      </div>
      <div class='zhhd-footer-bottom' v-html="footerBottom['html']"></div>
</div>
</template>

<script lang='ts'>
import store from '@/store';
import footerListInterface from '@/interface/interface_footers';
import {Vue , Component} from 'vue-property-decorator';
@Component
export default class extends Vue{
      // 页脚文本
      footerList : footerListInterface = store.getters.getFooterList;
      get isComputer():boolean{
           return store.getters.getType;
      } 
      // 响应式
      get zhhdfooter(){
            return [
                  'zhhd-footer',
                  {
                        ['zhhd-footer-mobile']: this.isComputer == false
                  }
            ]
      }
      // 最下备案号
      footerBottom:footerListInterface = store.getters.getFooterbottom;
}
</script>

