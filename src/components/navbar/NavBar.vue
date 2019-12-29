<template>

    <header id='NavBar' class="navbar navbar-fixed-top nav-bars container">
        <div class="top-left">
            <top_bar>
                <span slot="top_left"><slot name="left"></slot></span>
            </top_bar>
        </div>
        <div class="top-center">
            <top_bar>
                <span slot="top_left"><slot name="top_center"></slot></span>
            </top_bar>
        </div>
        <div class="top-right" >
            <top_bar>
                <span slot="top_left"><slot name="right"></slot></span>
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
        box-shadow: 0 1px 1px rgba(185, 140, 179,1);
        margin-bottom:0;
    }

    .top-left, .top-right {
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
    }
    .container{
        height: var(--home-nav-back-height);
        min-height: var(--home-nav-back-height);
        background-color: transparent;
    }

</style>