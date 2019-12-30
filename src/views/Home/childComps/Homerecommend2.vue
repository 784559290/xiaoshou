<template>
    
    <div id='Homerecommend2'>
        <Hometitle :homttitle="Homttitle"></Hometitle>
        <Homeclassification :fictionsort="Fictionsort"></Homeclassification>
        <scroll class="content" ref="scroll"  :pullup="false" :scrollX="true">
            <Homeslide :recommend="recommend"></Homeslide>
        </scroll>
    </div>
</template>

<script>
    import Hometitle from "@views/Home/childComps/Hometitle";
    import Homeclassification from "@views/Home/childComps/Homeclassification";
    import Scroll from "@components/scroll/scroll";
    import Homeslide from "@views/Home/childComps/Homeslide";

    export default {
        name: "Homerecommend2",
        components: {Scroll, Homeclassification, Hometitle,Homeslide},
        data() {
            return {
                Homttitle: {
                    title: "高分小说",
                    Description: ""
                },
                Fictionsort:[
                    '历史军事',
                    '游戏体育',
                    '科幻悬疑',
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
  #Homerecommend2{
      background-color: #fff;
  }
</style>