/*
 * @Author: your name
 * @Date: 2020-05-22 08:51:24
 * @LastEditTime: 2020-08-06 15:06:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\src\config\index.js
 */ 
export default {
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 1,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: false,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: 'http://127.0.0.1:1000',
    pro: 'http://39.105.78.205:8088'
  },
  staticUrl: {
    dev: 'http://127.0.0.1:1000/',
    pro: 'http://39.105.78.205:8088/'
  },

  build:{

    
    assetsPublicPath: "./",
    
  }
}
