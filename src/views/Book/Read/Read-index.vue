<template>
    <div class="Read-index" @mousemove='updateXY'>
        <header class="Readheader">
            <h1>{{current.chapterName}}</h1>
        </header>
        <transition name="el-zoom-in-top">
            <top  class="transition-box" v-if="ishide"></top>
        </transition>

        <scroll class="content" ref="scroll" @scroll="contentscroll" :pullup="true" @pullUpLoad="pullUpLoad">
            <section class="read-section jsChapterWrapper" v-for=" (item,index) in  content" >
                <p class="bs-popover-auto">{{item.chapterName}}</p>
                <div v-html="item.chapterContent"></div>
            </section>
        </scroll>
        <transition name="el-zoom-in-bottom">

            <footers  class="transition-box" v-if="ishide"></footers>
        </transition>
    </div>
</template>

<script>
    import Scroll from "@components/scroll/scroll";
    import {NocontentApi} from '@/network/Novel'
    import  top from "@/views/Book/Read/hide/top"
    import  footers from "@/views/Book/Read/hide/footer"
    export default {
        name: "Read-index",
        data() {
            return {
                content:[],
                chid:'',
                upper:{},
                lower:{},
                current:{},
                ishide:false
            }
        },
        components: {Scroll,top,footers},
        created() {
            this.chid =this.$route.query.chid
        },
        activated() {
            window.console.log('进入此组建调用')
            this.getNocontent()
            //this.$refs.scroll.scroll.refresh()
            this.ishide=false;
        },
        methods: {
            contentscroll(position) {
                //this.$refs.scroll.inishFlush()
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
                        if (res.data.lower != null){
                            this.lower = res.data.lower;
                            this.$refs.scroll.refresh()
                            this.$refs.scroll.inishFlush()
                            var chid = this.current.chid
                        }

                        //let query = Object.assign({chid:  chid}, this.$route.query )
                        //this.$router.push({ query})
                    }
                })
            },
            updateXY(e) {
                var h = document.documentElement.clientHeight || document.body.clientHeight;
                var y = e.clientY;
                var baifenbi = y /h *100;
                if (baifenbi>=25 && baifenbi<=75){
                   this.ishide = !this.ishide
                }

            },
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
        font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        color: rgba(0,0,0,0.8);
    }

    .read-section p {
        font-size: 18px;

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

</style>