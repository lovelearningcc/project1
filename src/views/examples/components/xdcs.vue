
<template>
    <div class="ms-title">
        <span class="ys_xdcs">消毒参数及工作模式设置</span>

        <div class="ys0">
            <span class="ys_xysj" type="primary">报警消音时间(s)</span>

            <div class="bjxysj_srk">
                <el-input class="xysj_sr" type="text" v-model="bjxysj" />
            </div>
            <button class="ys_btn_qr" type="primary" @click="btn_xysj()">确定</button>

            <span class="ys_gzms" type="primary">工作模式</span>

            <ul>
                <li :class="cur1?'open':'close'" @click="btn_sjfs">{{cur1?'双级反渗':'双级反渗'}}</li>
                <li :class="cur2?'open':'close'" @click="btn_yjfs">{{cur2?'一级反渗':'一级反渗'}}</li>
                <li :class="cur3?'open':'close'" @click="btn_ejfs">{{cur3?'二级反渗':'二级反渗'}}</li>
                <li
                    class="item"
                    :class="cur4?'yangshi1':'yangshi2'"
                    @click="btn1"
                >{{cur4?'打 开':'关 闭'}}</li>
            </ul>
            <!-- <button class="ys_sjfs" type="primary">双极反渗</button>
        <button class="ys_yjfs" type="primary">一级反渗</button>
            <button class="ys_ejfs" type="primary">二级反渗</button>-->
        </div>
        <div class="ys1">
            <!-- <ul>
                <li :class="cur1?'open':'close'" @click="btn_sjfs">{{cur1?'双级反渗':'双级反渗'}}</li>
                <li :class="cur2?'open':'close'" @click="btn_yjfs">{{cur2?'一级反渗':'一级反渗'}}</li>
                <li :class="cur3?'open':'close'" @click="btn_ejfs">{{cur3?'二级反渗':'二级反渗'}}</li>
            </ul>-->

            <span class="ys_yjms" type="primary">夜间模式</span>
            <!-- <div>
                <button
                    class="ys_btn1"
                    :class="cur4?'open':'close'"
                    type="primary"
                    @click="btn1()"
                >关闭</button>
            </div>-->

            <div>
                <span class="ys_cxjg" type="primary">冲洗间隔(分钟)</span>

                <div class="cxjg_srk">
                    <el-input class="cxjg_sr" type="text" v-model="cxjg" />
                </div>
                <button class="ys_btn2" type="primary" @click="btn2()">确定</button>
            </div>

            <div>
                <span class="ys_cxsj" type="primary">冲洗时间(分钟)</span>

                <div class="cxsj_srk">
                    <el-input class="cxsj_sr" type="text" v-model="cxsj" />
                </div>
                <button class="ys_btn3" type="primary" @click="btn3()">确定</button>
            </div>
        </div>

        <div class="ys2">
            <span class="ys_xdsjsz" type="primary">消毒时间设置</span>
            <div>
                <span class="ys_xhsj" type="primary">循环时间(分钟)</span>

                <div class="xhsj_srk">
                    <el-input class="xhsj_sr" type="text" v-model="xhsj" />
                </div>
                <button class="ys_btn4" type="primary" @click="btn4()">确定</button>
            </div>

            <div>
                <span class="ys_jpsj" type="primary">浸泡时间(分钟)</span>

                <div class="jpsj_srk">
                    <el-input class="jpsj_sr" type="text" v-model="jpsj" />
                </div>
                <button class="ys_btn5" type="primary" @click="btn5()">确定</button>
            </div>

            <div>
                <span class="ys_cxsj1" type="primary">冲洗时间(分钟)</span>

                <div class="cxsj1_srk">
                    <el-input class="cxsj1_sr" type="text" v-model="cxsj1" />
                </div>
                <button class="ys_btn6" type="primary" @click="btn6()">确定</button>
            </div>
        </div>

        <div class="ms-title0">
            <!-- <span class="ys_sbyxsj" type="text">设备运行时间：</span>
            <span>{{run_time}}</span>-->

            <button type="text" class="ys_sjsz" @click="dialogFormVisible= true">时间设置</button>

            <el-dialog
                title="时间设置"
                :visible.sync="dialogFormVisible"
                center
                :append-to-body="true"
                :lock-scroll="false"
                width="40%"
            >
                <!--这里可以写各种登录表单-->

                <!-- <span>弹窗内容</span> -->

                <!-- <div class="ys_tk"> -->
                <input class="ys_year" type="text" placeholder="2020" v-model="year" />
                <span class="ys_year1" type="text">年</span>

                <input class="ys_month" type="text" placeholder="07" v-model="month" />
                <span class="ys_month1" type="text">月</span>

                <input class="ys_day" type="text" placeholder="30" v-model="day" />
                <span class="ys_day1" type="text">日</span>

                <input class="ys_hour" type="text" placeholder="19" v-model="hour" />
                <span class="ys_hour1" type="text">时</span>

                <input class="ys_min" type="text" placeholder="07" v-model="min" />
                <span class="ys_min1" type="text">分</span>

                <input class="ys_sec" type="text" placeholder="10" v-model="sec" />
                <span class="ys_sec1" type="text">秒</span>
                <!-- </div> -->

                <!-- <span class="ys_year1" type="text">年</span> -->
                <!-- <span class="ys_month1" type="text">月</span>
                    <span class="ys_day1" type="text">日</span>
                    <span class="ys_hour1" type="text">时</span>
                    <span class="ys_min1" type="text">分</span>
                    <span class="ys_sec1" type="text">秒</span>
                -->

                <!-- <div class="ys_sbyxsj"> -->
                <!-- 设备运行时间： -->

                <!-- </div> -->

                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="bnt_sjsz()">确 定</el-button>
                </span>
            </el-dialog>

            <button type="text" class="ys_ywsz" @click="fun_ywsz()">液位设置</button>

            <button type="text" class="ys_dszs" @click="fun_dszs()">定时制水</button>

            <button type="text" class="ys_dsgj" @click="fun_dsgj()">定时关机</button>

            <button type="text" class="ys_dsgj" @click="fun_zcd()">主 菜 单</button>

            <div class="ys_sbyxsj1">
                <span class="ys_sbyxsj" type="text">设备运行时间(h)：</span>
                <span>{{run_time}}</span>
            </div>
        </div>
    </div>
