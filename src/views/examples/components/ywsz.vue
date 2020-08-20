<template>
    <div class="ms-title0">
        <span class="ys_ywcgq" type="primary">液位传感器设置</span>
        <div class="ys1">
            <div>
                <span class="ys_ywlc" type="text">原水箱液位量程(米)</span>
                <span class="ys_ywlc1" type="text">3.0</span>
            </div>

            <div>
                <span class="ys_ysxh" type="text">原水箱高液位</span>

                <div class="ysxh_srk">
                    <el-input type="text" v-model="val_ysh" />
                </div>
                <button class="ys_ysanh" type="primary" @click="ys_btnh">确认</button>
            </div>

            <div>
                <span class="ys_ysxm" type="text">原水箱中液位</span>

                <div class="ysxm_srk">
                    <el-input type="text" v-model="val_ysm" />
                </div>
                <button class="ys_ysanm" type="primary" @click="ys_btnm">确认</button>
            </div>

            <div>
                <span class="ys_ysxl" type="text">原水箱低液位</span>

                <div class="ysxl_srk">
                    <el-input type="text" v-model="val_ysl" />
                </div>
                <button class="ys_ysanl" type="primary" @click="ys_btnl">确认</button>
            </div>
        </div>

        <div class="ys2">
            <div>
                <span class="ys_ywlc" type="text">软水箱液位量程(米)</span>
                <span class="ys_ywlc1" type="text">3.0</span>
            </div>

            <div>
                <span class="ys_ysxh" type="text">软水箱高液位</span>

                <div class="ysxh_srk">
                    <el-input type="text" v-model="val_rsh" />
                </div>
                <button class="ys_ysanh" type="primary" @click="rs_btnh">确认</button>
            </div>

            <div>
                <span class="ys_ysxm" type="text">软水箱中液位</span>

                <div class="ysxm_srk">
                    <el-input type="text" v-model="val_rsm" />
                </div>
                <button class="ys_ysanm" type="primary" @click="rs_btnm">确认</button>
            </div>

            <div>
                <span class="ys_ysxl" type="text">软水箱低液位</span>

                <div class="ysxl_srk">
                    <el-input type="text" v-model="val_rsl" />
                </div>
                <button class="ys_ysanl" type="primary" @click="rs_btnl">确认</button>
            </div>
        </div>

        <div class="ys3">
            <div>
                <span class="ys_ywlc" type="text">纯水箱液位量程(米)</span>
                <span class="ys_ywlc1" type="text">3.0</span>
            </div>

            <div>
                <span class="ys_ysxh" type="text">纯水箱高液位</span>

                <div class="ysxh_srk">
                    <el-input type="text" v-model="val_csh" />
                </div>
                <button class="ys_ysanh" type="primary" @click="cs_btnh">确认</button>
            </div>

            <div>
                <span class="ys_ysxm" type="text">纯水箱中液位</span>

                <div class="ysxm_srk">
                    <el-input type="text" v-model="val_csm" />
                </div>
                <button class="ys_ysanm" type="primary" @click="cs_btnm">确认</button>
            </div>

            <div>
                <span class="ys_ysxl" type="text">纯水箱低液位</span>

                <div class="ysxl_srk">
                    <el-input type="text" v-model="val_csl" />
                </div>
                <button class="ys_ysanl" type="primary" @click="cs_btnl">确认</button>
            </div>
        </div>

        <div class="ys4">
            <div>
                <span class="ys_ywlc" type="text">一级纯水箱液位量程(米)</span>
                <span class="ys_ywlc1" type="text">3.0</span>
            </div>

            <div>
                <span class="ys_ysxh" type="text">一级纯水箱高液位</span>

                <div class="ysxh_srk">
                    <el-input type="text" v-model="val_yjcsh" />
                </div>
                <button class="ys_ysanh" type="primary" @click="yjcs_btnh">确认</button>
            </div>

            <div>
                <span class="ys_ysxm" type="text">一级纯水箱中液位</span>

                <div class="ysxm_srk">
                    <el-input type="text" v-model="val_yjcsm" />
                </div>
                <button class="ys_ysanm" type="primary" @click="yjcs_btnm">确认</button>
            </div>

            <div>
                <span class="ys_ysxl" type="text">一级纯水箱低液位</span>

                <div class="ysxl_srk">
                    <el-input type="text" v-model="val_yjcsl" />
                </div>
                <button class="ys_ysanl" type="primary" @click="yjcs_btnl">确认</button>
            </div>
        </div>

        <button class="ys_fhan" type="primary" @click="btn_fh()">返 回</button>
    </div>
</template>

