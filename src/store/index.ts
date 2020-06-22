import Vue from 'vue';
import Vuex from 'vuex';
import GlobalModule from  './module/global';
import Headers from './module/headers';
import Footers from './module/footers';
import Abouts from './module/about';
import Product from './module/product';
import Team from './module/team';
import Cooperate from './module/cooperate';
import Puilosophy from './module/puilosophy';

Vue.use(Vuex);

export default new Vuex.Store({
   modules:{
      GlobalModule,
      Headers,
      Footers,
      Abouts,
      Product,
	  Team,
	  Cooperate,
	  Puilosophy
   }
});