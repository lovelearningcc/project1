<template>
    <div class="ms-title0">
        <span class="ys_ywcgq" type="primary">液位传感器设置</span>
        <div class="ys1">
            <div>
                <span class="ys_ywlc" type="text">原水箱液位量程</span>
                <span class="ys_ywlc1" type="text">3.0</span>
            </div>

            <div>
                <span class="ys_ysxh" type="text">原水箱高液位</span>

                <div class="ysxh_srk">
                    <el-input
                        type="text"
                        onchange="this.value=this.value.replace(/[^\d]/g,'')"
                        v-model="val_ysh"
                    />
                </div>
                <button class="ys_ysanh" type="primary" @click="ys_btnh">确认</button>
            </div>

            <div>
                <span class="ys_ysxm" type="text">原水箱中液位</span>

                <div class="ysxm_srk">
                    <el-input
                        type="text"
                        onchange="this.value=this.value.replace(/[^\d]/g,'')"
                        v-model="val_ysm"
                    />
                </div>
                <button class="ys_ysanm" type="primary" @click="ys_btnm">确认</button>
            </div>

            <div>
                <span class="ys_ysxl" type="text">原水箱低液位</span>

                <div class="ysxl_srk">
                    <el-input
                        type="text"
                        onchange="this.value=this.value.replace(/[^\d]/g,'')"
                        v-model="val_ysl"
                    />
                </div>
                <button class="ys_ysanl" type="primary" @click="ys_btnl">确认</button>
            </div>
        </div>

        <div class="ys2">
            <div>
                <span class="rs_ywlc" type="text">软水箱液位量程</span>
                <span class="rs_ywlc1" type="text">3.0</span>
            </div>

            <div>
                <span class="ys_rsxh" type="text">软水箱高液位</span>

                <div class="rsxh_srk">
                    <el-input
                        type="text"
                        onchange="this.value=this.value.replace(/[^\d]/g,'')"
                        v-model="val_rsh"
                    />
                </div>
                <button class="ys_rsanh" type="text" @click="rs_btnh">确认</button>
            </div>

            <div>
                <span class="ys_rsxm" type="text">软水箱中液位</span>

                <div class="rsxm_srk">
                    <el-input
                        type="text"
                        onchange="this.value=this.value.replace(/[^\d]/g,'')"
                        v-model="val_rsm"
                    />
                </div>
                <button class="ys_rsanm" type="primary" @click="rs_btnm">确认</button>
            </div>

            <div>
                <span class="ys_rsxl" type="text">软水箱低液位</span>

                <div class="rsxl_srk">
                    <el-input
                        type="text"
                        onchange="this.value=this.value.replace(/[^\d]/g,'')"
                        v-model="val_rsl"
                    />
                </div>
                <button class="ys_ysanl" type="text" @click="rs_btnl">确认</button>
            </div>
        </div>

        <div class="ys3">
            <div>
                <span class="cs_ywlc" type="text">纯水箱液位量程</span>
                <span class="cs_ywlc1" type="text">3.0</span>
            </div>

            <div>
                <span class="ys_csxh" type="text">纯水箱高液位</span>

                <div class="csxh_srk">
                    <el-input
                        type="text"
                        onchange="this.value=this.value.replace(/[^\d]/g,'')"
                        v-model="val_csh"
                    />
                </div>
                <button class="ys_csanh" type="text" @click="cs_btnh">确认</button>
            </div>

            <div>
                <span class="ys_ysxm" type="text">纯水箱中液位</span>

                <div class="ysxm_srk">
                    <el-input
                        type="text"
                        onchange="this.value=this.value.replace(/[^\d]/g,'')"
                        v-model="val_csm"
                    />
                </div>
                <button class="ys_csanm" type="text" @click="cs_btnm">确认</button>
            </div>

            <div>
                <span class="ys_csxl" type="text">纯水箱低液位</span>

                <div class="csxl_srk">
                    <el-input
                        type="text"
                        onchange="this.value=this.value.replace(/[^\d]/g,'')"
                        v-model="val_csl"
                    />
                </div>
                <button class="ys_csanl" type="text" @click="cs_btnl">确认</button>
            </div>
        </div>

        <div class="ys4">
            <div>
                <span class="yjcs_ywlc" type="text">一级纯水箱液位量程</span>
                <span class="yjcs_ywlc1" type="text">3.0</span>
            </div>

            <div>
                <span class="ys_yjcsxh" type="text">一级纯水箱高液位</span>

                <div class="yjcsxh_srk">
                    <el-input
                        type="text"
                        onchange="this.value=this.value.replace(/[^\d]/g,'')"
                        v-model="val_yjcsh"
                    />
                </div>
                <button class="ys_yjcsanh" type="text" @click="yjcs_btnh">确认</button>
            </div>

            <div>
                <span class="ys_yjcsxm" type="text">一级纯水箱中液位</span>

                <div class="yjcsxm_srk">
                    <el-input
                        type="text"
                        onchange="this.value=this.value.replace(/[^\d]/g,'')"
                        v-model="val_yjcsm"
                    />
                </div>
                <button class="ys_yjcsanm" type="text" @click="yjcs_btnm">确认</button>
            </div>

            <div>
                <span class="ys_yjcsxl" type="text">一级纯水箱低液位</span>

                <div class="yjcsxl_srk">
                    <el-input
                        type="text"
                        onchange="this.value=this.value.replace(/[^\d]/g,'')"
                        v-model="val_yjcsl"
                    />
                </div>
                <button class="ys_yjcsanl" type="text" @click="yjcs_btnl">确认</button>
            </div>
        </div>

        <button class="yjcs_fhan" type="primary" @click="btn_fh()">返 回</button>
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
                    content: this.convert(this.val_ysh, 10, 16),

                    // content: this.val_ysh,
                    date: '123456789',
                    deviceNum: '0002D101',
                    // etypecode: '25187',
                    deviceNum: this.ywsz_eid,
                    etypecode: 25187,
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '014b',
                    // uid: '1141515585641832449'
                    uid: this.ywsz_uid
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('远程修改原水箱高液位值成功----------！！！');
                    console.log(res.data);
                }
            });

            console.log('远程修改原水箱高液位值执行完毕');
        },

        ys_btnm() {
            //原水高液位设置值

            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.val_ysm,
                    date: '123456789',
                    deviceNum: '0002D101',
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

            console.log('远程修改原水箱高液位值执行完毕');
        },

        ys_btnl() {
            //原水高液位设置值

            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                data: {
                    commond: '0110',
                    content: this.val_ysl,
                    date: '123456789',
                    deviceNum: '0002D101',
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
                    console.log('远程修改原水箱高液位值成功----------！！！');
                    console.log(res.data);
                }
            });

            console.log('远程修改原水箱高液位值执行完毕');
        }
    },

    created: function() {
        console.log('液位设置界面接收传参成功！！！');

        this.zs_Falg = localStorage.getItem('ms_zs');
        this.zs_Falg1 = localStorage.getItem('ms_zs1');

        this.ywsz_eid = localStorage.getItem('ms_eid');
        this.eypecode3 = localStorage.getItem('ms_etypecode');
        this.ywsz_uid = localStorage.getItem('ms_uid');

        console.log(this.ywsz_eid);
        console.log(this.eypecode3);
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

<style>
.ms-title0 {
    background: #c0c0c0;
}

.ys_ywcgq {
    position: fixed;
    width: 1010px;
    height: 540px;
    background: #c0c0c0;
    font-size: 18px;
    background-size: 100%;
    margin-top: 20px;

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
    width: 170px;
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
    margin-left: 180px;
    font-size: 18px;
    margin-top: 60px;
    text-align: center;
}

.ys_ysanh {
    position: fixed;
    width: 62px;
    height: 36px;
    background: #c0c0c0;
    font-size: 18px;
    margin-left: 340px;
    margin-top: 58px;
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
    margin-left: 180px;
    font-size: 18px;
    margin-top: 105px;
    text-align: center;
}

.ys_ysanm {
    position: fixed;
    width: 62px;
    height: 36px;
    background: #c0c0c0;
    font-size: 18px;
    margin-left: 340px;
    margin-top: 103px;
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
    margin-left: 180px;
    font-size: 18px;
    margin-top: 150px;
    text-align: center;
}

.ys_ysanl {
    position: fixed;
    width: 62px;
    height: 36px;
    background: #c0c0c0;
    font-size: 18px;
    margin-left: 340px;
    margin-top: 148px;
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