// prod开发阶段

// js压缩
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
// 合并配置文件
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config'); // 导入基础配置

module.exports = webpackMerge(baseConfig, {
    plugins: [
        new UglifyjsWebpackPlugin() // js压缩
    ]
})