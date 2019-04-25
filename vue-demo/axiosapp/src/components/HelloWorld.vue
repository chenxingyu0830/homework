<template>
  <div class="hello">
    <h3>我是axiosApp,用来发送请求,拦截响应</h3>
    <button @click="getData">GET方式发送请求</button>
    <button @click="postData">POST方式发送请求</button>
    <ul>
      <li v-for="(item,index) in items" :key="index">
        {{item.title}} --- {{index}}
      </li>
    </ul>
  </div>
</template>

<script>
Vue.prototype.$http = axios
import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'

export default {
  name: 'HelloWorld',
  data () {
    return {
      items: []
    }
  },
  methods:{
    getData(){
      // var self = this
      //或者可以直接在URL上加参数：https://cnodejs.org/api/v1/topics?page=1&limit=15
      this.$http.get('https://cnodejs.org/api/v1/topics',{
        params: {
          page:1,
          limit:10
        }
      })
        // .then(function (res){
        //   //此处的this指向的不是当前的vue实例
        //   self.items = res.data.data
        //   console.log(res.data.data)
        // })
        .then((res)=>{
          this.items = res.data.data
          console.log(res.data.data)
        })
        .catch(function (res){
          console.log()
        })
    },
    postData(){
      this.$http.post('https://cnodejs.org/api/v1/topic_collect/collect',qs.stringify({
        page:1,
        limit:20
      }))
        .then((res)=>{
          this.items = res.data.data
          console.log(res.data.data)
        })
        .catch(function (res){
          console.log()
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
