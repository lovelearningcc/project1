


const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'

module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
//   baseUrl: BASE_URL,

  publicPath: BASE_URL,
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
      .set('_conf', resolve('config'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // devServer: {
  //   proxy: 'localhost:3000'
  // }
}



// /*
//  * @Author: your name
//  * @Date: 2020-04-15 11:15:39
//  * @LastEditTime: 2020-05-22 09:29:38
//  * @LastEditors: Please set LastEditors
//  * @Description: In User Settings Edit
//  * @FilePath: \project\vue.config.js
//  */
// module.exports = {

//     //gcc_add
//     publicPath: "./",  //基本路径  这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径。
//     // publicPath: process.env.NODE_ENV === 'production'    //把开发服务器架设在根路径，可以使用一个条件式的值
//     outputDir: "dist", //构建时的输出目录
//     assetsDir: "static",  //放置生成的静态资源 (js、css、img、fonts) 的目录
//     indexPath: "index.html",  //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
//     //gcc_end
    
//     devServer: {   //所有 webpack-dev-server 的选项都支持
//         // port:8080,
//         open:true,
//         proxy: {   //    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理

//             '/': {
//                 target: 'http://39.105.78.205:1000/',
//                 ws: true,
//                 changeOrigin: true,
//                 pathWrite:{
//                     '^/':''
//                 }
//             },
            
//             publicPath:'/',
            
//             '/category': {
//                 target: 'http://39.105.78.205:1000/',
//                 ws: true,
//                 changeOrigin: true,
//                 pathWrite:{
//                     '^/category':''
//                 }
//             },
//             '/sys': {
//                 target: 'http://39.105.78.205:1000/',
//                 ws: true,
//                 changeOrigin: true,
//                 pathWrite:{
//                     '^/sys':''
//                 }
//             },
//             '/course': {
//                 target: 'http://39.105.78.205:1000/',
//                 ws: true,
//                 changeOrigin: true,
//                 pathWrite:{
//                     '^/course':''
//                 }
//             },
//             '/filesystem': {
//                 target: 'http://39.105.78.205:1000/',
//                 ws: true,
//                 changeOrigin: true,
//                 pathWrite: {
//                     '^/filesystem':''
//                 }
//             }

//         }
//     }
// }