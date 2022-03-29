<!--
 * @Author: QiuShui
 * @Date: 2022-03-28 16:16:10
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-29 23:06:56
 * @FilePath: /SandBoxTest-Vue2.0/src/1-组件通信方式/attrAndListener/GrandSon.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <Child v-bind="$attrs" v-on="$listeners"></Child>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "GrandSon",
  components: {
    Child,
  },
  // inheritAttrs: false,
  created() {
    console.log(this.$attrs, "attrs");
  },
};
</script>

<style>
.son-two {
  background: lightgreen;
  height: 100%;
  width: 600px;
}
</style>