</template>


<script>
import { http } from '@/utils/request';

export default {
    data: function() {
        // var dianji = new Vue({
        //     el: '#div',
        //     data: {
        //         val_ys1: true,
        //         val_ys2: false
        //     } //记得一定要用 “  , ”隔开，不然会报错的
        // });
        return {
            run_time: '', //设备运行时间
            year: '',
            month: '',
            day: '',
            hour: '',
            min: '',
            sec: '',

            cxjg: '',
            cxsj: '',
            xhsj: '',
            jpsj: '',
            cxsj1: '',

            bjxysj: '',

            fun_sjsz: false,
            dialogFormVisible: false,

            radioVal: '0',

            sjfs_flag: false,
            yjfs_flag: false,
            ejfs_flag: false,

            content0: '', //发送的内容  ——————————  夜间模式
            content1: '', //发送的内容  ——————————  消毒按钮
            content2: '', //发送的内容  ——————————  消毒暂停按钮
            content3: '', //发送的内容  ——————————  冲洗按钮
            content4: '', //发送的内容
            content5: '', //发送的内容

            cur1: false,
            cur2: false,
            cur3: false,
            cur4: false,
            // current5: false,
            // current6: false,

            // ys1: true,
            // ys2: false,

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

            uid: ''
        };

        // const app = new Vue({
        //     el: '#app',
        //     data: {
        //         isRed: true
        //     }
        // });
    },

    // var dianji = new Vue({
    //             el: "#div",
    //             data: {
    //                 val_ys1: true,
    //                 val_ys2: false
    //             },//记得一定要用 “  , ”隔开，不然会报错的
    // }),

    methods: {
        numFilter(value) {
            // 截取当前数据到小数点后两位
            let realVal = parseFloat(value).toFixed(2);
            return realVal;
        },

        // change(e){
        //     this.$forceUpdate();
        // },
        PrefixInteger(num, length) {
            //JavaScript实现按照指定长度为数字前面补零输出的方法
            return (Array(length).join('0') + num).slice(-length);
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

        bnt_sjsz() {
            //时间设置
            this.dialogFormVisible = false;

            var nian = this.convert(this.year, 10, 16).padStart(4, '0');
            var yue = this.convert(this.month, 10, 16).padStart(4, '0');
            var ri = this.convert(this.day, 10, 16).padStart(4, '0');
            var shi = this.convert(this.hour, 10, 16).padStart(4, '0');
            var fen = this.convert(this.min, 10, 16).padStart(4, '0');
            var miao = this.convert(this.sec, 10, 16).padStart(4, '0');

            var dmr_date = nian + yue + ri + shi + fen + miao;

            console.log('dmr_date ———— ', dmr_date);

            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: dmr_date,
                    date: new Date().toLocaleString(),
                    // deviceNum: '0002D102',
                    // etypecode: '25187',
                    deviceNum: this.eid3,
                    etypecode: 25187,
                    iemi: '867665048501482',
                    num: '0006',
                    numLen: '12',
                    phone: '18349112013',
                    startAdd: '0150',
                    // uid: '1141515585641832449'
                    uid: this.uid3
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('远程修改系统时间成功----------！！！');
                    console.log(res.data);
                }
            });
        },
        hex_to_dec(str) {
            //16转10
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

        btn_xysj() {
            //报警消音时间
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.PrefixInteger(this.convert(this.bjxysj, 10, 16), 4),
                    date: new Date().toLocaleString(),
                    deviceNum: this.eid3,
                    etypecode: 25187,
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '014b',
                    // uid: '1141515585641832449'
                    uid: this.uid3
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('远程修改报警消音时间成功----------！！！');
                    console.log(res.data);
                }
            });
        },

        btn_sjfs() {
            console.log('点击了双极反渗按钮');

            if (this.sjfs_flag) {
                this.$message.success('当前已经是双极反渗模式');
            } else {
                this.cur1 = true;
                this.cur2 = false;
                this.cur3 = false;

                // debugger;
                clearInterval(this.timer);
                this.timer = null;
                this.setTimer();

                http({
                    url: '/appEquiment/customMessage',
                    method: 'post',
                    data: {
                        commond: '0110',
                        content: '0000',
                        date: new Date().toLocaleString(),
                        // deviceNum: '0002D102',
                        // etypecode: '25187',
                        deviceNum: this.eid3,
                        etypecode: 25187,
                        iemi: '867665048501482',
                        num: '0001',
                        numLen: '02',
                        phone: '18349112013',
                        startAdd: '0144',
                        // uid: '1141515585641832449'
                        uid: this.uid3
                    }
                }).then(res => {
                    if (res.data.code === 0) {
                        console.log('远程控制双极反渗成功----------！！！');
                        console.log(res.data);
                    }
                });

                console.log('双极反渗远程控制执行完毕');
            }
        },

        btn_yjfs() {
            console.log('点击了一极反渗按钮');

            if (this.yjfs_flag) {
                this.$message.success('当前已经是一极反渗模式');
            } else {
                this.cur2 = true;
                this.cur1 = false;
                this.cur3 = false;

                // debugger;
                clearInterval(this.timer);
                this.timer = null;
                this.setTimer();

                http({
                    url: '/appEquiment/customMessage',
                    method: 'post',
                    data: {
                        commond: '0110',
                        content: '0001',
                        date: new Date().toLocaleString(),
                        // deviceNum: '0002D102',
                        // etypecode: '25187',
                        deviceNum: this.eid3,
                        etypecode: 25187,
                        iemi: '867665048501482',
                        num: '0001',
                        numLen: '02',
                        phone: '18349112013',
                        startAdd: '0144',
                        // uid: '1141515585641832449'
                        uid: this.uid3
                    }
                }).then(res => {
                    if (res.data.code === 0) {
                        console.log('远程控制一极反渗成功----------！！！');
                        console.log(res.data);
                    }
                });
            }
        },
        btn_ejfs() {
            console.log('点击了二级反渗按钮');

            if (this.ejfs_flag) {
                this.$message.success('当前已经是二级反渗模式');
            } else {
                this.cur3 = true;
                this.cur1 = false;
                this.cur2 = false;

                // debugger;
                clearInterval(this.timer);
                this.timer = null;
                this.setTimer();

                http({
                    url: '/appEquiment/customMessage',
                    method: 'post',
                    data: {
                        commond: '0110',
                        content: '0002',
                        date: new Date().toLocaleString(),
                        // deviceNum: '0002D102',
                        // etypecode: '25187',
                        deviceNum: this.eid3,
                        etypecode: 25187,
                        iemi: '867665048501482',
                        num: '0001',
                        numLen: '02',
                        phone: '18349112013',
                        startAdd: '0144',
                        // uid: '1141515585641832449'
                        uid: this.uid3
                    }
                }).then(res => {
                    if (res.data.code === 0) {
                        console.log('远程控制二级反渗成功----------！！！');
                        console.log(res.data);
                    }
                });
            }
        },

        btn1() {
            //夜间模式

            console.log('开始点击夜间模式按钮。。。。');

            this.cur4 = !this.cur4;

            if (this.cur4) {
                this.content4 = '0001';
            } else {
                //  this.current1 = '0000'

                this.content4 = '0000';
            }

            // debugger;
            clearInterval(this.timer);
            this.timer = null;
            this.setTimer();

            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.content4,
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

        btn2() {
            //夜间冲洗间隔时间
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.PrefixInteger(this.convert(this.cxjg, 10, 16), 4),

                    // content: this.val_ysh,
                    date: new Date().toLocaleString(),
                    // deviceNum: '0002D101',
                    // etypecode: '25187',
                    deviceNum: this.eid3,
                    etypecode: 25187,
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '0146',
                    // uid: '1141515585641832449'
                    uid: this.uid3
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('远程修改夜间冲洗间隔时间成功----------！！！');
                    console.log(res.data);
                }
            });
        },
        btn3() {
            console.log('远程控制冲洗间隔成功----------！！！');
            //夜间冲洗时间
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.PrefixInteger(this.convert(this.cxsj, 10, 16), 4),

                    // content: this.val_ysh,
                    date: new Date().toLocaleString(),
                    // deviceNum: '0002D101',
                    // etypecode: '25187',
                    deviceNum: this.eid3,
                    etypecode: 25187,
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '0147',
                    // uid: '1141515585641832449'
                    uid: this.uid3
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('远程修改夜间冲洗时间成功----------！！！');
                    console.log(res.data);
                }
            });
        },
        btn4() {
            //消毒循环时间
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.PrefixInteger(this.convert(this.xhsj, 10, 16), 4),

                    // content: this.val_ysh,
                    date: new Date().toLocaleString(),
                    // deviceNum: '0002D101',
                    // etypecode: '25187',
                    deviceNum: this.eid3,
                    etypecode: 25187,
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '0148',
                    // uid: '1141515585641832449'
                    uid: this.uid3
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('远程修改消毒循环时间成功----------！！！');
                    console.log(res.data);
                }
            });
        },
        btn5() {
            //消毒浸泡时间
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.PrefixInteger(this.convert(this.jpsj, 10, 16), 4),

                    // content: this.val_ysh,
                    date: new Date().toLocaleString(),
                    // deviceNum: '0002D101',
                    // etypecode: '25187',
                    deviceNum: this.eid3,
                    etypecode: 25187,
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '0149',
                    // uid: '1141515585641832449'
                    uid: this.uid3
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('远程修改消毒浸泡时间成功----------！！！');
                    console.log(res.data);
                }
            });
        },
        btn6() {
            //消毒冲洗时间
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.PrefixInteger(this.convert(this.cxsj1, 10, 16), 4),

                    // content: this.val_ysh,
                    date: new Date().toLocaleString(),
                    // deviceNum: '0002D101',
                    // etypecode: '25187',
                    deviceNum: this.eid3,
                    etypecode: 25187,
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '014a',
                    // uid: '1141515585641832449'
                    uid: this.uid3
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('远程修改消毒冲洗时间成功----------！！！');
                    console.log(res.data);
                }
            });
        },

        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        },

        fun_ywsz() {
            this.$router.push({
                path: '/ywsz'
            });
        },
        fun_dszs() {
            this.$router.push({
                path: '/dszs'
            });
        },
        fun_dsgj() {
            this.$router.push({
                path: '/dsgj'
            });
        },
        fun_zcd() {
            this.$router.push({
                path: '/zcd'
            });
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

        btn_zcd() {
            console.log('点击了主菜单按钮。。。。');
            this.$router.push({
                path: '/zcd'
            });
        },

        getdata() {
            console.log('0000000000000000000');
            console.log('开始请求数据！！！！！！');
            // console.log('this.eid2 ==  ', this.eid2);

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
                    let value = res.data.data.data;

                    if (value && value != '') {
                        let date_year = this.hex_to_dec(value.substring(0, 4)); //年
                        let date_month = this.hex_to_dec(value.substring(4, 6)); //月
                        let date_day = this.hex_to_dec(value.substring(6, 8)); //日
                        let date_hour = this.hex_to_dec(value.substring(8, 12)); //时
                        let date_min = this.hex_to_dec(value.substring(12, 14)); //分
                        let date_sec = this.hex_to_dec(value.substring(14, 16)); //秒

                        let sbyxsj = this.hex_to_dec(value.substring(44, 52)); //设备运行时间

                        this.run_time = this.numFilter(sbyxsj);

                        let val_yjcxjg = this.hex_to_dec(value.substring(404, 408)); //夜间冲洗间隔
                        let val_yjcxsj = this.hex_to_dec(value.substring(408, 412)); //夜间冲洗时间
                        let val_xdxhsj = this.hex_to_dec(value.substring(412, 416)); //消毒循环时间
                        let val_xdjpsj = this.hex_to_dec(value.substring(416, 420)); //消毒浸泡时间
                        let val_xdcxsj = this.hex_to_dec(value.substring(420, 424)); //消毒冲洗时间
                        let val_bjxysj = this.hex_to_dec(value.substring(444, 448)); //报警消音时间

                        console.log('val_yjcxjg----', val_yjcxjg);
                        console.log('val_yjcxsj----', val_yjcxsj);
                        console.log('val_xdxhsj----', val_xdxhsj);
                        console.log('val_xdjpsj----', val_xdjpsj);
                        console.log('val_xdcxsj----', val_xdcxsj);
                        console.log('val_bjxysj----', val_bjxysj);

                        this.cxjg = val_yjcxjg;
                        this.cxsj = val_yjcxsj;
                        this.xhsj = val_xdxhsj;
                        this.jpsj = val_xdjpsj;
                        this.cxsj1 = val_xdcxsj;
                        this.bjxysj = val_bjxysj;

                        // this.year = date_year;
                        // this.month = date_month;
                        // this.day = date_day;
                        // this.hour = date_hour;
                        // this.min = date_min;
                        // this.sec = date_sec;
                        let value1 = this.hex_to_dec(value.substring(20, 24)); //工作模式                  16转10
                        let value2 = this.hex_to_bin(value.substring(24, 28)); //运行状态                  16转2

                        console.log('value2-value2=---', value2);

                        let vyjms = value2.substring(11, 12); //夜间模式

                        if (vyjms == '1') {
                            this.cur4 = true;
                            // this.radioVal = 2;
                            // this.run_status = '夜间模式';
                        } else {
                            this.cur4 = false;
                        }

                        //工作模式
                        if (value1 == '0') {
                            this.cur1 = true;
                            this.cur2 = false;
                            this.cur3 = false;
                            this.sjfs_flag = true;
                        } else if (value1 == '1') {
                            this.cur2 = true;
                            this.cur1 = false;
                            this.cur3 = false;
                            this.yjfs_flag = true;
                        } else {
                            this.cur3 = true;
                            this.cur1 = false;
                            this.cur2 = false;
                            this.ejfs_flag = true;
                        }

                        console.log('sjfs_flag---', this.sjfs_flag);
                        console.log('yjfs_flag---', this.yjfs_flag);
                        console.log('ejfs_flag---', this.ejfs_flag);
                    }
                }
            });
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

        console.log('消毒参数设置界面接收传参成功！！！');

        this.eid3 = localStorage.getItem('ms_eid');
        this.uid3 = localStorage.getItem('ms_uid');

        console.log(this.eid3);
        console.log(this.uid3);

        // this.bnt_sjsz();

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
/* .ys_tk {
    font-size: 0;
} */

