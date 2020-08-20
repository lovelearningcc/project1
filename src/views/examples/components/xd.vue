<template>
    <div class="ms-title0">
        <div class="ms-title1">
            运行状态：
            <span>{{run_status}}</span>
        </div>

        <div class="ms-title2">
            工作模式：
            <span>{{work_mode}}</span>
        </div>

        <!-- 流动快 -->
        <div class="hline" :class="hl?'open':'close'" />
        <div class="hline1" :class="hl1?'open':'close'" />
        <div class="hline2" :class="hl2?'open':'close'" />
        <div class="hline3" :class="hl3?'open':'close'" />
        <div class="hline4" :class="hl4?'open':'close'" />
        <div class="hline5" :class="hl5?'open':'close'" />
        <div class="hline6" :class="hl6?'open':'close'" />
        <div class="hline7" :class="hl7?'open':'close'" />
        <div class="hline8" :class="hl8?'open':'close'" />
        <div class="hline9" :class="hl9?'open':'close'" />
        <div class="hline10" :class="hl10?'open':'close'" />
        <div class="hline11" :class="hl11?'open':'close'" />
        <div class="hline12" :class="hl12?'open':'close'" />
        <div class="hline13" :class="hl13?'open':'close'" />
        <div class="hline14" :class="hl14?'open':'close'" />
        <div class="hline15" :class="hl15?'open':'close'" />
        <div class="hline16" :class="hl16?'open':'close'" />
        <div class="hline17" :class="hl17?'open':'close'" />
        <div class="hline18" :class="hl18?'open':'close'" />
        <div class="hline19" :class="hl19?'open':'close'" />
        <div class="hline20" :class="hl20?'open':'close'" />
        <div class="hline21" :class="hl21?'open':'close'" />
        <div class="hline22" :class="hl22?'open':'close'" />
        <div class="hline23" :class="hl23?'open':'close'" />
        <div class="hline24" :class="hl24?'open':'close'" />
        <div class="hline25" :class="hl25?'open':'close'" />
        <div class="hline26" :class="hl26?'open':'close'" />
        <div class="hline27" :class="hl27?'open':'close'" />
        <div class="hline28" :class="hl28?'open':'close'" />
        <div class="hline29" :class="hl29?'open':'close'" />
        <div class="hline30" :class="hl30?'open':'close'" />

        <div class="sline" :class="sl?'open':'close'" />
        <div class="sline1" :class="sl1?'open':'close'" />
        <div class="sline2" :class="sl2?'open':'close'" />
        <div class="sline3" :class="sl3?'open':'close'" />
        <div class="sline4" :class="sl4?'open':'close'" />
        <div class="sline5" :class="sl5?'open':'close'" />
        <div class="sline6" :class="sl6?'open':'close'" />
        <div class="sline7" :class="sl7?'open':'close'" />
        <div class="sline8" :class="sl8?'open':'close'" />
        <div class="sline9" :class="sl9?'open':'close'" />
        <div class="sline10" :class="sl10?'open':'close'" />
        <div class="sline11" :class="sl11?'open':'close'" />
        <div class="sline12" :class="sl12?'open':'close'" />
        <div class="sline13" :class="sl13?'open':'close'" />
        <div class="sline14" :class="sl14?'open':'close'" />
        <div class="sline15" :class="sl15?'open':'close'" />
        <div class="sline16" :class="sl16?'open':'close'" />
        <div class="sline17" :class="sl17?'open':'close'" />

        <div class="login-wrap">
            <div class="rs">
                <span>{{work_mode1}}</span>
            </div>

            <img :src="imgUrl1" class="rsh" />
            <img :src="imgUrl2" class="rsm" />
            <img :src="imgUrl3" class="rsl" />

            <div class="ys">
                <span>{{work_mode1}}</span>
            </div>
            <img :src="imgUrl4" class="ysh" />
            <img :src="imgUrl5" class="ysm" />
            <img :src="imgUrl6" class="ysl" />

            <div class="cs">
                <span>{{work_mode1}}</span>
            </div>

            <img :src="imgUrl7" class="csh" />
            <img :src="imgUrl8" class="csm" />
            <img :src="imgUrl9" class="csl" />

            <ul>
                <li
                    class="item"
                    :class="current1?'open':'close'"
                    @click="btn_xd"
                >{{current1?'消 毒':'消 毒'}}</li>

                <li
                    class="item"
                    :class="current2?'open':'close'"
                    @click="btn_xdzt"
                >{{current2?'消毒暂停':'消毒暂停'}}</li>

                <li
                    class="item"
                    :class="current3?'open':'close'"
                    @click="btn_cx"
                >{{current3?'冲 洗':'冲 洗'}}</li>

                <li
                    class="item"
                    :class="current4?'open':'close'"
                    @click="btn_zcd"
                >{{current4?'主菜单':'主菜单'}}</li>

                <!-- <li
                    class="item"
                    :class="current5?'open':'close'"
                    @click="changebtn5"
                >{{current5?'夜间模式':'夜间模式'}}</li>

                <li class="item" :class="current6?'open':'close'">{{current6?'急 停':'急 停'}}</li>-->
            </ul>
        </div>

        <div class="radio_ys">
            <label>
                <input v-model="radioVal" type="radio" value="0" @change="getRadioVal1" />自动
            </label>
            <label>
                <input v-model="radioVal" type="radio" value="1" @change="getRadioVal2" />反冲洗状态
            </label>
            <label>
                <input v-model="radioVal" type="radio" value="2" @change="getRadioVal3" />夜间模式
            </label>
        </div>
    </div>
</template>

