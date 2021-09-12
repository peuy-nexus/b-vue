import { a } from "./js/a";
console.log(a);


// 3.依赖css文件
require('./css/normal.css');
// import './css/normal.css'

// less
require('./css/index.less')

// 05 使用vue进行开发
// const { Vue } = require('vue');
import Vue from 'vue';

// let app = {
//     template: `
//     <div>{{message}}</div>
// `,
//     data() {
//         return {
//             message: 'hello world'
//         }
//     },
// }

// 将组件分离到App.vue
import app from './vue/App.vue'

new Vue({
    el: '#app',
    template: '<app></app>',
    components: {
        app
    }

    // 使用runtime-only 默认配置  
    // 在webpack.config.js中将runtime-compiler删掉

    //   render: function(createElement) {
    //     return createElement(app);
    // }
})