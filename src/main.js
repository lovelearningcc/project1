/*
 * @Author: your name
 * @Date: 2020-04-15 11:15:39
 * @LastEditTime: 2020-08-06 15:08:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\src\main.js
 */
import Vue from 'vue';
import Vuex from 'vuex'
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import { messages } from './components/common/i18n';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import './assets/css/theme-green/index.css'; // 浅绿色主题
import './assets/css/icon.css';
import './assets/css/common.css'
import './components/common/directives';
import 'babel-polyfill';
import $ from 'jquery'
import animate from 'animate.css'
Vue.use(animate)


Vue.use(Vuex)

function storeLocalStore (state) {
  window.localStorage.setItem("userMsg",JSON.stringify(state));
}
const store = new Vuex.Store({
    modules: {
    tags:[],
    curTagsIndex:"-1",
    },
  mutations: {
    SET_CURTAGS: (state, index) => {
      state.curTagsIndex = index
    },
  }
})

export default store



//gcc_add

// main.js
import 'lib-flexible'


import 'vue-element-extends/lib/index.css'
import { Editable, EditableColumn } from 'vue-element-extends'

import axios from "axios"
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
//将axios挂载到原型上
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://39.105.78.205:1000/'  //关键代码        //http://39.105.78.205/
Vue.config.productionTip = false
Vue.config.devtools = true



import moment from 'moment'
Vue.prototype.$moment = moment;//赋值使用

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(ElementUI, {
    size: 'small'
});
const i18n = new VueI18n({
    locale: 'zh',
    messages
});

// require('./mock/index.js');


function formatDate(date, fmt) {
    date = new Date(date);
    if (typeof(fmt) === "undefined") {
        fmt = "yyyy-MM-dd HH:mm:ss";
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : ('00' + str).substr(str.length));
        }
    }
    return fmt
  };
   
  //定义一个时间过滤器
  Vue.filter("FormatDate", function(date, fmt) {
    return formatDate(date, fmt);
  });


//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    } else {
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        } else {
            next();
        }
    }
});

new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');
