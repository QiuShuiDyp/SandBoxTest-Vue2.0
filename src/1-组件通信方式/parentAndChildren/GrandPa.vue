<!--
 * @Author: QiuShui
 * @Date: 2022-03-28 16:13:44
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-29 21:02:25
 * @FilePath: /SandBoxTest-Vue2.0/src/1-组件通信方式/parentAndChildren/GrandPa.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div class="grandpa">
    父组件
    <p>
      <button @click="getMessage">获取子组件数据</button>
    </p>
    <p>{{ msg }}</p>
    <son-one />
    <son-two />
  </div>
</template>

<script>
import SonOne from "./SonOne.vue";
import SonTwo from "./SonTwo.vue";
export default {
  name: "GrandPa",
  components: {
    SonTwo,
    SonOne,
  },
  data() {
    return {
      msg: "这是父组件的msg",
    };
  },
  methods: {
    getMessage() {
      this.msg = this.$children[0].childMessage;
      // return this.$children[0]
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