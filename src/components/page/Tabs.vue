<!--
 * @Author: your name
 * @Date: 2020-04-22 16:42:26
 * @LastEditTime: 2020-05-07 09:29:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project\src\views\home\Tabs.vue
 -->
<template>
    <div class="tabZujian">
        
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="在线设备" name="first" :key="'first'">
                <child1 v-if="isChildUpdate1"></child1>
            </el-tab-pane>
    
            <el-tab-pane label="离线设备" name="second" :key="'second'">
                <child2 v-if="isChildUpdate2"></child2>    
            </el-tab-pane>
        </el-tabs>
        
    </div>
</template>

<script>
import Icon from '@/components/page/Icon'
import I18n from '@/components/page/I18n'
export default {

    uid: '',
    name: 'tabZujian',
    components:{
        child1:Icon,
        child2:I18n
    },
    data() {
        return {
            //默认第一个选项卡
            activeName: "first",
            isChildUpdate1:true,
            isChildUpdate2:false
        }
    },
    mounted(){
        
    },
    methods:{
        handleClick(tab) {
            if(tab.name == "first") {
                this.isChildUpdate1 = true;
                this.isChildUpdate2 = false;
            } else if(tab.name == "second") {
                this.isChildUpdate1 = false;
                this.isChildUpdate2 = true;
            }
        }
    },


    created: function() {

    //     console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        
    //      this.uid = this.$route.query.uid;

    //      console.log(this.uid);

    //      console.log('2020.4.20传参成功！！！');
    }
}
</script>