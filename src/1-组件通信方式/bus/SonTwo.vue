<!--
 * @Author: QiuShui
 * @Date: 2022-03-28 16:16:10
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-28 17:05:56
 * @FilePath: /SandBoxTest-Vue2.0/src/01-组件通信/SonTwo.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div class="son-two">
    子组件2
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "SonTwo",
  props: ["msg"],
};
</script>

<style>
.son-two {
  background: lightgreen;
  height: 100%;
  width: 600px;
}
</style>