.ys_xdcs {
    font-size: 20px;
    width: 300px;
    height: 30px;
    text-align: center;
    display: block;
    margin: auto;
    margin-top: 10px;
    font-weight: bold;
    font-family: SimSun;
    border-radius: 8px;
}

.ys_year {
    font-size: 16px;
    width: 80px;
    height: 30px;
    text-align: center;
}
.ys_month {
    font-size: 16px;
    width: 40px;
    height: 30px;
    margin-left: 10px;
    margin-top: 20px;
    text-align: center;
}

.ys_day {
    font-size: 16px;
    width: 40px;
    height: 30px;
    margin-left: 10px;
    text-align: center;
}

.ys_hour {
    font-size: 16px;
    width: 40px;
    height: 30px;
    margin-left: 10px;
    text-align: center;
}

.ys_min {
    font-size: 16px;
    width: 40px;
    height: 30px;
    margin-left: 10px;
    text-align: center;
}

.ys_sec {
    font-size: 16px;
    width: 40px;
    height: 30px;
    margin-left: 10px;
    text-align: center;
}

.ys_year1 {
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-top: 200px;
    z-index: 100;
    margin-left: 10px;
}
.ys_month1 {
    width: 40px;
    height: 30px;
    margin-left: 10px;
}

.ys_day1 {
    /* font-size: 0; */
    width: 40px;
    height: 30px;
    margin-left: 10px;
}

