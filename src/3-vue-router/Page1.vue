<!--
 * @Author: QiuShui
 * @Date: 2022-03-31 11:50:47
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-31 14:45:27
 * @FilePath: /SandBoxTest-Vue2.0/src/3-vue-router/Page1.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div>
    Page1
    <!-- <p><button @click="goBack">返回</button></p> -->
    <p><button @click="goHome">返回首页</button></p>
  </div>
</template>

<script>
export default {
  name: "Page1",
  methods: {
    goHome() {
      // 编程式导航,params传参方式，注意采用命名路由的方式进行跳转
      this.$router.push({
        name: "home",
        params: { source: "123" },
      });
    },
  },
};
</script>

<style>
</style>