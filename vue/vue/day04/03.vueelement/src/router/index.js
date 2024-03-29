import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Login',
    component: Login
}, {
    path: '/main',
    name: 'Main',
    component: Main
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router