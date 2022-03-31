<!--
 * @Author: QiuShui
 * @Date: 2022-03-31 10:41:08
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-31 14:39:57
 * @FilePath: /SandBoxTest-Vue2.0/src/3-vue-router/VueRouterDemo.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div>
    <h1>Vue-Router</h1>
    <div class="nav">
      <!-- 使用router-link进行导航，to属性指定连接，申明式导航 -->
      <router-link to="/home">Go to Home</router-link>
      <br />
      <router-link to="/about">Go to About</router-link>
      <br />
      <router-link to="/page1">Go to Page1</router-link>
    </div>
    <!-- 路由匹配的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "VueRouterDemo",
};
</script>

<style>
.nav{
  display: flex;
  justify-content: center;
}
.nav a{
  display: inline-block;
  margin-right: 12px;
}
</style>