<script>
import { http } from '@/utils/request';
export default {
    data: function() {
        return {
            ywsz_eid: '',
            ywsz_uid: '',
            val_ysh: '',
            val_ysm: '',
            val_ysl: '',

            val_rsh: '',
            val_rsm: '',
            val_rsl: '',

            val_csh: '',
            val_csm: '',
            val_csl: '',

            val_yjcsh: '',
            val_yjcsm: '',
            val_yjcsl: ''
        };
    },

    methods: {
        hex_to_dec(str) {
            //16转10
            let value = parseInt(str, 16);
            return value;
        },
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

        btn_fh() {
            this.$router.push({
                path: '/xdcs'
            });
        },

        ys_btnh() {
            //原水高液位设置值

            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.PrefixInteger(this.convert(this.val_ysh * 10, 10, 16), 4),

                    // content: this.val_ysh,
                    date: new Date().toLocaleString(),
                    // deviceNum: '0002D101',
                    // etypecode: '25187',
                    deviceNum: this.ywsz_eid,
                    etypecode: 25187,
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '014c',
                    // uid: '1141515585641832449'
                    uid: this.ywsz_uid
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('远程修改原水箱高液位值成功----------！！！');
                    console.log(res.data);
                }
            });

            // console.log('远程修改原水箱高液位值执行完毕');
        },

        ys_btnm() {
            //原水中液位设置值

            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.PrefixInteger(this.convert(this.val_ysm * 10, 10, 16), 4),
                    date: new Date().toLocaleString(),
                    // deviceNum: '0002D101',
                    // etypecode: '25187',
                    deviceNum: this.ywsz_eid,
                    etypecode: 25187,
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '014d',
                    // uid: '1141515585641832449'
                    uid: this.ywsz_uid
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('远程修改原水箱中液位值成功----------！！！');
                    console.log(res.data);
                }
            });
        },

        ys_btnl() {
            //原水低液位设置值

            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.PrefixInteger(this.convert(this.val_ysl * 10, 10, 16), 4),
                    date: new Date().toLocaleString(),
                    // deviceNum: '0002D101',
                    // etypecode: '25187',
                    deviceNum: this.ywsz_eid,
                    etypecode: 25187,
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '014e',
                    // uid: '1141515585641832449'
                    uid: this.ywsz_uid
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('远程修改原水箱低液位值成功----------！！！');
                    console.log(res.data);
                }
            });

            // console.log('远程修改原水箱高液位值执行完毕');
        },

        rs_btnh() {
            //软水高液位设置值

            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.PrefixInteger(this.convert(this.val_rsh * 10, 10, 16), 4),
                    date: new Date().toLocaleString(),
                    // deviceNum: '0002D101',
                    // etypecode: '25187',
                    deviceNum: this.ywsz_eid,
                    etypecode: 25187,
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '014f',
                    // uid: '1141515585641832449'
                    uid: this.ywsz_uid
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('远程修改软水箱高液位值成功----------！！！');
                    console.log(res.data);
                }
            });
        },
        rs_btnm() {
            //软水中液位设置值
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.PrefixInteger(this.convert(this.val_rsm * 10, 10, 16), 4),
                    date: new Date().toLocaleString(),
                    // deviceNum: '0002D101',
                    // etypecode: '25187',
                    deviceNum: this.ywsz_eid,
                    etypecode: 25187,
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '0158',
                    // uid: '1141515585641832449'
                    uid: this.ywsz_uid
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('远程修改软水箱中液位值成功----------！！！');
                    console.log(res.data);
                }
            });
        },
        rs_btnl() {
            //软水低液位设置值
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.PrefixInteger(this.convert(this.val_rsl * 10, 10, 16), 4),
                    date: new Date().toLocaleString(),
                    // deviceNum: '0002D101',
                    // etypecode: '25187',
                    deviceNum: this.ywsz_eid,
                    etypecode: 25187,
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '0159',
                    // uid: '1141515585641832449'
                    uid: this.ywsz_uid
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('远程修改软水箱低液位值成功----------！！！');
                    console.log(res.data);
                }
            });
        },

        cs_btnh() {
            //纯水高液位设置值
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.PrefixInteger(this.convert(this.val_csh * 10, 10, 16), 4),
                    date: new Date().toLocaleString(),
                    // deviceNum: '0002D101',
                    // etypecode: '25187',
                    deviceNum: this.ywsz_eid,
                    etypecode: 25187,
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '015a',
                    // uid: '1141515585641832449'
                    uid: this.ywsz_uid
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('远程修改纯水箱高液位值成功----------！！！');
                    console.log(res.data);
                }
            });
        },
        cs_btnm() {
            //纯水中液位设置值
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.PrefixInteger(this.convert(this.val_csm * 10, 10, 16), 4),
                    date: new Date().toLocaleString(),
                    // deviceNum: '0002D101',
                    // etypecode: '25187',
                    deviceNum: this.ywsz_eid,
                    etypecode: 25187,
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '015b',
                    // uid: '1141515585641832449'
                    uid: this.ywsz_uid
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('远程修改纯水箱中液位值成功----------！！！');
                    console.log(res.data);
                }
            });
        },
        cs_btnl() {
            //纯水低液位设置值
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.PrefixInteger(this.convert(this.val_csl * 10, 10, 16), 4),
                    date: new Date().toLocaleString(),
                    // deviceNum: '0002D101',
                    // etypecode: '25187',
                    deviceNum: this.ywsz_eid,
                    etypecode: 25187,
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '015c',
                    // uid: '1141515585641832449'
                    uid: this.ywsz_uid
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('远程修改纯水箱低液位值成功----------！！！');
                    console.log(res.data);
                }
            });
        },

        yjcs_btnh() {
            //一级纯水高液位设置值
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.PrefixInteger(this.convert(this.val_yjcsh * 10, 10, 16), 4),
                    date: new Date().toLocaleString(),
                    // deviceNum: '0002D101',
                    // etypecode: '25187',
                    deviceNum: this.ywsz_eid,
                    etypecode: 25187,
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '015d',
                    // uid: '1141515585641832449'
                    uid: this.ywsz_uid
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('远程修改一级纯水箱高液位值成功----------！！！');
                    console.log(res.data);
                }
            });
        },
        yjcs_btnm() {
            //一级纯水中液位设置值
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.PrefixInteger(this.convert(this.val_yjcsm * 10, 10, 16), 4),
                    date: new Date().toLocaleString(),
                    // deviceNum: '0002D101',
                    // etypecode: '25187',
                    deviceNum: this.ywsz_eid,
                    etypecode: 25187,
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '015e',
                    // uid: '1141515585641832449'
                    uid: this.ywsz_uid
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('远程修改一级纯水箱中液位值成功----------！！！');
                    console.log(res.data);
                }
            });
        },
        yjcs_btnl() {
            //一级纯水低液位设置值
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.PrefixInteger(this.convert(this.val_yjcsl * 10, 10, 16), 4),
                    date: new Date().toLocaleString(),
                    // deviceNum: '0002D101',
                    // etypecode: '25187',
                    deviceNum: this.ywsz_eid,
                    etypecode: 25187,
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '015f',
                    // uid: '1141515585641832449'
                    uid: this.ywsz_uid
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('远程修改一级纯水箱低液位值成功----------！！！');
                    console.log(res.data);
                }
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
                    eid: this.ywsz_eid,
                    eypecode: '25187'
                }
            }).then(res => {
                if (res.data.code === 0) {
                    let value = res.data.data.data;

                    if (value && value != '') {
                        let val_ysh1 = this.hex_to_dec(value.substring(84, 88)); //原水高液位值
                        let val_ysm1 = this.hex_to_dec(value.substring(88, 92)); //原水高液位值
                        let val_ysl1 = this.hex_to_dec(value.substring(92, 96)); //原水高液位值
                        let val_rsh1 = this.hex_to_dec(value.substring(96, 100)); //原水高液位值
                        let val_rsm1 = this.hex_to_dec(value.substring(100, 104)); //原水高液位值
                        let val_rsl1 = this.hex_to_dec(value.substring(104, 108)); //原水高液位值
                        let val_csh1 = this.hex_to_dec(value.substring(108, 112)); //原水高液位值
                        let val_csm1 = this.hex_to_dec(value.substring(112, 116)); //原水高液位值
                        let val_csl1 = this.hex_to_dec(value.substring(148, 152)); //原水高液位值
                        let val_yjcsh1 = this.hex_to_dec(value.substring(152, 156)); //原水高液位值
                        let val_yjcsm1 = this.hex_to_dec(value.substring(156, 160)); //原水高液位值
                        let val_yjcsl1 = this.hex_to_dec(value.substring(160, 164)); //原水高液位值

                        this.val_ysh = val_ysh1/10;
                        this.val_ysm = val_ysm1/10;
                        this.val_ysl = val_ysl1/10;

                        this.val_rsh = val_rsh1/10;
                        this.val_rsm = val_rsm1/10;
                        this.val_rsl = val_rsl1/10;

                        this.val_csh = val_csh1/10;
                        this.val_csm = val_csm1/10;
                        this.val_csl = val_csl1/10;

                        this.val_yjcsh = val_yjcsh1/10;
                        this.val_yjcsm = val_yjcsm1/10;
                        this.val_yjcsl = val_yjcsl1/10;
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
        console.log('液位设置界面接收传参成功！！！');

        this.zs_Falg = localStorage.getItem('ms_zs');
        this.zs_Falg1 = localStorage.getItem('ms_zs1');

        this.ywsz_eid = localStorage.getItem('ms_eid');
        // this.eypecode3 = localStorage.getItem('ms_etypecode');
        this.ywsz_uid = localStorage.getItem('ms_uid');

        console.log(this.ywsz_eid);
        // console.log(this.eypecode3);
        console.log(this.ywsz_uid);

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
.ms-title0 {
    position: fixed;
    width: 1010px;
    height: 540px;
    background: #c0c0c0;
    /* font-size: 18px; */

    /* background-size: 100%; */
    /* text-align: center; */
}

.ys_ywcgq {
    position: fixed;
    width: 300px;
    height: 40px;
    background: #c0c0c0;
    margin-left: 320px;
    font-size: 18px;
    margin-top: 20px;
    /* background-size: 100%; */
    text-align: center;
}

.ys1 {
    position: fixed;

    height: 208px;
    width: 432px;
    margin-top: 80px;
    margin-left: 30px;
    border-top: 2px solid blueviolet;
    border-bottom: 2px solid blueviolet;
    border-left: 2px solid blueviolet;
    border-right: 2px solid blueviolet;
}

.ys2 {
    position: fixed;

    height: 208px;
    width: 432px;
    margin-top: 80px;
    margin-left: 500px;
    border-top: 2px solid blueviolet;
    border-bottom: 2px solid blueviolet;
    border-left: 2px solid blueviolet;
    border-right: 2px solid blueviolet;
}

.ys3 {
    position: fixed;

    height: 208px;
    width: 432px;
    margin-top: 320px;
    margin-left: 30px;
    border-top: 2px solid blueviolet;
    border-bottom: 2px solid blueviolet;
    border-left: 2px solid blueviolet;
    border-right: 2px solid blueviolet;
}

.ys4 {
    position: fixed;

    height: 208px;
    width: 432px;
    margin-top: 320px;
    margin-left: 500px;
    border-top: 2px solid blueviolet;
    border-bottom: 2px solid blueviolet;
    border-left: 2px solid blueviolet;
    border-right: 2px solid blueviolet;
}

.ys_ywlc {
    position: fixed;
    width: 200px;
    height: 50px;
    background: #c0c0c0;
    font-size: 18px;
    text-align: center;
    margin-top: 15px;
}

.ys_ywlc1 {
    position: fixed;
    width: 60px;
    height: 30px;
    background: #c0c0c0;
    font-size: 18px;
    margin-left: 340px;
    text-align: center;
    margin-top: 10px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
}

.ys_ysxh {
    position: fixed;
    width: 150px;
    height: 50px;
    background: #c0c0c0;
    font-size: 18px;
    margin-left: 10px;
    margin-top: 60px;
    text-align: center;
}

.ysxh_srk {
    position: fixed;
    width: 100px;
    height: 50px;
    background: #c0c0c0;
    margin-left: 200px;
    font-size: 16px;
    margin-top: 60px;
    text-align: center;
}

.ys_ysanh {
    position: fixed;
    width: 60px;
    height: 30px;
    background: #c0c0c0;
    font-size: 16px;
    margin-left: 340px;
    margin-top: 63px;
    text-align: center;
}

.ys_ysxm {
    position: fixed;
    width: 150px;
    height: 50px;
    background: #c0c0c0;
    font-size: 18px;
    margin-left: 10px;
    margin-top: 105px;
    text-align: center;
}

.ysxm_srk {
    position: fixed;
    width: 100px;
    height: 50px;
    background: #c0c0c0;
    margin-left: 200px;
    font-size: 16px;
    margin-top: 105px;
    text-align: center;
}

.ys_ysanm {
    position: fixed;
    width: 60px;
    height: 30px;
    background: #c0c0c0;
    font-size: 16px;
    margin-left: 340px;
    margin-top: 108px;
    text-align: center;
}

.ys_ysxl {
    position: fixed;
    width: 150px;
    height: 50px;
    background: #c0c0c0;
    font-size: 18px;
    margin-left: 10px;
    margin-top: 150px;
    text-align: center;
}

.ysxl_srk {
    position: fixed;
    width: 100px;
    height: 50px;
    background: #c0c0c0;
    margin-left: 200px;
    font-size: 16px;
    margin-top: 150px;
    text-align: center;
}

.ys_ysanl {
    position: fixed;
    width: 60px;
    height: 30px;
    background: #c0c0c0;
    font-size: 16px;
    margin-left: 340px;
    margin-top: 153px;
    text-align: center;
}

.ys_fhan {
    position: fixed;
    width: 70px;
    height: 36px;
    background: #c0c0c0;
    font-size: 20px;
    margin-left: 938px;
    margin-top: 500px;
    text-align: center;

    font-weight: bold;
    font-family: SimSun;
    /* border-radius: 15px; */
}
</style>