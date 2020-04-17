<template>
    <div id="app">
        <Navtop class="home-nav navbar navbar-fixed-top">

            <span  slot="left" @click=" backlink()">
                <span>
                     <svg class="icon svg-icon" aria-hidden="true">
                        <use xlink:href="#icon-withdraw"></use>
                     </svg>
                </span>
            </span>
            <span slot="top_center">登陆</span>
        </Navtop>
        <logheide>
            <div :class="{logheide:logheide==1}" @click="logheide=1" slot="login">账号登陆</div>
            <div :class="{logheide:logheide==2}" @click="logheide=2"  slot="register">账号注册</div>
        </logheide>
        <loginviue></loginviue>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex'
    import Navtop from '@components/navbar/NavBar'
    import logheide from "@views/About/logheide";
    import loginviue from "@views/About/loginviue";
    export default {
        name: "About-index",
        data(){
            return{
                user:{
                    name:'zhujikun'
                },
                logheide:1
            }
        },
        components: {
          Navtop,logheide,loginviue,
        },
        create(){
            this.user()
        },
        computed:{
            ...mapGetters(['userlentgh'])
        },
        methods:{
            users(){
                window.console.log(this.user)
                this.$store.commit('setdatauser',this.user) //对store里面的数据进行赋值

            },
            delsts(){
                this.$store.commit('deletedata','user')
            },
            steTime(){//异步修改store 让系统监听
                const  thar=this
                var a={zjk:11}
                setTimeout(()=>{
                    this.$store.dispatch('Abou_aupa',a)
                },1000)

            },
            //后退
            backlink(){
                window.history.back()
            },
        }
    }
</script>

<style scoped>
    .logheide{
        color: lightseagreen;
        border-bottom: 2px solid lightseagreen;
        padding: 0 15px;
    }
</style>