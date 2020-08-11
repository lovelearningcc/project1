<template>
    <div class="ys1">
        <!-- //gcc_add_add -->

        <!-- gcc_add_add-->
        <div
            style="width: 482px; float: left; margin-left:44px; background: #c0c0c0; font-size: 14px;"
        >
            <div class="ms-title">定时关机设置</div>

            <el-table :data="tableData" border class="data_table">
                <el-table-column prop="number" label="日期" width="127px" align="center"></el-table-column>
                <el-table-column prop="name" label="定时关机时间" width="355px" align="center"></el-table-column>

                <!-- <el-table-column label="操作" align="center" width="100"></el-table-column> -->
            </el-table>
        </div>

        <!-- //gcc_add——按钮 -->

        <ul>
            <li
                class="save-btn1"
                :class="color11?'open':'close'"
                @click="savebtn11"
            >{{color11?'星期一':'星期一'}}</li>

            <li
                class="save-btn2"
                :class="color21?'open':'close'"
                @click="savebtn21"
            >{{color21?'星期二':'星期二'}}</li>

            <li
                class="save-btn3"
                :class="color31?'open':'close'"
                @click="savebtn31"
            >{{color31?'星期三':'星期三'}}</li>

            <li
                class="save-btn4"
                :class="color41?'open':'close'"
                @click="savebtn41"
            >{{color41?'星期四':'星期四'}}</li>

            <li
                class="save-btn5"
                :class="color51?'open':'close'"
                @click="savebtn51"
            >{{color51?'星期五':'星期五'}}</li>

            <li
                class="save-btn6"
                :class="color61?'open':'close'"
                @click="savebtn61"
            >{{color61?'星期六':'星期六'}}</li>

            <li
                class="save-btn7"
                :class="color71?'open':'close'"
                @click="savebtn71"
            >{{color71?'星期天':'星期天'}}</li>
        </ul>

        <!-- //gcc_end -->

        <!-- gcc_add——输入框 -->
        <div class="css_input">
            <div class="css_hour1">
                <el-input
                    maxlength="2"
                    type="text"
                    onchange="this.value=this.value.replace(/[^\d]/g,'')"
                    v-model="hour11"
                ></el-input>
            </div>
            <div class="css_min1">
                <el-input
                    maxlength="2"
                    type="text"
                    onchange="this.value=this.value.replace(/[^\d]/g,'')"
                    v-model="min11"
                ></el-input>
            </div>

            <div class="css_hour2">
                <el-input
                    maxlength="2"
                    type="text"
                    onchange="this.value=this.value.replace(/[^\d]/g,'')"
                    v-model="hour21"
                ></el-input>
            </div>
            <div class="css_min2">
                <el-input
                    maxlength="2"
                    type="text"
                    onchange="this.value=this.value.replace(/[^\d]/g,'')"
                    v-model="min21"
                ></el-input>
            </div>

            <div class="css_hour3">
                <el-input
                    maxlength="2"
                    type="text"
                    onchange="this.value=this.value.replace(/[^\d]/g,'')"
                    v-model="hour31"
                ></el-input>
            </div>
            <div class="css_min3">
                <el-input
                    maxlength="2"
                    type="text"
                    onchange="this.value=this.value.replace(/[^\d]/g,'')"
                    v-model="min31"
                ></el-input>
            </div>

            <div class="css_hour4">
                <el-input
                    maxlength="2"
                    type="text"
                    onchange="this.value=this.value.replace(/[^\d]/g,'')"
                    v-model="hour41"
                ></el-input>
            </div>
            <div class="css_min4">
                <el-input
                    maxlength="2"
                    type="text"
                    onchange="this.value=this.value.replace(/[^\d]/g,'')"
                    v-model="min41"
                ></el-input>
            </div>

            <div class="css_hour5">
                <el-input
                    maxlength="2"
                    type="text"
                    onchange="this.value=this.value.replace(/[^\d]/g,'')"
                    v-model="hour51"
                ></el-input>
            </div>
            <div class="css_min5">
                <el-input
                    maxlength="2"
                    type="text"
                    onchange="this.value=this.value.replace(/[^\d]/g,'')"
                    v-model="min51"
                ></el-input>
            </div>

            <div class="css_hour6">
                <el-input
                    maxlength="2"
                    type="text"
                    onchange="this.value=this.value.replace(/[^\d]/g,'')"
                    v-model="hour61"
                ></el-input>
            </div>
            <div class="css_min6">
                <el-input
                    maxlength="2"
                    type="text"
                    onchange="this.value=this.value.replace(/[^\d]/g,'')"
                    v-model="min61"
                ></el-input>
            </div>

            <div class="css_hour7">
                <el-input
                    maxlength="2"
                    type="text"
                    onchange="this.value=this.value.replace(/[^\d]/g,'')"
                    v-model="hour71"
                ></el-input>
            </div>
            <div class="css_min7">
                <el-input
                    maxlength="2"
                    type="text"
                    onchange="this.value=this.value.replace(/[^\d]/g,'')"
                    v-model="min71"
                ></el-input>
            </div>
        </div>
        <button type="text" class="ys_fh" @click="fun_fh()">返回</button>
    </div>
</template>