.ys_hour1 {
    /* font-size: 0; */
    width: 40px;
    height: 30px;
    margin-left: 10px;
}

.ys_min1 {
    /* font-size: 0; */
    width: 40px;
    height: 30px;
    margin-left: 10px;
}

.ys_sec1 {
    /* font-size: 0; */
    width: 40px;
    height: 30px;
    margin-left: 10px;
}

ul {
    width: 300px;
    position: fixed;
    right: 1392px;
    top: 90px;
    height: 30px;
    float: left;
    margin: 0px;
    padding: 0px;
}

li {
    margin-left: 20px;

    font-size: 16px;
    margin-top: 60px;
    float: left;
    list-style: none;
    z-index: 100;
    font-weight: bold;
    font-family: SimSun;
    border-radius: 8px;
}

.item {
    font-size: 16px;
    width: 60px;
    height: 30px;
    margin-left: 193px;
    margin-top: 48px;
    list-style: none;
    text-align: center;
    background: rgba(192, 192, 192, 0.3);
    line-height: 30px;

    font-weight: bold;
    font-family: SimSun;
    border-radius: 10px;
    z-index: 100;
}

.ys_dialog {
    position: fixed;
    font-size: 14px;
    margin-top: 20px;
    margin-left: 20px;
    float: left;
    text-align: center;
    list-style: none;
    width: 600px;
    height: 200px;
}

