<!--
 * @Author: your name
 * @Date: 2020-04-15 11:15:39
 * @LastEditTime: 2020-07-16 18:27:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\src\App.vue
 -->
<template>
    <div id="app">
        <!-- <router-view></router-view> -->
          <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>

  

    <!-- 
    <keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>-->
</template>

 <script>
import { http } from '@/utils/request';
export default {
    name: 'test-keep-alive',
    data() {
        return {
            includedComponents: 'test-keep-alive'
        };
    },
    name: 'App',
    created() {
        //在页面加载时读取localStorage里的状态信息
        localStorage.getItem('userMsg') &&
            this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(localStorage.getItem('userMsg'))));

        //在页面刷新时将vuex里的信息保存到localStorage里
        window.addEventListener('beforeunload', () => {
            localStorage.setItem('userMsg', JSON.stringify(this.$store.state));
        });

        //   在页面加载时读取sessionStorage里的状态信息

        if (sessionStorage.getItem('state')) {
            this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('state'))));
        }

        //   页面刷新时将state数据存储到sessionStorage中

        window.addEventListener('beforeunload', () => {
            sessionStorage.setItem('state', JSON.stringify(this.$store.state));
        });
    }
};
</script>



<style lang="scss">
@import './assets/font/font.css';
#app {
    font-family: 'SimSun';
    font-weight: 400;
}

@import './assets/css/main.css';
@import './assets/css/color-dark.css'; /*深色主题*/
/*@import "./assets/css/theme-green/color-green.css";   浅绿色主题*/
</style>


