<!--
 * @Author: QiuShui
 * @Date: 2022-03-28 16:13:56
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-29 21:02:36
 * @FilePath: /SandBoxTest-Vue2.0/src/1-组件通信方式/parentAndChildren/SonOne.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div class="son-one">
    子组件1
    <div>
      <button @click="getMsgFromParent">获取父组件数据</button>
    </div>
    <p>
      {{ msg }}
    </p>
  </div>
</template>

<script>
export default {
  name: "SonOne",
  data() {
    return {
      childMessage: "这是子组件传递过来的数据",
      msg: "",
    };
  },
  props: {},
  methods: {
    getMsgFromParent() {
      this.msg = this.$parent.msg;
    },
  },
};
</script>

<style>
.son-one {
  background: lightyellow;
  height: 100%;
  width: 600px;
}
button {
  display: block;
  margin: 0 auto;
  margin-top: 5px;
}
</style>