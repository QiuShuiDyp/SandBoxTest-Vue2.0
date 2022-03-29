<!--
 * @Author: QiuShui
 * @Date: 2022-03-28 16:13:56
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-29 20:40:31
 * @FilePath: /SandBoxTest-Vue2.0/src/1-组件通信方式/provideAndInject/SonOne.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div class="son-one">
    子组件
    <div>
      接受provide内容：{{message}}
      <GrandSon />
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
  components:{
    GrandSon
  },
  // inject可以是一个字符串数组或者一个对象
  inject:{
    message:'msg'
  }
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