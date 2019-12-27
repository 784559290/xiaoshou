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
        data() {
            return {
                //热门
                recommend:[
                    {
                        name:"王者荣耀",
                        img:"/img/300.66492253.jpg",
                    }, {
                        name:"王者荣耀",
                        img:"/img/300.66492253.jpg",
                    }, {
                        name:"王者荣耀",
                        img:"/img/300.66492253.jpg",
                    },
                ],
                Hometitle:{
                    title:"热门小说",
                    Description:"站长推荐",
                }
            }
        },
        created() {
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