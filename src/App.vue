<!--
 * @Author: QiuShui
 * @Date: 2022-03-28 16:05:55
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-30 17:40:51
 * @FilePath: /SandBoxTest-Vue2.0/src/App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div id="app">
    <VuexTest />
  </div>
</template>

<script>
// import GrandPa from './1-组件通信方式/attrAndListener/GrandPa.vue'
import VuexTest from './2-vuex/VuexTest.vue'

export default {
  name: "App",
  components: {
    VuexTest
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