<script>
import { http } from '@/utils/request';
export default {
    data: function() {
        return {
            radioVal: '0',

            xd_flag: false,
            cx_flag: false,

             xd_flag1: false,
             cx_flag1: false,

             zs_Falg: false,
             zs_Falg1: false,

            content0: '', //发送的内容  ——————————  夜间模式
            content1: '', //发送的内容  ——————————  消毒按钮
            content2: '', //发送的内容  ——————————  消毒暂停按钮
            content3: '', //发送的内容  ——————————  冲洗按钮
            content4: '', //发送的内容
            content5: '', //发送的内容

            current1: false,  //消毒
            current2: false,  //消毒暂停
            current3: false,  //冲洗
            current4: false,  //主菜单
            // current5: false,
            // current6: false,

            hl: false,
            hl1: false,
            hl2: false,
            hl3: false,
            hl4: false,
            hl5: false,
            hl6: false,
            hl7: false,
            hl8: false,
            hl9: false,
            hl10: false,
            hl11: false,
            hl12: false,
            hl13: false,
            hl14: false,
            hl15: false,
            hl16: false,

            hl17: false,
            hl18: false,
            hl19: false,
            hl20: false,
            hl21: false,
            hl22: false,
            hl23: false,

            hl24: false,
            hl25: false,
            hl26: false,
            hl27: false,
            hl28: false,
            hl29: false,

            hl30: false,

            sl: false,
            sl1: false,
            sl2: false,
            sl3: false,
            sl4: false,
            sl5: false,
            sl6: false,
            sl7: false,
            sl8: false,
            sl9: false,
            sl10: false,
            sl11: false,
            sl12: false,
            sl13: false,
            sl14: false,
            sl15: false,
            sl16: false,
            sl17: false,

            imgUrl1: '0',
            imgUrl2: '0',
            imgUrl3: '0',
            imgUrl4: '0',
            imgUrl5: '0',
            imgUrl6: '0',
            imgUrl7: '0',
            imgUrl8: 0,
            imgUrl9: 0,

            template: '<p>I am ok</p>',

            ys1: true,
            ys2: false,

            flag: true, //单位切换开关
            btnText: '停止',

            content: '', //发送的内容

            zs_Falg: '',
            zs_Falg1: '',

            eid3: '', //设备号
            eypecode3: '', //设备类型
            uid3: '', //不同类型设备识别码
            iysdd: '',
            iyjnsdd: '',
            iyjcsdd: '',
            iejcsdd: '',
            iyjcsll: '',
            iejcsll: '',
            iyjfsll: '',

            work_mode: '', //工作模式
            work_mode1: '', //液位颜色变化
            run_status: '', //运行状态

            szs: '', //实时显示标志位
            sxd: '',
            sxdzt: '',
            scx: '',
            syjms: '',
            sjt: '',
            sfc: '',

            yzs: '', //
            yxd: '',
            yxdzt: '',
            ycx: '',
            yyjms: '',

            timer: null, // 定时器名称

            // img: '',

            uid: '',
            param: {
                username: '',
                password: '',
                username1: 'wlssj',
                password1: '123456'
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        };
    },

    methods: {
        getRadioVal1() {
            //反冲洗状态
            console.log(this.radioVal);
        },
        getRadioVal2() {
            //反冲洗状态
            console.log(this.radioVal);
        },

        getRadioVal3() {
            //夜间模式
            console.log('开始点击夜间模式按钮。。。。');

            // this.current1 = !this.current1;

            if (this.radioVal3) {
                this.content0 = '0001';
            } else {
                this.content0 = '0000';
            }

            console.log('this.content1 ==  ', this.content1);
            console.log('this.content0 ==  ', this.content0);
            console.log('this.uid3 ==  ', this.uid3);
            console.log('this.eid3 ==  ', this.eid3);

            // debugger;
            clearInterval(this.timer);
            this.timer = null;
            this.setTimer();

            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.content1,
                    date: new Date().toLocaleString(),
                    // deviceNum: '0002D102',
                    // etypecode: '25187',
                    deviceNum: this.eid3,
                    etypecode: 25187,
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '0145',
                    // uid: '1141515585641832449'
                    uid: this.uid3
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('远程控制夜间模式成功----------！！！');
                    console.log(res.data);
                }
            });

            console.log('夜间模式远程控制执行完毕');
        },

        btn_xd() {
            console.log('开始点击消毒按钮。。。。');

            if (this.current3 == true || this.zs_Falg == true || this.zs_Falg1 == true) {
                this.$message.success('当前不能点击消毒按钮');
            } else {
                this.current1 = !this.current1;

                if (this.current1 == true) {
                    this.content1 = '0001';
                    this.xd_flag = true;
                } else {
                    this.content1 = '0000';
                    this.xd_flag = false;
                }
                localStorage.setItem('ms_xd', this.xd_flag);

                console.log('this.content1 ==  ', this.content1);
                console.log('this.uid3 ==  ', this.uid3);
                console.log('this.eid3 ==  ', this.eid3);

                // debugger;
                clearInterval(this.timer);
                this.timer = null;
                this.setTimer();

                http({
                    url: '/appEquiment/customMessage',
                    method: 'post',
                    data: {
                        commond: '0110',
                        content: this.content1,
                        date: new Date().toLocaleString(),
                        // deviceNum: '0002D102',
                        // etypecode: '25187',
                        deviceNum: this.eid3,
                        etypecode: 25187,
                        iemi: '867665048501482',
                        num: '0001',
                        numLen: '02',
                        phone: '18349112013',
                        startAdd: '0141',
                        // uid: '1141515585641832449'
                        uid: this.uid2
                    }
                }).then(res => {
                    if (res.data.code === 0) {
                        console.log('远程控制消毒成功----------！！！');
                        console.log(res.data);
                    }
                });

                console.log('消毒远程控制执行完毕');
            }
        },

        btn_xdzt() {
            console.log('开始点击消毒暂停按钮。。。。');

            if (this.current1 == false || this.current3 == true) {
                this.$message.success('当前不能点击消毒暂停按钮');
            } else {
                this.current2 = !this.current2;

                if (this.current2 == true) {
                    this.content2 = '0001';
                } else {
                    this.content2 = '0000';
                }

                console.log('this.content2 ==  ', this.content2);
                console.log('this.uid3 ==  ', this.uid3);
                console.log('this.eid3 ==  ', this.eid3);

                // debugger;
                clearInterval(this.timer);
                this.timer = null;
                this.setTimer();

                http({
                    url: '/appEquiment/customMessage',
                    method: 'post',
                    data: {
                        commond: '0110',
                        content: this.content2,
                        date: new Date().toLocaleString(),
                        // deviceNum: '0002D102',
                        // etypecode: '25187',
                        deviceNum: this.eid3,
                        etypecode: 25187,
                        iemi: '867665048501482',
                        num: '0001',
                        numLen: '02',
                        phone: '18349112013',
                        startAdd: '0142',
                        // uid: '1141515585641832449'
                        uid: this.uid3
                    }
                }).then(res => {
                    if (res.data.code === 0) {
                        console.log('远程控制消毒暂停成功----------！！！');
                        console.log(res.data);
                    }
                });

                console.log('消毒暂停远程控制执行完毕');
            }
        },

        btn_cx() {
            console.log('开始点击冲洗按钮。。。。');

            if (this.current1 || this.current2 || this.zs_Falg || this.zs_Falg1) {
                this.$message.success('当前不能点击冲洗按钮');
            } else {
                this.current3 = !this.current3;

                if (this.current3 == true) {
                    this.content3 = '0001';
                    this.cx_flag = true;
                } else {
                    this.content3 = '0000';
                    this.cx_flag = false;
                }

                localStorage.setItem('ms_cx', this.cx_flag);

                console.log('this.content3 ==  ', this.content3);
                console.log('this.uid3 ==  ', this.uid3);
                console.log('this.eid3 ==  ', this.eid3);

                // debugger;
                clearInterval(this.timer);
                this.timer = null;
                this.setTimer();

                http({
                    url: '/appEquiment/customMessage',
                    method: 'post',
                    data: {
                        commond: '0110',
                        content: this.content3,
                        date: new Date().toLocaleString(),
                        // deviceNum: '0002D102',
                        // etypecode: '25187',
                        deviceNum: this.eid3,
                        etypecode: 25187,
                        iemi: '867665048501482',
                        num: '0001',
                        numLen: '02',
                        phone: '18349112013',
                        startAdd: '0143',
                        // uid: '1141515585641832449'
                        uid: this.uid3
                    }
                }).then(res => {
                    if (res.data.code === 0) {
                        console.log('远程控制冲洗成功----------！！！');
                        console.log(res.data);
                    }
                });

                console.log('冲洗远程控制执行完毕');
            }
        },

        btn_zcd() {
            console.log('点击了主菜单按钮。。。。');
            this.$router.push({
                path: '/zcd'
                // query: {
                //     uid: this.uid
                // }
            });
        },
        // changebtn1() {
        //     console.log('开始点击按钮1。。。。');

        //     if (this.current2 || this.current3 || this.current4 || this.current5 || this.current6) {
        //         this.$message.success('当前不能点击消毒按钮');
        //     } else {
        //         this.current1 = !this.current1;
        //     }
        // },

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

            let value = '';
            for (let i = 0; i < str.length; i++) {
                for (let j = 0; j < hex_array.length; j++) {
                    if (str.charAt(i).toLowerCase() == hex_array[j].key) {
                        value = value.concat(hex_array[j].val);
                        break;
                    }
                }
            }

            return value;
        },

        getdata() {
            console.log('0000000000000000000');
            console.log('开始请求数据！！！！！！');

            // TelephonyManager tm = (TelephonyManager)getSystemService(TELEPHONY_SERVICE);
            // var deviceId=tm.getDeviceId();

            this.loading = true;
            this.$axios({
                method: 'post',
                url: '/appEquiment/selectDataByeid', //获取心跳包
                data: {
                    date: '2020-04-08T00:58:15.140Z',
                    eid: this.eid3,
                    eypecode: '25187'
                }
            }).then(res => {
                if (res.data.code === 0) {
                    // console.log('2020.4.21请求心跳包成功！！！！！！！！！！！！！！！');
                    let value = res.data.data.data;
                    // console.log('ababababbba---', value);
                    if (value && value != '') {
                        let value3 = this.hex_to_bin(value.substring(28, 32)); //报警状态1                 16转2

                        let value1 = this.hex_to_dec(value.substring(20, 24)); //工作模式                  16转10
                        let value2 = this.hex_to_bin(value.substring(24, 28)); //运行状态                  16转2
                        let value4 = this.hex_to_bin(value.substring(424, 428)); //消毒界面流动快属性显示    16转2

                        //工作模式
                        if (value1 == '0') {
                            this.work_mode = '双级反渗';
                            this.work_mode1 = '0.8';

                            // this.current1 = false;
                            this.imgUrl1 = 'http://212.64.37.240:8080/dmrbell/have.png';
                            this.imgUrl4 = 'http://212.64.37.240:8080/dmrbell/have.png';
                            this.imgUrl7 = 'http://212.64.37.240:8080/dmrbell/have.png';
                            this.imgUrl2 = 'http://212.64.37.240:8080/dmrbell/have.png';
                            this.imgUrl5 = 'http://212.64.37.240:8080/dmrbell/have.png';
                            this.imgUrl8 = 'http://212.64.37.240:8080/dmrbell/have.png';
                            this.imgUrl3 = 'http://212.64.37.240:8080/dmrbell/no.png';
                            this.imgUrl6 = 'http://212.64.37.240:8080/dmrbell/no.png';
                            this.imgUrl9 = 'http://212.64.37.240:8080/dmrbell/no.png';
                        } else if (value1 == '1') {
                            // this.current2 = true;
                            this.work_mode = '一级反渗';
                            his.work_mode1 = '0.4';

                            this.imgUrl1 = 'http://212.64.37.240:8080/dmrbell/have.png';
                            this.imgUrl4 = 'http://212.64.37.240:8080/dmrbell/have.png';
                            this.imgUrl7 = 'http://212.64.37.240:8080/dmrbell/have.png';
                            this.imgUrl2 = 'http://212.64.37.240:8080/dmrbell/have.png';
                            this.imgUrl5 = 'http://212.64.37.240:8080/dmrbell/have.png';
                            this.imgUrl8 = 'http://212.64.37.240:8080/dmrbell/have.png';
                            this.imgUrl3 = 'http://212.64.37.240:8080/dmrbell/no.png';
                            this.imgUrl6 = 'http://212.64.37.240:8080/dmrbell/no.png';
                            this.imgUrl9 = 'http://212.64.37.240:8080/dmrbell/no.png';
                        } else {
                            // this.current3 = true;

                            this.work_mode == '二级反渗';
                            this.work_mode1 == '1.2';

                            this.imgUrl1 = 'http://212.64.37.240:8080/dmrbell/have.png';
                            this.imgUrl4 = 'http://212.64.37.240:8080/dmrbell/have.png';
                            this.imgUrl7 = 'http://212.64.37.240:8080/dmrbell/have.png';
                            this.imgUrl2 = 'http://212.64.37.240:8080/dmrbell/have.png';
                            this.imgUrl5 = 'http://212.64.37.240:8080/dmrbell/have.png';
                            this.imgUrl8 = 'http://212.64.37.240:8080/dmrbell/have.png';
                            this.imgUrl3 = 'http://212.64.37.240:8080/dmrbell/no.png';
                            this.imgUrl6 = 'http://212.64.37.240:8080/dmrbell/no.png';
                            this.imgUrl9 = 'http://212.64.37.240:8080/dmrbell/no.png';
                        }

                        console.log('value4----', value4);

                        // 消毒界面流动快属性解析
                        let vy0 = value4.substring(15, 16); //
                        let vy1 = value4.substring(14, 15); //
                        let vy2 = value4.substring(13, 14); //
                        let vy3 = value4.substring(12, 13); //
                        let vy4 = value4.substring(11, 12); //
                        let vy5 = value4.substring(10, 11); //

                        console.log('vy1--vy1----', vy1);

                        if (vy1 == '1') {
                            this.hl = true;
                            this.hl1 = true;
                            this.hl2 = true;
                            this.hl3 = true;
                            this.hl4 = true;
                            this.hl5 = true;
                            this.hl6 = true;
                            this.hl7 = true;
                            this.hl8 = true;
                            this.hl9 = true;
                            this.hl10 = true;
                            this.hl11 = true;
                            this.hl12 = true;

                            this.hl13 = true;
                            this.hl14 = true;
                            this.hl15 = true;
                            this.hl16 = true;
                            this.hl17 = true;
                            this.hl18 = true;
                            this.hl19 = true;
                            this.hl20 = true;
                            this.hl21 = true;
                            this.hl22 = true;
                            this.hl23 = true;
                            this.hl24 = true;
                            this.hl25 = true;
                            this.hl26 = true;
                            this.hl27 = true;
                            this.hl28 = true;
                            this.hl29 = true;
                            this.hl30 = true;
                            this.hl31 = true;
                            this.hl32 = true;
                            this.hl33 = true;

                            this.sl = true;
                            this.sl1 = true;
                            this.sl2 = true;
                            this.sl3 = true;
                            this.sl4 = true;
                            this.sl5 = true;
                            this.sl6 = true;
                            this.sl7 = true;
                            this.sl8 = true;
                            this.sl9 = true;
                            this.sl10 = true;
                            this.sl11 = true;
                            this.sl12 = true;
                            this.sl13 = true;
                            this.sl14 = true;
                            this.sl15 = true;
                            this.sl16 = true;
                            this.sl17 = true;
                            this.sl18 = true;
                            this.sl19 = true;
                            this.sl20 = true;

                            this.sl21 = true;
                            this.sl22 = true;
                            this.sl23 = true;
                            this.sl24 = true;
                            this.sl25 = true;
                            this.sl26 = true;
                            this.sl27 = true;
                            this.sl28 = true;
                            // this.sl29 = true;
                            // this.sl30 = true;
                        } else {
                            this.hl = false;
                            this.hl1 = false;
                            this.hl2 = false;
                            this.hl3 = false;
                            this.hl4 = false;
                            this.hl5 = false;
                            this.hl6 = false;
                            this.hl7 = false;
                            this.hl8 = false;
                            this.hl9 = false;
                            this.hl10 = false;
                            this.hl11 = false;
                            this.hl12 = false;
                            this.hl13 = false;
                            this.hl14 = false;
                            this.hl15 = false;
                            this.hl16 = false;
                            this.hl17 = false;
                            this.hl18 = false;
                            this.hl19 = false;
                            this.hl20 = false;
                            this.hl21 = false;
                            this.hl22 = false;
                            this.hl23 = false;
                            this.hl24 = false;
                            this.hl25 = false;
                            this.hl26 = false;
                            this.hl27 = false;
                            this.hl28 = false;
                            this.hl29 = false;
                            this.hl30 = false;
                            this.hl31 = false;
                            this.hl32 = false;
                            this.hl33 = false;

                            this.sl = false;
                            this.sl1 = false;
                            this.sl2 = false;
                            this.sl3 = false;
                            this.sl4 = false;
                            this.sl5 = false;
                            this.sl6 = false;
                            this.sl7 = false;
                            this.sl8 = false;
                            this.sl9 = false;
                            this.sl10 = false;
                            this.sl11 = false;
                            this.sl12 = false;
                            this.sl13 = false;
                            this.sl14 = false;
                            this.sl15 = false;
                            this.sl16 = false;
                            this.sl17 = false;
                            this.sl18 = false;
                            this.sl19 = false;
                            this.sl20 = false;
                            this.sl21 = false;
                            this.sl22 = false;
                            this.sl23 = false;
                            this.sl24 = false;
                            this.sl25 = false;
                            this.sl26 = false;
                            this.sl27 = false;
                            this.sl28 = false;
                            // this.sl29 = false;
                            // this.sl30 = false;
                        }

                        console.log('value2----', value2); //设备运行状态

                        // let vzs = value2.substring(15, 16); //制水
                        let vcx = value2.substring(14, 15); //冲洗
                        let vxd = value2.substring(13, 14); //消毒
                        let vfc = value2.substring(12, 13); //反冲
                        let vyjms = value2.substring(11, 12); //夜间模式
                        let vjt = value2.substring(10, 11); //急停状态

                        //设备运行状态
                        if (vxd == '1') {
                            this.run_status = '消  毒';
                            console.log('消  毒');
                            this.current1 = true;
                            this.xd_flag1 = true;
                        } else {
                            this.current1 = false;
                            this.xd_flag1 = false;
                        }

                        if (vcx == '1') {
                            this.run_status = '冲  洗';
                            console.log('冲  洗');
                            this.current3 = true;
                            this.cx_flag1 = true;
                            // this.scx = true;
                        } else {
                            this.current3 = false;
                            this.cx_flag1 = false;
                        }

                        localStorage.setItem('ms_xd1', this.xd_flag1);
                        localStorage.setItem('ms_cx1', this.cx_flag1);

                        if (vjt == '1') {
                            console.log('点击了急停按钮。。。。');
                            this.$router.push({
                                path: '/jt'
                                // query: {
                                //     uid: this.uid
                                // }
                            });
                        }

                        if (vfc == '1') {
                            //radioVal1: '', // 用于设置默认选中项
                            this.radioVal = 1;
                            this.run_status = '反  冲';
                            // this.sfc = true;
                        }
                        if (vyjms == '1') {
                            this.radioVal = 2;
                            this.run_status = '夜间模式';
                        }

                        if (value2 == '0000000000000000') {
                            this.run_status = '空  闲';
                        }

                        //报警状态显示

                        let value5 = this.hex_to_bin(value.substring(28, 32)); //报警状态1      16转2

                        console.log('value5的值为：', value5); //0000000011000000

                        let value00 = this.hex_to_dec(value.substring(0, 4)); //年                 16转10
                        let value01 = this.hex_to_dec(value.substring(4, 6)); //月                 16转10
                        let value02 = this.hex_to_dec(value.substring(6, 8)); //日                16转10

                        let value03 = this.hex_to_dec(value.substring(8, 12)); //时                 16转10
                        let value04 = this.hex_to_dec(value.substring(12, 14)); //分                 16转10
                        let value05 = this.hex_to_dec(value.substring(14, 16)); //秒                 16转10

                        let date = value00 + '年' + value01 + '月' + value02 + '日';

                        let time = value03 + '时' + value04 + '分' + value05 + '秒';

                        let params = {
                            date: value00 + '年' + value01 + '月' + value02 + '日',
                            time: value03 + '时' + value04 + '分' + value05 + '秒'
                        };

                        let alarmdes = {};

                        let alarmdes0;
                        let alarmdes1;
                        let alarmdes2;
                        let alarmdes3;
                        let alarmdes4;
                        let alarmdes5;
                        let alarmdes6;
                        let alarmdes7;
                        let alarmdes8;

                        let bj0 = value5.substring(15, 16); //与PLC通讯故障
                        let bj1 = value5.substring(14, 15); //平衡器水位过低
                        let bj2 = value5.substring(13, 14); //高压泵1出口压力过高
                        let bj3 = value5.substring(12, 13); //高压泵2出口压力过低
                        let bj4 = value5.substring(11, 12); //高压泵2出口压力过高
                        let bj5 = value5.substring(10, 11); //反冲洗动作
                        let bj6 = value5.substring(9, 10); //原水进水下限
                        let bj7 = value5.substring(8, 9); //二级产水电导异常

                        let data1 = [];

                        //设备报警
                        if (bj0 == '1') {
                            alarmdes0 = '与PLC通讯故障';
                            data1.push({ ...params, alarmdes: alarmdes0 });
                        } else {
                            // console.log('报警0不存在！！');
                        }
                        if (bj1 == '1') {
                            alarmdes1 = '平衡器水位过低';
                            data1.push({ ...params, alarmdes: alarmdes1 });
                        } else {
                            // console.log('报警1不存在！！');
                        }
                        if (bj2 == '1') {
                            alarmdes2 = '高压泵1出口压力过高';
                            data1.push({ ...params, alarmdes: alarmdes2 });
                        } else {
                            // console.log('报警2不存在！！');
                        }
                        if (bj3 == '1') {
                            alarmdes3 = '高压泵2出口压力过低';
                            data1.push({ ...params, alarmdes: alarmdes3 });
                        } else {
                            // console.log('报警3不存在！！');
                        }
                        if (bj4 == '1') {
                            alarmdes4 = '高压泵2出口压力过高';
                            data1.push({ ...params, alarmdes: alarmdes4 });
                        } else {
                            // console.log('报警4不存在！！');
                        }
                        if (bj5 == '1') {
                            alarmdes5 = '反冲洗动作';
                            data1.push({ ...params, alarmdes: alarmdes5 });
                        } else {
                            // console.log('报警5不存在！！');
                        }
                        if (bj6 == '1') {
                            alarmdes6 = '二级产水电导异常';
                            data1.push({ ...params, alarmdes: alarmdes6 });
                        } else {
                            // console.log('报警6不存在！！');
                        }
                        if (bj7 == '1') {
                            alarmdes7 = '报警7';
                            data1.push({ ...params, alarmdes: alarmdes7 });
                        } else {
                            // console.log('报警7不存在！！');
                        }

                        if (value5 == '0000000000000000') {
                            alarmdes8 = '无报警';
                            data1.push({ ...params, alarmdes: alarmdes8 });
                        } else {
                            // console.log('无报警不存在！！');
                        }

                        // console.log('data1', data1);
                        // this.tableData1 = this.tableData1.concat(data1);
                        // console.log('tableData1', this.tableData1);
                    }
                }
            });
            this.loading = false;

            // console.log('2020.5.12数据请求完成！！！！！！');
            // console.log('00000000000000000000000000');
            // console.log(this.szs);
        },

        setTimer() {
            if (this.timer == null) {
                this.timer = setInterval(() => {
                    this.getdata();

                    this.flagTime = true;
                    // console.log(this.eid);
                    // console.log(this.eypecode);

                    // axios 中的POST请求
                }, 30000);
            }
        }
    },

    created: function() {
        console.log('111111111111111111111111111111');

        // console.log(this.$route.query);

        console.log('消毒界面接收传参成功！！！');

        this.zs_Falg = localStorage.getItem('ms_zs');
        this.zs_Falg1 = localStorage.getItem('ms_zs1');

        this.eid3 = localStorage.getItem('ms_eid');
        this.eypecode3 = localStorage.getItem('ms_etypecode');
        this.uid3 = localStorage.getItem('ms_uid');

        console.log(this.eid3);
        console.log(this.eypecode3);
        console.log(this.uid3);

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
ul {
    width: 100px;
    height: 100px;
    margin-top: 30px;
    position: fixed;
    right: 1000px;
    top: 20px;
}
.item {
    /* position: fixed; */
    /* width: 70px;
    border-radius: 15px;
    text-align: center;
    line-height: 30px;
    margin-top: 10px;
    background: white;
    list-style: none; */

    font-size: 20px;
    margin-top: 20px;
    margin-left: 30px;
    text-align: center;
    list-style: none;
    width: 147px;
    background: rgba(192, 192, 192, 0.3);
    line-height: 55px;
    /* z-index: 100; */
    font-weight: bold;
    font-family: SimSun;
    border-radius: 15px;
}

.open {
    background: #1afa29;
    color: black;
}
.close {
    background: #c0c0c0;
    color: black;
}

.login-wrap {
    position: fixed;
    width: 771px;
    height: 451px;
    background-image: url(../../../assets/img/bg.png);
    background-size: 100%;
    margin-top: 30px;
}

.rs {
    position: fixed;
    font-size: 19px;
    color: #000;
    /* background-color: #73b2ff; */
    padding: 43px 0px 0px 363px;
}

.rsh {
    position: fixed;
    width: 23px;
    height: 20px;
    padding: 70px 0px 0px 363px;
}

.rsm {
    position: fixed;
    width: 23px;
    height: 20px;
    padding: 100px 0px 0px 363px;
}

.rsl {
    position: fixed;
    width: 23px;
    height: 20px;
    padding: 130px 0px 0px 363px;
}

.ys {
    position: fixed;
    width: 100%;
    line-height: 550px;
    padding-left: 64px;
    font-size: 19px;
    color: #000;
    /* border:3px solid #000 */
}

.ysh {
    position: fixed;
    width: 23px;
    height: 20px;
    padding: 285px 0px 0px 66px;
}

.ysm {
    position: fixed;
    width: 23px;
    height: 20px;
    padding: 315px 0px 0px 66px;
}

.ysl {
    position: fixed;
    width: 23px;
    height: 20px;
    padding: 345px 0px 0px 66px;
}

.cs {
    position: fixed;
    width: 100%;
    line-height: 550px;
    padding-left: 200px;
    font-size: 19px;
    color: #000;
    /* border:3px solid #000 */
}

.csh {
    position: fixed;
    width: 23px;
    height: 20px;
    padding: 285px 0px 0px 200px;
}

.csm {
    position: fixed;
    width: 23px;
    height: 20px;
    padding: 315px 0px 0px 200px;
}

.csl {
    position: fixed;
    width: 23px;
    height: 20px;
    padding: 345px 0px 0px 200px;
}

.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}