/* 总的——div */
.ms-title {
    position: fixed;
    font-size: 14px;
    margin-top: 20px;
    margin-left: 20px;
    float: left;
    background: rgba(192, 192, 192);
    width: 800px;
    height: 550px;
}

/* 右边按钮——div */
.ms-title0 {
    position: fixed;
    font-size: 14px;
    margin-left: 350px;
    float: left;
    width: 400px;
}

/* 时间设置 */
.ys_sjsz {
    font-size: 20px;
    margin-top: 20px;
    margin-left: 200px;
    text-align: center;
    list-style: none;
    width: 147px;
    background: rgba(192, 192, 192);
    line-height: 55px;
    /* z-index: 100; */
    font-weight: bold;
    font-family: SimSun;
    border-radius: 15px;
}

/* //设备运行时间 */
.ys_sbyxsj {
    font-size: 16px;
    margin-top: 10px;
    margin-left: 180px;
    text-align: center;
    list-style: none;
    width: 400px;
    background: rgba(192, 192, 192);
    line-height: 55px;
    z-index: 100;
    font-weight: bold;
    font-family: SimSun;
    border-radius: 15px;
}

.ys_sbyxsj1 {
    font-size: 18px;
}

/* 液位设置 */
.ys_ywsz {
    font-size: 20px;
    margin-top: 30px;
    margin-left: 200px;
    text-align: center;
    list-style: none;
    width: 147px;
    background: rgba(192, 192, 192);
    line-height: 55px;
    /* z-index: 100; */
    font-weight: bold;
    font-family: SimSun;
    border-radius: 15px;
}

