<template>
    <el-row class="logtabr">
        <el-col :span="12"><slot  name="login"></slot></el-col>
        <el-col :span="12"><slot  name="register">请期待</slot></el-col>
    </el-row>
</template>

<script>
    export default {
        name: "logheide",
        data() {
            return {}
        },
        components: {},
        created() {

        },
        mounted() {

        },
        methods: {}
    }
</script>

<style scoped>
    .logtabr{
        position: relative;
        top: 44px;
        height: 46px;
        text-align: center;
        line-height: 46px;
    }
</style>