.yangshi1 {
    background-color: aqua;
    width: 60px;
    height: 30px;
}

.yangshi2 {
    background-color: rebeccapurple;
    width: 60px;
    height: 30px;
}

.ms-title1 {
    position: fixed;
    font-size: 14px;

    width: 300px;
}

.ms-title2 {
    position: fixed;
    font-size: 14px;
    margin-left: 300px;
    width: 300px;
}

.ms-title0 {
    position: fixed;
    font-size: 14px;
    margin-top: 10px;
    margin-left: 30px;
    float: left;
    width: 300px;
}

.yszs {
    position: fixed;
    font-size: 14px;
    margin-top: 320px;
    margin-left: 800px;
    float: left;
    width: 300px;
}

.yszssrk {
    position: fixed;
    font-size: 12px;
    margin-top: 350px;
    margin-left: 800px;
}

.yssj0 {
    position: fixed;
    font-size: 12px;
    outline: 0;
    text-align: center; /*//居中 */
    width: 3%;
    height: 2em;
    border-radius: 6px;
    border: 1px solid #c8cccf;
    color: #6a6f77;
}

.ysan {
    position: fixed;
    font-size: 12px;
    height: 2em;
    width: 2%;
    border-radius: 6px;
    border: 1px solid #c8cccf;
    color: #6a6f77;
}

