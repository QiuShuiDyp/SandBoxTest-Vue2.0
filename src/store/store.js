/*
 * @Author: QiuShui
 * @Date: 2022-03-30 17:29:16
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-03-30 22:12:43
 * @FilePath: /SandBoxTest-Vue2.0/src/store/store.js
 * @Description:
 *
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved.
 */
import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)

const store = new Vuex.Store({
  // store保存数据
  state: {
    count: 0,
  },
  // mutations统一收拢修改数据的操作,注意mutation必须是同步函数
  mutations: {
    increment(state, payload) {
      if (payload) {
        state.count += payload
      } else {
        state.count++
      }
    },
  },
  // actions内部适合用于处理异步功能
  actions: {
    asyncIncrement({ commit }) {
      setTimeout(() => {
        commit("increment", 4)
      }, 1000)
    },
  },
})

export default store
