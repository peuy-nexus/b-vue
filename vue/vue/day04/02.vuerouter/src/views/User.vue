<template>
   <div>
       <h2>I am User</h2>
       <p>{{userId}}</p>
   </div>
</template>

<script>
export default {
    name:'User',
   data () {
      return {

      };
   },

   components: {},

   computed: {
       userId(){
           return this.$route.params.userId
       }
   },

   methods: {}
}
</script>
<style lang='css' scoped>

</style>