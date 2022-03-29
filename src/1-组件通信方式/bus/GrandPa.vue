<!--
 * @Author: QiuShui
 * @Date: 2022-03-28 16:13:44
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-28 17:29:43
 * @FilePath: /SandBoxTest-Vue2.0/src/01-组件通信/Grandpa.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div class="grandpa">
    父组件
    <p>{{valFormSon}}</p>
    <!-- <p>{{$children[0].sonMsg}}</p> -->
    <son-one msg="来自爷爷的关爱" @changeVal="changeValFromSon" />
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