<template>
    <div class="ms-title0">
        <div class="zcdys">
            <ul>
                <li class="item" :class="dqzt1?'open':'close'" @click="zsms">{{dqzt1?'制水模式':'制水模式'}}</li>

                <li class="item" :class="dqzt2?'open':'close'" @click="xdms">{{dqzt2?'消毒模式':'消毒模式'}}</li>

                <li
                    class="item"
                    :class="dqzt3?'open':'close'"
                    @click="csszms"
                >{{dqzt3?'参数设置':'参数设置'}}</li>

                <li
                    class="item"
                    :class="dqzt4?'open':'close'"
                    @click="tsyxms"
                >{{dqzt4?'调试运行':'调试运行'}}</li>
            </ul>
            <!-- <button class="zsys" type="primary" @click="zsms()">制水模式</button>

            <button class="xdys" type="primary" @click="xdms()">消毒模式</button>-->

            <!-- <button class="csszys" type="primary" @click="csszms()">参数设置</button> -->

            <!-- <button class="tsyxys" type="primary" @click="tsyxms()">调试运行</button> -->

            <button class="ys_zcdfh" type="primary" @click="btn_zcdfh()">返回</button>
        </div>
    </div>
</template>

<script>
import { http } from '@/utils/request';
export default {
    data: function() {
        return {
            scalseNum: 1, //缩放比例

            eid1: '', //设备号
            eypecode1: '', //设备类型
            uid1: '', //不同类型设备识别码

            dqzt1: false,
            dqzt2: false,
            dqzt3: false,
            dqzt4: false,

            xd_Flag: false,
            xd_Flag1: false,
            cx_Flag: false,
            cx_Flag1: false,
            zs_Flag: false,
            zs_Flag1: false
        };
    },

    methods: {
        btn_zcdfh() {
            this.$router.push({
                path: '/Tabs'
                // query: {
                //     uid: this.uid
                // }
            });
        },

        zsms() {
            if (this.cx_Flag1 == true || this.xd_Flag1 == true) {
                this.$message.success('当前不能点击制水按钮');
            } else {
                this.$router.push({
                    path: '/zs',
                    query: {
                        eid1: this.eid1,
                        eypecode1: 25187,
                        uid1: this.uid1
                    }
                });
            }
        },

        xdms() {
            if (this.zs_Flag1) {
                console.log('点击消毒模式按钮');

                console.log('zs_Flag----', this.zs_Flag);
                console.log('zs_Flag1----', this.zs_Flag1);
                this.$message.success('当前不能点击消毒按钮');
            } else {
                this.$router.push({
                    path: '/xd',
                    query: {
                        eid1: this.eid1,
                        eypecode1: 25187,
                        uid1: this.uid1
                    }
                });
            }
        },

        csszms() {
            this.$router.push({
                path: '/xdcs'
                // query: {
                //     uid: this.uid
                // }
            });
        },

        tsyxms() {
            this.$router.push({
                path: '/ts'
                // query: {
                //     uid: this.uid
                // }
            });
        },

        //计算缩放比例
        resize_window() {
            let w_height = Number(document.documentElement.clientHeight / 1080);
            this.scalseNum = w_height;
        }
    },

    mounted() {
        //计算缩放比例
        this.resize_window();
        window.addEventListener('resize', () => {
            this.resize_window();
        });
    },

    created: function() {
        console.log('111111111111111111111111111111');

        console.log('主菜单接受传参！！！');

        this.zs_Flag = localStorage.getItem('ms_zs');
        this.zs_Flag1 = localStorage.getItem('ms_zs1');

        this.xd_Flag = localStorage.getItem('ms_xd');
        this.xd_Flag1 = localStorage.getItem('ms_xd1');

        this.cx_Flag = localStorage.getItem('ms_cx');
        this.cx_Flag1 = localStorage.getItem('ms_cx1');

        console.log('zs_Flag----', this.zs_Flag);
        console.log('zs_Flag1----', this.zs_Flag1);
        console.log('xd_Flag----', this.xd_Flag);
        console.log('xd_Flag1----', this.xd_Flag1);
        console.log('cx_Flag----', this.cx_Flag);
        console.log('cx_Flag1----', this.cx_Flag1);

        this.eid1 = localStorage.getItem('ms_eid');
        // this.eypecode1 = localStorage.getItem('ms_etypecode');
        this.uid1 = localStorage.getItem('ms_uid1');

        console.log(this.eid1);
        // console.log(this.eypecode1);
        console.log('this.uid1——————', this.uid1);

        console.log('主菜单接收传参成功！！！');

        // console.log('this.zs_Flag == ', this.zs_Flag);
        console.log('this.zs_Flag1 ————', this.zs_Flag1);

        if (this.zs_Flag1) {
            this.dqzt1 = true;
            console.log('this.dqzt1', this.dqzt1);
            console.log('当前处于制水模式');
        } else {
            this.dqzt1 = false;
            console.log('当前处于非制水模式');
        }

        console.log('消毒模式按钮颜色显示');
        console.log('this.xd_Flag', this.xd_Flag);
        console.log('this.xd_Flag1', this.xd_Flag1);
        console.log('this.cx_Flag', this.cx_Flag);
        console.log('this.cx_Flag1', this.cx_Flag1);

        if (this.xd_Flag1 == true || this.cx_Flag1 == true) {
            this.dqzt2 = true;

            console.log('this.dqzt2', this.dqzt2);
            console.log('当前处于消毒模式');
        } else {
            this.dqzt2 = false;
            console.log('当前处于非消毒模式');
        }
    }
};
</script>

