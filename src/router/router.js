/*
 * @Author: QiuShui
 * @Date: 2022-03-31 10:46:49
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-31 14:39:51
 * @FilePath: /SandBoxTest-Vue2.0/src/router/router.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import VueRouter from "vue-router"
import Vue from "vue"
import Home from "../3-vue-router/Home.vue"
import About from "../3-vue-router/About.vue"
import Page1 from "../3-vue-router/Page1.vue"
import UserInfo from "../3-vue-router/UserInfo.vue"
// VueRouter配置文件
Vue.use(VueRouter)

const routes = [
  {
    path: "/home/:source",
    component: Home,
    name:'home',
    children: [
      // 路由嵌套，当路由为/home/xxx/userInfo
      {
        path: "userInfo",
        component: UserInfo,
      },
    ],
  }, //动态路由参数，会将username传递给Home组件，参数值会被设置到$route.params中
  { path: "/about", component: About },
  { path: "/page1", component: Page1 },
  { path: "*", component: Home }, //通配路由兜底,注意需要放在路由配置的最后
]

const router = new VueRouter({
  routes,
})

export default router
