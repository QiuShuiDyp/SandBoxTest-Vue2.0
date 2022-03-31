<!--
 * @Author: QiuShui
 * @Date: 2022-03-31 11:05:02
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-31 14:28:54
 * @FilePath: /SandBoxTest-Vue2.0/src/3-vue-router/About.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div>
    About
    <p><button @click="goHome">返回首页</button></p>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    // 编程式导航，path+query，query的参数会显示在url上
    goHome() {
      this.$router.push({
        path: "home",
        query: {
          source: "fromAbout",
        },
      });
    },
  },
};
</script>

<style>
</style>