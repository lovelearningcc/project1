<template>
    <div class="ys1">
        <!-- //gcc_add_add -->
        <div class="ys_abc">
            <div class="ys_dszsrq">
                <div class="ms-title">定时制水设置</div>

                <el-table :data="tableData" border class="data_table">
                    <el-table-column prop="number" label="日期" width="127px" align="center"></el-table-column>
                    <el-table-column prop="name" label="定时制水时间" width="355px" align="center"></el-table-column>
                </el-table>
            </div>

            <!-- //gcc_add——按钮 -->
            <div class="ys2">
                <ul>
                    <li
                        class="save-btn1"
                        :class="color1?'open':'close'"
                        @click="savebtn1"
                    >{{color1?'星期一':'星期一'}}</li>

                    <li
                        class="save-btn2"
                        :class="color2?'open':'close'"
                        @click="savebtn2"
                    >{{color2?'星期二':'星期二'}}</li>

                    <li
                        class="save-btn3"
                        :class="color3?'open':'close'"
                        @click="savebtn3"
                    >{{color3?'星期三':'星期三'}}</li>

                    <li
                        class="save-btn4"
                        :class="color4?'open':'close'"
                        @click="savebtn4"
                    >{{color4?'星期四':'星期四'}}</li>

                    <li
                        class="save-btn5"
                        :class="color5?'open':'close'"
                        @click="savebtn5"
                    >{{color5?'星期五':'星期五'}}</li>

                    <li
                        class="save-btn6"
                        :class="color6?'open':'close'"
                        @click="savebtn6"
                    >{{color6?'星期六':'星期六'}}</li>

                    <li
                        class="save-btn7"
                        :class="color7?'open':'close'"
                        @click="savebtn7"
                    >{{color7?'星期天':'星期天'}}</li>
                </ul>

                <!-- //gcc_end -->
                <!-- gcc_add——输入框 -->
                <div class="css_inpuit">
                    <div class="css_hour1">
                        <el-input
                            maxlength="2"
                            type="text"
                            onchange="this.value=this.value.replace(/[^\d]/g,'')"
                            v-model="hour1"
                            placeholder="08"
                            style="text-align:center"
                            onfocus="this.style.textAlign='center'"
                        ></el-input>
                    </div>
                    <div class="css_min1">
                        <el-input
                            maxlength="2"
                            type="text"
                            onchange="this.value=this.value.replace(/[^\d]/g,'')"
                            v-model="min1"
                            style="textAlign=center"
                        ></el-input>
                    </div>

                    <div class="css_hour2">
                        <el-input
                            maxlength="2"
                            type="text"
                            onchange="this.value=this.value.replace(/[^\d]/g,'')"
                            v-model="hour2"
                        ></el-input>
                    </div>
                    <div class="css_min2">
                        <el-input
                            maxlength="2"
                            type="text"
                            onchange="this.value=this.value.replace(/[^\d]/g,'')"
                            v-model="min2"
                        ></el-input>
                    </div>

                    <div class="css_hour3">
                        <el-input
                            maxlength="2"
                            type="text"
                            onchange="this.value=this.value.replace(/[^\d]/g,'')"
                            v-model="hour3"
                        ></el-input>
                    </div>
                    <div class="css_min3">
                        <el-input
                            maxlength="2"
                            type="text"
                            onchange="this.value=this.value.replace(/[^\d]/g,'')"
                            v-model="min3"
                        ></el-input>
                    </div>

                    <div class="css_hour4">
                        <el-input
                            maxlength="2"
                            type="text"
                            onchange="this.value=this.value.replace(/[^\d]/g,'')"
                            v-model="hour4"
                        ></el-input>
                    </div>
                    <div class="css_min4">
                        <el-input
                            maxlength="2"
                            type="text"
                            onchange="this.value=this.value.replace(/[^\d]/g,'')"
                            v-model="min4"
                        ></el-input>
                    </div>

                    <div class="css_hour5">
                        <el-input
                            maxlength="2"
                            type="text"
                            onchange="this.value=this.value.replace(/[^\d]/g,'')"
                            v-model="hour5"
                        ></el-input>
                    </div>
                    <div class="css_min5">
                        <el-input
                            maxlength="2"
                            type="text"
                            onchange="this.value=this.value.replace(/[^\d]/g,'')"
                            v-model="min5"
                        ></el-input>
                    </div>

                    <div class="css_hour6">
                        <el-input
                            maxlength="2"
                            type="text"
                            onchange="this.value=this.value.replace(/[^\d]/g,'')"
                            v-model="hour6"
                        ></el-input>
                    </div>
                    <div class="css_min6">
                        <el-input
                            maxlength="2"
                            type="text"
                            onchange="this.value=this.value.replace(/[^\d]/g,'')"
                            v-model="min6"
                        ></el-input>
                    </div>

                    <div class="css_hour7">
                        <el-input
                            maxlength="2"
                            type="text"
                
                            v-model="hour7"
                        ></el-input>
                    </div>
                    <div class="css_min7">
                        <el-input
                            maxlength="2"
                            type="text"
                            
                            v-model="min7"
                        ></el-input>
                    </div>
                </div>
            </div>
        </div>

        <button type="text" class="ys_fh" @click="fun_fh()">返回</button>
        <!-- gcc_end_end -->
    </div>
