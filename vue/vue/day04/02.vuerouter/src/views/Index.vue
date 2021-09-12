<template>
   <div>
     <el-input v-model="input" placeholder="请输入内容"></el-input>
     <router-link to="/index/message">message</router-link> |
     <router-link to="/index/news">news</router-link>
     <router-view></router-view>
   </div>
</template>

<script>
export default {
  name:'Index',
    data() {
    return {
      input: ''
    }
  },

   components: {},

   computed: {},

   methods: {}
}
</script>
<style lang='css' scoped>

</style>