/* 定时制水 */
.ys_dszs {
    font-size: 20px;
    margin-top: 30px;
    margin-left: 200px;
    text-align: center;
    list-style: none;
    width: 147px;
    background: rgba(192, 192, 192);
    line-height: 55px;
    /* z-index: 100; */
    font-weight: bold;
    font-family: SimSun;
    border-radius: 15px;
}

/* 定时关机 */
.ys_dsgj {
    font-size: 20px;
    margin-top: 30px;
    margin-left: 200px;
    text-align: center;
    list-style: none;
    width: 147px;
    background: rgba(192, 192, 192);
    line-height: 55px;

    font-weight: bold;
    font-family: SimSun;
    border-radius: 15px;
}

.ys_xysj {
    /* //报警消音时间——span */
    position: fixed;
    font-size: 18px;
    height: 2.5em;
    width: 8%;
    margin-top: 10px;
    margin-left: 20px;
    border-radius: 15px;
    background: rgba(192, 192, 192, 0.3);
    color: #000000;
}

.xysj_sr {
    /* //输入框——div */
    position: fixed;
    font-size: 14px;
    text-align: center; /*//居中 */
    height: 30px;
    width: 70px;
    border-radius: 6px;
    margin-left: 180px;
    margin-top: 9px;
}

.ys_btn_qr {
    /* //报警消音时间——确定按钮 */
    position: fixed;
    font-size: 16px;
    height: 30px;
    width: 60px;
    margin-left: 300px;
    margin-top: 10px;
    background: rgba(192, 192, 192, 0.3);
    color: #000000;
    z-index: 100;
}

