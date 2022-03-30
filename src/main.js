/*
 * @Author: QiuShui
 * @Date: 2022-03-28 16:05:55
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-30 17:55:52
 * @FilePath: /SandBoxTest-Vue2.0/src/main.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
 */
import Vue from "vue";
import App from "./App.vue";
import store from './store/store.js'

Vue.config.productionTip = false;

new Vue({
  // 在Vue实例中注册store，作用是将store的实例注入到所有的子组件中
  store,
  render: h => h(App)
}).$mount("#app");
