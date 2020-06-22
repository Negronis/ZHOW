import {Module , VuexModule} from 'vuex-module-decorators';
import TeamListInterface from '@/interface/inter'
@Module
export default class Team extends VuexModule{
	TeamSrc:string = require('../../assets/images/index/team/circle_img.png');
	TeamList:TeamListInterface[] = [
		{
			html:`
					<p>研发部</p>
					<div>
						<h3>R&D department</h3> 
						<span>公司研发中心拥有一支技术强、专业精、具有良好的协作精神的优秀团队。</span>
					</div>
			`
		},
		{
			html:`<p>市场部</p>
					<div>
						<h3>sales & marketing</h3> 
						<span>公司拥有一支充满活力与竞争力的市场开发团队，根据市场的形态定制相对应的营销策略。</span>
					</div>
			`
		},
		{
			html:` 
					<p>行政部</p>
					<div>
						<h3>Personnel</h3> 
						<span>公司行政部恪尽职守，制定一套规范化管理制度，搞好各部门间相互配合、综合协调工作。</span>
					</div>
			`
		},
		{
			html:` 
					<p>运维部</p>
					<div>
						<h3>Operations</h3> 
						<span>公司运维部保障不断提升服务的可用性，确保用户数据安全，提升用户体验。</span>
					</div>
			`
		}
	];
	get getTeamList(){
		return this.TeamList;
	}
}