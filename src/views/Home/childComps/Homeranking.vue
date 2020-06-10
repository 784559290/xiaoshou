<template>
    <div id='Homeranking'>
        <!--首页title-->
        <Hometitle :homttitle="Homttitle"></Hometitle>
        <!-- 小说选择栏-->
        <Homeclassification :fictionsort="Fictionsort"  @sonswitchObj="sonswitch"></Homeclassification>
        <!--小说推荐循环-->
        <scroll class="content" ref="scroll"   :pullup="false" :scrollX="true">
          <Homeslide :recommend="ShowRecommend"></Homeslide>
        </scroll>
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
                    title: "热门小说",
                    Description: ""
                },
                Fictionsort: [
                    '奇幻玄幻',
                    '武侠修仙',
                    '都市职场',
                ],
                ShowRecommend:[],
            }
        },
        created() {
           this.ShowRecommend =  this.$store.state.HomeConten.Qihuan
        },
        methods: {
            sonswitch(index){
                if (index ===0){
                    this.ShowRecommend =  this.$store.state.HomeConten.Qihuan
                }
                if (index ===1){
                    this.ShowRecommend =  this.$store.state.HomeConten.WuXian
                }
                if (index ===2){
                    this.ShowRecommend =  this.$store.state.HomeConten.DoShi
                }

            },
        }
    }
</script>

<style scoped>
    #Homeranking {
        height: 259px;
        margin: 12px 0;
        background-color: #fff;
    }
</style>