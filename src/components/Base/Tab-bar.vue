<template>
    <div id="Tab-bar">

        <nav class="navbar navbar-fixed-bottom navbar-default navbar-static-top">
            <TabBar_value path="/Home">
                <div slot="tab_name" >首页</div>
            </TabBar_value>
            <TabBar_value  path="/Sort">
                <div slot="tab_name">分类</div>
            </TabBar_value>
            <TabBar_value  path="/Ranking">
                <div slot="tab_name">排行</div>
            </TabBar_value>
            <TabBar_value  path="/About">
                <div slot="tab_name">我的</div>
            </TabBar_value>
        </nav>
    </div>
</template>

<script>
    import TabBar_value from "./Tab-value"

    export default {
        name: "Tab-bar",
        components: {
            TabBar_value
        }
    }
</script>

<style scoped>

</style>