<template>
    <el-table :data="tableData" border size="small" class="ms-title">
        <el-table-column type="index" align="center" label="N0." fixed></el-table-column>
        <el-table-column min-width="140px" label="datetime" align="center">
            <template slot-scope="scope">
                <span>{{ scope.row.created | FormatDate('yyyy-MM-dd HH:mm:ss') }}</span>
            </template>
        </el-table-column>
        <el-table-column min-width="120px" type="text" prop="eid" label="eid" align="center"></el-table-column>
        <el-table-column prop="type" min-width="120px" label="type" align="center"></el-table-column>
        <el-table-column prop="hospital" min-width="120px" label="hospital" align="center"></el-table-column>
        <el-table-column prop="province" min-width="120px" label="province" align="center"></el-table-column>
        <el-table-column prop="city" min-width="120px" label="city" align="center"></el-table-column>
        <el-table-column prop="person" label="person" align="center"></el-table-column>
        <el-table-column prop="etypecode" min-width="120px" label="etypecode" align="center"></el-table-column>

        <el-table-column label="操作" min-width="140px" align="center">
            <template slot-scope="scope">
                <el-button
                    @click="func(scope.row.eid)"
                    type="text"
                   
                    size="small"
                >查看数据</el-button>
                <el-button
                    @click="func1(scope.row.eid)"
                    type="text"
                    
                    size="small"
                >设备主页</el-button>
            </template>
           
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
        return {
            zx_uid: '',
            // etypecode: '25187',
            // uid: '',
            tableData: [],
            timer: null // 定时器名称
        };
    },

    methods: {
        //刷新页面或者从别的页面进入，提取this.history的值
        getPageData() {
            this.tableData = JSON.parse(localStorage.getItem('this.tableData')); //使用getItem方法的前提是，你再自己需要的地方使用了setItem方法
        },

        func(eid) {
            //跳转到历史记录查看界面
            // this.$router.push('/DragDialog');

            // let eid = row.eid;

            console.log(eid);

            this.$router.push({
                // path: '/Tabs',
                path: '/DragDialog',
                query: {
                    eid: eid,
                    uid: this.zx_uid,
                    etypecode: '25187'
                }
            });

            localStorage.setItem('ms_eid', eid);
            localStorage.setItem('ms_uid1', this.zx_uid);

            // localStorage.setItem('ms_uid', this.uid);
            // localStorage.setItem('ms_etypecode', this.etypecode);

            console.log('66666666666666666666666666666666');
            console.log(eid);
            console.log(this.zx_uid);
            // console.log(this.etypecode);
            console.log('查看数据传参成功！！！！！！！');
        },

        func1(eid) {
            //跳转到主菜单
            // this.$router.push('/zcd');

            // let eid = row.eid;

            // console.log(eid);

            this.$router.push({
                path: '/zcd',
                query: {
                    eid: eid,
                    uid: this.zx_uid,
                    etypecode: '25187'
                }
            });

            localStorage.setItem('ms_eid', eid);
            localStorage.setItem('ms_uid1', this.zx_uid);
            // localStorage.setItem('ms_uid', this.uid);
            // localStorage.setItem('ms_etypecode', this.etypecode);

            console.log('66666666666666666666666666666666');
            console.log(eid);
            // console.log(this.etypecode);
            console.log('设备主页传参成功！！！！！！！');
        },

        getData_onDev() {
            // axios 中的POST请求
            this.$axios({
                method: 'post',
                url: '/appEquiment/equipmentonline',
                data: {
                    date: '2020-04-08T00:58:15.140Z',
                    etypecode: '25187',
                    uid: this.zx_uid
                    // uid: '1141515585641832449'
                }
            }).then(res => {
                if (res.data.code === 0) {
                    this.tableData = res.data.data.equipmentList;
                    console.log(res.data);

                    localStorage.setItem('ms_uid1', this.zx_uid);

                    // this.eid = res.data.data.equipmentList[0].eid;

                    console.log('2020.7.4请求在线设备成功！！！');
                    // console.log(res.data.data.equipmentList);
                    // console.log(res.data.data.equipmentList[0]);
                    // console.log(res.data.data.equipmentList[this.scope.row.$index].eid);
                    // console.log(res.data.equipmentList.eid);

                    console.log('2020.4.13打印打印');
                }
                console.log(res.data.data);
            });
        },

        // setTimer() {
        //     if (this.timer == null) {
        //         this.timer = window.setInterval(() => {

        //         }, 3000);
        //     }
        // },

        //编辑——日期
        handleCurrentChange(row, event, column) {
            console.log(row, event, column, event.currentTarget);
        },

        //编辑——通用
        handleEdit(index, row) {
            console.log(index, row);
        }
    },

    created: function() {
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');

        // this.uid = this.$route.query.uid;

        this.zx_uid = localStorage.getItem('ms_uid');
        // this.zx_uid1 = localStorage.getItem('ms_uid1');

        localStorage.setItem('ms_uid1', this.zx_uid);

        console.log(this.zx_uid);

        console.log('2020.7.6设备列表接收传参成功！！！');
        // this.getFamilyBase_info();
        // 每次进入界面时，先清除之前的所有定时器，然后启动新的定时器
        // clearInterval(this.timer);
        // this.timer = null;
        // this.setTimer();

        this.getData_onDev();

        this.getPageData();
    }

    // destroyed: function() {
    //     // 每次离开当前界面时，清除定时器
    //     clearInterval(this.timer);
    //     this.timer = null;
    // }
};
</script>

<style scoped>
.ms-title {
    /* font-size: 14px; */
    /* font-size: 14px; */
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

.tb-edit .input-box {
    display: none;
}
.tb-edit .current-cell .input-box {
    display: block;
    margin-left: -15px;
}
</style>


