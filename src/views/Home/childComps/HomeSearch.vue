<template>
    <div id='Search'>
        <router-link to="/Search" class="Search">
            <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-tubiao-"></use>
            </svg>
            <span>搜索</span>
        </router-link>
    </div>

</template>

<script>
    export default {
        name: "Search",
        data() {
            return {}
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>
    .Search{
        font-size: 20px;
        line-height: 32px;
        display: block;
        margin: .375rem .75rem;
        text-align: center;
        color: #969ba3;
        border-radius: .25rem;
        background-color: #fff;
    }
    .ico-size{
        font-size: 2rem;
    }
</style>