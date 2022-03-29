<!--
 * @Author: QiuShui
 * @Date: 2022-03-28 16:16:10
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-29 20:40:05
 * @FilePath: /SandBoxTest-Vue2.0/src/1-组件通信方式/provideAndInject/GrandSon.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div class="son-two">孙组件 接受provide内容：{{ msg }}</div>
</template>

<script>
export default {
  name: "GrandSon",
  // 获取选项
  inject: ["msg"],
};
</script>

<style>
.son-two {
  background: lightgreen;
  height: 100%;
  width: 600px;
}
</style>