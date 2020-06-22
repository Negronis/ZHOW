
import { routeInterface } from '@/interface/interface_router';
import VueRouter, { RouteConfig } from 'vue-router'; 
export default {
   throttle: function (func: Function) {
      let timer: number | null = null;
      return function () {
         if (timer) clearTimeout(timer);
         timer = setTimeout(() => {
            func();
         }, 500);
      }
   },
}