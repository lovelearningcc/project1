<!--
 * @Author: your name
 * @Date: 2020-07-20 09:50:08
 * @LastEditTime: 2020-07-27 08:54:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project1\src\views\examples\components\sjsz.vue
--> 
<template>
    <el-container>
    <el-button type="text" @click="dialogVisible = true">时间设置</el-button>

    <el-dialog :visible.sync="dialogVisible" width="50%" style=" text-align: center;" :before-close="handleClose">
      <!-- <repassword></repassword> -->
      <span>弹窗内容</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
</el-container>
</template>
<script>
// import repassword from './component/repassword'//引入密码修改模板
  export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    },
    components:{    
      // repassword
    }
  };
</script>
<style>

</style>



