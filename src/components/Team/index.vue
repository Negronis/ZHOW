<template>
<div class='zhhd-team-banner'>
    <div class='zhhd-title'>
          OUR <span class='zhhd-title-once'>TEAM</span>
    </div>
	<div class='zhhd-team-container'>
		<div class='zhhd-team-list'>  
			<div class='zhhd-team-list-children' v-for="item in TeamList" :key="item['html']" v-html="item['html']"></div>
		</div>
	</div>
</div>
</template>

<script lang='ts'>
import store from '@/store';
import TeamListInterface from '@/interface/interface_team';
import {Vue , Component} from 'vue-property-decorator';
@Component
export default class extends Vue{
   TeamList:TeamListInterface[] = store.getters.getTeamList;
}
</script>