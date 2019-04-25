// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './state/index'
// import Vuex from 'vuex'
// Vue.use(Vuex)

Vue.config.productionTip = false

//创建状态仓库,注意store,state不能改
// var store = new Vuex.Store({
//   state:{
//     num: 88
//   },
//   mutations:{
//     increase:function(state){
//       state.num++;
//     },
//     decrease(state){
//       state.num = state.num-20;
//     }
//   },
//   actions:{
//     //context为上下文对象
//     decreaseAction(context){
//       //actions中只能对mutation进行操作
//       context.commit('decrease')
//     }
//   },
//   getters:{
//     getNum(state){
//       return state.num > 0 ? state.num : 0
//     }
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
