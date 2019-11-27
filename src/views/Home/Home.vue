<template>
    <div id="Home">
    </div>
</template>

<script>
    import axios from 'axios'
    axios.defaults.timeout = 5000
    export default {
        name: "Home",
        created(){
            this.getData()
        },
        methods:{
            getData() {

            }
        }
    }
</script>
<style scoped>
    @import "~@assets/css/base.css";
</style>