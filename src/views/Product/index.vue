<template>
<div id='zhhd-Product'>
      <div v-for="item in productList" :key="item['name']"> 
      <div v-if="selPro == item['name']">
      <img :src="item['banner']" width='100%' alt="">
      <div class='zhhd-product-real-container'>
            <div  class='zhhd-product-real-container-list' >
                  <div class='zhhd-product-real-container-list-left'>
                        <ul>
                              <li @click.prevent='scrollTo(leftChild)' v-for="leftChild in item['leftList']" :key="leftChild['title']">{{leftChild['title']}}</li>
                        </ul>
                  </div>
                  <div class='zhhd-product-real-container-list-right'>
                        <h3 class='zhhd-product-real-container-list-right-title'>{{item['title']}}</h3>
                        <div class='zhhd-product-real-container-list-right-content' :id="rightChild['name']" v-for="rightChild in item['rightList']" :key="rightChild['title']">
                              <div class='zhhd-product-real-container-list-right-content-title'>
                                    <span></span> 
                                    <h3>{{rightChild['title']}}</h3>
                              </div> 
                              <div  class='zhhd-product-real-container-list-right-content-content' v-html="rightChild['content']"></div>
                        </div>
                  </div>
            </div>
      </div>
      </div>
      </div>
</div>
</template>

<script lang='ts'>
import {Vue , Component, Watch} from 'vue-property-decorator';
import store from '@/store';
import productInterface from '@/interface/interface_product';
@Component
export default class extends Vue{
      productList : productInterface[] = store.getters.getContentList
      get selPro() {
            window.scrollTo({
                  top:0,
                  behavior:"smooth"
            })
            return store.getters.getChangeStr;
      }
      scrollTo(val:productInterface){
            let {link} = val;
            let divs = document.querySelectorAll('div[id]');
            divs.forEach((e:any)=>{
                  let id = e['id'];
                  if(id == link){
                        setTimeout(()=>{
                              window.scrollTo({
                                    top:e.offsetTop,
                                    behavior: "smooth"
                              })
                        },200)
                  }
            })
      } 
      created(){
            window.scrollTo({
                  top:0,
                  behavior:"smooth"
            })
      }
}
</script>
 