<template>
<div id='about_only'> 
      <div v-if="link_id == companyPresent['name']" class='zhhd-about-company'>
            <img :src="companyPresent['banner']" width='100%'/>
            <div class='zhhd-about-company-container'> 
                  <div v-for="item in companyPresent['list']" :key="item['title']">
                         <span></span>
                         <h3 class='zhhd-about-company-container-title'> {{item['title']}} </h3>
                        <div class='zhhd-about-company-container-content' v-html="item['content']"></div>
                  </div>
            </div>
      </div>
      <News v-if="link_id == 'news'"></News>
      <CompanyZx v-if="link_id == 'information'"></CompanyZx>

</div>
</template>

<script lang='ts'>
import {Vue , Component, Watch} from 'vue-property-decorator';
import store from '@/store';
import AboutInterface from '@/interface/interface_about';
import News from '@/components/AboutNews/index.vue';
import CompanyZx from '@/components/AboutZx/index.vue';

@Component({
      components:{
            News,CompanyZx
      }
})
export default class extends Vue{
      // 公司介绍
      companyPresent :AboutInterface = store.getters.getCompanyPresent;
      created(){ 
            window.scrollTo({
                  top:0,
                  behavior:"smooth"
            })
      }
      get link_id(){
            return store.getters.getChangeStr;
      }
 
}
</script>

<style lang="" scoped>
   
</style>