<!--
 * @Author: QiuShui
 * @Date: 2022-03-30 17:35:20
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-30 22:13:09
 * @FilePath: /SandBoxTest-Vue2.0/src/2-vuex/VuexTest.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div>
    <button @click="updateStore">修改vuex的store</button>
    <button @click="updateStoreAddThree">修改vuex的store加3</button>
    <button @click="updateStoreAsync">异步修改vuex</button>
    <div>
      {{ `Vuex中保存的结果是${count}` }}
    </div>
  </div>
</template>

<script>
export default {
  name: "VuexTest",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    updateStore() {
      // 通过commit修改数据
      this.$store.commit("increment");
    },
    updateStoreAddThree() {
      this.$store.commit("increment", 3);
    },
    updateStoreAsync() {
      // dispatch可以调用action中的方法
      this.$store.dispatch("asyncIncrement")
    },
  },
  // 使用computed相对于使用方法而言更优，一旦count发生变化，可以及时更新相关的dom
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style>
</style>