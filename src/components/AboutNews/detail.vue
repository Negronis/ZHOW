<template>
<div id='news_detail'> 
   <div class='zhhd-about-company-newsDetail' v-for="item in newsDetailList" :key="item['index']" v-if="sel == item['index']" >
      <div  class='zhhd-about-company-newsDetail-content'>
         <div class='zhhd-about-company-newsDetail-title'>
            {{item['title']}}
         </div>
         <div  v-html="item['html']"></div>
            <button @click='clickback' class='zhhd-back'>返回</button>
         </div>
   </div>
</div>
</template>

<script lang='ts'> 
import {Vue , Component , Prop} from 'vue-property-decorator';
import store from '@/store';
import AboutInterface from '@/interface/interface_about';
@Component
export default class extends Vue{ 
   @Prop()sel!:number;
   newsDetailList :AboutInterface[] = store.getters.getCompanyNewsDetail;
   clickback(){
      this.$emit('back');
   }
}
</script>

<style lang="" scoped>
   
</style>