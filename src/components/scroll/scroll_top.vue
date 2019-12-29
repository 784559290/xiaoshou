<template>
    
    <div id='scroll_top'>
        <button class="navbar" >顶部</button>
    </div>
</template>

<script>
    export default {
        name: "scroll_top",
        data() {
            return {}
        },
        created() {
        },
        methods: {

        }
    }
</script>

<style scoped>
    #scroll_top button{
        position: fixed;
        right: 10px;
        bottom: 60px;
        z-index: 100;
    }
</style>