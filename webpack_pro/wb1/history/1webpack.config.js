// webpack是node写出来的，所以需要用他的语法
const path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
// console.log(path.resolve(__dirname + '/dist'));
module.exports = {
    devServer: { //服务器的配置
        host: 'localhost', // 设置服务器
        port: 8081, // 设置端口号，我之前设置了3000结果不生效（不知道什么原因）
        progress: true, // 显示进度
        historyApiFallback: true, // spa应用使用的是HTML5 History Api
        contentBase: path.resolve(__dirname, 'dist'), // 找当前目录下dist文件夹
        compress: true, //开启gzip压缩
        hot: true, // 热替换
        open: true  // 网站自动打开
    },
    mode: 'production',
    entry: './src/index.js', //入口
    output: {
        filename: 'bundle.js', // 打包后的文件名
        path: path.resolve(__dirname, 'dist'), // 指在当前目录下产生一个dist目录
    },
    plugins: [ //数组，放所有的webpack插件
        new HtmlWebpackPlugin({
            template: './src/index.html',  // 模板入口文件地址
            filename: 'index.html',  // 模板出口文件地址
            minify: {
                removeAttributeQuotes: true,  //去除引号
                collapseWhitespace: true,  //清除空格和换行

            },
            hash: true,  // 增加引入文件的hash戳

        })
    ]
}