.ys_gzms {
    position: fixed;
    font-size: 18px;
    height: 30px;
    width: 100px;
    margin-top: 56px;
    margin-left: 20px;
    background: rgba(192, 192, 192);
    color: #000000;
}

.ys0 {
    position: absolute;
    margin-top: 30px;
    height: 100px;
    width: 385px;
    margin-left: 100px;
    border-top: 2px solid blueviolet;
    border-bottom: 2px solid blueviolet;
    border-left: 2px solid blueviolet;
    border-right: 2px solid blueviolet;
}

.ys1 {
    position: absolute;

    height: 130px;
    width: 385px;
    margin-top: 150px;
    margin-left: 100px;
    border-top: 2px solid blueviolet;
    border-bottom: 2px solid blueviolet;
    border-left: 2px solid blueviolet;
    border-right: 2px solid blueviolet;
}

.ys_yjms {
    position: fixed;
    font-size: 18px;
    height: 30px;
    width: 100px;
    margin-top: 10px;
    margin-left: 20px;
    background: rgba(192, 192, 192);
    color: #000000;
}

.ys_cxjg {
    position: fixed;
    font-size: 18px;
    height: 30px;
    width: 150px;
    margin-top: 50px;
    margin-left: 20px;

    background: rgba(192, 192, 192);
    color: #000000;
    z-index: 100;
}

.cxjg_srk {
    /* //输入框——div */
    position: fixed;
    height: 30px;
    font-size: 16px;
    margin-top: 48px;
    margin-left: 180px;
    width: 70px;
    z-index: 100;
    text-align: center;
}

.ys_btn2 {
    /* //夜间模式——切换按钮 */
    position: fixed;
    font-size: 16px;
    height: 30px;
    width: 60px;
    margin-left: 300px;
    margin-top: 50px;
    background: rgba(192, 192, 192, 0.3);
    color: #000000;
    z-index: 100;
}

