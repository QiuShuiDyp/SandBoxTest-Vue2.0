<!--
 * @Author: QiuShui
 * @Date: 2022-03-28 16:13:56
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-28 17:45:45
 * @FilePath: /SandBoxTest-Vue2.0/src/1-组件通信-01/SonOne.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div class="son-one">
    子组件1
    <div>
      {{ msg }}
      <p>{{ sonMsg }}</p>
      <button @click="postMsgByEmit">emit方式向父组件传递属性</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SonOne",
  data() {
    return {
      sonMsg: "",
    };
  },
  props: {
    msg: String,
  },
  methods: {
    postMsgByEmit() {
      this.$emit("changeVal", "son1 say hello~");
    }
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