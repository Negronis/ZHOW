<template>
      <div class='zhhd-headers' id='header'> 
            <div>
                  <img width='100px' src="../../assets/images/index/logo/nav_logo.png" alt="">
            </div>  
            <div v-if='isComputer'> 
                  <a  class='zhhd-headers-pcHeaderNav' @mouseleave="mouseLeave(item,false)"  @click.stop='ChangeHash(item,false)' @mouseover="mouseMouve(item,false)" v-for='item in header_list' :key='item.name'>
                        {{item['name']}}
                        <div class='zhhd-headers-pc-hidelist'   v-if="pcHeaderHideItem == item['name']"> 
                              <div  @click.stop="ChangeHash(itemChild,true)"  v-for="itemChild in item['children']" :key='itemChild.name'>{{itemChild['name']}}</div> 
                        </div>
                  </a>
            </div>
            <div v-if='!isComputer'>
                  <i class='iconfont icon-icon-test29 zhhd-headers-right' @click='openMenu'></i>
                  <div :class='hideMenu'>
                        <a @click='menuClick(item,false)' :class="( (activeHideParentItem == item['name']) && !activeHideItem) ? zhhdHeadersHideItemActive : ''"  v-for='item in header_list' :key='item.name' >
                              {{item['name']}}
                              <div v-if="item['children'] && clickItemName == item['name']"> 
                                     <a :class="activeHideItem == itemChild['name'] ? zhhdHeadersHideItemActive : ''"  @click.stop='menuClick(itemChild,true)'  v-for="itemChild in item['children']" :key="itemChild['name']">
                                          {{itemChild['name']}}
                                     </a>
                              </div>
                        </a> 
                  </div>
            </div>
      </div>
</template>

<script lang='ts'>

import {Vue , Component, Watch } from 'vue-property-decorator';
import HeaderListInterface from '@/interface/interface_headers';
import store from '@/store';
@Component
export default class extends Vue{
      // 头部list
      header_list:HeaderListInterface = store.getters.getHeaders;
      get isComputer() :boolean{
            return store.getters.getType;
      }
      /** 
       * mobile端相关代码
      */
      // 显示隐藏menu - mobile
      showHideMenu:boolean = false;
      openMenu(){ 
            this.showHideMenu = !this.showHideMenu;
      }
      //通过class判断显示隐藏
      get hideMenu(){
            return [
                  'zhhd-headers-hide-menu',
                  {
                        ['zhhd-headers-hide-menu-show']:this.showHideMenu==true
                  }
            ]
      }
      get zhhdHeadersHideItemActive(){
            return [
              'zhhd-headers-hide-menu-item-active'
            ]
      }
      // 选中的项目变色 - 子项
      activeHideItem:string="";
      //父项
      activeHideParentItem:string= "";
      /** 
       * pc端下相关代码
      */
     pcHeaderHideItemShow:boolean = false;
     pcHeaderHideItem:string = "";
     /** 
      * @修改日期
      * @2020年6月22日10:01:42
      * @Author：F
     */
     //用于锚点和清除
     ChildDiv = document.querySelectorAll('div[id]'); 
      //点击pc端父菜单方法
     ChangeHash(val:HeaderListInterface,isNav:boolean){ 
            let {children , name , parent , select , link ,linkname } = val; 
            if(isNav || name == '首页'){
                  store.commit('setChangeStr',select); 
                  this.$router.push({
                        path:link || '',
                        name:linkname,
                        params:{
                              str:select || ""
                        }
                  });
           }
            if(!isNav){ 
                  if(window.location.hash != '#/'){ 
                        location.href = "http://" + location.host;
                  }
            }
            this.ChildDiv = document.querySelectorAll('div[id]'); 
            this.ChildDiv.forEach((e:any)=>{
                  let id = e['id'];   
                  if((link as string).indexOf(e['id'])  != -1){ 
                  setTimeout(()=>{
                        window.scrollTo({
                              top: e.offsetTop, 
                              behavior: "smooth"
                        })
                  },200); 
                  }
                  if(name=='首页'){
                  setTimeout(()=>{
                        window.scrollTo({
                              top: 0, 
                              behavior: "smooth"
                        })
                        },200);
                  }
            })
     }
      //pc端鼠标移入事件
     mouseMouve(val:HeaderListInterface,isNav:boolean){
      let {children , name , parent , select , link ,linkname } = val; 
      if(children)  this.pcHeaderHideItem = name || '';
      if(!children) this.pcHeaderHideItem = "";   
     }
     //pc端鼠标移出事件
     mouseLeave(val:HeaderListInterface,isNav:boolean){
      let {children , name , parent , select , link ,linkname } = val; 
      this.showHideMenu = false; 
     }
      // menu点击事件 - 跳转和显示隐藏子路由 - 手机端
      clickItemName:string = "";
      menuClick(item:HeaderListInterface,isNav:boolean){ 
            let {children, name , parent , select, link, linkname} = item;
            this.activeHideItem = name || ""; 
            if(children) this.clickItemName = name || ""; 
            if(!children && !parent) this.clickItemName = "",this.activeHideParentItem = name || '' , this.activeHideItem = "";  
            if(isNav || name == '首页'){  
                  this.showHideMenu = false;
                  store.commit('setChangeStr',select);
                        this.$router.push({
                              path:link || '',
                              name: linkname,
                              params:{
                                    str:select || ""
                              }
                        });
           } 
           if(!isNav && this.clickItemName == ""){
                  if(window.location.hash != '#/'){ 
                        location.href = "http://" + location.host;
                  }
           }
           this.ChildDiv = document.querySelectorAll('div[id]');
           this.ChildDiv.forEach((e:any)=>{
                 let id = e['id'];  
                 if((link as string).indexOf(e['id'])  != -1){
                  setTimeout(()=>{
                        window.scrollTo({
                              top: e.offsetTop, 
                              behavior: "smooth"
                        })
                  },200); 
                 }
                 if(name=='首页'){
                  setTimeout(()=>{
                        window.scrollTo({
                              top: 0, 
                              behavior: "smooth"
                        })
                   },200);
                 }
           })
      }
     //手机端点击锚点回首页
     changeMobileHash(isNav:boolean){
            if(!isNav){ 
                  if(window.location.hash != '#/'){ 
                        location.href = "http://" + location.host;
                  }
            }
     }
      //点击其他位置修改
      mounted(){
            this.selMouseOverWindow();
      }
      // 设置dom -> 鼠标移入tab消失
      selMouseOverWindow(){
            this.$nextTick(()=>{
                  this.ChildDiv = document.querySelectorAll('div[id]');
                  this.ChildDiv.forEach((e : any)=>{
                        let id:string = e['id'] || ""; 
                        if(id != 'header' && id != 'app' && id !='all'){ 
                              e.onmouseover= () =>{
                                    this.pcHeaderHideItem = ""; 
                                    this.showHideMenu = false;
                              }
                        }
                  })
            }) 
      }
      @Watch('$route')
      changeRoute(val:any){
            this.selMouseOverWindow(); 
      }
}     
</script>
