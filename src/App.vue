<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import store from "@/store";
@Component
export default class App extends Vue {
  Height: number = store.getters.getHeight;
  created() {
    this.ChangeHeight(); 
    this.setComp();
    let func = this.$common.throttle(this.ChangeHeight);
    let func_com = this.$common.throttle(this.setComp);
    window.onresize = ()=>{ 
      func();
      func_com();
    }
    this.InitRouter();
  }
  num:number = 0;
  InitRouter(){
    let href = location.href;
    let queryString = href.slice(href.lastIndexOf('=')+1,);
    if(queryString){
      let queryArr = ['company','news','information','xssf','ylt','ytj','zhyl','dzjqr'];
      queryArr.forEach((e:string)=>{
        if(queryString == e){ 
          if(localStorage.getItem('changeStr') != e || localStorage.getItem('changeStr') == undefined){
            localStorage.setItem('changeStr',e); 
            location.reload();
          }else{
            return;
          }
        }
      })
    } 
    console.log(queryString);
  }
  ChangeHeight() {  
    store.commit("setHeight", window.innerHeight);
  }
  setComp(){
      var userArgentInfo:string = navigator.userAgent; 
      var Agents:string[] = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
      var height:number = window.innerHeight;
      for(var i = 0 ; i < Agents.length ; i ++){
        if(userArgentInfo.indexOf(Agents[i])>0){
          store.commit('setType',false);  
          return;
        }
      }
      store.commit('setType',true);
  }
  @Watch('$route')
  changeRouter(){ 
    this.InitRouter();
  }
}
</script>
<style lang="less">
@import url('./common/less/index.less');
</style>
 
