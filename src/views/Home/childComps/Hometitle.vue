<template>
    
    <div id='Hometitle'>
        <div class="Hos-headr">
            <h3 class="headr-1-before">
                {{homttitle.title}}
                <span class="headr-1-before-span">{{homttitle.Description}}</span>
            </h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Hometitle",
        data() {
            return {}
        },
        props:['homttitle'],
        created() {
            window.console.log(this.homttitle)
        },
        methods: {}
    }
</script>

<style scoped>
    .Hos-headr {
        height: 44px;
        padding: 0 16px;
        border-top-width: 16px;
        border-top-style: solid;
        border-top-color: transparent;

    }
    .headr-1-before{
        font-family: FZZCYSK;
        font-weight: 400;
        display: inline;
        color: #33373d;
        font-size: 16px;
        line-height: 21px;
    }
    .headr-1-before:before{
        content: "";
        width: 8px;
        height:16px;
        display: inline-block;
        vertical-align: -.22ex;
        border-left: 2px solid #ed424b;
        box-sizing:border-box;
    }
    .headr-1-before-span{
        color: #969ba3;
        margin-left: 8px;
        font-size: 13px;
    }

</style>