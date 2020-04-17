<template >
    <div id="footers">
            <el-row>
                <el-col :span="7">
                    <div class="grid-content">

                        <span class="iconfont iconfontsiz">&#xe601;</span>
                       <!-- <h>目录</h>-->
                    </div>
                </el-col>
                <el-col :span="7"><div class="grid-content">加入书架</div></el-col>
            </el-row>
    </div>
</template>

<script>
    export default {
        name: "footers",
        data() {
            return {}
        },
        components: {},
        created() {

        },
        mounted() {

        },
        methods: {}
    }
</script>

<style scoped>
      #footers{
            position: fixed;
          bottom: 0;
          background-color: #000000;
          width: 100vh;
          height: 50px;
          z-index: 5;
          padding: 0;
      }
    .grid-content{
        text-align: center;
        height: auto;
        line-height: 50px;
        font-size: 17px;
        color: #9d9d9d;
    }
    .iconfontsiz{
      font-size: 25px!important;
    }
      .grid-content h{
          padding-bottom: 5px;
      }
</style>