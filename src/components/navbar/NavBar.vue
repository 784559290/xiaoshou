<template>
    
    <div id='NavBar'>
        <div class="left"><slot name="left"></slot> </div>
        <div class="center-block"><slot name="left"></slot> </div>
        <div class="right"><slot name="left"></slot> </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {}
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>
    #NavBar{
        
    }
</style>