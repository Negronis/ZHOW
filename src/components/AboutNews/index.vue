<template>
<div id='news'>
      <div class='zhhd-about-company-news' v-if='!selNews'>
            <span></span>
            <h3>{{news_list['title']}}</h3> 
            <div @click="selNewsClick(item)" class='zhhd-about-company-news-list' v-for="item in news_list['list']" :key="item['title']">
                  <div class='zhhd-about-company-news-list-title'>{{item['title']}}</div>
                  <div class='zhhd-about-company-news-list-content'>{{item['content']}}</div>
                  <div class='zhhd-about-company-news-list-time'>{{item['time']}}</div>
            </div> 
      </div>
      <newsDetail v-if='selNews' :sel="selNews"  @back='back'></newsDetail>
</div>
</template>

<script lang='ts'> 
import {Vue , Component} from 'vue-property-decorator';
import store from '@/store';
import AboutInterface from '@/interface/interface_about';
import newsDetail from './detail.vue';
@Component({
      components:{
            newsDetail
      }
})
export default class extends Vue{
       news_list:AboutInterface = store.getters.getCompanyNews;
       selNews:number|null = null;
       selNewsClick(val:AboutInterface){ 
            let {index} = val; 
            this.selNews = index || null;
            window.scrollTo({
                  top:0,
                  behavior:"smooth"
            })
       }
      back(){
            this.selNews = null;
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