.ys_cxsj {
    position: fixed;
    font-size: 18px;
    height: 30px;
    width: 150px;
    margin-top: 90px;
    margin-left: 20px;
    background: rgba(192, 192, 192);
    color: #000000;
}

.cxsj_srk {
    /* //输入框——div */
    position: fixed;
    font-size: 16px;
    margin-top: 90px;
    margin-left: 180px;
    width: 70px;
    height: 30px;
    text-align: center;
}

.ys_btn3 {
    /* //冲洗时间按钮 */
    position: fixed;
    font-size: 16px;
    height: 30px;
    width: 60px;
    margin-left: 300px;
    margin-top: 90px;
    background: rgba(192, 192, 192);
    color: #000000;
    z-index: 100;
}

.ys2 {
    position: absolute;

    height: 190px;
    width: 385px;
    margin-top: 300px;
    margin-left: 100px;
    border-top: 2px solid blueviolet;
    border-bottom: 2px solid blueviolet;
    border-left: 2px solid blueviolet;
    border-right: 2px solid blueviolet;
    /* text-align: center; */
}

/* //gcc_add */

.ys_xdsjsz {
    position: fixed;
    font-size: 18px;
    height: 30px;
    width: 200px;
    margin-top: 10px;
    margin-left: 120px;
    background: rgba(192, 192, 192);
    color: #000000;
    font-weight: bold;
    font-family: SimSun;
    border-radius: 8px;
}

.ys_xhsj {
    position: fixed;
    font-size: 18px;
    height: 30px;
    width: 150px;
    margin-top: 50px;
    margin-left: 20px;
    background: rgba(192, 192, 192);
    color: #000000;
}

.xhsj_srk {
    /* //输入框——div */
    position: fixed;
    font-size: 16px;
    margin-top: 48px;
    margin-left: 180px;
    width: 70px;
    height: 30px;
    text-align: center;
}

.ys_btn4 {
    /* //循环时间按钮 */
    position: fixed;
    font-size: 16px;
    height: 30px;
    width: 60px;
    margin-left: 300px;
    margin-top: 49px;
    background: rgba(192, 192, 192, 0.3);
    color: #000000;
    z-index: 100;
}

.ys_jpsj {
    position: fixed;
    font-size: 18px;
    height: 30px;
    width: 150px;
    margin-top: 100px;
    margin-left: 20px;

    background: rgba(192, 192, 192);
    color: #000000;
}

.jpsj_srk {
    /* //输入框——div */
    position: fixed;
    font-size: 16px;
    margin-top: 98px;
    margin-left: 180px;
    width: 70px;
    height: 30px;
    text-align: center;
}

.ys_btn5 {
    /* //浸泡时间按钮 */
    position: fixed;
    font-size: 16px;
    height: 30px;
    width: 60px;
    margin-left: 300px;
    margin-top: 99px;
    background: rgba(192, 192, 192, 0.3);
    color: #000000;
    z-index: 100;
}

.ys_cxsj1 {
    position: fixed;
    font-size: 18px;
    height: 30px;
    width: 150px;
    margin-top: 150px;
    margin-left: 20px;
    background: rgba(192, 192, 192);
    color: #000000;
}

.cxsj1_srk {
    /* //输入框——div */
    position: fixed;
    font-size: 16px;
    margin-top: 150px;
    margin-left: 180px;
    width: 70px;
    height: 30px;
    text-align: center;
}

.ys_btn6 {
    /* //冲洗时间按钮 */
    position: fixed;
    font-size: 16px;
    height: 30px;
    width: 60px;
    margin-left: 300px;
    margin-top: 152px;
    background: rgba(192, 192, 192);
    color: #000000;
    z-index: 100;
}
.open {
    background: #1afa29;
    color: black;
}
.close {
    background: #c0c0c0;
    color: black;
}

.yangshi1 {
    background-color: #1afa29;
    color: black;
}

.yangshi2 {
    background-color: #ff0000;
    color: black;
}
</style>