<style scoped>
.zcdys {
    position: fixed;
    width: 771px;
    height: 445px;
    background-image: url(../../../assets/img/zcd1.png);
    background-size: 100%;
    margin-left: 30px;
    margin-top: 30px;
}

.zsys {
    position: fixed;
    font-size: 24px;
    margin-top: 117px;
    margin-left: 507px;
    text-align: center;
    list-style: none;
    width: 147px;
    background: #54aacb;
    line-height: 55px;
    z-index: 100;
    font-weight: bold;
    font-family: SimSun;
}

.xdys {
    position: fixed;
    font-size: 24px;
    margin-top: 190px;
    margin-left: 507px;
    text-align: center;
    list-style: none;
    width: 147px;
    background: #54aacb;
    line-height: 55px;
    z-index: 100;
    font-weight: bold;
    font-family: SimSun;
}

.csszys {
    position: fixed;
    font-size: 24px;
    margin-top: 260px;
    margin-left: 507px;
    text-align: center;

    width: 147px;
    background: #54aacb;
    line-height: 55px;
    z-index: 100;
    font-weight: bold;
    font-family: SimSun;
}

.tsyxys {
    position: fixed;
    font-size: 24px;
    margin-top: 340px;
    margin-left: 507px;
    text-align: center;

    width: 147px;
    background: #54aacb;
    line-height: 55px;
    z-index: 100;
    font-weight: bold;
    font-family: SimSun;
}

ul {
    width: 100px;
    height: 100px;
    /* margin-top: 150px; */
    position: fixed;
    right: 1782px;
    top: 125px;
}

.item {
    font-size: 24px;
    margin-top: 20px;
    margin-left: 498px;
    text-align: center;
    list-style: none;
    width: 147px;
    background: #54aacb;
    line-height: 55px;
    /* z-index: 100; */
    font-weight: bold;
    font-family: SimSun;
}

.open {
    background: #ff5300;
    color: black;
}
.close {
    background: #54aacb;
    color: black;
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

.ys_zcdfh {
    position: absolute;
    width: 150px;
    height: 60px;
    background-color: #54aacb;
    font-size: 24px;
    margin-left: 10px;
    margin-top: 360px;
    letter-spacing: 30px;
    text-indent: 30px;
}
</style>