</template>

<script>
import { http } from '@/utils/request';
export default {
    data: function() {
        return {
            defaultHeight: '0', //默认屏幕高度

            nowHeight: '0', //实时屏幕高度

            dszs_eid: '',
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
            // param: {
            //     username: '',
            //     password: '',
            //     username1: 'wlssj',
            //     password1: '123456'
            // },
            // rules: {
            //     username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
            //     password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            // }
        };
    },

    methods: {
        fun_fh() {
            this.$router.push({
                path: '/xdcs'
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

        // gcc_add
        savebtn1() {
            clearInterval(this.timer);
            this.timer = null;

            this.color1 = !this.color1;

            this.setTimer();
            if (this.color1) {
                this.content1 =
                    '0001' + this.convert(this.hour1, 10, 16).padStart(4, '0') + this.convert(this.min1, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            } else {
                this.content1 =
                    '0000' + this.convert(this.hour1, 10, 16).padStart(4, '0') + this.convert(this.min1, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            }
            // this.content1 = '00010008001E';
            console.log('this.content1===', this.content1);
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.content1,
                    date: '1234567989',
                    deviceNum: this.dszs_eid,
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

        savebtn2() {
            clearInterval(this.timer);
            this.timer = null;

            this.color2 = !this.color2;
            this.setTimer();

            if (this.color2) {
                this.content2 =
                    '0001' + this.convert(this.hour2, 10, 16).padStart(4, '0') + this.convert(this.min2, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            } else {
                this.content2 =
                    '0000' + this.convert(this.hour2, 10, 16).padStart(4, '0') + this.convert(this.min2, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            }

            console.log('this.content2===', this.content2);
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.content2,
                    date: '1234567989',
                    deviceNum: this.dszs_eid,
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

        savebtn3() {
            clearInterval(this.timer);
            this.timer = null;
            this.color3 = !this.color3;
            this.setTimer();

            if (this.color3) {
                this.content3 =
                    '0001' + this.convert(this.hour3, 10, 16).padStart(4, '0') + this.convert(this.min3, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            } else {
                this.content3 =
                    '0000' + this.convert(this.hour3, 10, 16).padStart(4, '0') + this.convert(this.min3, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            }

            console.log('this.content3===', this.content3);
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.content3,
                    date: '1234567989',
                    deviceNum: this.dszs_eid,
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

        savebtn4() {
            clearInterval(this.timer);
            this.timer = null;
            this.color4 = !this.color4;
            this.setTimer();

            if (this.color4) {
                this.content4 =
                    '0001' + this.convert(this.hour4, 10, 16).padStart(4, '0') + this.convert(this.min4, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            } else {
                this.content4 =
                    '0000' + this.convert(this.hour4, 10, 16).padStart(4, '0') + this.convert(this.min4, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            }

            console.log('this.content4===', this.content4);
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.content4,
                    date: '1234567989',
                    deviceNum: this.dszs_eid,
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

        savebtn5() {
            clearInterval(this.timer);
            this.timer = null;

            this.setTimer();

            this.color5 = !this.color5;
            if (this.color5) {
                this.content5 =
                    '0001' + this.convert(this.hour5, 10, 16).padStart(4, '0') + this.convert(this.min5, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            } else {
                this.content5 =
                    '0000' + this.convert(this.hour5, 10, 16).padStart(4, '0') + this.convert(this.min5, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            }

            console.log('this.content5===', this.content5);
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.content5,
                    date: '1234567989',
                    deviceNum: this.dszs_eid,
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

        savebtn6() {
            clearInterval(this.timer);
            this.timer = null;

            this.setTimer();

            this.color6 = !this.color6;

            if (this.color6) {
                this.content6 =
                    '0001' + this.convert(this.hour6, 10, 16).padStart(4, '0') + this.convert(this.min6, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            } else {
                this.content6 =
                    '0000' + this.convert(this.hour6, 10, 16).padStart(4, '0') + this.convert(this.min6, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            }

            console.log('this.content6===', this.content6);
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.content6,
                    date: '1234567989',
                    deviceNum: this.dszs_eid,
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

        savebtn7() {
            clearInterval(this.timer);
            this.timer = null;

            this.setTimer();

            this.color7 = !this.color7;

            if (this.color7) {
                this.content7 =
                    '0001' + this.convert(this.hour7, 10, 16).padStart(4, '0') + this.convert(this.min7, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            } else {
                this.content7 =
                    '0000' + this.convert(this.hour7, 10, 16).padStart(4, '0') + this.convert(this.min7, 10, 16).padStart(4, '0'); //(`0001${this.param.hour1}`))   convert(num, from, to)
            }

            console.log('this.content7===', this.content7);
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.content7,
                    date: '1234567989',
                    deviceNum: this.dszs_eid,
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

        // gcc_add
       

        getdata() {
            console.log('开始请求数据！！！！！！');
            console.log('this.dszs_eid————', this.dszs_eid);

            this.$axios({
                method: 'post',
                url: '/appEquiment/selectDataByeid', //获取心跳包
                data: {
                    date: '2020-04-08T00:58:15.140Z',
                    eid: this.dszs_eid,
                    eypecode: '25187'
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('2020.8.7请求心跳包成功！！！！！！！！！！！');
                    let value = res.data.data.data;
                    console.log('请求到的心跳包数据---', value);
                    if (value.length <= 0 || value == undefined || value == null) {
                        console.log('请求服务器数据出错！！');
                    } else {
                        let zysn1 = this.hex_to_dec(value.substring(180, 184)); //周一使能  制水                16转10
                        var zyh1 = this.hex_to_dec(value.substring(184, 188)); //周一时     制水             16转10
                        var zyf1 = this.hex_to_dec(value.substring(188, 192)); //周一分     制水            16转10

                        console.log('zysn1------', zysn1);
                        console.log('zyh1------', zyh1);
                        console.log('zyf1------', zyf1);

                        if (zysn1 == '1') {
                            this.hour1 = this.PrefixInteger(zyh1, 2);
                            this.min1 = this.PrefixInteger(zyf1, 2);

                            this.color1 = true;
                        } else {
                            this.color1 = false;
                        }

                        let zysn2 = this.hex_to_dec(value.substring(192, 196)); //周二使能   制水               16转10
                        let zyh2 = this.hex_to_dec(value.substring(196, 200)); //周二时      制水             16转10
                        let zyf2 = this.hex_to_dec(value.substring(200, 204)); //周二分      制水           16转10

                        console.log('zysn2------', zysn2);
                        if (zysn2 == '1') {
                            this.hour2 = this.PrefixInteger(zyh2, 2);
                            this.min2 = this.PrefixInteger(zyf2, 2);
                            this.color2 = true;
                        } else {
                            this.color2 = false;
                        }

                        let zysn3 = this.hex_to_dec(value.substring(204, 208)); //周三使能                  16转10
                        let zyh3 = this.hex_to_dec(value.substring(208, 212)); //周三时                  16转10
                        let zyf3 = this.hex_to_dec(value.substring(212, 216)); //周三分                 16转10

                        console.log('zysn3------', zysn3);
                        if (zysn3 == '1') {
                            this.hour3 = this.PrefixInteger(zyh3, 2);
                            this.min3 = this.PrefixInteger(zyf3, 2);
                            this.color3 = true;
                        } else {
                            this.color3 = false;
                        }

                        let zysn4 = this.hex_to_dec(value.substring(216, 220)); //周四使能                  16转10
                        let zyh4 = this.hex_to_dec(value.substring(220, 224)); //周四时                  16转10
                        let zyf4 = this.hex_to_dec(value.substring(224, 228)); //周四分                 16转10

                        console.log('zysn4------', zysn4);
                        if (zysn4 == '1') {
                            // this.hour4 = zyh4;
                            // this.min4 = zyf4;
                            this.hour4 = this.PrefixInteger(zyh4, 2);
                            this.min4 = this.PrefixInteger(zyf4, 2);
                            this.color4 = true;
                        } else {
                            this.color4 = false;
                        }

                        let zysn5 = this.hex_to_dec(value.substring(228, 232)); //周五使能                  16转10
                        let zyh5 = this.hex_to_dec(value.substring(232, 236)); //周五时                  16转10
                        let zyf5 = this.hex_to_dec(value.substring(236, 240)); //周五分                 16转10

                        console.log('zysn5------', zysn5);
                        if (zysn5 == '1') {
                            // this.hour5 = zyh5;
                            // this.min5 = zyf5;
                            this.hour5 = this.PrefixInteger(zyh5, 2);
                            this.min5 = this.PrefixInteger(zyf5, 2);
                            this.color5 = true;
                        } else {
                            this.color5 = false;
                        }

                        let zysn6 = this.hex_to_dec(value.substring(240, 244)); //周六使能                  16转10
                        let zyh6 = this.hex_to_dec(value.substring(244, 248)); //周六时                  16转10
                        let zyf6 = this.hex_to_dec(value.substring(248, 252)); //周六分                 16转10

                        console.log('zysn6------', zysn6);
                        if (zysn6 == '1') {
                            // this.hour6 = zyh6;
                            // this.min6 = zyf6;
                            this.hour6 = this.PrefixInteger(zyh6, 2);
                            this.min6 = this.PrefixInteger(zyf6, 2);
                            this.color6 = true;
                        } else {
                            this.color6 = false;
                        }

                        let zysn7 = this.hex_to_dec(value.substring(252, 256)); //周天使能                  16转10
                        let zyh7 = this.hex_to_dec(value.substring(256, 260)); //周天时                  16转10
                        let zyf7 = this.hex_to_dec(value.substring(260, 264)); //周天分                 16转10

                        console.log('zysn7------', zysn7);
                        if (zysn7 == '1') {
                            // this.hour7 = zyh7;
                            // this.min7 = zyf7;
                            this.hour7 = this.PrefixInteger(zyh7, 2);
                            this.min7 = this.PrefixInteger(zyf7, 2);
                            this.color7 = true;
                        } else {
                            this.color7 = false;
                        }
                    }
                }
            });

            // console.log('2020.6.16数据请求完成！！！！！！');
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

        this.dszs_eid = localStorage.getItem('ms_eid');
        console.log(this.dszs_eid);

        this.getdata();
        this.setTimer();
    },

    destroyed: function() {
        // 每次离开当前界面时，清除定时器
        clearInterval(this.timer);
        this.timer = null;
    }
};
</script scoped>

<style scoped>
.ys1 {
    position: fixed;
    width: 1010px;
    height: 540px;
    background-color: rgba(192, 192, 192);
    font-size: 18px;
    background-size: 100%;
    margin-top: 20px;
    text-align: center;
}

.ys_abc {
    position: fixed;

    background-color: rgba(192, 192, 192);
}

.ys2 {
    position: fixed;

    background-color: rgba(192, 192, 192);
    margin-top: 30px;
}

.ys_dszsrq {
    width: 482px;
    float: left;
    margin-left: 50px;
    background-color: rgba(192, 192, 192);
    line-height: 10px;
    margin-top: 30px;
}

.ms-title {
    height: 30px;
    width: 100%;
    position: fixed;
    margin: auto;
    text-align: center; /*div的内容居中*/
    margin-left: 100px;
    right: 676px;
    line-height: 30px; /*垂直居中*/
    font-size: 18px;
    
}

.ms-title1 {
    height: 30px;
    width: 100%;
    position: fixed;
    margin: auto;
    text-align: center; /*div的内容居中*/
    margin-left: 100px;
    right: 150px;
    line-height: 30px; /*垂直居中*/
    font-size: 18px;
    background-color: rgba(192, 192, 192);
    
}

.ys_fh {
    position: fixed;
    font-size: 24px;
    margin-top: 400px;
    margin-left: 0px;
    text-align: center;
    list-style: none;
    background-color: rgba(192, 192, 192);
    width: 150px;
    height: 60px;
    line-height: 60px;
    z-index: 100;
    right: 1100px;
    letter-spacing: 30px;
    text-indent: 30px;
}

.save-btn1 {
    position: fixed;
    font-size: 16px;
    margin-top: 70px;

    text-align: center;
    list-style: none;
    background-color: rgba(192, 192, 192);
    width: 127px;
    line-height: 40px;
    z-index: 100;
}
.save-btn2 {
    position: fixed;
    font-size: 16px;
    margin-top: 110px;
    background-color: rgba(192, 192, 192);
    text-align: center;
    list-style: none;

    width: 127px;
    line-height: 40px;
    z-index: 100;
}
.save-btn3 {
    position: fixed;
    font-size: 16px;
    margin-top: 150px;
    background-color: rgba(192, 192, 192);
    text-align: center;
    list-style: none;

    width: 127px;
    line-height: 40px;
    z-index: 100;
}

.save-btn4 {
    position: fixed;
    font-size: 16px;
    margin-top: 190px;
    background-color: rgba(192, 192, 192);
    text-align: center;
    list-style: none;

    width: 127px;
    line-height: 40px;
    z-index: 100;
}
.save-btn5 {
    position: fixed;
    font-size: 16px;
    margin-top: 230px;
    background-color: rgba(192, 192, 192);
    text-align: center;
    list-style: none;

    width: 127px;
    line-height: 40px;
    /* z-index: 100; */
}
.save-btn6 {
    position: fixed;
    font-size: 16px;
    margin-top: 270px;

    text-align: center;
    list-style: none;
    background-color: rgba(192, 192, 192);
    width: 127px;
    line-height: 40px;
    /* z-index: 100; */
}

.save-btn7 {
    position: fixed;
    font-size: 16px;
    margin-top: 310px;

    text-align: center;
    list-style: none;
    background-color: rgba(192, 192, 192);
    width: 127px;
    line-height: 40px;
    /* z-index: 100; */
}

.css_hour1 {
    position: fixed;
    font-size: 16px;
    margin-top: 74px;
    margin-left: 146px;
    width: 75px;
    
    z-index: 100;
    text-align: center;
    vertical-align:middel;
}
.css_min1 {
    position: fixed;
    font-size: 16px;
    margin-top: 74px;
    margin-left: 240px;
    width: 75px;
    height: 20px;
    line-height: 20px;
    z-index: 100;
    text-align: center;
    vertical-align:middel;
}
.css_hour2 {
    position: fixed;
    font-size: 16px;
    margin-top: 116px;
    margin-left: 146px;
    width: 75px;
    height: 20px;
    line-height: 20px;
    z-index: 100;
}

.css_min2 {
    position: fixed;
    font-size: 16px;
    margin-top: 116px;
    margin-left: 240px;
    width: 75px;
    height: 20px;
    line-height: 20px;
    z-index: 100;
}
.css_hour3 {
    position: fixed;
    font-size: 16px;
    margin-top: 154px;
    margin-left: 146px;
    width: 75px;
    height: 20px;
    line-height: 20px;
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
    font-size: 16px;
    margin-top: 274px;
    margin-left: 146px;
    width: 75px;
    height: 30px;
    z-index: 100;
}

.css_min6 {
    position: fixed;
    font-size: 16px;
    margin-top: 274px;
    margin-left: 240px;
    width: 75px;
    height: 30px;
    z-index: 100;
}

.css_hour7 {
    position: fixed;
    font-size: 16px;
    margin-top: 316px;
    margin-left: 146px;
    width: 75px;
    height: 20px;
    z-index: 100;
    text-align: center;
}

.css_min7 {
    position: fixed;
    font-size: 16px;
    margin-top: 316px;
    margin-left: 240px;
    width: 75px;
    height: 20px;
    z-index: 100;
    line-height: 20px;
     text-align: center;
}

.data_table {
    /* position: fixed; */
    margin-top: 30px;
    height: 320px;
    font-size: 16px;
    background-color: rgba(192, 192, 192);
}

.open {
    background: #1afa29;
    color: black;
}
.close {
    background: red;
    color: black;
}

.css_inpuit {
    position: fixed;
    
    text-align: center;
    background-color: rgba(192, 192, 192);
    width: 25px;
    margin-top: 0px;
    right: 1774px;
}

.css_inpuit1 {
    position: fixed;
    

    background-color: rgba(192, 192, 192);
    width: 25px;
    margin-top: 0px;
    right: 1864px;
}

ul {
    position: fixed;

    width: 49px;
    margin-top: 0px;
    right: 1820px;

    background-color: rgba(192, 192, 192);
}

</style>