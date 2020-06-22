import {Module , VuexModule , Mutation } from 'vuex-module-decorators';
import ProductList from '@/interface/interface_product';
@Module
export default class Product extends VuexModule{
	Yilianti:string = require('../../assets/images/index/product/APP.jpg');
	Yitiji:string = require('../../assets/images/index/product/yitiji.png');
	Zhihui:string = require('../../assets/images/index/product/zhihuiyiliao.png');
	Jiqiren:string = require('../../assets/images/index/product/zhinengjiqiren.png');
	otherProductList:ProductList[] = [
		{
			name:"ylt",
			html:`
				<div class='zhhd-product-list-content-block'>
					<img width='100%' src='${this.Yilianti}' />
					<div class='zhhd-product-list-content-present'>
						<div>
							<i class='iconfont icon-icon-test38'></i>
							医联体
						</div>
					</div>
				</div>
			`
		},
		{
			name:"ytj",
			html:`
				<div class='zhhd-product-list-content-block'>
					<img width='100%' src='${this.Yitiji}' />
					<div class='zhhd-product-list-content-present'>
						<div>
							<i class='iconfont icon-icon-test38'></i>
							导诊一体机
						</div>
					</div>
				</div>
			`
		},
		{
			name:"zhyl",
			html:`
				<div class='zhhd-product-list-content-block'>
					<img width='100%' src='${this.Zhihui}' />
					<div class='zhhd-product-list-content-present'>
						<div>
							<i class='iconfont icon-icon-test38'></i>
							智慧医疗
						</div>
					</div>
				</div>
			`
		},
		{
			name:"dzjqr",
			html:`
				<div class='zhhd-product-list-content-block'>
					<img width='100%' src='${this.Jiqiren}' />
					<div class='zhhd-product-list-content-present'>
						<div>
							<i class='iconfont icon-icon-test38'></i>
							智能机器人
						</div>
					</div>
				</div>
			`
		}
	];
	get getOtherProductList(){
		return this.otherProductList;
	}
	// 图片 - 心衰随访
	imgList:string[] = [
		require('@/assets/images/index/productReal/xs/1.png'),
		require('@/assets/images/index/productReal/xs/2.png'),
		require('@/assets/images/index/productReal/xs/3.png'),
		require('@/assets/images/index/productReal/xs/4.png'),
		require('@/assets/images/index/productReal/xs/5.png'), 
		require('@/assets/images/index/productReal/xs/6.png'),
		require('@/assets/images/index/productReal/xs/7.jpg'), 
		require('@/assets/images/index/productReal/xs/8.png'), 
		require('@/assets/images/index/productReal/xs/9.jpg'), 
		require('@/assets/images/index/productReal/xs/mobile.png'), 
		require('@/assets/images/index/productReal/xs/10.jpg'), 
		require('@/assets/images/index/productReal/xs/banner.png'),  
	]
	// 医联体
	imgListYLT:string[] = [
		require('@/assets/images/index/productReal/ylt/banner.png'), 
		require('@/assets/images/index/productReal/ylt/1.png'),
		require('@/assets/images/index/productReal/ylt/2.png'),
		require('@/assets/images/index/productReal/ylt/3.png'),
		require('@/assets/images/index/productReal/ylt/4.png'),
		require('@/assets/images/index/productReal/ylt/5.png'), 
		require('@/assets/images/index/productReal/ylt/6.png'), 
	]
	// 一体机
	imgListYTJ:string[] = [
		require('@/assets/images/index/productReal/ytj/banner.jpg'), 
		// require('@/assets/images/index/productReal/ytj/1.png'),
		"",
		// require('@/assets/images/index/productReal/ytj/2.png'),
		"",
		// require('@/assets/images/index/productReal/ytj/3.png'),
		"",
		require('@/assets/images/index/productReal/ytj/4.png'),
		require('@/assets/images/index/productReal/ytj/5.png'), 
		require('@/assets/images/index/productReal/ytj/6.png'), 
		require('@/assets/images/index/productReal/ytj/7.png'), 
		require('@/assets/images/index/productReal/ytj/8.png'), 
		require('@/assets/images/index/productReal/ytj/9.png'), 
		require('@/assets/images/index/productReal/ytj/10.png'), 
		require('@/assets/images/index/productReal/ytj/11.png'),  
	]
	imgListZHYL:string[] = [
		require('@/assets/images/index/productReal/zh/banner.png'), 
		require('@/assets/images/index/productReal/zh/1.png'), 
		require('@/assets/images/index/productReal/zh/2.png'), 
		require('@/assets/images/index/productReal/zh/3.png'), 
		require('@/assets/images/index/productReal/zh/4.png')
	]
	imgListJQR:string[] = [
		require('@/assets/images/index/productReal/jqr/banner.jpg'), 
		require('@/assets/images/index/productReal/jqr/1.png'), 
		require('@/assets/images/index/productReal/jqr/2.png'), 
		require('@/assets/images/index/productReal/jqr/3.png'), 
		require('@/assets/images/index/productReal/jqr/4.jpg'),
		require('@/assets/images/index/productReal/jqr/5.png'),
		require('@/assets/images/index/productReal/jqr/6.png'),
		require('@/assets/images/index/productReal/jqr/7.png') 
	]
	// 主要产品数组
	contentList:ProductList[] = [
		{
			name:"xssf",
			title:"中昊平板-心衰随访平台",
			banner:this.imgList[11],
			leftList:[
				{
					title:"总体设计",
					link:"ztsj"
				},
				{
					title:"项目背景",
					link:"xmbj"
				},
				{
					title:"产品优势",
					link:"cpys"
				},
				{
					title:"产品亮点",
					link:"cpld"
				}
			],
			rightList:[
				{
					title:"总体设计",
					name:"ztsj",
					content:`
						<div>心衰随访平台是帮助国家心衰中心建设单位或者心衰中心认证单位通过更加科技、方便、快捷、准确的方式完成心衰数据的填报、信息聚台、自动上传、信息审核、随访表查询及预览打印等功能，提高心衰中心认证通过率，简化医生工作流程，提高医生工作效率。</div>
					`
				},
				{
					title:"部分界面展示",
					content:`
					注：为保证隐私，只展示部分功能界面，详情请致电咨询或公众号等其它途径！谢谢！
						<div class='zhhd-product-real-container-list-right-content-imgList'>
							<img src="${this.imgList[0]}" width='100%'>
							<img src="${this.imgList[1]}" width='100%'>
							<img src="${this.imgList[2]}" width='100%'>
							<img src="${this.imgList[3]}" width='100%'>
							<img src="${this.imgList[4]}" width='100%'>
							<img src="${this.imgList[5]}" width='100%'> 
						</div>
					`
				},
				{
					title:"我们将解决", 
					content:`
						<div><b>⬛ 助力认证单位高分通过认证。</b>心衰随访平台全面支持建档、完善病历、随访填表、数据上报，完全适配心衰中心的审核要求，可通过“电话、短信、微信、移动表单问卷”的方式，实现医院的随访目标管理。</div>
						<div style='margin-top:20px;'><b>⬛ 减轻医生工作量，让随访工作变得简单高效。</b>中昊慧达心衰随访平台支持数据从病例系统自动采集，实现便捷随访，数据自动聚合至国家填报平台，省时省力，有效提升医院随访效率，重点减轻医生的工作量。</div>
					`
				},
				{
					title:"项目背景", 
					name:"xmbj",
					content:`
						<div>心力衰竭（简称心衰）被称为“心血管病的病最后战场”，我国成年人心衰患病率为0.9%，这也意味着我国有超1000万的心衰患者，为提高心衰的整体诊治水平，<b>中华医学会心血管病学分会、中国心血管健康联盟联合开展了心衰中心建设项目。</b></div>
						<div style='text-align:center'>
							<img src="${this.imgList[6]}" width='95%'> 
						</div>
						<div>据国家心衰中心2020年5月新闻，心衰中心建设单位的建设进程如火如荼，<b>截止2020年4月26日，共有1160家单位注册账号申请建设</b>，共有四批次250家单位(215家标准版、35家基层版)通过心衰中心认证。全国各单位对心衰中心建设高度重视，注册单位和填报病例成阶梯状增长，但填报及随访工作繁冗复杂，助力医院便捷完成心衰随访及认证工作势在必行。</div>
					`
				},
				{
					title:"产品优势",
					name:"cpys",
					content:`
						<h3>一、心衰认证单位审核严谨，中昊慧达心衰随访平台成为必备软件，助力认证单位高分通过认证。</h3>
						<div>国家心衰中心对于心衰认证单位有相当成熟的一套认证标准、认证要点、认证流程、质控体系，还有网审、现场核查及执委会投票。</div>

						<div>认证标准中的基本条件与资质部分要求医疗单位具备心衰中心的管理团队、心血管专科条件、随访数据库的填报与管理。如果认证单位使用中昊慧达心衰随访软件，随访数据库的填报与管理工作变得十分规范，成为妥妥的加分项。</div>
						<div>第二项心衰患者的诊治中要求规范心衰的长期管理，中昊慧达心衰管理中心全面支持建档、完善病历、随访填表，数据上报，完全适配心衰中心的审核要求。</div>
						<div style='text-align:center'>
						<img src="${this.imgList[8]}"  width='95%' > 
					</div>
					`
				},
				{
					title:"产品亮点", 
					name:"cpld",
					content:`
						<div><b>心衰随访及填报工作繁冗复杂，医院医生自顾不暇，心衰随访平台支持数据从病例系统自动采集，实现便捷随访，数据自动聚合至国家填报平台，省时省力。</b></div>
						<div style='text-align:center'>
							<img src="${this.imgList[10]}" width='95%'> 
						</div>
						<div class='zhhd-product-real-container-list-right-content-contentList'> 
							<div>⬛ 心衰随访平台不需要his接口，就能抓取HIS系统中心衰患者的数据，采集用时不超1s，<b>智能精准！</b></div>
							<div>⬛ 在心衰平板即可完成创建病例和随访，不占用医院电脑，随访表自动聚合至国家数据填报平台，<b>简单高效！</b></div>
							<div>⬛ 通过填报内容同类项自动填写，固定常用单位等方式实现快速填表，<b>方便快捷！</b></div>
							<div>⬛ 随访助手功能，预览当日/明日/一周内随访计划<b>，省心省力！</b></div>
						</div>
						<h3 style='text-indent: 40px;'>心衰随访软件请选择中昊慧达心衰随访平台，助力心衰认证单位高分通过认证，实现数据自动采集，表格自动填写，随访表自动聚合，让随访工作简单高效！</h3>
					`
				},
			]
		},
		{
			name:"ylt",
			banner:this.imgListYLT[0],
			title:"医联体",
			leftList:[
				{
					title:"产品说明",
					link:"cpsm"
				},
				{
					title:"产品功能",
					link:"cpgn"
				},
				{
					title:"手机界面",
					link:"sjjm"
				},
				{
					title:"项目目标",
					link:"xmmb"
				}
			],
			rightList:[
				{
					title:"医联体介绍", 
					content:`
						<div>医联体是指区域医疗联合体，是将同一个区域内的医疗资源整合在一起，通常由一个区域内的三级医院与二级医院、社区 医院、村医院组成一个医疗联合体。 目的是为了解决百姓看病难的问题。实现了人民满意、政府满意、职工满意的预期目 标难题。</div>
					`
				},
				{
					title:"产品说明",
					name:"cpsm",
					content:` 
						<div>中昊益联智慧医疗服务平台一是集成了: 患者基本信息注册、发送转诊、医生工作站(云医院)、远程会诊等实用功能的多功能、智慧化、系统化的综合医疗服务平台。其基本服务功能包括四大项:</div>
						<div class='zhhd-product-real-container-list-right-content-imgList'>
							<img src="${this.imgListYLT[3]}" width='100%'>
							<img src="${this.imgListYLT[4]}" width='100%'>
							<img src="${this.imgListYLT[5]}" width='100%'>
							<img src="${this.imgListYLT[6]}" width='100%'>
						</div>
					`
				},
				{
					title:"产品功能", 
					name:"cpgn",
					content:`
						<div><b>云医院：</b>标准化的医生工作站，快速查找医嘱项目、预约上级医疗机构大型医疗设备。</div>
						<div><b>双向转诊：</b>根据患者病情实现上、下级医疗机构间的转诊治疗、支持转诊单打印、检查检验报告查询，买现分级诊疗。</div>
						<div><b>远程会诊：</b>通过视频传输、医疗物联网终端等信息化手段为患者完成病历分析、病情诊断,确定治疗方案。</div>
						<div style='margin-top:30px'>
							<img src="${this.imgListYLT[1]}" width='95%'> 
						</div>
					`
				},
				{
					title:"手机界面", 
					name:"sjjm",
					content:`
						<div>预约挂号、诊间扫码支付、医检结果电子化共享、线上线上咨询医生、物联网远程会诊……“智慧医疗"近年来快速发展，借助互联网技术不断改写传统看病方式 让患者看病更便捷、更高效、更有人文关怀。</div>
						<div class='zhhd-product-real-container-list-right-content-imgList'>
							<img src="${this.imgListYLT[2]}" width='100%'> 
						<div> 
								<span>
									移动端（微信公众平台）
									<ul style='line-height:20px'>
										<li>建立账户，完善客户信息</li>
										<li>消费细明查询</li>
										<li>门诊缴费</li>
										<li>就医反馈</li> 
									</ul>
								</span>
								<span>
										平台端（云医院）
										<ul style='line-height:20px'>
											<li>医生工作站</li>
											<li>添加新用户 </li>
											<li>医嘱查询</li>
											<li>就医反馈</li> 
											<li>物价项目管理</li> 
											<li>收费项目管理</li>  
										</ul>
								</span>
								<span>
								平台端（双向转诊）
									<ul style='line-height:20px'>
										<li>发起转诊</li>
										<li>接受转诊 </li>
										<li>转诊记录</li> 
									</ul>
								</span>
								<span>
								其他功能
									<ul style='line-height:20px'>
										<li>预约挂号</li>
										<li>检查、检验报告</li>
										<li>医院缴费</li>
										<li>每日清单</li>
										<li>就医指引</li>
										<li>住院须知</li>
										<li>预约体检</li>
										<li>报告查询</li>
										<li>健康管理</li>
										<li>风险评估</li>
										<li>医院介绍</li>
									</ul>
								</span>
							</div> 
						</div> 
					`
				},
				{
					title:"项目目标",
					name:"xmmb",
					content:` 
						<div>中昊益联按照国家关于分级诊疗体系建设的总体部署，结合实际，提出构建“医联体创新3+3+1模式”的紧密型医联体建设思路。 上级医疗机构以中昊益联智慧医疗信息服务平台为载体，借助医疗诊断、监护仪器等物联网终端设备，解决下级医疗机构设备短缺， 人员能力不足问题，促进优质的医疗资源下沉基层，有效落实紧密型医联体建设。开展“互联网+医疗健康”便民服务，缓解患者的就医压力， 提供更好的就医途径。</div>
						<div class='zhhd-product-real-container-list-right-content-imgList'>
						<div style="background-color: #f3f3f3; padding:5px; margin:5px auto;">
							<h4>分级诊疗</h4>
							<p>利用转诊平台进行双向转诊，提高资源利用效率。</p>
						</div>
						<div style="background-color: #f3f3f3;padding:5px;margin:5px auto;" >
							<h4>解决医疗资源分配不均</h4>
							<p>采用远程会诊、中心实验室的方法来降低患者服务成本，由医联体医疗信息平台提供签约上级医院远程会诊选项。
								下级医院可通过提交远程会诊请求方式或提供会诊账号、密码的方式与上级医院会诊。
								会诊支持视音频传输，同时可通过医疗机构信息共享机制共享患者就诊信息，辅助上级医院会诊。</p>
						</div>
						<div style="background-color: #f3f3f3;padding:5px;margin:5px auto;" >
							<h4>解决支付难题</h4>
							<p>微信支付已经成为生活中比较普遍的支付方式。全面参与到线上支付可以有效减少三长一短现象。</p>
						</div>
							<div style="background-color: #f3f3f3;padding:5px;margin:5px auto;">
								<h4>医疗机构信息共享</h4>
								<p>医疗机构信息共享：利用健康档案平台，通过院内HIS系统集成，实现患者的就诊信息在“医联体”医疗信息平台内无缝共享及调阅。</p>
							</div>
						</div>
					`
				},
			]
		},
		{
			name:"ytj",
			title:"智能导诊一体机",
			banner:this.imgListYTJ[0],
			leftList:[
				{
					title:"智能导诊一体机",
					link:"zndzytj"
				},
				{
					title:"功能介绍",
					link:"gnjs"
				}, 
				{
					title:"产品优势",
					link:"cpys"
				},
				{
					title:"产品规格",
					link:"cpgg"
				},
				{
					title:"产品场景",
					link:"cpcj"
				},
			],
			rightList:[
				{
					title:"智能导诊一体机",
					name:"zndzytj",
					content:`
					<div class='zhhd-product-real-container-list-right-content-flex'>
						<div >
							<div>智能导诊是以导诊一体机为交互载体，为患者提供自助导诊、科室导航、信息介绍等服务，利用科技信息化技术减化就医流程，减轻大厅导诊护士的工作量，减少医患矛盾纠纷，提升医院服务水平。</div>
							<div>智能导诊一体机集首页广告轮播、医院信息介绍、导诊语音播报、科室路径导航、智能自助导诊、诊前预约挂号、诊后移动支付等功能于一身，操作简单，易于广大患者接受,提供良好的就医体验。</div>
							<div>作为一款医院信息化便民服务产品，具有广告宣传、智能导诊、自助诊断、预约挂号等功能，便于患者就诊流程自助，减少医患纠纷，同时响应速度快，运行效率高，界面操作简单，地图呈现直观易懂，系统稳定，预留升级服务。</div>
						</div>
						<div>
							<img width='100%' src="${this.imgListYTJ[9]}"/> 
						</div> 
					</div> 
					`
				},
				{
					title:"功能介绍",
					name:"gnjs",
					content:`
					<div class='zhhd-product-real-container-list-right-content-flex'>
						<div style='flex:4;margin:0 5px;box-shadow:1px 1px 8px 1px gray'>
							<div style="background:rgb(0,92,172);text-align: center;">
								<div style="color: #fff;line-height: 48px;font-weight: 500;">首页轮播</div>
							</div>
							<div  style='padding:5px;'>
								<p>首页默认广告轮播，医院可以招租广
								告位。首页菜单按钮随意移动，点击
								展开功能入口。</p>
							</div>
						</div>
						<div style='flex:4;margin:0 5px;box-shadow:1px 1px 8px 1px gray'>
							<div style="background:rgb(0,92,172);text-align: center;">
								<div style="color: #fff;line-height: 48px;font-weight: 500;">医院简介</div>
							</div>
							<div  style='padding:5px;'>
								<p>医院简介界面详细介绍医院信息、医
									疗水平、联系方式等，起到宣传、提
									高医院影响力和知名度的作用。</p>
							</div>
						</div>
						<div  style='flex:4;margin:0 5px;box-shadow:1px 1px 8px 1px gray'>
							<div style="background:rgb(0,92,172);text-align: center;">
								<div style="color: #fff;line-height: 48px;font-weight: 500;">预约挂号</div>
							</div>
							<div  style='padding:5px;'>
								<p>可以选择科室、专家在线预约挂号，
								手机端同时查看且实现诊间快捷微信
								支付功能，让就诊更简单更便捷。
									</p>
							</div>
						</div>
					</div>
					<div class='zhhd-product-real-container-list-right-content-flex' style='margin-top:20px;'>
						<div style='flex:4;margin:0 5px;box-shadow:1px 1px 8px 1px gray;'>
							<div style="background:rgb(0,92,172);text-align: center;">
								<div style="color: #fff;line-height: 48px;font-weight: 500;">自助导诊</div>
							</div>
							<div   style='padding:5px;'>
								<p>
									平台提供自助导诊系统，导诊结果推
									荐就诊科室，病情结果可以通过手机
									扫码带走。
									</p>
							</div>
						</div>
						<div style='flex:4;margin:0 5px;box-shadow:1px 1px 8px 1px gray'>
							<div style="background:rgb(0,92,172);text-align: center;" id="YTJ-gnjs-h3">
								<div style="color: #fff;line-height: 48px;font-weight: 500;">科室导航</div>
							</div>
							<div  style='padding:5px;'>
								<p>
									根据医院室内结构，绘制2D/3D地图，
									手机扫描二维码即可带走地图，走到哪看到哪里，让寻找科室不迷茫。
									</p>
							</div>
						</div>
						<div style='flex:4;margin:0 5px;box-shadow:1px 1px 8px 1px gray'>
							<div style="background:rgb(0,92,172);text-align: center;" id="YTJ-gnjs-h3">
								<div style="color: #fff;line-height: 48px;font-weight: 500;">语音合成</div>
							</div>
							<div style='padding:5px;'>
								<p>
									采用语音合成技术，支持普通话，语音
									合成效果流畅逼真，让人机交互更加顺畅自然。
									</p>
							</div>
						</div>
					</div>
					`
				},
				{
					title:"产品优势", 
					name:'cpys',
					content:`
						<div class='zhhd-product-real-container-list-right-content-flex'>
							<div style="background: rgb(243, 243, 243);flex:4;margin:5px;">
								<div style="height: 7px;background: rgb(2,91, 172);"></div>
								<h4 style="margin: 25px 0px; color: black;font-size: 20px;text-align: center;">智能分屏，多种分屏方式</h4>
								<p style="font-size: 16px; color: rgb(88, 88, 88);padding: 0px 30px;">
									导诊一体机可支持1分屏、2分屏、3分屏等多种分屏形式，可同时播放图片、视频；分屏区域可自行微调。	
								</p>
							</div>
							<div style="background: rgb(243, 243, 243);flex:4;margin:5px;">
								<div style="height: 7px;background: rgb(2,91, 172);"></div>
								<h4 style="margin: 25px 0px; color: black;font-size: 20px;text-align: center;">多元化广告展示，自动循环播放</h4>
								<p style="font-size: 16px; color: rgb(88, 88, 88);padding: 0px 30px;">
									导诊一体机可支持1分屏、2分屏、3分屏等多种分屏形式，可同时播放图片、视频；分屏区域可自行微调。	
								</p>
							</div>
							<div style="background: rgb(243, 243, 243);flex:4;margin:5px;">
								<div style="height: 7px;background: rgb(2,91, 172);"></div>
								<h4 style="margin: 25px 0px; color: black;font-size: 20px;text-align: center;">1080P高清画质 “畅” 想体验</h4>
								<p style="font-size: 16px; color: rgb(88, 88, 88);padding: 0px 30px;">
									纯正色彩，高达920* 1080P的细腻像素，使用时间长，播放清晰、流畅，红外触控屏，反应灵敏，支持多种手势操控。	
								</p>
							</div>
						</div>
					`
				},
				{
					title:"产品规格", 
					name:"cpgg",
					content:` 
						<div style='text-align:center'>
							<img src="${this.imgListYTJ[10]}" width='95%'> 
						</div> 
					`
				},
				{
					title:"产品场景",
					name:"cpcj",
					content:` 
						<div>应用场景广泛，可在餐饮、医院、银行、车站、商场等多种场合适用</div>
						<div style='text-align:center'>
							<img src="${this.imgListYTJ[11]}"  width='95%' > 
						</div>
					`
				}
			]
		},
		{
			name:"zhyl",
			title:"智慧医疗",
			banner:this.imgListZHYL[0],
			leftList:[
				{
					title:"智慧医疗",
					link:"zhyl"
				}, 
			],
			rightList:[
				{
					title:"智慧医疗",
					name:"zhyl",
					content:`
						<div>智慧医疗是通过微信公众号完成在线预约挂号、微信诊间支付、住院预交金支付、检查报告查询、费 用清单查询等业务流程办理，仅需一部手机， 操作简单便捷，减少患者跑腿、排队带来的困扰，实现 患者就医诊间便捷支付。</div>
						<div >
						<ul>
							<li>关注微信公众号</li>
							<li>实名认证，绑定就诊卡信息</li>
							<li>可预约挂号、快捷缴费、诊间支付、检查报告查询、费用清单查询、智能自助导诊、科室导航</li>
						</ul>
					</div>
					<div>只需用手机扫一扫关注微信公众号，注册就诊人实名信息，就可以在线上预约挂号、快捷支付、查询检查报告等操作，产品以患者为中心，以简化业务为目标，通过科技化的手段优化就诊流程，使患者通过微信公众号即可享受多项及时、便 捷、高效的线上就医服务。 用清单查询等业务流程办理，仅需一部手机， 操作简单便捷，减少患者跑腿、排队带来的困扰，实现 患者就医诊间便捷支付。</div>
					<h3>页面展示</h3>
					<div class='zhhd-product-real-container-list-right-content-flex'>
					<div style='flex:4;margin:10px;'>
						<img style='box-shadow:1px 1px 4px 1px gray' width='100%' src="${this.imgListZHYL[1]}"/> 
					</div> 
					<div  style='flex:4;margin:10px;'>
						<img style='box-shadow:1px 1px 4px 1px gray' width='100%' src="${this.imgListZHYL[2]}"/> 
					</div> 
					<div  style='flex:4;margin:10px;'>
						<img style='box-shadow:1px 1px 4px 1px gray' width='100%' src="${this.imgListZHYL[3]}"/> 
					</div> 
					<div  style='flex:4;margin:10px;'>
						<img style='box-shadow:1px 1px 4px 1px gray' width='100%' src="${this.imgListZHYL[4]}"/> 
				</div> 
				</div> 
					`
				}
			]
		},
		{
			name:"dzjqr",
			title:"智能导诊机器人",
			banner:this.imgListJQR[0],
			leftList:[
				{
					title:"智能导诊机器人",
					link:"dzjqr"
				}, 
				{
					title:"业务查询",
					link:"ywcx"
				}, 
				{
						title:"尺寸规格",
						link:"ccgg"
				},
				{
					title:"应用场景",
					link:"yycj"
				}
			],
			rightList:[
				{
					title:"智能导诊机器人",
					name:"dzjqr",
					content:`
					<div>中昊科技智能机器人外贴近医护人员形象，声音甜美、智能迎宾，提供问路引路、业务查询、排版详情、就诊须知、科室导诊、远程协助等功能，以机器人为交互载体，联动上线与下线，为患者提供全流程的资讯及导诊服务。</div>
					<div>功能：预约挂号/办卡注册/医保服务/住院业务/如何缴费/智能分诊/检查报告/急诊业务…</div>
					<div class='zhhd-product-real-container-list-right-content-flex'>
					<div style='flex:4;margin:10px;'>
						<img style='box-shadow:1px 1px 4px 1px gray' width='100%' src="${this.imgListJQR[1]}"/> 
					</div> 
					<div  style='flex:4;margin:10px;'>
						<img style='box-shadow:1px 1px 4px 1px gray' width='100%' src="${this.imgListJQR[7]}"/> 
					</div> 
					<div  style='flex:4;margin:10px;'>
						<img style='box-shadow:1px 1px 4px 1px gray' width='100%' src="${this.imgListJQR[2]}"/> 
					</div> 
				</div> 
					`
				},
				{
					title:"业务查询",
					name:"ywcx",
					content:`
					<div>中昊科技智能机器人外贴近医护人员形象，声音甜美、智能迎宾，提供问路引路、业务查询、排版详情、就诊须知、科室导诊、远程协助等功能，以机器人为交互载体，联动上线与下线，为患者提供全流程的资讯及导诊服务。</div>
					<div>功能：预约挂号/办卡注册/医保服务/住院业务/如何缴费/智能分诊/检查报告/急诊业务…</div>
					<div class='zhhd-product-real-container-list-right-content-flex'>
					<div style='flex:4;margin:10px;background:#2d8cf0;color:#fff;padding:10px;'> 
								<h3>位置咨询</h3>
								<p>为患者提供医院各个区域、科室、业
									务窗口等地点的位置咨询服务，同时
									机器人屏幕上展示医院2D的平面地图
									，路线图可同步至手机。
								</p> 
					</div> 
					<div  style='flex:4;margin:10px;background:#2d8cf0;color:#fff;padding:10px;'> 
						<h3>业务咨询</h3>
						<p>实现医院专有的业务问答知识库，为患
							者提供就医过程中的业务解答，涵盖挂
							号、缴费、检查、体检、住院、出院、
							医保多种业务类型，支持更新。
						</p> 
					</div> 
					<div  style='flex:4;margin:10px;background:#2d8cf0;color:#fff;padding:10px;'> 
							<h3>挂号导诊</h3>
							<p>
							集成常见4000多疾病百科知识库，依
							托询证医学理论为患者提供语化的导
							诊咨询，给出患者可疑疾病同时推荐
							合适的科室。通过识别身份证获取患
							者挂号信息并打印挂号单。
							</p>
					</div> 
					</div> 
					<div class='zhhd-product-real-container-list-right-content-flex'>
					<div  style='flex:4;margin:10px;background:#2d8cf0;color:#fff;padding:10px;'>  
						<h3>信息关联</h3>
						<p>
							支持关联医院信息网页(官网、公众
							号、H5等)，可以实现医师介绍、科
							室介绍、专家团队、医院介绍等，同
							时可以自主定制内容。										
						</p> 
					</div>
					<div  style='flex:4;margin:10px;background:#2d8cf0;color:#fff;padding:10px;'>  
						<h3>平台管理</h3>
						<p>
							提供医院知识库管理、机器人管理以及
							运行监控等功能。
						</p> 
					</div> 
					<div  style='flex:4;margin:10px;background:#2d8cf0;color:#fff;padding:10px;'>   
							<h3>满意度调查</h3>
							<p>
							建立满意度管理制度，动态调查患者
							就医体验和医务人员执业感受。7+1远
							扬识别麦克阵列。
							</p> 
						</div> 
					</div>  
					`
				},
				{
					title:"尺寸规格",
					name:"ccgg",
					content:`
						<div>
							<table width='100%'  border='1'  cellspacing='0' >
							            <tbody><tr>
							               <th>身高(厘米)</th>
							               <td>145CM</td>
							            </tr>
							            <tr>
							               <th>重量(公斤)</th>
							               <td>35Kg</td>
							            </tr>
							            <tr>
							               <th>材料</th>
							               <td>ABS无毒材料</td>
							            </tr>
							            <tr>
							               <th>人机交互</th>
							               <td>13.3寸TFT显示屏；电容式全触摸面板； 7+1MIC拾音阵列。</td>
							            </tr>
							
							            <tr>
							               <th>运动能力</th>
							               <td>头部、手臂共5个运动自由度，用户可编程各种动作。</td>
							            </tr>
							            <tr>
							               <th>人脸识别</th>
							               <td>高精度人脸识别</td>
							            </tr>
							            <tr>
							               <th>身份证识别</th>
							               <td>身份证阅读器</td>
							            </tr>
							            <tr>
							               <th>语音识别</th>
							               <td>8MIC阵列：最远拾音距离5米，2米内识音准确率95%以上；声源定位：360度范围任意
							                  方位定位无死角；先进的消回音算法实现全双工语音交互；支持自定义唤醒词；支持用
							                  户增加自定义关键词。
							               </td>
							            </tr>
							         </tbody></table>
						</div>
						<div>
							<img src="${this.imgListJQR[6]}" width='100%'/>
						</div>
					`
				}, 
				{
				title:"应用场景",
					name:"yycj",
					content:`
					
					<div class='zhhd-product-real-container-list-right-content-flex'>
					<div style='flex:4;margin:10px;'>
						<img style='box-shadow:1px 1px 4px 1px gray' width='100%' src="${this.imgListJQR[4]}"/> 
					</div> 
					<div  style='flex:4;margin:10px;'>
						<img style='box-shadow:1px 1px 4px 1px gray' width='100%' src="${this.imgListJQR[3]}"/> 
					</div>  
				</div> 
					`
				},
			]
		},
	]

	get getContentList(){
		return this.contentList;
	}
}

