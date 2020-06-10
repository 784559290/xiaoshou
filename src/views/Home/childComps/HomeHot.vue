<template>
    <div id='HomeHot'>
        <Hometitle :homttitle="Hometitle"  />
        <!--小说推荐循环-->
        <Homeslide :recommend="recommend"></Homeslide>
    </div>
</template>

<script>
    import Hometitle from "@views/Home/childComps/Hometitle";
    import Homeslide from "@views/Home/childComps/Homeslide";
    export default {
        name: "HomeHot",
        components: {Homeslide, Hometitle},
        props:{
            recommend:{
                type:Array,
                default:()=>[],
            }
        },
        data() {
            return {
                //热门
                Hometitle:{
                    title:"热门小说",
                    Description:"站长推荐",
                }
            }
        },
        created() {
            console.log(this.recommend)
        },
        methods: {}
    }
</script>

<style scoped>
    #HomeHot {
        height: 172px;
        margin: 12px 0;
        background-color: #fff;
    }


</style>