<!--
 * @Author: QiuShui
 * @Date: 2022-03-28 16:13:44
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-28 17:49:03
 * @FilePath: /SandBoxTest-Vue2.0/src/1-组件通信方式/emitAndProps/GrandPa.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div class="grandpa">
    父组件
    <p>{{valFormSon}}</p>
    <son-one msg="来自爷爷的关爱" />
    <son-two msg="来自爷爷的关爱" />
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
      valFormSon: "",
    };
  },
  methods: {
    changeValFromSon(val) {
      this.valFormSon = val;
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