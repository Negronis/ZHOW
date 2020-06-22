import {Module ,VuexModule } from 'vuex-module-decorators';
import PhilosophyInterface from "@/interface/interface_philosophy";
@Module
export default class Philosophy extends VuexModule{
	fb:string = require('../../assets/images/index/philosophy/fb.png');
	kj:string = require('../../assets/images/index/philosophy/kj.png');
	aq:string = require('../../assets/images/index/philosophy/aq.png');
	gx:string = require('../../assets/images/index/philosophy/gx.png');
	ym:string = require('../../assets/images/index/philosophy/ym.png');
	PhilosophyList:PhilosophyInterface[] = [
		{
			html:` 
				<img src='${this.fb}' width='50px'/ >
				<span>方便</span>
			`
		},
		{
			html:` 
				<img src='${this.kj}' width='50px'/ >
				<span>快捷</span>
			`
		},
		{
			html:` 
				<img src='${this.aq}' width='50px'/ >
				<span>安全</span>
			`
		},
		{
			html:` 
				<img src='${this.gx}' width='50px'/ >
				<span>高效</span>
			`
		},
		{
			html:` 
				<img src='${this.ym}' width='50px'/ >
				<span>严密</span>
			`
		},
	];
	get getPhilosophyList(){
		return this.PhilosophyList;
	}
}