<template>
  <div>
    <span>我是父组件的内容----{{msg}}</span>  <br>
    <hr>
    <son :msg="toSonMsg" @handle="getMsgFromSon"></son>
    我是父组件中拿到的全局状态Vuex: {{getNum}} --- 
    <button @click="parentAdd">父组件--改变状态按钮</button>
    <button @click="parentReduceAction">父组件--Action改变状态按钮</button>

  </div>
</template>
<script>
import son from './son'
export default {
   name:'parent',
   components:{
     son
   },
   data:function(){
     return {
       toSonMsg:'我是你的父亲',
       msg: '还未传递'
     }
   },
   methods:{
     getMsgFromSon:function(value){
       this.msg = value
     },
     parentAdd(){
       this.$store.commit('increase')
     },
     parentReduceAction(){
       setTimeout(()=>{
        this.$store.dispatch('decreaseAction')
       },1000)
     }
   },
   computed:{
     getNum:function(){
      //  return this.$store.state.num
      return this.$store.getters.getNum
     }
   }
}
</script>
<style scoped>

</style>
