<template>
    <div id="Home">
        <Navtop class="home-nav navbar navbar-fixed-top">
            <span @click="log" slot="top_center">天天书院</span>
        </Navtop>
        <scroll class="content" ref="scroll" @scroll="contentscroll" :pullup="true" @pullUpLoad="pullUpLoad">
            <Homeswiper @swiperimageLoad.once="swiperimageLoad" :banner="banner"/>
            <HomeSearch></HomeSearch>
            <TabControl class="Tab-Control"  ref="TabControl"></TabControl>
            <HomeHot></HomeHot>
            <Homerecommendation/>
                <Homeranking/>

            <!--<img src="666.png" @load="imageLoad">  @load vue事件监听图片加载完成，在滑动插件中执行从新计算高度-->
        </scroll>
        <scroll_top @click.native="scroll_top" v-show="top"></scroll_top>
    </div>
</template>
<script>
    import Navtop from '@components/navbar/NavBar'
    import TabControl from "@components/tabControle/TabControl";
    import Homeswiper from "@views/Home/childComps/Homeswiper";
    import scroll from "@components/scroll/scroll";
    import scroll_top from "@components/scroll/scroll_top";
    import {getHomeMultidata, getHomeMultidata1} from "@/network/home";
    import HomeSearch from "@views/Home/childComps/HomeSearch";
    import {debounce} from "@/common/tool";
    import HomeHot from "@views/Home/childComps/HomeHot";
    import Homerecommendation from "@views/Home/childComps/Homerecommendation";
    import Homeranking from "@views/Home/childComps/Homeranking";


    export default {
        name: "Home",
        data() {
            return {
                swiperOption: {
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    spaceBetween: 10,
                    loop: true,
                    speed: 600, //config参数同swiper4,与官网一致
                },
                banner: [],
                BScroll: "",
                top: false,
                taboffsetTop: 0,
                saveY: 0,
                debounces: null
            }
        },
        created() {
            this.getData()
            this.debounces = debounce(()=>{
                window.console.log('11111')
            },500)
        },
        mounted() {//组件初始化完成调用方法

        },
        components: {
            Homeranking,
            Navtop,
            Homeswiper,
            TabControl,
            scroll,
            scroll_top,
            HomeSearch,
            HomeHot,
            Homerecommendation,

        },
        methods: {
            getData() {//初始化数据
                getHomeMultidata().then(res => {
                    this.banner = res.data.banner.list;
                })

            },
            scroll_top() {
                //点击返回顶部
                this.$refs.scroll.scroll.scrollTo(0, 0, 600);
            },
            //滑动监听
            contentscroll(position) {

                this.top = position.y < -500
                //this.saveY = position.y
                if (position.y >= 0) {
                  //  this.$refs.scroll.scroll.scrollTo(0, 0);
                }
            },
            //上拉监听
            pullUpLoad() {

            },
            log() {
                this.debounces()
            },
            imageload() {
                //this.$bus.$emit('image')  发射事件总线
                //this.$bus.$on('image') 监听事件总线
                //在 main.js 中添加 Vue.prototype.$bus  =new Vue();
                //this.$refs.scroll.scroll.refresh() //从新计算滑动高度
            },
            //监听轮播组件图片加载完成
            swiperimageLoad() {
                this.taboffsetTop = this.$refs.TabControl.$el.offsetTop
                window.console.log(this.taboffsetTop)
            }
        },
        activated() {
            window.console.log('进入此组建调用')
            //this.
            //this.$refs.scroll.scroll.scrollTo(0, this.saveY)
            this.$refs.scroll.refresh()
        },
        deactivated() {
            window.console.log('离开此组建')
            this.saveY = this.$refs.scroll.scroll.y
        }
    }
</script>
<style scoped>
    @import "~@assets/css/base.css";

    #Home {
        height: 100vh;
        width: 100%;
        padding-top: var(--home-nav-back-height);
        background-color: #f6f7f9;
    }

    .home-nav {
        background-color: var(--home-nav-back-colce);
        color: #ffffff;
        height: 44px!important;
    }

    .Tab-Control {
        position: sticky;
        top: 50px;
    }

    .content {
        height: calc(100% - 50px);
        overflow: hidden;

    }
</style>