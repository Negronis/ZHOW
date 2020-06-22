import {Module , VuexModule , Mutation } from 'vuex-module-decorators';
import HeaderListInterface from '@/interface/interface_headers';
@Module
export default class Headers extends VuexModule{
   //headerList
   headerList:HeaderListInterface[] = [
      {
         name:"首页",
         link:"/"
      },
  
      {
         name:"产品",
         link:"#product",
         children:[
            {
               name:"心衰随访平台",
               parent:true,
               link:"/product",
               select:"xssf",
               linkname:"product" 
            },
            {
               name:"医联体",
               link:"/product",
               parent:true,
               select:"ylt",
               linkname:"product"

            },
            {
               name:"导诊一体机",
               link:"/product",
               parent:true,
               select:"ytj",
               linkname:"product" 
            },
            {
               name:"智慧医疗",
               link:"/product",
               parent:true,
               select:"zhyl",
               linkname:"product"

            },
            {
               name:"导诊机器人",
               link:"/product",
               parent:true,
               select:'dzjqr',
               linkname:"product"

            }
         ]
      },
      {
         name:"团队",
         link:'#team'
      },
      {
         name:"合作",
         link:"#cooperate"
      },
      {
         name:"新闻资讯",
         link:"#about", 
         children:[
            {
               name:"公司介绍",
               link:"/about",
               select:'company',
               parent:true,
               linkname:"about"
            },
            {
               name:"行业新闻",
               parent:true,
               link:"/about",
               select:'news',
               linkname:"about"

            },
            {
               name:"行业资讯",
               parent:true, 
               link:"/about",
               select:'information',
               linkname:"about"

            }
         ]
      },
      {
         name:"联系我们",
         link:"#call"
      }
   ];
   get getHeaders(){
      return this.headerList;
   }
}