.yssj-btn {
    position: fixed;
    font-size: 12px;
    margin-top: 350px;
    margin-left: 870px;
}

.radio_ys {
    position: fixed;
    font-size: 18px;
    margin-top: 400px;
    margin-left: 800px;
}

/* 流动快 */
/* 横线 */
.hline {
    position: fixed;
    float: right;
    width: 10px;
    line-height: 8px;
    margin-top: 5.5em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 122px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline1 {
    position: fixed;
    float: right;
    width: 14px;
    line-height: 8px;
    margin-top: 5.5em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 165px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline2 {
    position: fixed;
    float: right;
    width: 10px;
    line-height: 8px;
    margin-top: 5.5em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 211px;
    padding: 8px 0px 0px 18px;
    z-index: 100;
}

.hline3 {
    position: fixed;
    float: right;
    width: 0px;
    line-height: 8px;
    margin-top: 5.5em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 258px;
    padding: 8px 0px 0px 11px;
    z-index: 100;
}

.hline4 {
    position: fixed;
    float: right;
    width: 16px;
    line-height: 8px;
    margin-top: 5.5em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 302px;
    padding: 8px 0px 0px 3px;
    z-index: 100;
}

.hline5 {
    position: fixed;
    float: right;
    width: 23.5px;
    line-height: 8px;
    margin-top: 6.65em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 313px;
    padding: 8px 0px 0px 9px;
    z-index: 100;
}

.hline6 {
    position: fixed;
    float: right;
    width: 34px;
    line-height: 8px;
    margin-top: 8.15em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 296px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline7 {
    position: fixed;
    float: right;
    width: 48px;
    line-height: 8px;
    margin-top: 22.6em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 241px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline8 {
    position: fixed;
    float: right;
    width: 39px;
    line-height: 8px;
    margin-top: 16.45em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 13px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline9 {
    position: fixed;
    float: right;
    width: 7px;
    line-height: 8px;
    margin-top: 18.6em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 61px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline10 {
    position: fixed;
    float: right;
    width: 25px;
    line-height: 8px;
    margin-top: 27.3em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 13px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline11 {
    position: fixed;
    float: right;
    width: 12px;
    line-height: 8px;
    margin-top: 9.7em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 318px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline12 {
    position: fixed;
    float: right;
    width: 0px;
    line-height: 8px;
    margin-top: 9em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 425px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline13 {
    position: fixed;
    float: right;
    width: 0px;
    line-height: 8px;
    margin-top: 8em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 514px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline14 {
    position: fixed;
    float: right;
    width: 3px;
    line-height: 8px;
    margin-top: 12.3em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 527px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline15 {
    position: fixed;
    float: right;
    width: 307px;
    line-height: 8px;
    margin-top: 4.5em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 423px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline16 {
    position: fixed;
    float: right;
    width: 51px;
    line-height: 8px;
    margin-top: 6.3em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 672px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline17 {
    position: fixed;
    float: right;
    width: 29px;
    line-height: 8px;
    margin-top: 12.3em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 676px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline18 {
    position: fixed;
    float: right;
    width: 202px;
    line-height: 8px;
    margin-top: 16.4em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 313px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline19 {
    position: fixed;
    float: right;
    width: 75px;
    line-height: 8px;
    margin-top: 16.4em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 530px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline20 {
    position: fixed;
    float: right;
    width: 55px;
    line-height: 8px;
    margin-top: 16.4em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 650px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline21 {
    position: fixed;
    float: right;
    width: 21px;
    line-height: 8px;
    margin-top: 20.2em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 583px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline22 {
    position: fixed;
    float: right;
    width: 46px;
    line-height: 8px;
    margin-top: 20.2em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 651px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline23 {
    position: fixed;
    float: right;
    width: 20px;
    line-height: 8px;
    margin-top: 23.1em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 583px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline24 {
    position: fixed;
    float: right;
    width: 46px;
    line-height: 8px;
    margin-top: 23.1em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 651px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline25 {
    position: fixed;
    float: right;
    width: 43px;
    line-height: 8px;
    margin-top: 24.1em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 465px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline26 {
    position: fixed;
    float: right;
    width: 260px;
    line-height: 8px;
    margin-top: 27.85em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 470px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline27 {
    position: fixed;
    float: right;
    width: 2px;
    line-height: 8px;
    margin-top: 24.1em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 370px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline28 {
    position: fixed;
    float: right;
    width: 19px;
    line-height: 8px;
    margin-top: 26.8em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 362px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline29 {
    position: fixed;
    float: right;
    width: 69px;
    line-height: 8px;
    margin-top: 18.35em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 310px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

.hline30 {
    position: fixed;
    float: right;
    width: 2px;
    line-height: 8px;
    margin-top: 12.4em;
    /* background: #00ff00; */
    text-align: center;
    margin-left: 408px;
    padding: 8px 0px 0px 15px;
    z-index: 100;
}

/* 竖线 */
.sline {
    /* a */
    position: fixed;
    float: left;
    width: 4px;
    height: 114px;
    /* margin-right: 1em; */
    margin-top: 6.1em;
    margin-left: 122px;
    /* background: #00ff00; */
    padding: 1px 0px 0px 4px;
    z-index: 100;
}

.sline1 {
    /* b */
    position: fixed;
    float: left;
    width: 4px;
    height: 8px;
    /* margin-right: 1em; */
    margin-top: 6.1em;
    margin-left: 313px;
    /* background: #00ff00; */
    padding: 1px 0px 0px 4px;
    z-index: 100;
}

.sline2 {
    /* c */
    position: fixed;
    float: left;
    width: 4px;
    height: 121px;
    /* margin-right: 1em; */
    margin-top: 8.7em;
    margin-left: 296px;
    /* background: #00ff00; */
    padding: 1px 0px 0px 4px;
    z-index: 100;
}

.sline3 {
    /* d */
    position: fixed;
    float: left;
    width: 4px;
    height: 48px;
    /* margin-right: 1em; */
    margin-top: 19.65em;
    margin-left: 296px;
    /* background: #00ff00; */
    padding: 1px 0px 0px 4px;
    z-index: 100;
}

/* e */
.sline4 {
    position: fixed;
    float: left;
    width: 4px;
    height: 144px;
    margin-top: 17em;
    margin-left: 13px;
    /* background: #00ff00; */
    padding: 1px 0px 0px 4px;
    z-index: 100;
}

/* f */
.sline5 {
    position: fixed;
    float: left;
    width: 4px;
    height: 95px;
    margin-top: 9.7em;
    margin-left: 313px;
    /* background: #00ff00; */
    padding: 1px 0px 0px 4px;
    z-index: 100;
}

/* g */
.sline6 {
    position: fixed;
    float: left;
    width: 4px;
    height: 116px;
    margin-top: 4.5em;
    margin-left: 417px;
    /* background: #00ff00; */
    padding: 1px 0px 0px 4px;
    z-index: 100;
}

/* h */
.sline7 {
    position: fixed;
    float: left;
    width: 4px;
    height: 16px;
    margin-top: 5.1em;
    margin-left: 737px;
    /* background: #00ff00; */
    padding: 1px 0px 0px 4px;
    z-index: 100;
}
/* i */
.sline8 {
    position: fixed;
    float: left;
    width: 4px;
    height: 302px;
    margin-top: 6.3em;
    margin-left: 737px;
    /* background: #00ff00; */
    padding: 1px 0px 0px 4px;
    z-index: 100;
}

/* j */
.sline9 {
    position: fixed;
    float: left;
    width: 4px;
    height: 55px;
    margin-top: 12.8em;
    margin-left: 712px;
    /* background: #00ff00; */
    padding: 1px 0px 0px 4px;
    z-index: 100;
}

/* k */
.sline10 {
    position: fixed;
    float: left;
    width: 4px;
    height: 52px;
    margin-top: 17em;
    margin-left: 712px;
    /* background: #00ff00; */
    padding: 1px 0px 0px 4px;
    z-index: 100;
}

/* l */
.sline11 {
    position: fixed;
    float: left;
    width: 4px;
    height: 39px;
    margin-top: 20.8em;
    margin-left: 712px;
    /* background: #00ff00; */
    padding: 1px 0px 0px 4px;
    z-index: 100;
}

/* m */
.sline12 {
    position: fixed;
    float: left;
    width: 4px;
    height: 62px;
    margin-top: 20.2em;
    margin-left: 574px;
    /* background: #00ff00; */
    padding: 1px 0px 0px 4px;
    z-index: 100;
}

/* n */
.sline13 {
    position: fixed;
    float: left;
    width: 4px;
    height: 43px;
    margin-top: 17em;
    margin-left: 523px;
    /* background: #00ff00; */
    padding: 1px 0px 0px 4px;
    z-index: 100;
}

/* o */
.sline14 {
    position: fixed;
    float: left;
    width: 4px;
    height: 33px;
    margin-top: 22.2em;
    margin-left: 523px;
    /* background: #00ff00; */
    padding: 1px 0px 0px 4px;
    z-index: 100;
}

/* p */
.sline15 {
    position: fixed;
    float: left;
    width: 4px;
    height: 40px;
    margin-top: 24.1em;
    margin-left: 362px;
    /* background: #00ff00; */
    padding: 1px 0px 0px 4px;
    z-index: 100;
}

/* q */
.sline16 {
    position: fixed;
    float: left;
    width: 4px;
    height: 21px;
    margin-top: 19.15em;
    margin-left: 75px;
    /* background: #00ff00; */
    padding: 1px 0px 0px 4px;
    z-index: 100;
}

/* r */
.sline17 {
    position: fixed;
    float: left;
    width: 4px;
    height: 60px;
    margin-top: 8em;
    margin-left: 527px;
    /* background: #00ff00; */
    padding: 1px 0px 0px 4px;
    z-index: 100;
}
</style>