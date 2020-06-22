<template>
<div>
      <div class='zhhd-index-lbt' >
            <!-- 配置slider组件 -->
            <slider ref="slider" :options="options">
                  <slideritem v-for="(item,index) in pages" :key="index" :style="item.style">
                        <!-- {{item.html}} -->
                        <img width='100%' :src="item['html']"/>
                  </slideritem>
                  <!-- 设置loading,可自定义 -->
                  <div slot="loading">loading...</div>
            </slider>
      </div>
</div>
</template>

<script lang='ts'>
import {Vue , Component} from 'vue-property-decorator';
import {lbt,options} from '@/interface/interface_lbt';
import {slider , slideritem} from 'vue-concise-slider';
@Component({
      components:{
            slider,slideritem
      }
})
export default class extends Vue{
      pages:lbt[] = [
            { html: require('../../assets/images/index/lbt/banner1.jpg')  },
            { html: require('../../assets/images/index/lbt/banner2.jpg')  },
            { html: require('../../assets/images/index/lbt/banner3.jpg')  }, 
      ];
      options:options= {
            currentPage: 0,//当前页码
            thresholdDistance: 500,//滑动判定距离
            thresholdTime: 300,//滑动判定时间
            autoplay:3000,//自动滚动[ms]
            loop:true,//循环滚动
            direction:'horizontal',//方向设置，垂直滚动
            loopedSlides:1,//无限滚动前后遍历数
            slidesToScroll:1,//每次滑动项数
            timingFunction: 'ease', // 滑动方式
            speed: 300, // 滑动时间
      };
}
</script>

<style lang="" scoped>
   
</style>