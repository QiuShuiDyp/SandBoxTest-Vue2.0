<!--
 * @Author: QiuShui
 * @Date: 2022-03-28 16:13:56
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-29 23:10:46
 * @FilePath: /SandBoxTest-Vue2.0/src/1-组件通信方式/attrAndListener/SonOne.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div class="son-one">
    子组件
    <div>
      <!-- $attrs的作用是传递给内部组件所有不作为prop被识别(获取)的attribute,$listeners是用来传递祖先组件中使用v-on事件监听器，子孙组件可以通过listeners传递的方法给祖先组件传递消息 -->
      <GrandSon v-bind="$attrs" v-on="$listeners"/>
    </div>
  </div>
</template>

<script>
import GrandSon from "./GrandSon.vue";
export default {
  name: "SonOne",
  data() {
    return {
      sonMsg: "",
    };
  },
  // inheritAttrs: false,
  components: {
    GrandSon,
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