<template>
    <div id="app">

       <keep-alive>  <!--保存状态-->
           <router-view></router-view>
       </keep-alive>

    </div>
</template>

<script>
    import TabBar from "@components/Base/Tab-bar"

    export default {
        name: 'app',
        components: {
            TabBar,
        }
    }
</script>

<style>
@import "assets/css/base.css";
</style>
