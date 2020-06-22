import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Main from '../views/main.vue';
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: 'main',
    component: Main,
    children: [
      {
        path: "",
        name: "index",
        component: () => import('@/views/Index/index.vue')
      },
      {
        path: "/about",
        name: "about",
        component: () => import('@/views/About/index.vue')
      },
      {
        path: "/product",
        name: "product",
        component: () => import('@/views/Product/index.vue')
      },
    ]
  }
];
const originalPush: Function = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location: object): any {
  return originalPush.call(this, location).catch((err: string | object) => err)
}
const router = new VueRouter({
  routes,
});

export default router;
