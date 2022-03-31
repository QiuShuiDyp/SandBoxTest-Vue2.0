<!--
 * @Author: QiuShui
 * @Date: 2022-03-31 14:09:03
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-31 14:10:18
 * @FilePath: /SandBoxTest-Vue2.0/src/3-vue-router/UserInfo.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
-->
<template>
  <div>用户为{{name}}</div>
</template>

<script>
export default {
  name:'UserInfo',
  computed:{
    name(){
      return this.$route.params.username
    }
  }
}
</script>

<style>

</style>