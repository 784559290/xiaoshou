<template>
    
    <div id='top-bar' class="">
          <slot  name="top_left"></slot>
    </div>
</template>

<script>
    export default {
        name: "top-bar",
        data() {
            return {}
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>
    #top-bar{
        flex: 1;
        text-align: center;
    }
</style>