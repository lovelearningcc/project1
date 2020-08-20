<template>
    <div class="ys00">
        <div class="ys11">
            <div class="ys_gzms">
                设备工作模式：
                <span>{{work_mode}}</span>
            </div>

            <div class="ys_yxzt">
                设备运行状态：
                <span>{{run_status}}</span>
            </div>
        </div>

        <div class="ys_ddlls">
            <div class="ys_ddlls1">电导率和流速</div>

            <el-table
                :data="tableData.slice((this.page - 1) * this.size, (this.page - 1) * this.size + this.size)"
                border
                size="mini"
                fit
                height="254"
                class="ys_bg"
            >
                <el-table-column
                    type="index"
                    :index="indexMethod"
                    width="70px"
                    align="center"
                    label="N0."
                ></el-table-column>
                <el-table-column
                    prop="ysdd"
                    width="150px"
                    style="-moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;"
                    align="center"
                    label="原水电导"
                ></el-table-column>
                <el-table-column prop="yjnsdd" width="150px" align="center" label="一级浓水电导"></el-table-column>
                <el-table-column prop="yjcsdd" width="150px" align="center" label="一级纯水电导"></el-table-column>
                <el-table-column prop="ejcsdd" width="150px" align="center" label="二级纯水电导"></el-table-column>
                <el-table-column prop="yjcsll" width="150px" align="center" label="一级纯水流量"></el-table-column>
                <el-table-column prop="ejcsll" width="150px" align="center" label="二级纯水流量"></el-table-column>
                <el-table-column prop="yjfsll" width="152px" align="center" label="一级废水流量"></el-table-column>
            </el-table>

            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="page"
                :page-sizes="[6, 12, 30, 60]"
                :page-size="size"
                layout="total, sizes, prev, pager, next, jumper"
                :total="this.tableData.length"
                class="ys_xh"
            ></el-pagination>
        </div>

        <div class="ys_ddl">
            <div class="ys_ddl1">电导率和流速远程控制</div>
            <div class="ys_kysdd">
                原水电导：
                <span>
                    <input
                        type="search"
                        v-model="iysdd"
                        style="width:100px; height:30px; margin-left:10px;"
                        name="user_search"
                        placeholder=" 请输入值"
                    />
                    <button
                        style="width:60px; height:30px; margin-left:10px; border: none; color:rgb(0, 0, 0);"
                        @click="bysdd"
                    >保存</button>
                </span>
            </div>

            <div class="ys_kyjnsdd">
                一级浓水电导：
                <span>
                    <input
                        type="search"
                        v-model="iyjnsdd"
                        style="width:100px; height:30px; margin-left:10px;"
                        name="user_search"
                        placeholder="请输入值"
                    />
                    <button
                        style="width:60px; height:30px; margin-left:10px; color:rgb(0, 0, 0); border: none;"
                        @click="byjnsdd"
                    >保存</button>
                </span>
            </div>

            <div class="ys_kyjcsdd">
                一级纯水电导：
                <span>
                    <input
                        type="search"
                        v-model="iyjcsdd"
                        style="width:100px; height:30px; margin-left:10px;"
                        name="user_search"
                        placeholder="请输入值"
                    />
                    <button
                        style="width:60px; height:30px; margin-left:10px; color:rgb(0, 0, 0); border: none;"
                        @click="byjcsdd"
                    >保存</button>
                </span>
            </div>

            <div class="ys_kejcsdd">
                二级纯水电导：
                <span>
                    <input
                        type="search"
                        v-model="iejcsdd"
                        style="width:100px; height:30px; margin-left:10px;"
                        name="user_search"
                        placeholder="请输入值"
                    />
                    <button
                        style="width:60px; height:30px; margin-left:10px; color:rgb(255, 255, 255); border: none; background-color: rgb(35, 104, 218);"
                        @click="bejcsdd"
                    >保存</button>
                </span>
            </div>
            <div class="ys_kyjcsll">
                一级纯水流量：
                <span>
                    <input
                        type="search"
                        v-model="iyjcsll"
                        style="width:100px; height:30px; margin-left:10px;"
                        name="user_search"
                        placeholder="请输入值"
                    />
                    <button
                        style="width:60px; height:30px; margin-left:10px; color:rgb(255, 255, 255); border: none; background-color: rgb(35, 104, 218);"
                        @click="byjcsll"
                    >保存</button>
                </span>
            </div>
            <div class="ys_kejcsll">
                二级纯水流量：
                <span>
                    <input
                        type="search"
                        v-model="iejcsll"
                        style="width:100px; height:30px; margin-left:10px;"
                        name="user_search"
                        placeholder="请输入值"
                    />
                    <button
                        style="width:60px; height:30px; margin-left:10px; color:rgb(255, 255, 255); border: none; background-color: rgb(35, 104, 218);"
                        @click="bejcsll"
                    >保存</button>
                </span>
            </div>

            <div class="ys_kyjfsll">
                一级废水流量：
                <span>
                    <input
                        type="search"
                        v-model="iyjfsll"
                        style="width:100px; height:30px; margin-left:10px;"
                        name="user_search"
                        placeholder="请输入值"
                    />
                    <button
                        style="width:60px; height:30px; margin-left:10px; color:rgb(255, 255, 255); border: none; background-color: rgb(35, 104, 218);"
                        @click="byjfsll"
                    >保存</button>
                </span>
            </div>
        </div>

        <div class="ys_bjsjxs">
            <div class="ys_bjsjxs1">报警数据显示</div>

            <el-table
                :data="tableData1.slice((this.page1 - 1) * this.size1, (this.page1 - 1) * this.size1 + this.size1)"
                border
                size="mini"
                fit
                height="254"
                class="ys_bg"
            >
                <el-table-column
                    type="index"
                    :index="indexMethod1"
                    width="70px"
                    align="center"
                    label="N0."
                    fixed
                ></el-table-column>
                <el-table-column prop="date" width="150px" align="center" label="Date"></el-table-column>
                <el-table-column prop="time" width="150px" align="center" label="Time"></el-table-column>

                <el-table-column
                    prop="alarmdes"
                    width="752px"
                    align="center"
                    label="AlarmDescription"
                ></el-table-column>
            </el-table>

            <el-pagination
                @size-change="handleSizeChange1"
                @current-change="handleCurrentChange1"
                :current-page="page1"
                :page-sizes="[6, 12, 30, 60]"
                :page-size="size1"
                layout="total, sizes, prev, pager, next, jumper"
                :total="this.tableData1.length"
                class="ys_xh"
            ></el-pagination>
        </div>

        <div class="ys_yxztkz">
            <span class="ys_yxztkz1">运行状态控制</span>
            <div class="ys_zs">
                制 水：
                <el-switch
                    v-model="szs"
                    on-color="#00A854"
                    active-text="运行中"
                    on-value="1"
                    off-color="#F04134"
                    inactive-text="停止"
                    off-value="0"
                    style="margin-left: 23px;"
                    @change="bzs"
                ></el-switch>
            </div>

            <div class="ys_cx">
                冲 洗：
                <el-switch
                    v-model="scx"
                    on-color="#00A854"
                    active-text="运行中"
                    on-value="1"
                    off-color="#F04134"
                    inactive-text="停止"
                    off-value="0"
                    style="margin-left: 23px;"
                    @change="bcx"
                ></el-switch>
            </div>

            <div class="ys_xd">
                消 毒：
                <el-switch
                    v-model="sxd"
                    on-color="#00A854"
                    active-text="运行中"
                    on-value="1"
                    off-color="#F04134"
                    inactive-text="停止"
                    style="margin-left: 23px;"
                    off-value="0"
                    @change="bxd"
                ></el-switch>
            </div>

            <div class="ys_xdzt">
                消毒暂停：
                <el-switch
                    v-model="sxdzt"
                    on-color="#00A854"
                    active-text="运行中"
                    on-value="1"
                    off-color="#F04134"
                    inactive-text="停止"
                    off-value="0"
                    @change="bxdzt"
                ></el-switch>
            </div>

            <div class="ys_yjms">
                夜间模式：
                <el-switch
                    v-model="syjms"
                    on-color="#00A854"
                    active-text="运行中"
                    on-value="1"
                    off-color="#F04134"
                    inactive-text="停止"
                    off-value="0"
                    @change="byjms"
                ></el-switch>
            </div>

            <button class="ys_fhan" type="primary" @click="btn_fh()">返回</button>
        </div>

        <!-- <button class="ys_fhan" type="primary" @click="btn_fh()">返回</button> -->
    </div>
