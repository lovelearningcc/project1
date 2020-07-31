<template>
<div>
  <el-table
    :data="tableData"
    style="width: 100%;margin-bottom: 20px;"
    row-key="id"
    border
    default-expand-all
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
      prop="date"
      label="日期"
      sortable
      width="180">
        <template slot-scope="scope">
            <el-checkbox v-model="scope.row.checked" :label="scope.row.date" :key="scope.row.id" @change="handleCheckAllChange(scope.row)">{{scope.row.date}}</el-checkbox>
        </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</div>
</template>
<script>
  export default {
    data() {
      return {
        key: true,
        tableData: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
              children: [{
                  id: '311',
                  date: '2016-90-2'
              }]
          }]
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        tableData1: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          hasChildren: true
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
                //功能函数:选中部分子集
        setchildtobeselect(arr, key) {
            arr.forEach((v, i) => {
                v.checked = key;
                // v._expanded = key;//选中后展开子项
                if (v.children) {
                this.setchildtobeselect(v.children, v.checked);
                }
            });
        },
            //是否所有的都被选中
        isallchecked(arr) {
            arr.forEach((v, i) => {
                if (!v.checked) {
                this.key = false;
                }
                if (v.children) {
                this.isallchecked(v.children);
                }
            });
        },
            //设置父级为 未选中状态
        setparentfalse(arr, id) {
            debugger;
            arr.forEach((v, i) => {
                if (v.children) {
                v.children.forEach((val, ind) => {
                    if (val.id == id) {
                        v.checked = false;
                        return false; //终止此次循环，减少循环次数
                    }
                });
                }
                if (v.children) {
                this.setparentfalse(v.children, id);
                }
            });
        },
        //设置父级为 选中状态
        setparenttrue(arr, id) {
            arr.forEach((v, i) => {
                if (v.children) {
                    let key = true;
                    let sameidkey = false;
                    v.children.forEach((val, ind) => {
                        if (val.id == id) {
                        //确保当前点击的在该父级内
                        sameidkey = true;
                        }
                        if (!val.checked) {
                        key = false;
                        }
                    });
                    if (key && sameidkey) {
                        v.checked = true;
                    }
                }
                if (v.children) {
                    this.setparentfalse(v.children, id);
                }
            });
        },
        handleCheckAllChange(row) { //当某个选择框被选中时
            if (row.children) {    //1、若有子集先让子选中
                this.setchildtobeselect(row.children, row.checked);
            }
                //2、然后判断是否全选中
            this.key = true; //重置为true，防止上次已经是false的状态
            console.log(this.tableData);
            this.setparenttrue(this.tableData, row.id);
            debugger;
            if (!row.checked) {
                this.setparentfalse(this.tableData, row.id); //设置父级选中的状态为false
            }
        }
    }
  }
</script>