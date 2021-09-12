<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/" tag="button" replace>Home</router-link> |
      <router-link to="/about" replace>About</router-link> -->
      <div @click="homeClick">home</div> |
      <div @click="aboutClick">about</div> |
      <router-link :to="/user/+userId">user</router-link> |
      <router-link to="/index">index</router-link>
    </div>
    <!-- 展示router-link跳转的页面 -->
    <router-view/>
    
  </div>
</template>

<script>
export default {
  name:'App',
  data(){
    return{
      userId:'zhangs'
    }
    
  },
  methods:{
    homeClick(){
       this.$router.push('/home')
    },
    aboutClick(){
      this.$router.push('/about')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
