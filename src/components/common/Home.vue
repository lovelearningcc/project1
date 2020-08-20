<!--
 * @Author: your name
 * @Date: 2020-04-15 11:15:39
 * @LastEditTime: 2020-08-12 11:49:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\src\components\common\Home.vue
-->
<template>
    <div class="wrapper">
        <v-head></v-head>
        <!-- <v-sidebar></v-sidebar> -->
        <!-- <div class="content-box" :class="{'content-collapse':collapse}"> -->
            <!-- <v-tags></v-tags> -->
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>
    </div>
</template>

<script>
import vHead from './Header.vue';
// import vSidebar from './Sidebar.vue';
// import vTags from './Tags.vue';
import bus from './bus';
export default {
    data() {
        return {
            tagsList: [],
            collapse: false
        };
    },
    components: {
        vHead,
        // vSidebar,
        // vTags
    },
    created() {
        bus.$on('collapse-content', msg => {
            this.collapse = msg;
        });

        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        // bus.$on('tags', msg => {
        //     let arr = [];
        //     for (let i = 0, len = msg.length; i < len; i++) {
        //         msg[i].name && arr.push(msg[i].name);
        //     }
        //     this.tagsList = arr;
        // });
    }
};
</script>
<style>
    .footer {
        width:100%;
        height: 30px;
        background: #303133;
        position: absolute;
        bottom:0;
        text-align:center;
        line-height: 30px;
        color: #ddd;
        font-size: 12px;
    }
</style>
