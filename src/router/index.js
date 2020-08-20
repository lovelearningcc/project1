/*
 * @Author: your name
 * @Date: 2020-04-15 11:15:39
 * @LastEditTime: 2020-08-12 11:59:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\src\router\index.js
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    // hash:true,
    mode: 'history', //修改router模式为history（默认为hash）
    // mode: 'hash', //修改router模式为history（默认为hash）
    // base: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },

        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: 'layout' },

            children: [
                {
                    path: '/Tabs',
                    component: () => import(/* webpackChunkName: "Tabs" */ '@/components/page/Tabs.vue'),
                    meta: { title: '系统首页', keepAlive: true }
                }
            ]
        },

        {
            path: '/jt',
            component: () => import(/* webpackChunkName: "jt" */ '@/views/examples/components/jt.vue'),
            meta: { title: '急停', keepAlive: true }
        },

        {
            path: '/zcd',
            component: () => import(/* webpackChunkName: "zcd" */ '@/views/examples/components/zcd.vue'),
            meta: { title: '主菜单', keepAlive: true }
        },

        {
            path: '/zs',
            component: () => import(/* webpackChunkName: "zs" */ '@/views/examples/components/zs.vue'),
            meta: { title: '制水界面', keepAlive: true }
        },

        {
            path: '/xd',
            component: () => import(/* webpackChunkName: "xd" */ '@/views/examples/components/xd.vue'),
            meta: { title: '消毒界面', keepAlive: true }
        },

        {
            path: '/ts',
            component: () => import(/* webpackChunkName: "ts" */ '@/views/examples/components/ts.vue'),
            meta: { title: '调试界面', keepAlive: true }
        },

        {
            path: '/persion',
            component: () => import(/* webpackChunkName: "persion" */ '@/views/user/persion.vue'),
            meta: { title: '个人中心', keepAlive: true }
        },

        {
            path: '/xdcs',
            component: () => import(/* webpackChunkName: "xdcs" */ '@/views/examples/components/xdcs.vue'),
            meta: { title: '消毒参数设置', keepAlive: true }
        },

        {
            path: '/ywsz',
            component: () => import(/* webpackChunkName: "ywsz" */ '@/views/examples/components/ywsz.vue'),
            meta: { title: '液位设置', keepAlive: true }
        },

        {
            path: '/dszs',
            component: () => import(/* webpackChunkName: "dszs" */ '@/views/examples/components/dszs.vue'),
            meta: { title: '定时制水', keepAlive: true }
        },

        {
            path: '/dsgj',
            component: () => import(/* webpackChunkName: "dsgj" */ '@/views/examples/components/dsgj.vue'),
            meta: { title: '定时关机', keepAlive: true }
        },

        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },

        {
            path: '/DragDialog',
            component: () => import(/* webpackChunkName: "DragDialog" */ '../components/page/DragDialog.vue'),
            meta: { title: '实时数据显示', keepAlive: true }
        },

        {
            path: '*',
            redirect: '/404'
        }
    ]
});
