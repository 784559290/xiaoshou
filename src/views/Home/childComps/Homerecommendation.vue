<template>
    
    <div id='Homerecommendation'>
        <nav class="btn-group">
            <h3><a class="btn-group-a" href="">新书推荐</a></h3>
            <h3><a class="btn-group-a" href="">老书推荐</a></h3>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Homerecommendation",
        data() {
            return {}
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>
    #Homerecommendation{
        height: 30px;
        margin: 16px 16px;
        background-color: rgb(246, 247, 249);
    }
    .btn-group{
        display: table;
        width: 100%;
        table-layout: auto;
        margin-left: auto;
        margin-right: auto;
        height: 30px;
        line-height: 30px;
        text-align: center;

    }
    .btn-group h3{
        display: table-cell;
        font-weight: 400;
        font-size: 100%;
    }
    .btn-group-a{
        display: block;
        font-size: 16px;
        line-height: 30px;
        height: 30px;
        border: 1px solid #c70008;
        border-radius: 99px;
        color: #ed424b;
    }
    .btn-group-a:nth-child(1){
        margin-right: 9px;
    }
    .btn-group-a:nth-child(2){
        margin-left: 9px;
    }
</style>