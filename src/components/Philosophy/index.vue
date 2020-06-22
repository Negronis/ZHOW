<template>
<div class='zhhd-philosophy-banner'>
	<div class='zhhd-title'>
	    PHILOSOPHY
	</div>
     <div class='zhhd-philosophy-container'>
		 <div class='zhhd-philosophy-container-list'> 
			 <div v-for="item in PhilosophyList" :key="item['html']" v-html="item['html']" class='zhhd-philosophy-container-list-child'></div>
		 </div>
	 </div>
</div>
</template>

<script lang='ts'>
import {Vue , Component} from 'vue-property-decorator';
import store from '@/store';
import PhilosophyInterface from '@/interface/interface_philosophy';
@Component
export default class extends Vue{
   PhilosophyList:PhilosophyInterface[] = store.getters.getPhilosophyList;
}
</script>

<style lang="" scoped>
   
</style>