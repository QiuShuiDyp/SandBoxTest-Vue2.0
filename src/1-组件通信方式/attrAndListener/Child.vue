<!--
 * @Author: QiuShui
 * @Date: 2022-03-29 22:33:37
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-29 23:09:01
 * @FilePath: /SandBoxTest-Vue2.0/src/1-组件通信方式/attrAndListener/Child.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div class="son-one">
    组件child
    <div>我的名字是{{ name }}，今年{{ age }}岁</div>
    <button @click="printInfo">出发祖先传递的方法</button>
  </div>
</template>

<script>
export default {
  name: "SonOne",
  data() {
    return {};
  },
  created() {
    console.log(this.$attrs, "attrs");
  },
  methods:{
    printInfo(){
        this.$listeners.printInfo()
    }
  },
  props: ["name", "age"],
};
</script>