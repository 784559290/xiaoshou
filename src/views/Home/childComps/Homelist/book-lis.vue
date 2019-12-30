<template>
    
    <div id='book-lis'>
        <img class="bookimg pull-left" src="" alt="">
        <div class="book-cell" >
            <h4>遮天</h4>
            <p class="book-desc">
                重生在封神大战之前的上古时代，李长寿成了一个小小的炼气士，没有什么气运加身，也不是什么注定的大劫之子，他只有一个想要长生不老的修仙梦。为了能在残酷的洪荒安身立命，他努力不沾因果，杀人必扬其灰，凡事谋而后动，从不轻易步入危险之中。藏底牌，修遁术，炼丹毒，掌神通，不动稳如老狗，一动石破天惊，动后悄声走人。本来李长寿规划中，自己会一直躲在山中平安无事的修行成仙，直到有一年，他的老师父静极思动，又给他……收了个师妹回来……【PS：普通一群（满·474095492），二群（836797636）双开爆肝，轻松修仙！】
            </p>
            <div class="book-meta">
                <div class="book-meta-l">
                    <svg class="icon icon-size" aria-hidden="true">
                        <use href="#icon-gaojian-zuozhe"></use>
                    </svg>
                    <span>程东</span>

                </div>
                <div class="book-meta-2">
                    <span class="book-meta-2-span">
                        玄幻
                    </span>
                    <span class="book-meta-2-span">
                        连载
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "book-lis",
        data() {
            return {}
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>
    #book-lis{
        position: relative;
        display: block;
        overflow: hidden;
        padding: 16px;
        transition: padding-left .15s;
    }
    .bookimg{
        font-size: 0;
        width: 66px;
        height: 88px;
        margin-right: 8px;
        box-shadow: 0 1px 3px rgba(0,0,0,.3);

    }
    .book-cell{
        overflow: hidden;
        color: #969ba3;

    }
    .book-cell h4{
        height: 22px;
        line-height: 22px;
        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
        font-size: 16px;
        margin: 0;
        color: #000000;
    }
    .book-desc{
        line-height: 18px;
        height: 36px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
    }
    .book-meta-l{
       flex: 1;
        width: 120px;
        margin: 0;
    }
    .book-meta{
        display: flex;
    }
    .book-meta-2{
        flex: 1;
        text-align: right;
        font-size: 14px;
    }
    .book-meta-2 span:nth-child(2){
        color: #ed424b;
        margin-left: 5px;;
    }
    .book-meta-2-span{
        border: 1px solid rgba(42, 40, 28, 0.3);
        border-radius: 3px;
    }

</style>