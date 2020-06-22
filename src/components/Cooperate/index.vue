<template>
<div >
    <div class='zhhd-title'>
          OUR <span class='zhhd-title-once'>COOPERATE</span>
    </div>
	<div class='zhhd-cooperate-container'>
		<div class='zhhd-cooperate-container-list'>
			<div class='zhhd-cooperate-container-list-child' v-for="item in CooperateList" :key="item['html']" v-html="item['html']"></div>
		</div>
	</div>
</div>
</template>

<script lang='ts'>
import {Vue , Component} from 'vue-property-decorator';
import CooperateListInterface from '@/interface/interface_cooperate';
import store from '@/store';
@Component
export default class extends Vue{
   CooperateList:CooperateListInterface[] = store.getters.getCooperateList;
}
</script>

<style lang="" scoped>
   
</style>