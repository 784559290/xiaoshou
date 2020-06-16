<template>
    <div id="Userdetails">

        <img src="~@/assets/img/1587633861(1).jpg" alt="">
        <p>{{$store.state.user.name }}</p>
    </div>
</template>

<script>
    export default {
        name: "Userdetails",
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
    #Userdetails{
        height: 170px;
        margin-top: 43px;
        background-image: url("~@/assets/img/Aboutop.jpg");
        background-size: cover;
        text-align: center;
    }
    #Userdetails img{
        width: 58px;
        height: 58px;
        margin-top: 48px;
        border:1px solid rgba(255,255,255,.4);
        border-radius: 26px;
        vertical-align:bottom;
    }
    #Userdetails p{
        margin: 5px 0px;
        color: #ffffff;
    }
</style>