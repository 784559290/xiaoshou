<template>

    <div id='TabControl'>
        <div class="TabControl_item" v-for="(item,index) in title"
             :class="{active:index ==currenIndex}"
             @click="currenIndex = index">
            <svg class="icon icon-size" aria-hidden="true">
                <use :href="item.savg"></use>
            </svg>
            <h4 class="guide-nav-h">{{item.name}}</h4>

        </div>
    </div>
</template>

<script>

    //['热门', '大神','排行', '完本']
    export default {
        name: "TabControl",
        data() {
            return {
                currenIndex: 0,
                title: [
                    {name: '热门', savg: '#icon-bianpinghuatubiaosheji-'},
                    {name: '大神', savg: '#icon-wangguan'},
                    {name: '排行', savg: '#icon-paihang'},
                    {name: '完本', savg: '#icon-huabanfuben'},
                ]
            }
        },
        props: {},
        created() {
        },
        methods: {}
    }
</script>

<style scoped>
    #TabControl {
        display: flex;
        text-align: center;
        font-size: 13px;
        background-color: rgb(255, 255, 255);
        padding: 10px 12px;
        height: 82px;
    }

    .TabControl_item {
        flex: 1;
        line-height: 30px;
       height: 56px;
    }

    .active {
        color: #33373d;

    }

    .TabControl_item span {
        padding: 5px;
    }

    .active span {
        border-bottom: 2px solid #c7254e;
    }

    .guide-nav-h {
        position: center;
        right: 0;
        bottom: 10px;
        left: 0;
        font-size: 100%;
    }
    .icon-size{
        font-size: 25px!important;
    }
</style>