<script>
import { http } from '@/utils/request';
export default {
    data: function() {
        return {
            defaultHeight: '0', //默认屏幕高度

            nowHeight: '0', //实时屏幕高度

            dsgj_eid: '',

            color1: false,
            color2: false,
            color3: false,
            color4: false,
            color5: false,
            color6: false,
            color7: false,

            content1: '',
            content2: '',
            content3: '',
            content4: '',
            content5: '',
            content6: '',
            content7: '',

            color11: false,
            color21: false,
            color31: false,
            color41: false,
            color51: false,
            color61: false,
            color71: false,

            content11: '',
            content21: '',
            content31: '',
            content41: '',
            content51: '',
            content61: '',
            content71: '',

            hour1: '08',
            min1: '30',

            hour2: '08',
            min2: '30',

            hour3: '08',
            min3: '30',

            hour4: '08',
            min4: '30',

            hour5: '08',
            min5: '30',

            hour6: '08',
            min6: '30',

            hour7: '08',
            min7: '30',

            hour11: '08',
            min11: '30',

            hour21: '08',
            min21: '30',

            hour31: '08',
            min31: '30',

            hour41: '08',
            min41: '30',

            hour51: '08',
            min51: '30',

            hour61: '08',
            min61: '30',

            hour71: '08',
            min71: '30',

            tableData: [
                {
                    number: '',
                    name: '：'
                },
                {
                    number: '',
                    name: '：'
                },
                {
                    number: '',
                    name: '：'
                },
                {
                    number: '',
                    name: '：'
                },
                {
                    number: '',
                    name: '：'
                },
                {
                    number: '',
                    name: '：'
                },
                {
                    number: '',
                    name: '：'
                }
            ],

            // selectTime: '',
            // current1: false,
            // current2: false,
            // current3: false,
            // current4: false,
            // current5: false,
            // current6: false,

            // page: 1,
            // size: 6,
            // page1: 1,
            // size1: 6,

            // template: '<p>I am ok</p>',

            // ys1: true,
            // ys2: false,

            // flag: true, //单位切换开关
            // btnText: '停止',

            // content: '', //发送的内容

            timer: null, // 定时器名称

            // img: '',

            uid: ''
        };
    },

    methods: {
        //延时制水时间点击事件

        fun_fh() {
            this.$router.push({
                path: '/xdcs'
            });
        },

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

        // gcc_add
        // savebtn1() {
        //     clearInterval(this.timer);
        //     this.timer = null;

        //     this.color1 = !this.color1;

        //     this.setTimer();
        //     if (this.color1) {
        //         this.content1 =
        //             '0001' + this.convert(this.hour1, 10, 16).padStart(4, '0') + this.convert(this.min1, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
        //     } else {
        //         this.content1 =
        //             '0000' + this.convert(this.hour1, 10, 16).padStart(4, '0') + this.convert(this.min1, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
        //     }
        //     // this.content1 = '00010008001E';
        //     console.log('this.content1===', this.content1);
        //     http({
        //         url: '/appEquiment/customMessage',
        //         method: 'post',
        //         data: {
        //             commond: '0110',
        //             content: this.content1,
        //             date: '1234567989',
        //             deviceNum: this.dsgj_eid,
        //             etypecode: '25187',
        //             iemi: '867665048501482',
        //             num: '0003',
        //             numLen: '06',
        //             phone: '18349112713',
        //             startAdd: '0100',
        //             uid: '1141515585641832449'
        //         }
        //     }).then(({ data = {} }) => {
        //         if (data.code === 0) {
        //             console.log('数据发送成功——周一！！！');
        //             console.log(data);
        //         }
        //     });
        // },

        // savebtn2() {
        //     clearInterval(this.timer);
        //     this.timer = null;

        //     this.color2 = !this.color2;
        //     this.setTimer();

        //     if (this.color2) {
        //         this.content2 =
        //             '0001' + this.convert(this.hour2, 10, 16).padStart(4, '0') + this.convert(this.min2, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
        //     } else {
        //         this.content2 =
        //             '0000' + this.convert(this.hour2, 10, 16).padStart(4, '0') + this.convert(this.min2, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
        //     }

        //     console.log('this.content2===', this.content2);
        //     http({
        //         url: '/appEquiment/customMessage',
        //         method: 'post',
        //         data: {
        //             commond: '0110',
        //             content: this.content2,
        //             date: '1234567989',
        //             deviceNum: this.dsgj_eid,
        //             etypecode: '25187',
        //             iemi: '867665048501482',
        //             num: '0003',
        //             numLen: '06',
        //             phone: '18349112713',
        //             startAdd: '0103',
        //             uid: '1141515585641832449'
        //         }
        //     }).then(({ data = {} }) => {
        //         if (data.code === 0) {
        //             console.log('数据发送成功——周二！！！');
        //             console.log(data);
        //         }
        //     });
        // },

        // savebtn3() {
        //     clearInterval(this.timer);
        //     this.timer = null;
        //     this.color3 = !this.color3;
        //     this.setTimer();

        //     if (this.color3) {
        //         this.content3 =
        //             '0001' + this.convert(this.hour3, 10, 16).padStart(4, '0') + this.convert(this.min3, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
        //     } else {
        //         this.content3 =
        //             '0000' + this.convert(this.hour3, 10, 16).padStart(4, '0') + this.convert(this.min3, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
        //     }

        //     console.log('this.content3===', this.content3);
        //     http({
        //         url: '/appEquiment/customMessage',
        //         method: 'post',
        //         data: {
        //             commond: '0110',
        //             content: this.content3,
        //             date: '1234567989',
        //             deviceNum: this.dsgj_eid,
        //             etypecode: '25187',
        //             iemi: '867665048501482',
        //             num: '0003',
        //             numLen: '06',
        //             phone: '18349112713',
        //             startAdd: '0106',
        //             uid: '1141515585641832449'
        //         }
        //     }).then(({ data = {} }) => {
        //         if (data.code === 0) {
        //             console.log('数据发送成功——周三！！！');
        //             console.log(data);
        //         }
        //     });
        // },

        // savebtn4() {
        //     clearInterval(this.timer);
        //     this.timer = null;
        //     this.color4 = !this.color4;
        //     this.setTimer();

        //     if (this.color4) {
        //         this.content4 =
        //             '0001' + this.convert(this.hour4, 10, 16).padStart(4, '0') + this.convert(this.min4, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
        //     } else {
        //         this.content4 =
        //             '0000' + this.convert(this.hour4, 10, 16).padStart(4, '0') + this.convert(this.min4, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
        //     }

        //     console.log('this.content4===', this.content4);
        //     http({
        //         url: '/appEquiment/customMessage',
        //         method: 'post',
        //         data: {
        //             commond: '0110',
        //             content: this.content4,
        //             date: '1234567989',
        //             deviceNum: this.dsgj_eid,
        //             etypecode: '25187',
        //             iemi: '867665048501482',
        //             num: '0003',
        //             numLen: '06',
        //             phone: '18349112713',
        //             startAdd: '0109',
        //             uid: '1141515585641832449'
        //         }
        //     }).then(({ data = {} }) => {
        //         if (data.code === 0) {
        //             console.log('数据发送成功——周四！！');
        //             console.log(data);
        //         }
        //     });
        // },

        // savebtn5() {
        //     clearInterval(this.timer);
        //     this.timer = null;

        //     this.setTimer();

        //     this.color5 = !this.color5;
        //     if (this.color5) {
        //         this.content5 =
        //             '0001' + this.convert(this.hour5, 10, 16).padStart(4, '0') + this.convert(this.min5, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
        //     } else {
        //         this.content5 =
        //             '0000' + this.convert(this.hour5, 10, 16).padStart(4, '0') + this.convert(this.min5, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
        //     }

        //     console.log('this.content5===', this.content5);
        //     http({
        //         url: '/appEquiment/customMessage',
        //         method: 'post',
        //         data: {
        //             commond: '0110',
        //             content: this.content5,
        //             date: '1234567989',
        //             deviceNum: this.dsgj_eid,
        //             etypecode: '25187',
        //             iemi: '867665048501482',
        //             num: '0003',
        //             numLen: '06',
        //             phone: '18349112713',
        //             startAdd: '010c',
        //             uid: '1141515585641832449'
        //         }
        //     }).then(({ data = {} }) => {
        //         if (data.code === 0) {
        //             console.log('数据发送成功——周五！');
        //             console.log(data);
        //         }
        //     });
        // },

        // savebtn6() {
        //     clearInterval(this.timer);
        //     this.timer = null;

        //     this.setTimer();

        //     this.color6 = !this.color6;

        //     if (this.color6) {
        //         this.content6 =
        //             '0001' + this.convert(this.hour6, 10, 16).padStart(4, '0') + this.convert(this.min6, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
        //     } else {
        //         this.content6 =
        //             '0000' + this.convert(this.hour6, 10, 16).padStart(4, '0') + this.convert(this.min6, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
        //     }

        //     console.log('this.content6===', this.content6);
        //     http({
        //         url: '/appEquiment/customMessage',
        //         method: 'post',
        //         data: {
        //             commond: '0110',
        //             content: this.content6,
        //             date: '1234567989',
        //             deviceNum: this.dsgj_eid,
        //             etypecode: '25187',
        //             iemi: '867665048501482',
        //             num: '0003',
        //             numLen: '06',
        //             phone: '18349112713',
        //             startAdd: '010f',
        //             uid: '1141515585641832449'
        //         }
        //     }).then(({ data = {} }) => {
        //         if (data.code === 0) {
        //             console.log('数据发送成功——周六！');
        //             console.log(data);
        //         }
        //     });
        // },

        // savebtn7() {
        //     clearInterval(this.timer);
        //     this.timer = null;

        //     this.setTimer();

        //     this.color7 = !this.color7;

        //     if (this.color7) {
        //         this.content7 =
        //             '0001' + this.convert(this.hour7, 10, 16).padStart(4, '0') + this.convert(this.min7, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
        //     } else {
        //         this.content7 =
        //             '0000' + this.convert(this.hour7, 10, 16).padStart(4, '0') + this.convert(this.min7, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
        //     }

        //     console.log('this.content7===', this.content7);
        //     http({
        //         url: '/appEquiment/customMessage',
        //         method: 'post',
        //         data: {
        //             commond: '0110',
        //             content: this.content7,
        //             date: '1234567989',
        //             deviceNum: this.dsgj_eid,
        //             etypecode: '25187',
        //             iemi: '867665048501482',
        //             num: '0003',
        //             numLen: '06',
        //             phone: '18349112713',
        //             startAdd: '0112',
        //             uid: '1141515585641832449'
        //         }
        //     }).then(({ data = {} }) => {
        //         if (data.code === 0) {
        //             console.log('数据发送成功——周天！');
        //             console.log(data);
        //         }
        //     });
        // },
        // gcc_end

        // gcc_add
        savebtn11() {
            clearInterval(this.timer);
            this.timer = null;

            this.color11 = !this.color11;

            this.setTimer();

            //
            if (this.color11) {
                this.content11 =
                    '0001' + this.convert(this.hour11, 10, 16).padStart(4, '0') + this.convert(this.min11, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            } else {
                this.content11 =
                    '0000' + this.convert(this.hour11, 10, 16).padStart(4, '0') + this.convert(this.min11, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            }
            // this.content1 = '00010008001E';
            console.log('this.content1===', this.content11);
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.content11,
                    date: '1234567989',
                    deviceNum: this.dsgj_eid,
                    etypecode: '25187',
                    iemi: '867665048501482',
                    num: '0003',
                    numLen: '06',
                    phone: '18349112713',
                    startAdd: '0100',
                    uid: '1141515585641832449'
                }
            }).then(({ data = {} }) => {
                if (data.code === 0) {
                    console.log('数据发送成功——周一！！！');
                    console.log(data);
                }
            });
        },

        savebtn21() {
            clearInterval(this.timer);
            this.timer = null;

            this.color21 = !this.color21;
            this.setTimer();

            if (this.color21) {
                this.content21 =
                    '0001' + this.convert(this.hour21, 10, 16).padStart(4, '0') + this.convert(this.min21, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            } else {
                this.content21 =
                    '0000' + this.convert(this.hour21, 10, 16).padStart(4, '0') + this.convert(this.min21, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            }

            console.log('this.content21===', this.content2);
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.content21,
                    date: '1234567989',
                    deviceNum: this.dsgj_eid,
                    etypecode: '25187',
                    iemi: '867665048501482',
                    num: '0003',
                    numLen: '06',
                    phone: '18349112713',
                    startAdd: '0103',
                    uid: '1141515585641832449'
                }
            }).then(({ data = {} }) => {
                if (data.code === 0) {
                    console.log('数据发送成功——周二！！！');
                    console.log(data);
                }
            });
        },

        savebtn31() {
            clearInterval(this.timer);
            this.timer = null;
            this.color31 = !this.color31;
            this.setTimer();

            if (this.color3) {
                this.content31 =
                    '0001' + this.convert(this.hour31, 10, 16).padStart(4, '0') + this.convert(this.min31, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            } else {
                this.content31 =
                    '0000' + this.convert(this.hour31, 10, 16).padStart(4, '0') + this.convert(this.min31, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            }

            console.log('this.content3===', this.content31);
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.content31,
                    date: '1234567989',
                    deviceNum: this.dsgj_eid,
                    etypecode: '25187',
                    iemi: '867665048501482',
                    num: '0003',
                    numLen: '06',
                    phone: '18349112713',
                    startAdd: '0106',
                    uid: '1141515585641832449'
                }
            }).then(({ data = {} }) => {
                if (data.code === 0) {
                    console.log('数据发送成功——周三！！！');
                    console.log(data);
                }
            });
        },

        savebtn41() {
            clearInterval(this.timer);
            this.timer = null;
            this.color41 = !this.color41;
            this.setTimer();

            if (this.color41) {
                this.content41 =
                    '0001' + this.convert(this.hour41, 10, 16).padStart(4, '0') + this.convert(this.min41, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            } else {
                this.content41 =
                    '0000' + this.convert(this.hour41, 10, 16).padStart(4, '0') + this.convert(this.min41, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            }

            console.log('this.content4===', this.content41);
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.content41,
                    date: '1234567989',
                    deviceNum: this.dsgj_eid,
                    etypecode: '25187',
                    iemi: '867665048501482',
                    num: '0003',
                    numLen: '06',
                    phone: '18349112713',
                    startAdd: '0109',
                    uid: '1141515585641832449'
                }
            }).then(({ data = {} }) => {
                if (data.code === 0) {
                    console.log('数据发送成功——周四！！');
                    console.log(data);
                }
            });
        },

        savebtn51() {
            clearInterval(this.timer);
            this.timer = null;

            this.setTimer();

            this.color51 = !this.color51;
            if (this.color51) {
                this.content51 =
                    '0001' + this.convert(this.hour51, 10, 16).padStart(4, '0') + this.convert(this.min51, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            } else {
                this.content51 =
                    '0000' + this.convert(this.hour51, 10, 16).padStart(4, '0') + this.convert(this.min51, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            }

            console.log('this.content5===', this.content51);
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.content51,
                    date: '1234567989',
                    deviceNum: this.dsgj_eid,
                    etypecode: '25187',
                    iemi: '867665048501482',
                    num: '0003',
                    numLen: '06',
                    phone: '18349112713',
                    startAdd: '010c',
                    uid: '1141515585641832449'
                }
            }).then(({ data = {} }) => {
                if (data.code === 0) {
                    console.log('数据发送成功——周五！');
                    console.log(data);
                }
            });
        },

        savebtn61() {
            clearInterval(this.timer);
            this.timer = null;

            this.setTimer();

            this.color61 = !this.color61;

            if (this.color61) {
                this.content61 =
                    '0001' + this.convert(this.hour61, 10, 16).padStart(4, '0') + this.convert(this.min61, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            } else {
                this.content6 =
                    '0000' + this.convert(this.hour61, 10, 16).padStart(4, '0') + this.convert(this.min61, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            }

            console.log('this.content6===', this.content61);
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.content61,
                    date: '1234567989',
                    deviceNum: this.dsgj_eid,
                    etypecode: '25187',
                    iemi: '867665048501482',
                    num: '0003',
                    numLen: '06',
                    phone: '18349112713',
                    startAdd: '010f',
                    uid: '1141515585641832449'
                }
            }).then(({ data = {} }) => {
                if (data.code === 0) {
                    console.log('数据发送成功——周六！');
                    console.log(data);
                }
            });
        },

        savebtn71() {
            clearInterval(this.timer);
            this.timer = null;

            this.setTimer();

            this.color71 = !this.color71;

            if (this.color71) {
                this.content71 =
                    '0001' + this.convert(this.hour71, 10, 16).padStart(4, '0') + this.convert(this.min71, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            } else {
                this.content71 =
                    '0000' + this.convert(this.hour71, 10, 16).padStart(4, '0') + this.convert(this.min71, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            }

            console.log('this.content7===', this.content71);
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.content71,
                    date: '1234567989',
                    deviceNum: this.dsgj_eid,
                    etypecode: '25187',
                    iemi: '867665048501482',
                    num: '0003',
                    numLen: '06',
                    phone: '18349112713',
                    startAdd: '0112',
                    uid: '1141515585641832449'
                }
            }).then(({ data = {} }) => {
                if (data.code === 0) {
                    console.log('数据发送成功——周天！');
                    console.log(data);
                }
            });
        },
        // gcc_end

        getdata() {
            console.log('开始请求数据！！！！！！');

            this.$axios({
                method: 'post',
                url: '/appEquiment/selectDataByeid', //获取心跳包
                data: {
                    date: '2020-04-08T00:58:15.140Z',
                    eid: this.dsgj_eid,
                    eypecode: '25187'
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('2020.8.03请求心跳包成功！！！！！！！！！！！');
                    let value = res.data.data.data;
                    console.log('请求到的心跳包数据---', value);
                    if (value.length <= 0 || value == undefined || value == null) {
                        //{{pawnList!== undefined && pawnList!== null && pawnList.length>0 ? pawnList.name : ''}}
                        console.log('请求服务器数据出错！！');
                    } else {
                        let zysn1 = this.hex_to_dec(value.substring(180, 184)); //周一使能  制水                16转10
                        var zyh1 = this.hex_to_dec(value.substring(184, 188)); //周一时     制水             16转10
                        var zyf1 = this.hex_to_dec(value.substring(188, 192)); //周一分     制水            16转10

                        let zysn11 = this.hex_to_dec(value.substring(276, 280)); //周一使能   停止制水               16转10
                        var zyh11 = this.hex_to_dec(value.substring(280, 284)); //周一时      停止制水            16转10
                        var zyf11 = this.hex_to_dec(value.substring(284, 288)); //周一分      停止制水          16转10

                        console.log('zysn1------', zysn1);
                        console.log('zysn11------', zysn11);

                        // if (zysn1 == '1') {
                        //     this.hour1 = this.PrefixInteger(zyh1, 2);
                        //     this.min1 = this.PrefixInteger(zyf1, 2);

                        //     this.color1 = true;
                        // } else {
                        //     this.color1 = false;
                        // }

                        if (zysn11 == '1') {
                            this.hour11 = this.PrefixInteger(zyh11, 2);
                            this.min11 = this.PrefixInteger(zyf11, 2);

                            this.color11 = true;
                        } else {
                            this.color11 = false;
                        }

                        let zysn2 = this.hex_to_dec(value.substring(192, 196)); //周二使能   制水               16转10
                        let zyh2 = this.hex_to_dec(value.substring(196, 200)); //周二时      制水             16转10
                        let zyf2 = this.hex_to_dec(value.substring(200, 204)); //周二分      制水           16转10

                        let zysn21 = this.hex_to_dec(value.substring(288, 292)); //周二使能   停止制水               16转10
                        let zyh21 = this.hex_to_dec(value.substring(292, 296)); //周二时      停止制水            16转10
                        let zyf21 = this.hex_to_dec(value.substring(296, 300)); //周二分      停止制水           16转10

                        console.log('zysn2------', zysn2);
                        // if (zysn2 == '1') {
                        //     // this.hour2 = zyh2;
                        //     // this.min2 = zyf2;
                        //     this.hour2 = this.PrefixInteger(zyh2, 2);
                        //     this.min2 = this.PrefixInteger(zyf2, 2);
                        //     this.color2 = true;
                        // } else {
                        //     this.color2 = false;
                        // }

                        if (zysn21 == '1') {
                            // this.hour2 = zyh2;
                            // this.min2 = zyf2;
                            this.hour21 = this.PrefixInteger(zyh21, 2);
                            this.min21 = this.PrefixInteger(zyf21, 2);
                            this.color21 = true;
                        } else {
                            this.color21 = false;
                        }

                        let zysn3 = this.hex_to_dec(value.substring(204, 208)); //周三使能                  16转10
                        let zyh3 = this.hex_to_dec(value.substring(208, 212)); //周三时                  16转10
                        let zyf3 = this.hex_to_dec(value.substring(212, 216)); //周三分                 16转10

                        let zysn31 = this.hex_to_dec(value.substring(300, 304)); //周三使能                  16转10
                        let zyh31 = this.hex_to_dec(value.substring(304, 308)); //周三时                  16转10
                        let zyf31 = this.hex_to_dec(value.substring(308, 312)); //周三分                 16转10

                        console.log('zysn3------', zysn3);
                        // if (zysn3 == '1') {
                        //     // this.hour3 = zyh3;
                        //     // this.min3 = zyf3;
                        //     this.hour3 = this.PrefixInteger(zyh3, 2);
                        //     this.min3 = this.PrefixInteger(zyf3, 2);
                        //     this.color3 = true;
                        // } else {
                        //     this.color3 = false;
                        // }

                        if (zysn31 == '1') {
                            // this.hour3 = zyh3;
                            // this.min3 = zyf3;
                            this.hour31 = this.PrefixInteger(zyh31, 2);
                            this.min31 = this.PrefixInteger(zyf31, 2);
                            this.color31 = true;
                        } else {
                            this.color31 = false;
                        }

                        let zysn4 = this.hex_to_dec(value.substring(216, 220)); //周四使能                  16转10
                        let zyh4 = this.hex_to_dec(value.substring(220, 224)); //周四时                  16转10
                        let zyf4 = this.hex_to_dec(value.substring(224, 228)); //周四分                 16转10

                        let zysn41 = this.hex_to_dec(value.substring(312, 316)); //周四使能                  16转10
                        let zyh41 = this.hex_to_dec(value.substring(316, 320)); //周四时                  16转10
                        let zyf41 = this.hex_to_dec(value.substring(320, 324)); //周四分                 16转10

                        console.log('zysn4------', zysn4);
                        // if (zysn4 == '1') {
                        //     // this.hour4 = zyh4;
                        //     // this.min4 = zyf4;
                        //     this.hour4 = this.PrefixInteger(zyh4, 2);
                        //     this.min4 = this.PrefixInteger(zyf4, 2);
                        //     this.color4 = true;
                        // } else {
                        //     this.color4 = false;
                        // }

                        if (zysn41 == '1') {
                            // this.hour4 = zyh4;
                            // this.min4 = zyf4;
                            this.hour41 = this.PrefixInteger(zyh41, 2);
                            this.min41 = this.PrefixInteger(zyf41, 2);
                            this.color41 = true;
                        } else {
                            this.color41 = false;
                        }

                        let zysn5 = this.hex_to_dec(value.substring(228, 232)); //周五使能                  16转10
                        let zyh5 = this.hex_to_dec(value.substring(232, 236)); //周五时                  16转10
                        let zyf5 = this.hex_to_dec(value.substring(236, 240)); //周五分                 16转10

                        let zysn51 = this.hex_to_dec(value.substring(324, 328)); //周五使能                  16转10
                        let zyh51 = this.hex_to_dec(value.substring(328, 332)); //周五时                  16转10
                        let zyf51 = this.hex_to_dec(value.substring(332, 336)); //周五分                 16转10

                        console.log('zysn5------', zysn5);
                        // if (zysn5 == '1') {
                        //     // this.hour5 = zyh5;
                        //     // this.min5 = zyf5;
                        //     this.hour5 = this.PrefixInteger(zyh5, 2);
                        //     this.min5 = this.PrefixInteger(zyf5, 2);
                        //     this.color5 = true;
                        // } else {
                        //     this.color5 = false;
                        // }
                        if (zysn51 == '1') {
                            // this.hour5 = zyh5;
                            // this.min5 = zyf5;
                            this.hour51 = this.PrefixInteger(zyh51, 2);
                            this.min51 = this.PrefixInteger(zyf51, 2);
                            this.color51 = true;
                        } else {
                            this.color51 = false;
                        }

                        let zysn6 = this.hex_to_dec(value.substring(240, 244)); //周六使能                  16转10
                        let zyh6 = this.hex_to_dec(value.substring(244, 248)); //周六时                  16转10
                        let zyf6 = this.hex_to_dec(value.substring(248, 252)); //周六分                 16转10

                        let zysn61 = this.hex_to_dec(value.substring(336, 340)); //周六使能                  16转10
                        let zyh61 = this.hex_to_dec(value.substring(340, 344)); //周六时                  16转10
                        let zyf61 = this.hex_to_dec(value.substring(344, 348)); //周六分                 16转10

                        console.log('zysn6------', zysn6);
                        // if (zysn6 == '1') {
                        //     // this.hour6 = zyh6;
                        //     // this.min6 = zyf6;
                        //     this.hour6 = this.PrefixInteger(zyh6, 2);
                        //     this.min6 = this.PrefixInteger(zyf6, 2);
                        //     this.color6 = true;
                        // } else {
                        //     this.color6 = false;
                        // }

                        if (zysn61 == '1') {
                            // this.hour6 = zyh6;
                            // this.min6 = zyf6;
                            this.hour61 = this.PrefixInteger(zyh61, 2);
                            this.min61 = this.PrefixInteger(zyf61, 2);
                            this.color61 = true;
                        } else {
                            this.color61 = false;
                        }

                        let zysn7 = this.hex_to_dec(value.substring(252, 256)); //周天使能                  16转10
                        let zyh7 = this.hex_to_dec(value.substring(256, 260)); //周天时                  16转10
                        let zyf7 = this.hex_to_dec(value.substring(260, 264)); //周天分                 16转10

                        let zysn71 = this.hex_to_dec(value.substring(348, 352)); //周天使能                  16转10
                        let zyh71 = this.hex_to_dec(value.substring(352, 356)); //周天时                  16转10
                        let zyf71 = this.hex_to_dec(value.substring(356, 360)); //周天分                 16转10

                        console.log('zysn7------', zysn7);
                        // if (zysn7 == '1') {
                        //     // this.hour7 = zyh7;
                        //     // this.min7 = zyf7;
                        //     this.hour7 = this.PrefixInteger(zyh7, 2);
                        //     this.min7 = this.PrefixInteger(zyf7, 2);
                        //     this.color7 = true;
                        // } else {
                        //     this.color7 = false;
                        // }

                        if (zysn71 == '1') {
                            // this.hour7 = zyh7;
                            // this.min7 = zyf7;
                            this.hour71 = this.PrefixInteger(zyh71, 2);
                            this.min71 = this.PrefixInteger(zyf71, 2);
                            this.color71 = true;
                        } else {
                            this.color71 = false;
                        }
                    }
                }
            });

            console.log('2020.6.16数据请求完成！！！！！！');
        },

        setTimer() {
            if (this.timer == null) {
                this.timer = setInterval(() => {
                    this.getdata();

                    // this.flagTime = true;
                    // console.log(this.eid);
                    // console.log(this.eypecode);

                    // axios 中的POST请求
                }, 10000);
            }
        }
    },

    created: function() {
        console.log('111111111111111111111111111111');

        // console.log(this.$route.query);

        console.log('实时数据显示接收传参成功！！！');

        this.dsgj_eid = localStorage.getItem('ms_eid');
        console.log(this.dsgj_eid);

        this.getdata();
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
.ms-title {
    height: 30px;
    width: 100%;
    position: fixed;
    margin: auto;
    /* top: 0; 底部固定 */

    /* left: 0;   /*实现div的居中*/
    /* right: 0;  */ /*实现div的居中*/

    text-align: center; /*div的内容居中*/
    /* background: red; */
    margin-left: 100px;
    right: 676px;
    line-height: 30px; /*垂直居中*/
    font-size: 18px;
}

/* .ms-title1 {
    height: 30px;
    width: 100%;
    position: fixed;
    margin: auto;
    text-align: center; 
    background: red;
    margin-left: 100px;
    right: 150px;
    line-height: 30px; 
    font-size: 14px;
} */

.save-btn1 {
    position: fixed;
    font-size: 14px;
    margin-top: 70px;

    text-align: center;
    list-style: none;

    width: 127px;
    line-height: 40px;
    z-index: 100;
}
.save-btn2 {
    position: fixed;
    font-size: 14px;
    margin-top: 110px;

    text-align: center;
    list-style: none;

    width: 127px;
    line-height: 40px;
    z-index: 100;
}
.save-btn3 {
    position: fixed;
    font-size: 14px;
    margin-top: 150px;

    text-align: center;
    list-style: none;

    width: 127px;
    line-height: 40px;
    z-index: 100;
}

.save-btn4 {
    position: fixed;
    font-size: 14px;
    margin-top: 190px;

    text-align: center;
    list-style: none;

    width: 127px;
    line-height: 40px;
    z-index: 100;
}
.save-btn5 {
    position: fixed;
    font-size: 14px;
    margin-top: 230px;

    text-align: center;
    list-style: none;

    width: 127px;
    line-height: 40px;
    z-index: 100;
}
.save-btn6 {
    position: fixed;
    font-size: 14px;
    margin-top: 270px;

    text-align: center;
    list-style: none;

    width: 127px;
    line-height: 40px;
    z-index: 100;
}

.save-btn7 {
    position: fixed;
    font-size: 14px;
    margin-top: 310px;

    text-align: center;
    list-style: none;

    width: 127px;
    line-height: 40px;
    z-index: 100;
}

/* .save-btn11 {
    position: fixed;
    font-size: 14px;
    margin-top: 70px;
    margin-left: 525px;
    text-align: center;
    list-style: none;
    width: 127px;
    line-height: 40px;
    z-index: 100;
}
.save-btn21 {
    position: fixed;
    font-size: 14px;
    margin-top: 110px;

    text-align: center;
    list-style: none;
    margin-left: 525px;
    width: 127px;
    line-height: 40px;
    z-index: 100;
}
.save-btn31 {
    position: fixed;
    font-size: 14px;
    margin-top: 150px;

    text-align: center;
    list-style: none;
    margin-left: 525px;
    width: 127px;
    line-height: 40px;
    z-index: 100;
}

.save-btn41 {
    position: fixed;
    font-size: 14px;
    margin-top: 190px;
    margin-left: 525px;
    text-align: center;
    list-style: none;

    width: 127px;
    line-height: 40px;
    z-index: 100;
}
.save-btn51 {
    position: fixed;
    font-size: 14px;
    margin-top: 230px;
    margin-left: 525px;
    text-align: center;
    list-style: none;

    width: 127px;
    line-height: 40px;
    z-index: 100;
}
.save-btn61 {
    position: fixed;
    font-size: 14px;
    margin-top: 270px;
    margin-left: 525px;
    text-align: center;
    list-style: none;

    width: 127px;
    line-height: 40px;
    z-index: 100;
}

.save-btn71 {
    position: fixed;
    font-size: 14px;
    margin-top: 310px;
    margin-left: 525px;
    text-align: center;
    list-style: none;

    width: 127px;
    line-height: 40px;
    z-index: 100;
} */

.css_hour1 {
    position: fixed;
    text-align: center;
    font-size: 14px;
    margin-top: 74px;
    margin-left: 146px;
    width: 75px;
    height: 10px;
    z-index: 100;
}
.css_min1 {
    position: fixed;
    font-size: 14px;
    margin-top: 74px;
    margin-left: 240px;
    width: 75px;
    height: 2em;
    z-index: 100;
    text-align: center;
}
.css_hour2 {
    position: fixed;
    font-size: 16px;
    margin-top: 114px;
    margin-left: 146px;
    width: 75px;
    line-height: 30px;
    z-index: 100;
}

.css_min2 {
    position: fixed;
    font-size: 16px;
    margin-top: 114px;
    margin-left: 240px;
    width: 75px;
    line-height: 30px;
    z-index: 100;
}
.css_hour3 {
    position: fixed;
    font-size: 16px;
    margin-top: 154px;
    margin-left: 146px;
    width: 75px;
    height: 30px;
    z-index: 100;
}

.css_min3 {
    position: fixed;
    font-size: 16px;
    margin-top: 154px;
    margin-left: 240px;
    width: 75px;
    height: 30px;
    z-index: 100;
}

.css_hour4 {
    position: fixed;
    font-size: 16px;
    margin-top: 194px;
    margin-left: 146px;
    width: 75px;
    height: 30px;
    z-index: 100;
}

.css_min4 {
    position: fixed;
    font-size: 16px;
    margin-top: 194px;
    margin-left: 240px;
    width: 75px;
    height: 20px;
    z-index: 100;
}

.css_hour5 {
    position: fixed;
    font-size: 16px;
    margin-top: 234px;
    margin-left: 146px;
    width: 75px;
    height: 30px;
    z-index: 100;
}

.css_min5 {
    position: fixed;
    font-size: 16px;
    margin-top: 234px;
    margin-left: 240px;
    width: 75px;
    height: 28px;
    z-index: 100;
}

.css_hour6 {
    position: fixed;
    font-size: 14px;
    margin-top: 274px;
    margin-left: 146px;
    width: 75px;
    height: 30px;
    z-index: 100;
}

.css_min6 {
    position: fixed;
    font-size: 14px;
    margin-top: 274px;
    margin-left: 240px;
    width: 75px;
    height: 30px;
    z-index: 100;
}

.css_hour7 {
    position: fixed;
    font-size: 14px;
    margin-top: 314px;
    margin-left: 146px;
    width: 75px;
    height: 20px;
    z-index: 100;
}

.css_min7 {
    position: fixed;
    font-size: 14px;
    margin-top: 314px;
    margin-left: 240px;
    width: 75px;
    height: 20px;
    z-index: 100;
}

/* .css_hour11 {
    position: fixed;

    font-size: 14px;
    margin-top: 74px;
    margin-left: 763px;
    width: 75px;
    height: 10px;
    line-height: 10px;
    border: none;
    vertical-align: middle;
    text-align: center;
    vertical-align:middle;
    display:flex;
    align-items:center;
    z-index: 100;
}
.css_min11 {
    position: fixed;
    font-size: 14px;
    margin-top: 74px;
    margin-left: 855px;
    width: 75px;
    height: 10px;
    line-height: 10px;
    border: none;
    vertical-align: middle;
    text-align: center;

    z-index: 100;
}
.css_hour21 {
    position: fixed;
    font-size: 16px;
    margin-top: 114px;
    margin-left: 763px;
    width: 75px;
    line-height: 30px;
    z-index: 100;
}

.css_min21 {
    position: fixed;
    font-size: 16px;
    margin-top: 114px;
    margin-left: 855px;
    width: 75px;
    line-height: 30px;
    z-index: 100;
}
.css_hour31 {
    position: fixed;
    font-size: 16px;
    margin-top: 154px;
    margin-left: 763px;
    width: 75px;
    height: 30px;
    z-index: 100;
}

.css_min31 {
    position: fixed;
    font-size: 16px;
    margin-top: 154px;
    margin-left: 855px;
    width: 75px;
    height: 30px;
    z-index: 100;
}

.css_hour41 {
    position: fixed;
    font-size: 16px;
    margin-top: 194px;
    margin-left: 763px;
    width: 75px;
    height: 30px;
    z-index: 100;
}

.css_min41 {
    position: fixed;
    font-size: 16px;
    margin-top: 194px;
    margin-left: 855px;
    width: 75px;
    height: 20px;
    z-index: 100;
}

.css_hour51 {
    position: fixed;
    font-size: 16px;
    margin-top: 234px;
    margin-left: 763px;
    width: 75px;
    height: 30px;
    z-index: 100;
}

.css_min51 {
    position: fixed;
    font-size: 16px;
    margin-top: 234px;
    margin-left: 855px;
    width: 75px;
    height: 28px;
    z-index: 100;
}

.css_hour61 {
    position: fixed;
    font-size: 14px;
    margin-top: 274px;
    margin-left: 763px;
    width: 75px;
    height: 30px;
    z-index: 100;
}

.css_min61 {
    position: fixed;
    font-size: 14px;
    margin-top: 274px;
    margin-left: 855px;
    width: 75px;
    height: 30px;
    z-index: 100;
}

.css_hour71 {
    position: fixed;
    font-size: 14px;
    margin-top: 314px;
    margin-left: 763px;
    width: 75px;
    height: 20px;
    z-index: 100;
}

.css_min71 {
    position: fixed;
    font-size: 14px;
    margin-top: 314px;
    margin-left: 855px;
    width: 75px;
    height: 20px;
    z-index: 100;
} */

.data_table {
    /* position: fixed; */
    margin-top: 30px;
    height: 320px;
    font-size: 14px;
    /* background-color: #c0c0c0; */
}

.open {
    background: #1afa29;
    color: black;
}
.close {
    background: red;
    color: black;
}

.css_input {
    position: fixed;
    line-height: 30px;

    /* background-color: blue; */
    width: 25px;
    margin-top: 0px;
    right: 1780px;
}

/* .css_inpuit1 {
    position: fixed;
    line-height: 30px;

    background-color: blue;
    width: 25px;
    margin-top: 0px;
    right: 1864px;
} */

ul {
    position: fixed;

    width: 49px;
    margin-top: 0px;
    right: 1827px;
    /* background-color: #c0c0c0; */
}

.ys1 {
    position: fixed;
    width: 1010px;
    height: 540px;
    background: #c0c0c0;
    font-size: 18px;
    background-size: 100%;
    margin-top: 20px;

    text-align: center;
}

.ys_fh {
    position: fixed;
    width: 174px;
    height: 70px;
    background: #c0c0c0;
    font-size: 24px;
    right: 1200px;
    margin-top: 280px;
    text-align: center;
    background-size: 100%;
    font-weight: bold;
    font-family: SimSun;
    letter-spacing: 30px;
    text-indent: 30px;
}
   
</style>