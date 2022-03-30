<!--
 * @Author: QiuShui
 * @Date: 2022-03-28 16:13:44
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-30 16:18:02
 * @FilePath: /SandBoxTest-Vue2.0/src/1-组件通信方式/attrAndListener/GrandPa.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div class="grandpa">
    父组件
    <button @click="deal">触发watch吗？</button>
    <son-one :name="name" :age="age" :work="work" @printInfo="printInfo" />
  </div>
</template>
<script>
import SonOne from "./SonOne.vue";
export default {
  name: "GrandPa",
  components: {
    SonOne,
  },
  data() {
    return {
      name: "张三",
      age: 12,
      work: "程序猿",
    };
  },
  methods: {
    printInfo() {
      alert(`我的名字叫${this.name},年龄${this.age}岁，我的工作是${this.work}`);
    },
  },
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