<template>
    <!-- <div>
    <div class="ms-title">离线设备</div>-->
    <!-- <el-table :data="tableData" border size="mini" fit highlight-current-row height="500"> -->

    <el-table
        :data="tableData"
        border
        size="mini"
        class="tb-edit"
        style="width: 100%"
        highlight-current-row
        @row-click="handleCurrentChange"
    >
        <el-table-column type="index" align="center" label="N0." fixed></el-table-column>

        <!-- <el-table-column type="created" align="center" label="datetime" fixed></el-table-column> -->

        <!-- <el-table-column prop="created" min-width="140px" label="datetime" align="center"> -->

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
    </el-table>
</template>


<script>
// import { http } from '@/utils/request';

export default {
    data() {
        return {
            lx_uid: '',
            tableData: [],
            timer: null, // 定时器名称
            editable: []
        };
    },

    methods: {
        //刷新页面或者从别的页面进入，提取this.history的值
        getPageData() {
            this.tableData = JSON.parse(localStorage.getItem('this.tableData')); //使用getItem方法的前提是，你再自己需要的地方使用了setItem方法
        },

        func() {
            this.$router.push('/DragDialog');
        },

        getData_offDev() {
            // axios 中的POST请求
            this.$axios({
                method: 'post',
                url: '/appEquiment/equipmentoffline',
                data: {
                    date: '2020-04-08T00:58:15.140Z',
                    etypecode: '25187',
                    uid: '1141515585641832449'
                }
            }).then(res => {
                if (res.data.code === 0) {
                    this.tableData = res.data.data.equipmentList;
                    // console.log('this.tableData', this.tableData);

                    console.log('2020.4.11请求离线设备成功！！！');
                    console.log(res.data.data.equipmentList);
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
        this.lx_uid = localStorage.getItem('ms_uid');

        console.log(this.lx_uid);

        this.getData_offDev();
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
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}
</style>


