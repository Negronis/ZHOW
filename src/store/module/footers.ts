import {Module , VuexModule , Mutation } from 'vuex-module-decorators';
import footerLists from '@/interface/interface_footers';
@Module
export default class Headers extends VuexModule{
   footerImg:string = require('../../assets/images/index/footers/erweima.jpg');
   footerList:footerLists[] = [
      {
         title:"咨询热线",
         children:[
            {
               html:`<i style='font-size:30px;color:rgb(0, 91, 172)'>400-114-8876</i>`
            },
            {
               html:`河北省秦皇岛市开发区<br>
               秦皇西大街100号`
            }
         ]
      },
      {
         title:"服务宗旨",
         children:[
            {
               html:`中昊慧达本着以“专业铸就品质，服务缔造末来”的经营理念，继往开来，砥砺前行。以严谨的管理体系、合理的设计理念、高标准的施工规范、全天候的服务态度，争取用户认可与好评。`
            }
         ]
      },
      {
         title:"关注微信",
         children:[
            { 
               html:`<img width='130px'  src='${this.footerImg}' />`
            }
         ]
      }
   ];
   get getFooterList(){
      return this.footerList;
   };
   footerbottom: footerLists= {
      html:` 
         <span>©2017-2020河北中昊慧达科技有限公司</span>
         <img src="http://www.uuu9.com/skin2016/images/beian.png">
         <a href="http://www.beian.miit.gov.cn/" target="_blank" class="alink" style="color: #dcdcdc;">冀ICP备18017607号</a>
      `
   }
   get getFooterbottom(){
      return this.footerbottom;
   }
}

