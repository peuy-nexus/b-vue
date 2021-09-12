const path = require('path');
const webpack = require('webpack');
// Vue Loader v15现在需要一个附带的webpack插件才能正常工作:
const { VueLoaderPlugin } = require('vue-loader');
// 打包index.html文件到dist文件夹  
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js',
        // publicPath: 'dist/'
    },
    module: {
        rules: [{
                test: /\.css$/,
                // css-loader只负责将css文件进行加载
                // style-loader负责将样式添加到DOM中
                // 使用多个loader时, 是从右向左
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader",
                    options: {
                        strictMath: true,
                        noIeCompat: true
                    }
                }]
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // 加载图片小于8kb的时候，图片会编译成base64字符串
                        limit: 8192, // 可修改
                        name: 'img/[name].[hash:8].[ext]' // 图片打包命名规范
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015'] // npm安装的babel-preset版本是es2015
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    // runtime-compiler 配置
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(), // Vue Loader v15插件
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ],

}