<template>
    <div id="app">
        <button class="" @click="users">
            clicks
        </button>
        <button @click="delsts">
            删除
        </button>
        <button @click="steTime">
            Time
        </button>
        <div>
            {{$store.state.user}}
        </div>
    </div>
</template>

<script>

    export default {
        name: "About-index",
        data(){
            return{
                user:{
                    name:'zhujikun'
                }
            }
        },
        create(){
            this.user()
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
                setTimeout(()=>{
                    thar.$store.dispatch('Abou_aupa',thar.user)
                },1000)

            }
        }
    }
</script>

<style scoped>

</style>