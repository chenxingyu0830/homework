<template>
  <div>
    <span>我是子组件</span> ---- {{msg}} <br>
    <button @click="sendMsg">向父组件传递数据</button>  <br><br>
    我是子组件拿到的全局状态Vuex: {{getNum}} ---
    <button @click="sonAdd">子组件--改变状态按钮</button>
  </div>
</template>
<script>
export default {
   name:'son',
   data:function(){
     return{
       toFatherMsg:'我是雷锋'
     }
   },
   props:{
     msg:{
       typr: String,
       default: ''
     }
   },
   methods:{
     sendMsg:function(){
       this.$emit('handle',this.toFatherMsg)
     },
     sonAdd(){
       this.$store.commit('increase')
     }
   },
   computed:{
     getNum: function(){
       return this.$store.state.num;
     }
   }
}
</script>
<style scoped>

</style>
