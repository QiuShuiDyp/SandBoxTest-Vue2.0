<!--
 * @Author: QiuShui
 * @Date: 2022-03-31 11:04:57
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-31 14:42:56
 * @FilePath: /SandBoxTest-Vue2.0/src/3-vue-router/Home.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div>
    Home
    <p>{{ source }}</p>
    <!-- 路由嵌套 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    source() {
      // return this.$route.query.source;
      return this.$route.params.source;
    },
  },
  watch: {
    // 监听路由参数，做出变化
    "$route.params.source": {
      handler: function (to, from) {
        console.log(to.username, from.username);
      },
    },
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style>
</style>