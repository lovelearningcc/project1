<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">测试平台DEMO</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="password"
                        v-model="param.password"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
import { http } from '@/utils/request';
export default {
    data: function() {
        return {
            uid: '',
            param: {
                username: '',
                password: '',
                username1: 'wlssj',
                password1: '123456'
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        };
    },

    methods: {
        submitForm() {
            // console.log('denglu ')

            this.getuid(); //获取uid

            this.$refs.login.validate(valid => {
                if (valid) {
                    http({
                        url: '/account/login ',
                        method: 'post',
                        data: {
                            account: this.param.username,
                            password: this.param.password
                        }
                    }).then(({ data = {} }) => {
                        if (data.code === 0) {
                            // console.log('wwww',this.$router)
                            this.$router.push({
                                path: '/Tabs',
                                query: {
                                    uid: this.uid
                                }
                            });
                            //  location.href=`/#/Tabs?uid=${this.uid}`

                            // this.$router.push({ name: '/components/page/Tabs', params: { uid: this.uid } });

                            // this.$router.push('/Tabs');
                            console.log('2020.4.5登录成功！！！');

                            localStorage.setItem('ms_username', this.param.username);

                            console.log(data);
                        }
                    });
                } else {
                    this.$message.error('输入有误，请重新输入账号和密码');
                    // console.log('error submit!!');
                    return false;
                }
            });
        },

        getuid() {
            http({
                url: '/account/getuid ',
                method: 'post',
                data: {
                    account: this.param.username1,
                    password: this.param.password1
                }
            }).then(({ data = {} }) => {
                if (data.code === 0) {
                    this.$message.success('请求成功');

                    this.uid = data.data.uid;
                    console.log('2020.4.5请求uid成功！！！');
                    console.log(data.data);
                    console.log(data.data.uid);
                }
            });
        }
    },

    created: function() {
        // this.getuid(); //获取uid
    }
}
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/login-bg.jpg);
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
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
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>