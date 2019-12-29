<template>
    
    <div id='Search'>
        <div class="search-area">
            <span></span>
            <input type="text" class="search-input">
            <button class="search-reset"></button>
        </div>
        <div></div>
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
    .search-area{
        position: absolute;
        top: 0;
        right: 3.75rem;
        bottom: 0;
        left: 1rem;
        height: 2rem;

        border-radius: .25rem;
        background-color: #f6f7f9;
    }
    .search-input{
        font-size: .875rem;
        width: 100%;
        height: inherit;
        padding: 0 2rem;
        border: 0 none;
        background: 0 0;
    }
    .search-reset{
        position: absolute;
        top: 0;
        right: 0;
        width: 2rem;
        height: inherit;
        padding: 0;
        -webkit-animation: fadein .15s;
        animation: fadein .15s;
        border: 0 none;
        background: 0 0;
        display: none;
    }
</style>