</template>

<script>
import { http } from '@/utils/request';

export default {
    data() {
        return {
            scalseNum: 1, //缩放比例

            page: 1,
            size: 6,
            page1: 1,
            size1: 6,

            ys1: true,
            ys2: false,

            flag: true, //单位切换开关
            btnText: '停止',

            content: '', //发送的内容

            eid: '', //设备号
            eypecode: '', //设备类型
            uid: '', //不同类型设备识别码
            iysdd: '',
            iyjnsdd: '',
            iyjcsdd: '',
            iejcsdd: '',
            iyjcsll: '',
            iejcsll: '',
            iyjfsll: '',

            work_mode: '', //工作模式
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

            tableData: [], //存放table中显示的数据，也就是某页的数据放在这里

            tableData1: [],

            Datas: [],

            timer: null // 定时器名称
        };
    },

    methods: {
        btn_fh() {
            this.$router.push({
                path: '/Tabs'
            });
        },
        indexMethod(index) {
            return (this.page - 1) * this.size + index + 1;
        },

        indexMethod1(index) {
            return (this.page1 - 1) * this.size1 + index + 1;
        },

        // queryData() {
        //     this.page = 1;
        //     this.size = 6;
        // },

        // 修改页大小
        handleSizeChange(val) {
            this.size = val;
            index++;
        },
        // 修改页码
        handleCurrentChange(val) {
            this.page = val;
        },

        // 修改页大小
        handleSizeChange1(val1) {
            this.size1 = val1;
            index++;
        },
        // 修改页码
        handleCurrentChange1(val1) {
            this.page1 = val1;
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

        bzs() {
            console.log('11111111111111111111111111111');
            console.log(this.szs);
            // debugger;
            clearInterval(this.timer);
            this.timer = null;

            console.log('开始进入if判断。。。。');
            if (this.sxd == false && this.scx == false && this.sfc == false && this.syjms == false) {
                if (this.szs == true) {
                    this.content = '0001';
                } else {
                    this.content = '0000';
                }

                this.setTimer();

                http({
                    url: '/appEquiment/customMessage',
                    method: 'post',
                    data: {
                        commond: '0110',
                        content: this.content,
                        date: new Date().toLocaleString(),
                        // deviceNum: '0002D102',
                        // etypecode: '25187',
                        deviceNum: this.eid,
                        etypecode: this.eypecode,
                        iemi: '867665048501482',
                        num: '0001',
                        numLen: '02',
                        phone: '18349112013',
                        startAdd: '0140',
                        // uid: '1141515585641832449'
                        uid: this.uid
                    }
                }).then(res => {
                    if (res.data.code === 0) {
                        console.log('远程控制成功----------！！！');
                    }
                });
            } else {
                console.log(this.szs); //true
                console.log(this.sxd); //false
                console.log(this.scx); //false
                console.log(this.sfc); //false
                console.log(this.syjms); //false

                this.szs = false;
                console.log('远程控制成功----------！！！');
                console.log('当前不能点击制水按钮');
                this.$message.error('当前不能点击制水按钮');
            }

            console.log('制水远程控制执行完毕');

            console.log('222222222222222222222222222');
            console.log(this.szs);
        },

        bxd() {
            console.log(this.sxd);

            clearInterval(this.timer);
            this.timer = null;

            if (this.szs == false && this.scx == false && this.sfc == false && this.syjms == false) {
                console.log('进入了消毒按钮！！！！！！！！！！');
                if (this.sxd == true) {
                    this.content = '0001';
                } else {
                    this.content = '0000';
                    // this.sxdzt == true;

                    console.log(this.sxd);
                    // console.log(this.sxdzt);

                    // this.bxdzt();
                }

                this.setTimer();
                http({
                    url: '/appEquiment/customMessage',
                    method: 'post',
                    data: {
                        commond: '0110',
                        content: this.content,
                        date: new Date().toLocaleString(),
                        // deviceNum: '0002D102',
                        // etypecode: '25187',
                        deviceNum: this.eid,
                        etypecode: this.eypecode,
                        iemi: '867665048501482',
                        num: '0001',
                        numLen: '02',
                        phone: '18349112013',
                        startAdd: '0141',
                        uid: this.uid
                    }
                }).then(res => {
                    if (res.data.code === 0) {
                        console.log('远程控制成功----------！！！');
                    }
                });
            } else {
                this.sxd = false;
                console.log(this.szs); //true
                console.log(this.sxd); //true
                console.log(this.scx); //false
                console.log(this.sfc); //false
                console.log(this.syjms); //false
                console.log('当前不能点击消毒按钮');
                this.$message.error('当前不能点击消毒按钮');
            }
        },

        //gcc_add
        bxdzt() {
            // console.log(this.sxd);

            console.log(this.szs);
            console.log(this.scx);
            console.log(this.sfc);
            console.log(this.syjms);
            console.log(this.sxd);

            clearInterval(this.timer);
            this.timer = null;

            if (this.szs == false && this.scx == false && this.sfc == false && this.syjms == false && this.sxd == true) {
                console.log('进入了消毒暂停按钮！！！！！！！！！！');

                console.log(this.szs);
                console.log(this.scx);
                console.log(this.sfc);
                console.log(this.syjms);
                console.log(this.sxd);

                if (this.sxd == true) {
                    if (this.sxdzt == true) {
                        this.content = '0001';
                    } else {
                        this.content = '0000';
                        // this.sxdzt == true;
                        console.log(this.sxd);
                    }
                } else {
                    console.log('当前不能点击消毒暂停111按钮');
                    this.$message.error('当前不能点击消毒暂停111按钮');
                }

                this.setTimer();
                http({
                    url: '/appEquiment/customMessage',
                    method: 'post',
                    data: {
                        commond: '0110',
                        content: this.content,
                        date: new Date().toLocaleString(),
                        // deviceNum: '0002D102',
                        // etypecode: '25187',
                        deviceNum: this.eid,
                        etypecode: this.eypecode,
                        iemi: '867665048501482',
                        num: '0001',
                        numLen: '02',
                        phone: '18349112013',
                        startAdd: '0142',
                        uid: this.uid
                    }
                }).then(res => {
                    if (res.data.code === 0) {
                        console.log('远程控制成功----------！！！');
                    }
                });
            } else {
                this.sxdzt = false;
                // console.log(this.szs); //true
                // console.log(this.sxd); //true
                // console.log(this.scx); //false
                // console.log(this.sfc); //false
                // console.log(this.syjms); //false
                console.log('当前不能点击消毒暂停0按钮');
                this.$message.error('当前不能点击消毒暂停0按钮');
            }
        },
        //gc_end

        bcx() {
            clearInterval(this.timer);
            this.timer = null;

            // this.setTimer();

            if (this.szs == false && this.sxd == false && this.sfc == false && this.syjms == false) {
                if (this.scx == true) {
                    this.content = '0001';
                } else {
                    this.content = '0000';
                }

                this.setTimer();
                http({
                    url: '/appEquiment/customMessage',
                    method: 'post',
                    data: {
                        commond: '0110',
                        content: this.content,
                        date: new Date().toLocaleString(),
                        // deviceNum: '0002D102',
                        // etypecode: '25187',
                        deviceNum: this.eid,
                        etypecode: this.eypecode,
                        iemi: '867665048501482',
                        num: '0001',
                        numLen: '02',
                        phone: '18349112013',
                        startAdd: '0143',
                        uid: this.uid
                    }
                }).then(res => {
                    if (res.data.code === 0) {
                        console.log('2020.4.29!!------远程控制成功----------！！！');
                    }
                });
            } else {
                this.scx = false;
                console.log('远程控制成功----------！！！');
                console.log('当前不能点击冲洗按钮');
                this.$message.error('当前不能点击冲洗按钮');
            }
        },
        byjms() {
            console.log(this.syjms);

            clearInterval(this.timer);
            this.timer = null;

            if (this.szs == false && this.scx == false && this.sfc == false && this.xd == false) {
                if (this.syjms == true) {
                    this.content = '0001';
                } else {
                    this.content = '0000';
                }

                this.setTimer();
                http({
                    url: '/appEquiment/customMessage',
                    method: 'post',
                    data: {
                        commond: '0110',
                        content: this.content,
                        date: new Date().toLocaleString(),
                        deviceNum: this.eid,
                        etypecode: this.eypecode,
                        // deviceNum: '0002D102',
                        // etypecode: '25187',
                        iemi: '867665048501482',
                        num: '0001',
                        numLen: '02',
                        phone: '18349112013',
                        startAdd: '0145',
                        uid: this.uid
                    }
                }).then(res => {
                    if (res.data.code === 0) {
                        console.log('2020.4.29!!------远程控制成功----------！！！');
                    }
                });
            } else {
                this.syjms = false;
                console.log('远程控制成功----------！！！');
                console.log('当前不能点击夜间模式按钮');
                this.$message.error('当前不能点击夜间模式按钮');
            }
        },

        // switchChange() {
        //     this.istag = !this.istag;
        // },

        // current_change: function(currentPage) {
        //     this.currentPage = currentPage;
        // },

        //电导率和流速远程控制
        bysdd() {
            console.log('原水电导远程控制。。。。。。。。');

            clearInterval(this.timer);
            this.timer = null;

            this.setTimer();

            http({
                url: '/appEquiment/customMessage',
                method: 'post',

                data: {
                    commond: '0110',
                    // content: '00000008001E',
                    content: this.convert(this.iysdd, 10, 16).padStart(4, '0'), //10转16并补够4位
                    date: new Date().toLocaleString(),
                    deviceNum: this.eid,
                    etypecode: '25187',
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '0130',
                    uid: this.uid
                }
            }).then(res => {
                console.log(res.data.data);
                if (res.data.code === 0) {
                    console.log('bysdd远程控制成功----------！！！');
                }
            });
        },

        byjnsdd() {
            clearInterval(this.timer);
            this.timer = null;

            this.setTimer();
            http({
                url: '/appEquiment/customMessage',
                method: 'post',

                data: {
                    commond: '0110',
                    // content: '00000008001E',
                    content: this.convert(this.iyjnsdd, 10, 16).padStart(4, '0'), //10转16并补够4位
                    date: new Date().toLocaleString(),
                    deviceNum: this.eid,
                    etypecode: '25187',
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '0131',
                    uid: this.uid
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('byjnsdd远程控制成功----------！！！');
                }
            });
        },

        byjcsdd() {
            clearInterval(this.timer);
            this.timer = null;

            this.setTimer();
            http({
                url: '/appEquiment/customMessage',
                method: 'post',

                data: {
                    commond: '0110',
                    // content: '00000008001E',
                    content: this.convert(this.iyjcsdd, 10, 16).padStart(4, '0'), //10转16并补够4位
                    date: new Date().toLocaleString(),
                    deviceNum: this.eid,
                    etypecode: '25187',
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '0132',
                    uid: this.uid
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('byjcsdd远程控制成功----------！！！');
                }
            });
        },

        bejcsdd() {
            clearInterval(this.timer);
            this.timer = null;

            this.setTimer();
            http({
                url: '/appEquiment/customMessage',
                method: 'post',

                data: {
                    commond: '0110',
                    // content: '00000008001E',
                    content: this.convert(this.iejcsdd, 10, 16).padStart(4, '0'), //10转16并补够4位
                    date: new Date().toLocaleString(),
                    deviceNum: this.eid,
                    etypecode: '25187',
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '0133',
                    uid: this.uid
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('bejcsdd远程控制成功----------！！！');
                }
            });
        },

        byjcsll() {
            clearInterval(this.timer);
            this.timer = null;

            this.setTimer();
            http({
                url: '/appEquiment/customMessage',
                method: 'post',

                data: {
                    commond: '0110',
                    // content: '00000008001E',
                    content: this.convert(this.iyjcsll, 10, 16).padStart(4, '0'), //10转16并补够4位
                    date: new Date().toLocaleString(),
                    deviceNum: this.eid,
                    etypecode: '25187',
                    iemi: '123456',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '0134',
                    uid: this.uid
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('byjcsll远程控制成功----------！！！');
                }
            });
        },

        bejcsll() {
            clearInterval(this.timer);
            this.timer = null;

            this.setTimer();
            http({
                url: '/appEquiment/customMessage',
                method: 'post',

                data: {
                    commond: '0110',
                    // content: '00000008001E',
                    content: this.convert(this.iejcsll, 10, 16).padStart(4, '0'), //10转16并补够4位
                    date: new Date().toLocaleString(),
                    deviceNum: this.eid,
                    etypecode: '25187',
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '0135',
                    uid: this.uid
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('bejcsll远程控制成功--------！！');
                }
            });
        },

        byjfsll() {
            clearInterval(this.timer);
            this.timer = null;

            this.setTimer();
            http({
                url: '/appEquiment/customMessage',
                method: 'post',
                // url: '/appEquiment/equipmentonline',
                data: {
                    commond: '0110',
                    // content: '00000008001E',
                    content: this.convert(this.iyjfsll, 10, 16).padStart(4, '0'), //10转16并补够4位
                    date: new Date().toLocaleString(),
                    deviceNum: this.eid,
                    etypecode: '25187',
                    iemi: '867665048501482',
                    num: '0001',
                    numLen: '02',
                    phone: '18349112013',
                    startAdd: '0136',
                    uid: this.uid
                }
            }).then(res => {
                if (res.data.code === 0) {
                    console.log('byjfsll远程控制成功------！！');
                }
            });
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
                    eid: this.eid,
                    eypecode: this.eypecode
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

                        //工作模式
                        if (value1 == '0') {
                            this.work_mode = '双级反渗';
                        } else if (value1 == '1') {
                            this.work_mode = '一级反渗';
                        } else {
                            this.work_mode == '二级反渗';
                        }

                        console.log('value2----', value2);

                        let vzs = value2.substring(15, 16); //制水
                        let vcx = value2.substring(14, 15); //冲洗
                        let vxd = value2.substring(13, 14); //消毒
                        let vfc = value2.substring(12, 13); //反冲
                        let vyjms = value2.substring(11, 12); //夜间模式
                        let vjt = value2.substring(10, 11); //急停状态
                        //  let vkx = value2.substring(9, 10); //制水

                        //设备运行状态
                        if (vzs == '1') {
                            this.run_status = '制水';
                            console.log('制水');
                            this.szs = true;
                        } else {
                            this.szs = false;
                        }
                        if (vcx == '1') {
                            this.run_status = '冲洗';
                            console.log('冲洗');
                            this.scx = true;
                        } else {
                            this.scx = false;
                        }

                        if (vxd == '1') {
                            this.run_status = '消毒';
                            console.log('消毒');
                            this.sxd = true;
                            this.sxdzt == true;
                        } else {
                            this.sxd = false;
                            this.sxdzt == false;
                        }
                        if (vfc == '1') {
                            this.run_status = '反冲';
                            this.sfc = true;
                        } else {
                            this.sfc = false;
                        }
                        if (vyjms == '1') {
                            this.run_status = '夜间模式';
                            this.syjms = true;
                        } else {
                            this.syjms = false;
                        }
                        if (vjt == '1') {
                            this.run_status = '急停状态';
                            console.log('急停');
                            this.sjt = true;
                        } else {
                            this.sjt = false;
                        }
                        if (value2 == '0000000000000000') {
                            this.run_status = '空闲';

                            this.szs = false;
                            this.scx = false;
                            this.sxd = false;
                            this.sxdzt = false;
                            this.sfc = false;
                            this.syjms = false;
                            this.sjt = false;
                        }

                        console.log('打印标志位：————————--');
                        console.log('szs------------', this.szs);

                        // 电导率和流速;
                        let ysdd = this.hex_to_dec(value.substring(52, 56)); //原水电导                     16转10
                        let yjnsdd = this.hex_to_dec(value.substring(56, 60)); //一级浓水电导
                        let yjcsdd = this.hex_to_dec(value.substring(60, 64)); //一级纯水电导
                        let ejcsdd = this.hex_to_dec(value.substring(64, 68)); //二级纯水电导
                        let yjcsll = this.hex_to_dec(value.substring(68, 72)); //一级纯水流量
                        let ejcsll = this.hex_to_dec(value.substring(72, 76)); //二级纯水流量
                        let yjfsll = this.hex_to_dec(value.substring(76, 80)); //一级废水流量

                        let data = [];
                        data.push({ ysdd, yjnsdd, yjcsdd, ejcsdd, yjcsll, ejcsll, yjfsll });
                        this.tableData = this.tableData.concat(data);

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
                            console.log('报警0不存在！！');
                        }
                        if (bj1 == '1') {
                            alarmdes1 = '平衡器水位过低';
                            data1.push({ ...params, alarmdes: alarmdes1 });
                        } else {
                            console.log('报警1不存在！！');
                        }
                        if (bj2 == '1') {
                            alarmdes2 = '高压泵1出口压力过高';
                            data1.push({ ...params, alarmdes: alarmdes2 });
                        } else {
                            console.log('报警2不存在！！');
                        }
                        if (bj3 == '1') {
                            alarmdes3 = '高压泵2出口压力过低';
                            data1.push({ ...params, alarmdes: alarmdes3 });
                        } else {
                            console.log('报警3不存在！！');
                        }
                        if (bj4 == '1') {
                            alarmdes4 = '高压泵2出口压力过高';
                            data1.push({ ...params, alarmdes: alarmdes4 });
                        } else {
                            console.log('报警4不存在！！');
                        }
                        if (bj5 == '1') {
                            alarmdes5 = '反冲洗动作';
                            data1.push({ ...params, alarmdes: alarmdes5 });
                        } else {
                            console.log('报警5不存在！！');
                        }
                        if (bj6 == '1') {
                            alarmdes6 = '二级产水电导异常';
                            data1.push({ ...params, alarmdes: alarmdes6 });
                        } else {
                            console.log('报警6不存在！！');
                        }
                        if (bj7 == '1') {
                            alarmdes7 = '报警7';
                            data1.push({ ...params, alarmdes: alarmdes7 });
                        } else {
                            console.log('报警7不存在！！');
                        }

                        if (value5 == '0000000000000000') {
                            alarmdes8 = '无报警';
                            data1.push({ ...params, alarmdes: alarmdes8 });
                        } else {
                            console.log('无报警不存在！！');
                        }

                        console.log('data1', data1);
                        this.tableData1 = this.tableData1.concat(data1);
                        console.log('tableData1', this.tableData1);
                    }
                }
            });
            this.loading = false;

            console.log('2020.5.12数据请求完成！！！！！！');
            console.log('00000000000000000000000000');
            console.log(this.szs);
        },

        setTimer() {
            if (this.timer == null) {
                this.timer = setInterval(() => {
                    this.getdata();

                    this.flagTime = true;
                    console.log(this.eid);
                    console.log(this.eypecode);

                    // axios 中的POST请求
                }, 8000);
            }
        },

        detectZoom() {
            var ratio = 0,
                screen = window.screen,
                ua = navigator.userAgent.toLowerCase();

            if (window.devicePixelRatio !== undefined) {
                ratio = window.devicePixelRatio;
            } else if (~ua.indexOf('msie')) {
                if (screen.deviceXDPI && screen.logicalXDPI) {
                    ratio = screen.deviceXDPI / screen.logicalXDPI;
                }
            } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
                ratio = window.outerWidth / window.innerWidth;
            }

            if (ratio) {
                ratio = Math.round(ratio * 100);
            }

            return ratio;
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
        this.detectZoom();
        //计算缩放比例
        this.resize_window();
        window.addEventListener('resize', () => {
            this.resize_window();
        });
        // this.sxdzt == true;
        console.log('111111111111111111111111111111');

        console.log(this.$route.query);

        this.eid = this.$route.query.eid;
        this.eypecode = this.$route.query.etypecode;
        this.uid = this.$route.query.uid;

        console.log(this.eid);
        console.log(this.eypecode);
        console.log(this.uid);

        console.log('实时数据显示接收传参成功！！！');

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
.ys00 {
    width: 100%;
    height: 100%;
    position: fixed;
    /* font-weight: bold; */
    margin-left: 30px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys11 {
    width: 50%;
    height: 50%;
    position: fixed;
    margin-top: 20px;
    margin-left: 30px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_gzms {
    float: left;
    font-size: 14px;
    /* font-weight: bold; */
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_yxzt {
    /* font-weight: bold; */
    margin-top: 30px;
    font-size: 14px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_ddlls {
    width: 58.5%;

    float: left;
    margin-left: 30px;
    font-size: 14px;
    margin-top: 86px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_ddlls1 {
    font-weight: bold;

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_bg {
    width: 100%;
    height: 100%;
    margin-top: 6px;
    font-size: 14px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_bg1 {
    width: 100%;
    height: 100%;
    margin-top: 6px;
    font-size: 14px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_xh {
    margin-top: 6px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}
.ys_ys {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_ddl {
    float: left;

    margin-top: 40px;
    font-size: 14px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_ddl1 {
    margin-left: 107px;
    font-weight: bold;
}

.ys_kysdd {
    margin-left: 105px;
    margin-top: 15px;
    font-size: 14px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_kyjnsdd {
    margin-left: 78px;
    margin-top: 15px;
    font-size: 14px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_kyjcsdd {
    margin-left: 78px;
    margin-top: 15px;
    font-size: 14px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_kejcsdd {
    margin-left: 78px;
    margin-top: 15px;
    font-size: 14px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_kyjcsll {
    margin-left: 78px;
    margin-top: 15px;
    font-size: 14px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_kejcsll {
    margin-left: 78px;
    margin-top: 15px;
    font-size: 14px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_kyjfsll {
    margin-left: 78px;
    margin-top: 15px;
    font-size: 14px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_bjsjxs {
    width: 58.5%;
    float: left;
    margin-left: 30px;

    font-size: 14px;
    margin-top: 30px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_bjsjxs1 {
    font-weight: bold;
}

.ys_yxztkz {
    width: 20%;
    /* height: 21%; */
    float: left;
    margin-left: 80px;
    margin-top: 30px;
    font-size: 14px;

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_yxztkz1 {
    margin-left: 40px;
    font-weight: bold;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_zs {
    margin-left: 0px;
    margin-top: 20px;
    font-size: 14px;

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_xd {
    margin-top: 20px;
    font-size: 14px;
    /* letter-spacing: 2px; */
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_xdzt {
    margin-left: 0px;
    margin-top: 20px;
    font-size: 14px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_cx {
    margin-left: 0px;
    margin-top: 20px;
    font-size: 14px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    /* letter-spacing: 2px; */
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_yjms {
    margin-left: 0px;
    margin-top: 20px;
    font-size: 14px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.ys_fhan {
    /* float: left; */
    position: fixed;
    width: 145px;
    height: 50px;
    background: #2368da;
    font-size: 24px;
    /* margin-left: 20px; */
    margin-top: 20px;
    letter-spacing: 30px;
    text-indent: 30px;
    /* font-weight: bold; */
    /* font-family: SimSun; */
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;

    /* border-radius: 15px; */
}

/* width:60px; height:30px; margin-left:10px; color:rgb(255, 255, 255); border: none; background-color: rgb(35, 104, 218); */
</style>
