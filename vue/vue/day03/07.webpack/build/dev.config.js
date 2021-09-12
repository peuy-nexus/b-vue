// 服务器有关

const baseConfig = require("./base.config"); // 导入基础配置
const webpackMerge = require('webpack-merge'); // // 合并配置文件

module.exports = webpackMerge(baseConfig, {
    devServer: {
        // 启动本地服务器
        contentBase: './dist',
        inline: true
    }
})