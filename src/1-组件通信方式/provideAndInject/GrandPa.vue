<!--
 * @Author: QiuShui
 * @Date: 2022-03-28 16:13:44
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-29 20:39:28
 * @FilePath: /SandBoxTest-Vue2.0/src/1-组件通信方式/provideAndInject/GrandPa.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div class="grandpa">
    父组件
    <son-one />
  </div>
</template>
<script>
import SonOne from "./SonOne.vue";
export default {
  name: "GrandPa",
  components: {
    SonOne,
  },
  // 祖先组件注入依赖
  provide:{
    msg:'张三'
  },
  data() {
    return {
    };
  }
};
</script>

<style>
.grandpa {
  background: pink;
  display: flex;
  height: 500px;
  width: 100%;
}
</style>