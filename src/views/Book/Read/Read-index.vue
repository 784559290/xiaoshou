<template>
    <div class="Read-index">
        <header class="Readheader">
            <h1>{{current.chapterName}}</h1>
        </header>
<!--        <header>-->
<!--            <el-row class="hide-headdiv">-->
<!--                <el-col :span="3">-->
<!--                    <div class="back-link" @click="back_link">-->
<!--                        <span class="icon iconfont icon-withdraw"></span>-->
<!--                    </div>-->
<!--                </el-col>-->
<!--                <el-col :span="12">-->
<!--                    <div class="grid-content"></div>-->
<!--                </el-col>-->
<!--                <el-col :span="3">-->
<!--                    <div class="grid-conten">-->

<!--                    </div>-->
<!--                </el-col>-->
<!--                <el-col :span="3">-->
<!--                    <div class="grid-content"></div>-->
<!--                </el-col>-->
<!--                <el-col :span="3">-->
<!--                    <div class="grid-content">-->

<!--                    </div>-->
<!--                </el-col>-->
<!--            </el-row>-->
<!--        </header>-->
        <scroll class="content" ref="scroll" @scroll="contentscroll" :pullup="true" @pullUpLoad="pullUpLoad">
            <section class="read-section jsChapterWrapper" v-for=" (item,index) in  content" >
                <p class="bs-popover-auto">{{item.chapterName}}</p>
                <div v-html="item.chapterContent"></div>
            </section>
        </scroll>

    </div>
</template>

<script>
    import Scroll from "@components/scroll/scroll";
    import {NocontentApi} from '@/network/Novel'

    export default {
        name: "Read-index",
        data() {
            return {
                content:[],
                chid:'',
                upper:{},
                lower:{},
                current:{}
            }
        },
        components: {Scroll},
        created() {
            this.chid =this.$route.query.chid
        },
        mounted() {
            window.console.log('进入此组建调用')
            this.getNocontent()
            //this.$refs.scroll.scroll.refresh()
        },
        methods: {
            contentscroll(position) {

            },
            pullUpLoad() {
                this.chid = this.lower.chid;
                this.getNocontent();
            },
            getNocontent(){
                var data = {chid:this.chid}
                NocontentApi(data).then(res => {
                    if (res.status == 0){
                        this.content.push(res.data.content);
                        this.current = res.data.content;
                        this.upper = res.data.upper;
                        this.lower = res.data.lower;
                        this.$refs.scroll.scroll.refresh()
                        this.$refs.scroll.scfinishFlush()

                    }
                })
            },

            back_link(){
                window.history.back()
            }
        }
    }
</script>

<style scoped>
    .Read-index {
        background-color: #c4b395;
        /*background-image: url("~@assets/img/Book/skin-default.e5975.jpg");*/
        width: 100%;
        height: 100vh;
        font-size: 18px;
    }

    .Readheader h1 {
        font-weight: 400;
        position: fixed;
        top: 7px;
        font-size: 12px;
        left: 1rem;
        color: rgba(0, 0, 0, .4);
        margin: 0;
    }

    .Readheader {


        height: 25px;
        line-height: 25px;
    }

    .jsChapterWrapper{
/*
        background: url("~@assets/img/Book/skin-default.e5975.jpg") no-repeat center top;
*/
        background-size: 100%;
    }
    .read-section {
        margin: 0 16px;
    }

    .read-section p {
        font-size: 18px;
        font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }

    .content {
        height: calc(100% - 25px);
        overflow: hidden;
        touch-action: none;
    }

    .hide-headdiv div {
        height: 44px;
        background-color: #000000;
    }
    .back-link {
        color: #ffffff;
        font-size: 28px;
        padding-left: 4px;
    }
</style>