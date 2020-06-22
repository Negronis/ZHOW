interface styles{
   background?:string
}
interface lbt {
   html?:string,
   style?:styles
}
interface options{
   currentPage?: number,//当前页码
   thresholdDistance?: number,//滑动判定距离
   thresholdTime?: number,//滑动判定时间
   autoplay?:number,//自动滚动[ms]
   loop?:boolean,//循环滚动
   direction?:string,//方向设置，垂直滚动
   loopedSlides?:number,//无限滚动前后遍历数
   slidesToScroll?:number,//每次滑动项数
   timingFunction?: string, // 滑动方式
   speed?: number, // 滑动时间
}
export {
   lbt,options
} ;