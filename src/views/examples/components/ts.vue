<template>
    <div style=" background-color: #c0c0c0; margin-top: 30px;">
        <!-- //gcc_add_add -->

        <div class="ms-title">暂未内容！！！</div>

         <button class="ys_fhan" type="primary" @click="btn_fh()">返回</button>
    </div>


   
</template>

<script>
import { http } from '@/utils/request';
export default {
    data: function() {
        return {
           
        };
    },

    methods: {


         btn_fh() {
            this.$router.push({
                path: '/zcd'
            });
        },
        //延时制水时间点击事件

        PrefixInteger(num, length) {
            //JavaScript实现按照指定长度为数字前面补零输出的方法
            return (Array(length).join('0') + num).slice(-length);
        },

        hex_to_dec(str) {
            let value = parseInt(str, 16);

            return value;
        },

        hex_to_bin(str) {
            //16转2

            let hex_array = [
                { key: 0, val: '0000' },
                { key: 1, val: '0001' },
                { key: 2, val: '0010' },
                { key: 3, val: '0011' },
                { key: 4, val: '0100' },
                { key: 5, val: '0101' },
                { key: 6, val: '0110' },
                { key: 7, val: '0111' },
                { key: 8, val: '1000' },
                { key: 9, val: '1001' },
                { key: 'a', val: '1010' },
                { key: 'b', val: '1011' },
                { key: 'c', val: '1100' },
                { key: 'd', val: '1101' },
                { key: 'e', val: '1110' },
                { key: 'f', val: '1111' }
            ];
        },

        convert(num, from, to) {
            //10转16
            var pattern = /^(2|8|10|16){1}$/;
            if (!pattern.test(from) || !pattern.test(to)) {
                // console.error('源进制from和目标进制to必须都为[2,8,10,16]其中的数字');
                return;
            }
            //如果源进制为十进制
            if (from == 10) {
                return parseInt(num).toString(to);
            }
            //如果目标进制是十进制
            if (to == 10) {
                return parseInt(num, from);
            }
            //其他进制的转换
            return parseInt(num, from).toString(to);
        },

       
    },

    created: function() {
        console.log('111111111111111111111111111111');

       

        // console.log('实时数据显示接收传参成功！！！');

        // this.ts_eid = localStorage.getItem('ms_eid');
        // console.log(this.ts_eid);
    },

   
};
</script>

<style scoped>
.ms-title {
    height: 100px;
    width: 100%;
    position: fixed;
    margin: auto;
    text-align: center; /*div的内容居中*/
    /* background: red; */
    margin-left: 400px;
    right: 176px;
    margin-top: 300px;
    line-height: 30px; /*垂直居中*/
    font-size: 72px;
}

.ys_fhan {
    position: fixed;
    width: 160px;
    height: 60px;
    background: #c0c0c0;
    font-size: 24px;
    margin-left: 1070px;
    margin-top: 280px;
    letter-spacing: 30px;
    text-indent: 30px;
    font-weight: bold;
    font-family: SimSun;
    /* border-radius: 15px; */
}


</style>