<template>

    <div id='index'>
        <header class="header">
            <div>
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
            <div>开始阅读</div>
            <div>加入书架</div>
            <div>赞</div>
        </div>

        <div class="Explain">
            <div class="Explain-1"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                score:5
            }
        },
        created() {
        },
        methods: {}
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
    }
</style>