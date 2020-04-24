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
            <span slot="top_center">
                个人中心
            </span>
        </Navtop>
        <Userdetails></Userdetails>
        <bookmark></bookmark>
    </div>
</template>

<script>

    import {GetAbout} from "@/network/user_About";
    import Navtop from '@components/navbar/NavBar'
    import Userdetails from "@views/About/Userdetails";
    import Bookmark from "@views/About/bookmark";


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
            Bookmark,
            Userdetails,
            Navtop
        },
        activated(){
            this.users()
        },
        methods:{
            users(){
                GetAbout().then(res => {
                    this.$store.dispatch('ajax_Apilink', res.data.Apiuerl)
                })

            },
            //后退
            backlink(){
               this.$router.push('/Home')
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