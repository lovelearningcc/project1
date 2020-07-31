<!--
 * @Author: your name
 * @Date: 2020-07-15 10:23:52
 * @LastEditTime: 2020-07-15 11:22:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project1\src\views\examples\components\jt.vue
--> 
<template>
    <div>
        <div class="jtys"></div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {};
    },

    methods: {
       

        setTimer() {
            if (this.timer == null) {
                this.timer = setInterval(() => {
                    this.jt();

                    // this.flagTime = true;

                    // axios 中的POST请求
                }, 30000);
            }
        },

        jt() {
            this.$router.push({
                path: '/zcd'
                // query: {
                //     uid: this.uid
                // }
            });
        },
    },

    created: function() {
        // this.getdata();
        this.setTimer();
    },

    destroyed: function() {
        // 每次离开当前界面时，清除定时器
        clearInterval(this.timer);
        this.timer = null;
    }
};
</script>

<style scoped>
.jtys {
    position: fixed;
    width: 771px;
    height: 445px;
    background-image: url(../../../assets/img/jt.png);
    background-size: 100%;
    margin-left: 30px;
    margin-top: 30px;
}
</style>