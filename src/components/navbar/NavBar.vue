<template>

    <header id='NavBar' class="navbar navbar-fixed-top nav-bars container">
        <div class="top-left" >
            <top_bar>
                <span slot="barcontent"><slot name="left"></slot></span>
            </top_bar>
        </div>
        <div class="top-center">
            <top_bar>
                <span slot="barcontent"><slot name="top_center"></slot></span>
            </top_bar>
        </div>
        <div class="top-right" >
            <top_bar>
                <span slot="barcontent"><slot name="right"></slot></span>
            </top_bar>
        </div>
    </header>
</template>

<script>
    import top_bar from "./top-bar"

    export default {
        name: "NavBar",
        data() {
            return {}
        },
        components: {
            top_bar
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>
    .nav-bars {
        display: flex;
        text-align: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        margin-bottom:0;
    }

    .top-left {
        width: 60px;
        font-size: 25px;
        line-height: 43px;
        height: 43px;
        padding-right: 30px;
    }
    .top-right{
        width: 60px;
    }
    .top-center {
        flex: 1;
        line-height: var(--home-nav-back-height);
        display: table;
        margin-right: auto;
        margin-left: auto;
        table-layout: fixed;
        color: rgb(237, 66, 75);
        text-align: center;
        font-size: 20px;
    }
    .container{
        height: var(--home-nav-back-height);
        min-height: var(--home-nav-back-height);
        background-color: transparent;
    }

</style>