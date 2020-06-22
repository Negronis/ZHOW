<template>
<div class='zhhd-product' id='zhhd-product'>
      <div class='zhhd-title'>
            OUR <span class='zhhd-title-once'>PRODUCTS</span>
      </div>
      <div class='zhhd-product-first' > 
            <h3>主营业务-心衰随访平台</h3> 
			<div class='zhhd-product-first-present'>
			 	<span><span>一键</span>在线数据填报，<span>精准</span>字段抓取。</span>
				<button @click='linkTo({name:"xssf"})'>详细了解 <i style="display: inline-block;vertical-align: middle;" class='iconfont icon-icon-test38'></i></button>
			</div>
            <slider ref="slider" :options="options">
                  <slideritem v-for="(item,index) in pages" :key="index" :style="item.style">
                        <img width='100%' :src="item['html']"/>
                  </slideritem>
                  <!-- 设置loading,可自定义 -->
                  <div slot="loading">loading...</div>
            </slider> 
      </div>
	  
      <div class='zhhd-product-list'>
			<h3>其他业务</h3>
			<div class='zhhd-product-list-content'>
				<div @click='linkTo(item)' v-for="item in OtherProductList" :key="item['html']" v-html="item['html']"></div>
			</div>
	  </div>
</div>
</template>

<script lang='ts'>
import {Vue , Component} from 'vue-property-decorator';
import store from '@/store';
import ProductList from '@/interface/interface_product';
import {lbt,options} from '@/interface/interface_lbt'; 
import {slider , slideritem} from 'vue-concise-slider';
@Component({
      components:{
            slider,slideritem
      }
})
export default class extends Vue{
      XSSF_BANNER:string = require('../../assets/images/index/product/xssf_banner.png');
      // 轮播图
	  pages:lbt[] = [
            { html: require('../../assets/images/index/product/index.jpg')  },
            { html: require('../../assets/images/index/product/wait.jpg')  },
            { html: require('../../assets/images/index/product/add.jpg')  }, 
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
	  // 其他业务列表
	  OtherProductList : ProductList[] = store.getters.getOtherProductList;
	  linkTo(val:ProductList){
		  let {name} = val;
		  store.commit('setChangeStr',name)
		  if(name) this.$router.push('/product')
	  }
}
</script>

<style lang="" scoped>
   
</style>