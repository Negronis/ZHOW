<template>
<div id='news_zx'>
      <div class='zhhd-about-company-zx' v-if='!selXz'>
            <span></span>
            <h3>{{news_list['title']}}</h3> 
            <div  @click="selNewsClick(item)" class='zhhd-about-company-zx-list' v-for="item in news_list['list']" :key="item['title']">
                  <div class='zhhd-about-company-zx-list-img'>
                        <img :src="item['banner']" width='300px'  alt="loading">
                  </div>
                  <div class='zhhd-about-company-zx-list-block'>
                        <div class='zhhd-about-company-zx-list-title'>{{item['title']}}</div>
                        <div class='zhhd-about-company-zx-list-content'>{{item['content']}}</div>
                        <div class='zhhd-about-company-zx-list-time'>{{item['time']}}</div>
                  </div> 
            </div> 
      </div> 
      <zxDetail v-if='selXz' :sel="selXz" @back='back'></zxDetail>
</div>
</template>

<script lang='ts'> 
import {Vue , Component} from 'vue-property-decorator';
import store from '@/store';
import AboutInterface from '@/interface/interface_about';
import zxDetail from './detail.vue';

@Component({
      components:{
            zxDetail
      }
})
export default class extends Vue{
      news_list:AboutInterface = store.getters.getCompanyZX;
      selXz:number|null = null;
      selNewsClick(val:AboutInterface){ 
            let {index} = val; 
            this.selXz = index || null;
      }
      back(){
            this.selXz = null; 
            setTimeout(()=>{ 
                  window.scrollTo({
                        top:0,
                        behavior:"smooth"
                  });
            },200); 
      }
}
</script>

<style lang="" scoped>
   
</style>