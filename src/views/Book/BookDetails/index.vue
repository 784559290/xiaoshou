<template>

    <div id='index'>
        <scroll class="content" ref="scroll" @scroll="contentscroll" :pullup="false" @pullUpLoad="pullUpLoad">
        <header class="header">

            <div @click="backlink">
                 <span>
                     <svg class="icon svg-icon" aria-hidden="true">
                        <use xlink:href="#icon-withdraw"></use>
                     </svg>
                </span>
            </div>

            <div>大王饶命</div>
            <div>
                <span>
                     <svg class="icon svg-icon" aria-hidden="true">
                        <use xlink:href="#icon-sousuo"></use>
                     </svg>
                </span>
            </div>
            <div>
                <span>
                     <svg class="icon svg-icon" aria-hidden="true">
                        <use xlink:href="#icon-fenlei"></use>
                     </svg>
                </span>
            </div>
        </header>

        <div class="book-layout">
            <img class="pull-left"  src="@assets/img/home/300.jpg" alt="">
            <div class="book-cell pull-left">
                <h2 class="book-title">大王饶命</h2>
                <div class="book-author">
                    <a href="">会说话的肘子</a>
                    <span>大神</span>
                </div>
                <div class="book-equally">
                    <!--平分插件-->
                    <el-rate
                            :value="score"
                            disabled
                            show-score
                            text-color="#ff9900"
                            score-template="5">
                    </el-rate>
                </div>
                <p class="book-meta">都市/都市生活</p>
            </div>

        </div>

        <div class="book-detail-btn">
            <router-link to="/Read" tag="div">开始阅读</router-link>
            <div>加入书架</div>
            <div>赞</div>
        </div>

        <div class="Explain">
            <div class="Explain-1">
                孟陆有点慌，他穿越了，还穿成了西游中的虎力大仙，最终惨死在孙悟空手中的三个霉憨憨之一，好在，随身激活了神奇的诸天群。只是，为啥群里都是一群弱逼，还整天想着抱大腿。九叔：小道今日得见大仙，朝闻道夕死可矣（激动）秦始皇：大仙在上，寡人愿付一国力，但求长生法。古三通：大仙，大仙，您渴不，您饿不，您说您缺点啥？群主：夭寿啦，夭寿啦，大难临头了，大仙，救命啊！为了将来怼翻那头臭猴子，也为了应付群里一群的憨蛋蛋，最终，孟陆下了个决定：散吾神名，铸吾神像，布道万界，封神诸天！
                <span class="book-summary-more">
                <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-xia"></use>
                </svg>
            </span>
            </div>


        </div>
        <div class="Catalog">
            <el-row>
                <el-col :span="6"><div class="grid-content bg-purple">目录</div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light">第一章</div></el-col>
            </el-row>
        </div>

            <div class="catelogX">
                <BookCatalog :boocklist="boocklistarr"></BookCatalog>
            </div>
        </scroll>
    </div>


</template>

<script>
    import BookCatalog from "@views/Book/BookDetails/BookCatalog";
    import scroll from "@components/scroll/scroll";
    import {CatalogApi} from '@/network/Novel'

    export default {
        name: "index",
        components: {scroll, BookCatalog},
        data() {
            return {
                noid:3,
                boocklistarr:[],
                score:5,
            }
        },
        created() {
            this.getCatalog()
        },
        methods: {
            //后退
            backlink(){
                window.history.back()
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
            scroll_top() {
                //点击返回顶部
                this.$refs.scroll.scroll.scrollTo(0, 0, 600);
            },
            getCatalog() {
                var data = {noid: this.noid}
                CatalogApi(data).then(res => {
                    if (res.status == 0) {
                        this.boocklistarr = res.data.reverse()
                        console.log(this.boocklistarr)
                        this.$refs.scroll.scroll.refresh()
                    }
                })

            },

        }
    }
</script>

<style scoped>
    .header {
        position: relative;
        height: 44px;
        padding: 10px 0;
        box-sizing: border-box;
    }
    .header div{
        display: inline;
        font-size: 18px;
        float: left;
    }
    .header div:nth-child(1){
        font-size: 20px;
        margin: 0 10px;
    }
    .header div:nth-child(2){
        font-size: 14px;
        margin: 0 10px;
        line-height: 27px;
    }
    .header div:nth-child(3){
        float: right;
        right: 0;
        font-size: 18px;
        margin: 0 10px;
    }
    .header div:nth-child(4){
        float: right;
        right: 0;
        font-size: 18px;
        margin: 0 10px;
    }



    .book-layout{
        overflow: hidden;
        padding: 16px;

    }
    .book-layout img{
        width: 84px;
        height: 112px;
        border-radius: 2px;
        box-shadow: none;
        margin-right: 8px;

    }
    .book-cell{
        line-height: 22px;
        display: inline;
    }
    .book-title{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 100%;
        font-weight: 900;
        margin: 3px 2px;

    }
    .book-author{

    }
    .book-author a{
        color: #33373d;
        font-size: 13px;

    }
    .book-author span{
        color: #ffffff;
        background-color: rgb(237, 66, 75);
        margin-left: 4px;
        font-size: 5px;
    }

    .book-equally{
        display: inline;
    }
    .book-meta{
       font-size: 12px;
    }
    .book-detail-btn{
        display: flex;
        text-align: center;
        padding: 0 16px 16px;

    }
    .book-detail-btn div{
        line-height: 30px;
        height: 30px;
        width: 103px;
        border: 1px solid rgb(242, 164, 167);
        border-radius: 5px;
    }
    .book-detail-btn div:nth-child(1){
        margin-right: 20px;
        color: #ffffff;
        background-color:  rgb(237, 66, 75);
    }
    .book-detail-btn div:nth-child(3){
        margin-left: 20px;
    }

    .Explain{

    }

    .Explain-1{
        margin: 16px;
        border-top: #cfcfcf solid 1px;

        line-height: 23px;
        padding-top: 20px;

        color: rgb(51, 55, 61);
        font-size: 14px;
        height: 126px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0;
        position: relative;
    }
    .book-summary-more{
        position: absolute;
        right: 1px;
        top: 110px;
        color: #969ba3;
        font-size: 25px;
        background-color: rgba(255,255,255,0.5);
    }

    .Catalog{
        border-top: #cfcfcf solid 1px;
        height: 45px;
        line-height: 45px;

        margin: 20px 16px 0 16px;
    }
    .bg-purple{
        font-family: "PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        font-size: 18px;
    }
    .bg-purple-light{
        color: #606266;
        font-family: "PingFang SC","微软雅黑",Arial,sans-serif;
        font-size: 12px;
    }

    .catelogX{
        margin: 0 16px;
        border-top: #cfcfcf solid 1px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        height: 400px;
    }



    .Catalog{

    }

    .content {
        height: 100%;
        overflow: hidden;

    }

</style>