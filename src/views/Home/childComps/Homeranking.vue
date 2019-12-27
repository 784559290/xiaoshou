<template>
    <div id='Homeranking'>
        <!--首页title-->
        <Hometitle :homttitle="Homttitle"></Hometitle>
        <!-- 小说选择栏-->
        <Homeclassification :fictionsort="Fictionsort"></Homeclassification>
        <!--小说推荐循环-->

        <Homeslide :recommend="recommend"></Homeslide>

    </div>
</template>

<script>
    import Hometitle from "@views/Home/childComps/Hometitle";
    import Homeclassification from "@views/Home/childComps/Homeclassification";
    import Homeslide from "@views/Home/childComps/Homeslide";
    import Scroll from "@components/scroll/scroll";

    export default {
        name: "Homeranking",
        components: {Scroll, Homeslide, Homeclassification, Hometitle},
        data() {
            return {
                Homttitle: {
                    title: "排行榜",
                    Description: ""
                },
                Fictionsort: [
                    '奇幻玄幻',
                    '武侠修仙',
                    '都市职场',
                ],
                recommend: [
                    {
                        name: "王者荣耀",
                        img: "/img/300.jpg",
                    }, {
                        name: "王者荣耀",
                        img: "/img/300.jpg",
                    }, {
                        name: "王者荣耀",
                        img: "/img/300.jpg",
                    }, {
                        name: "王者荣耀",
                        img: "/img/300.jpg",
                    }, {
                        name: "王者荣耀",
                        img: "/img/300.jpg",
                    }, {
                        name: "王者荣耀",
                        img: "/img/300.jpg",
                    }, {
                        name: "王者荣耀",
                        img: "/img/300.jpg",
                    },
                ],
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>
    #Homeranking {
        height: 259px;
        margin: 12px 0;
    }
</style>