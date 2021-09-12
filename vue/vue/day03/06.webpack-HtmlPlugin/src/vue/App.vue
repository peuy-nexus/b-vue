<template>
    <div>
        <div>{{message}}</div>
        <Cpn></Cpn>
    </div>
</template>
<script>

import Cpn from './Cpn.vue'

export default {
    name:'App',
    data() {
        return {
             message: 'hello world'
        }
    },
    components:{
        Cpn
    }
}
</script>
<style lang="">
    
</style>