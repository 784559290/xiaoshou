<template>
    <div id="top">
            <el-container class="hide-headdiv">
                <el-header  class="el-header">
                    <div class="back-link" >
                        <span @click="back_link" class="icon iconfont icon-withdraw back-link-icon"></span>
                    </div>
                </el-header>
            </el-container>
    </div>
</template>

<script>

    export default {
        name: "top",
        data() {
            return {}
        },
        components: {},
        created() {

        },
        mounted() {

        },
        methods: {
            back_link(){
                window.history.back()
            }

        }
    }
</script>

<style scoped>
    .back-link {
        color: #ffffff;
    }
    .back-link-icon{
        font-size: 28px!important;
    }
    .hide-headdiv{

    }
    #top{
        position: fixed;
        top: 0;
        background-color: #000000;
        width: 100vh;
        height: 6vh;
        z-index: 10;
    }
    .el-header{
        padding-left: 5px;
    }
</style>