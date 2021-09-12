import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


const Index = () =>
    import ('../views/Index.vue');
const IndexMessage = () =>
    import ('../views/IndexMessage.vue');
const IndexNews = () =>
    import ('../views/IndexNews.vue');

// 通过use使用插件
Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/user/:userId',
        name: 'User',
        // 以下写法为路由懒加载(推荐使用)
        component: () =>
            import ('../views/User.vue')
    },
    {
        path: '/index',
        name: 'Index',
        component: Index,
        children: [{
            // 路由嵌套中，子路由路径不能加/
            // 让默认打开就是message使用redirect重定向
            path: 'message',
            component: IndexMessage
        }, {
            path: 'news',
            component: IndexNews
        }]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    // linkActiveClass: 'active'
})

export default router