<template>
    <div class="Read-index" @mousemove='updateXY'>
        <header class="Readheader">
            <h1>{{current.chapterName}}</h1>
        </header>
        <transition name="el-zoom-in-top">
            <top  class="transition-box"  v-if="ishide"></top>
        </transition>
        <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper">
<!--            <scroll  class="content" ref="scroll" @scroll="contentscroll" :pullup="true" @pullUpLoad="pullUpLoad">-->
                <section class="read-section jsChapterWrapper" v-for=" (item,index) in  content"  style="transform: translateX(0);">
                    <p class="bs-popover-auto">{{item.chapterName}}</p>
                    <p v-html="item.chapterContent"></p>
                </section>
        </v-touch>

        <transition name="el-zoom-in-bottom">

            <footers  @modifyisbookmark="mainmodifyisbookmark" :NoveCon="{noid:noid,chid:chid}" :isbookmark="isbookmark"   class="transition-box" v-if="ishide"></footers>
        </transition>
    </div>
</template>

<script>
    import Scroll from "@components/scroll/scroll";
    import {NocontentApi,NobookmarkApi} from '@/network/Novel'
    import  top from "@/views/Book/Read/hide/top"
    import  footers from "@/views/Book/Read/hide/footer"
    import  axios from 'axios'
    import {Throttle} from "@/common/tool";
    import AnyTouch from 'any-touch';

    export default {
        name: "Read-index",
        data() {
            return {
                content:[],
                chid:'',
                noid:'',
                upper:{},
                lower:{},
                current:{},
                ishide:false,
                isbookmark:false,
                shake:true,
                AnyTouch:'',
                acceleration:3600
            }
        },
        components: {Scroll,top,footers},
        mounted() {
            this.AnyTouch = new AnyTouch(this.$el);



            // 拖拽开始
            this.AnyTouch.on('panstart', (ev) => {
               // this.move(ev);
                console.log(' 拖拽开始')
            });

            // 拖拽中
            this.AnyTouch.on('panmove', (ev) => {
                //this.move(ev);
                console.log(' panmove')
            });

            // 快速滑动
            this.AnyTouch.on('swipe', (ev) => {
                this.decelerate(ev);
                console.log('快速滑动')
            });


        },
        activated() {
            this.content = [];
            this.upper = [];
            this.lower = [];
            this.current = [];
            this.chid = this.$route.query.chid;
            this.noid = this.$route.query.noid;
            this.isbookmarkobj()
            this.ishide=false;

        },
        methods: {
            //查看是否砸书签
            isbookmarkobj(){
                var data={chid:this.chid,noid:this.noid}
                NobookmarkApi(data).then(res => {
                      if (res.status ==0){
                          this.isbookmark =true;
                      }
                    this.getNocontent()
                  });
            },
            //滑动监听

            contentscroll(position) {
                var y  =Math.abs(position.y)
                var baifenbi = y /position.heights *100;
                if (baifenbi >= 60 && this.shake){
                    this.shake =false;
                    this.chid = this.lower.chid;
                    this.getNocontent();
                    //this.$refs.scroll.refresh()
                    //this.$refs.scroll.inishFlush()
                }
                console.log( baifenbi)
            },
            mainmodifyisbookmark(isbookmark){
                this.isbookmark = isbookmark;
            },
            pullUpLoad() {
            },
            getNocontent(){
                var data = {chid:this.chid,isbookmark:this.isbookmark}
                NocontentApi(data).then(res => {
                    if (res.status == 0){
                        this.content.push(res.data.content);
                        this.current = res.data.content;
                        this.upper = res.data.upper;

                        if (res.data.lower != null){
                            this.lower = res.data.lower;
                            this.shake =true;
                            var chid = this.current.chid
                        }

                       // let query = Object.assign({chid:  chid}, this.$route.query )
                       // this.$router.push({ query})
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
            /**
             * 左滑动
             */
            swiperleft(){
                console.log(1)
            },
            /**
             * 右滑动
             */
            swiperright(){
                console.log(2)
            },

            decelerate(ev) {
                const directionSign = { up: -1, right: 1, down: 1, left: -1 }[
                    ev.direction
                    ];

                // Top? | Left?
                let SCROLL_SUFFIX = 'Top';
                // x ? | y?
                let AXIS_SUFFIX = 'Y';
                if (ev.velocityX > ev.velocityY) {
                    SCROLL_SUFFIX = 'Left';
                    AXIS_SUFFIX = 'X';
                }

                // 减速时间, 单位ms
                // t = (v₂ - v₁) / a
                const velocity = ev[`velocity${AXIS_SUFFIX}`];
                this.transitionDuration = Math.round(
                    ((velocity * 1000) / this.acceleration) * 1000
                );

                // 滑动距离
                // s = (v₂² - v₁²) / (2 * a)
                const scrollAxis = `scroll${SCROLL_SUFFIX}`;
                this[scrollAxis] +=
                    directionSign *
                    Math.round(
                        Math.pow(velocity * 1000, 2) / (2 * this.acceleration)
                    );
            },
            /**
             * 移动body
             * @param {Object} 拖拽产生的数据
             *  @param {Number} deltaX: x轴位移变化
             *  @param {Number} deltaY: y轴位移变化
             */
            move({ deltaX, deltaY }, transitionDuration = 0) {
                this.transitionDuration = transitionDuration;
                this.scrollLeft += deltaX;
                this.scrollTop += deltaY;


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
        overflow: visible;
        background-size: 100%;
        height: 100%;
        columns: calc(100vw - 32px) 1;
        column-gap: 16px;
    }
    .wrapper{

        height: 100%;

    }
    wrapper p{
        background: url("~@assets/img/Book/skin-default.e5975.jpg") no-repeat center top;
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