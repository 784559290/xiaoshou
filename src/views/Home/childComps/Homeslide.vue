<template>
    
    <div id='Homeslide'>
        <div class="module-slide-ol">
            <div class=" slide-ol"  v-for="(item,index) in recommend">
                <a class="slide-ol-a" href="">
                    <img class="slide-ol-img" :src="item.img" alt="">
                    <figcaption class="slide-ol-span" >
                        {{item.name}}
                    </figcaption>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Homeslide",
        data() {
            return {
            }
        },
        props:{
            recommend:{
                type:Array,
                default:[]
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>
    #Homeslide{

    }
    .module-slide-ol{
        position: relative;
        overflow: auto;
        overflow-y: hidden;
        min-height: 172px;
        padding-left: 8px;
        white-space: nowrap;
       width: auto;
    }
    .slide-ol{
        width: 82px;
        display: inline-block;
        white-space: normal;
        -webkit-animation: 3s move infinite linear;

    }

    .slide-ol-a{
        display: block;
        width: 82px;
        height: 152px;
        padding-top: 12px;
        padding-right: 8px;
        padding-bottom: 8px;
        padding-left: 8px;
        outline-color: initial;
        outline-style: initial;
        outline-width: 0px;
        text-decoration-line: none;
        text-decoration-style: initial;
        text-decoration-color: initial;
        color: #33373d;
        font-size: 13px;
        text-align: center;
        margin: 0;
    }
    .slide-ol-img{
        display: block;
        width: 66px;
        height: 88px;
        box-shadow: 0 1px 3px rgba(0,0,0,.3);
    }

    .slide-ol-span{
        margin: 8px 0 2px;
        width: 66px;
        height: 16px;
        overflow: hidden;
    }
</style>