<template>
    <div class="loginviue">
        <el-row>
            <el-col :span="24">
                <el-row class="login-input-wrap">
                    <el-col :span="5" class="logico"><span class="iconfont">&#xe65e;</span></el-col>
                    <el-col :span="14">
                        <el-input class="elinputs" v-model="name" placeholder="请输入账号"></el-input>
                    </el-col>
                    <el-col :span="5"></el-col>
                </el-row>
                <el-row class="login-input-wrap">
                    <el-col :span="5" class="logico"><span class="iconfont">&#xe620;</span></el-col>
                    <el-col :span="14">
                        <el-input class="elinputs" v-model="password" placeholder="请输入密码" show-password></el-input>
                    </el-col>
                    <el-col :span="5"></el-col>
                </el-row>
            </el-col>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark"></div>
            </el-col>
        </el-row>
        <div class="buttondiv">
            <el-button type="success" class="successbutton" @click="Land" plain :disabled="!iscliclog">登陆</el-button>
        </div>
    </div>
</template>

<script>
    import {postlogin} from "@/network/login";


    export default {
        name: "loginviue",
        data() {
            return {
                name: '',
                password: '',
                isclick: false
            }
        },
        components: {},
        created() {
            console.log(111)
        },
        mounted() {
            console.log(111)
        },
        methods: {
            Land() {
                var data = {name: this.name, password: this.password}
                postlogin(data).then(res => {
                    if (res.status === 0) {
                        this.$store.dispatch('ajax_token', res.data.token)
                        this.$store.dispatch('Abou_aupa', res.data)
                        this.$router.push('/About')
                        console.log('sdsd')
                    } else {

                    }
                })
            }
        },
        computed: {
            iscliclog() {
                if (this.name !== "" && this.password !== "") {
                    return true
                } else {
                    return false
                }
            },

        }
    }
</script>

<style scoped>
    .loginviue {
        width: 100%;
        /*  height: 278px;*/
        padding: 26px 28px 0 28px;
        position: relative;
        top: 46px;
    }

    .login-input-wrap {
        font-size: .32rem;
        position: relative;
        overflow: hidden;
        margin: 12px 0;
        padding-top: 10px;
    }

    .logico {
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        text-align: center;
    }

    .successbutton {
        width: 250px;
    }

    .buttondiv {
        padding-top: 25px;
        text-align: center;
    }

    .elinputs {
        width: 200px;
    }
</style>