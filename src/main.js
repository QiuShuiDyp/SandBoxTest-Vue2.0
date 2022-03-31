/*
 * @Author: QiuShui
 * @Date: 2022-03-28 16:05:55
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-31 10:59:32
 * @FilePath: /SandBoxTest-Vue2.0/src/main.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
 */
import Vue from "vue";
import App from "./App.vue";
import store from './store/store.js'
import router from './router/router.js'
Vue.config.productionTip = false;

new Vue({
  // 在Vue实例中注册store，作用是将store的实例注入到所有的子组件中
  store,
  router,
  render: h => h(App)
}).$mount("#app");
