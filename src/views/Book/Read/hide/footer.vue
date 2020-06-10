<template >
    <div id="footers">
            <el-row>
                <el-col :span="7">
                    <div class="grid-content">

                        <span @click="pushBookDaat" class="iconfont iconfontsiz">&#xe601;</span>
                       <!-- <h>目录</h>-->
                    </div>
                </el-col>
                <el-col :span="7"><div @click="claddMonitor" class="grid-content">{{Monitorisbookmark}}</div></el-col>
            </el-row>
    </div>
</template>

<script>
    import {Debounce} from "@/common/tool";
    import {AddMonitorisPost} from "@/network/User_Nove";

    export default {
        name: "footers",
        data() {
            return {}
        },
        props:{
            isbookmark:{
                type:Boolean,
                default:false
            },
            NoveCon:{
                type: Object,
                default:function () {
                    return  {
                        noid:'',
                        chid:"",
                    }
                }
            }
        },
        components: {},
        created() {

        },
        mounted() {

        },
        methods: {
            claddMonitor:Debounce(function () {
                if (this.isbookmark){
                    this.$router.push('/About')
                }
                var data = {noid:this.NoveCon.noid,chid: this.NoveCon.chid}
                console.log(data)
                AddMonitorisPost(data).then(res => {
                    if (res.status === 0){

                        this.$emit('modifyisbookmark',true)
                    }


                })
            }),
            pushBookDaat(){
                var noid = this.$route.query.noid;
                this.$router.push({path:'BookDast',query:{'noid':noid}})

            }
        },
        computed:{
            Monitorisbookmark(){
                if (this.isbookmark){
                    return '查看书签'
                }else {
                    return '加入书架'
                }
            }
        }
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