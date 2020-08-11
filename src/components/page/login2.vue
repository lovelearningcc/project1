<template>
    <div class="login">
        <div class="login-mess">
            <div class="fl">
                <img src="@/assets/img/logo-2.png" alt />
            </div>
            <div class="fr">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                    <div class="title">
                        <i>欢迎登录</i>
                    </div>
                    <div class="putinfo">
                        <el-form-item prop="userName">
                            <i class="iconfont iconyonghu"></i>
                            <el-input type="text" v-model="ruleForm.userName" placeholder="请输入用户名" />
                        </el-form-item>
                    </div>
                    <div class="putinfo">
                        <el-form-item prop="passWord">
                            <i class="iconfont iconmima"></i>
                            <el-input
                                type="password"
                                v-model="ruleForm.passWord"
                                placeholder="请输入密码"
                            />
                        </el-form-item>
                    </div>
                    <div class="putinfo yzminfo">
                        <el-form-item prop="code">
                            <i class="iconfont iconyanzhengma"></i>
                            <el-input type="text" v-model="ruleForm.code" placeholder="请输入验证码"></el-input>
                            <img
                                v-if="isgetting"
                                @click="getCode"
                                class="codenumimg"
                                :src="codeNum"
                                alt
                            />
                        </el-form-item>
                    </div>
                    <!-- <div class="agree">
            <el-checkbox v-model="checked"></el-checkbox>同意并遵守
            <i>《服务条款》</i>和
            <i>《隐私条款》</i>
                    </div>-->
                    <el-button class="login-in" type="primary" @click="login()">登录</el-button>
                    <!-- <div class="forgetpass">忘记密码</div> -->
                </el-form>
            </div>
        </div>
        <div class="com-infor">版权所有:兰州飞天网景信息产业有限公司</div>
    </div>
</template>

<script>
import rule from '@/common/validate.js';
import vm from '@/main.js';
export default {
    data() {
        return {
            checked: true,
            codeNum: require('@/assets/img/1.png'),
            isgetting: true,
            ruleForm: {
                userName: '',
                passWord: '',
                code: ''
            },
            rules: {
                userName: [
                    {
                        required: true,
                        message: '请输入用户名',
                        trigger: 'blur'
                    },
                    {
                        validator: rule.validater.validateAccount,
                        trigger: 'blur'
                    }
                ],
                passWord: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    },
                    {
                        // validator: rule.validater.validatePsdReg,
                        trigger: 'blur'
                    }
                ],
                code: [
                    {
                        required: true,
                        message: '请输入验证码',
                        trigger: 'blur'
                    },
                    {
                        validator: rule.validater.validateNumber,
                        trigger: 'blur'
                    }
                ]
            }
        };
    },
    created() {
        
    },
    methods: {
        // 获取验证码
        getCode() {
            this.codeNum = 'https://service.ft-iot.cn/WG/user/code/image';
            let num = Math.ceil(Math.random() * 10);
            this.codeNum = 'https://service.ft-iot.cn/WG/user/code/image?num=' + num;
        }
    }
};
</script>

<style lang="scss">
html {
    overflow: hidden;
}
</style>
