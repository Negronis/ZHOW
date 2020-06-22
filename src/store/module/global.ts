import {Module , VuexModule, Mutation } from 'vuex-module-decorators';
@Module
export default class GlobalModule extends VuexModule{
   // is Computer ?
   isComputer: boolean = false;
   get getType() :boolean{
      return this.isComputer;
   }
   @Mutation
   setType(n:boolean){
      this.isComputer = n;
   }
   //Screen Height
   Height:number = 0;
   get getHeight(){
      return this.Height;
   }
   @Mutation
   setHeight(n:number){
      this.Height = n;
   }
   // 子路由切换参数
   ChangeStr:string = localStorage.getItem('changeStr') || "xssf";
   get getChangeStr(){
      return this.ChangeStr;
   }
   @Mutation
   setChangeStr(n:string){ 
      localStorage.setItem('changeStr',n);
      this.ChangeStr = n;
   }
}