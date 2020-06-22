import { Module, VuexModule } from 'vuex-module-decorators';
import CooperateListInterface from '@/interface/interface_cooperate';
@Module
export default class Cooperate extends VuexModule {
	haigang: string = require('../../assets/images/index/cooperate/haigang.png');
	zhongyi: string = require('../../assets/images/index/cooperate/zhongyi.png');
	handandiyi: string = require('../../assets/images/index/cooperate/handan.png');
	shengrenmin: string = require('../../assets/images/index/cooperate/shengrenmin.png');
	shigongren: string = require('../../assets/images/index/cooperate/gongren.png');
	taisheng: string = require('../../assets/images/index/cooperate/taisheng.png');
	CooperateList: CooperateListInterface[] = [
		{
			html: ` 
					<span>秦皇岛市海港医院</span>
					<img src="${this.haigang}" width="100%"/> `
		},
		{
			html: `
				<span>秦皇岛市中医医院</span>
				<img src="${this.zhongyi}" width="100%"/> 
			`
		},
		{
			html: `
					<span>秦皇岛市工人医院</span>
					<img src="${this.shigongren}" width="100%"/>`
		},
		{
			html: `<span>河北省人民医院</span>
					<img src="${this.shengrenmin}" width="100%"/>`
		},
		{
			html: `
				<span>邯郸市第一医院</span>
				<img src="${this.handandiyi}" width="100%"/>`
		},
		{
			html: `<span>秦皇岛泰盛健瑞士国际康复中心</span>
					<img src="${this.taisheng}" width="100%"/>
				`
		}
	];
	get getCooperateList() {
		return this.CooperateList;
	}
}
