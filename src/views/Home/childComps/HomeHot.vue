<template>

    <div id='HomeHot'>
        <div class="Hos-headr">
            <h3 class="headr-1-before">
                热门小说
                <span class="headr-1-before-span">站长推荐</span>
            </h3>
        </div>
        <div >
            <ol class="module-slide-ol">
                <li class="slide-ol">
                    <a class="slide-ol-a" href="">
                        <img class="slide-ol-img" src="~@assetsImg/home/300.jpg" alt="">
                    </a>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeHot",
        data() {
            return {}
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>
    #HomeHot {
        height: 216px;
        margin: 12px 0;
    }

    .Hos-headr {
        height: 44px;
        padding: 0 16px;
        border-top-width: 16px;
        border-top-style: solid;
        border-top-color: transparent;

    }
    .headr-1-before{
        font-family: FZZCYSK;
        font-weight: 400;
        display: inline;
        color: #33373d;
        font-size: 16px;
        line-height: 21px;
    }
    .headr-1-before:before{
        content: "";
        width: 8px;
        height:16px;
        display: inline-block;
        vertical-align: -.22ex;
        border-left: 2px solid #ed424b;
        box-sizing:border-box;
    }
    .headr-1-before-span{
        color: #969ba3;
        margin-left: 8px;
        font-size: 13px;
    }

    .module-slide-ol{
        position: relative;
        overflow: auto;
        overflow-y: hidden;
        min-height: 172px;
        padding-left: 8px;
        white-space: nowrap;

    }
    .slide-ol{
        width: 82px;
        display: block;
        white-space: normal;
    }

    .slide-ol-a{
        display: block;
        width: 82px;
        padding-top: 12px;
        padding-right: 8px;
        padding-bottom: 8px;
        padding-left: 8px;
        outline-color: initial;
        outline-style: initial;
        outline-width: 0px;
        text-decoration-line: none;
        text-decoration-style: initial;
        text-decoration-color: initial;
    }
    .slide-ol-img{
        display: block;
        width: inherit;
        height: 88px;
        box-shadow: 0 1px 3px rgba(0,0,0,.3);
    }
</style>