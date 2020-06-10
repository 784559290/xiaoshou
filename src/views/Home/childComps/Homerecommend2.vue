<template>
    
    <div id='Homerecommend2'>
        <Hometitle :homttitle="Homttitle"></Hometitle>
        <Homeclassification :fictionsort="Fictionsort"  @sonswitchObj="sonswitch"></Homeclassification>
        <scroll class="content" ref="scroll"  :pullup="false" :scrollX="true">
            <Homeslide :recommend="ShowRecommend"></Homeslide>
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
                ShowRecommend:[],
                Fictionsort:[
                    '历史军事',
                    '游戏体育',
                    '科幻悬疑',
                ],
                recommend: [

                ],
            }
        },
        created() {
            this.ShowRecommend =  this.$store.state.HomeConten.TopBook.cacheLishi
        },
        methods: {
            sonswitch(index){
                if (index ===0){
                    this.ShowRecommend =  this.$store.state.HomeConten.TopBook.cacheLishi
                }
                if (index ===1){
                    this.ShowRecommend =  this.$store.state.HomeConten.TopBook.cacheYouxi
                }
                if (index ===2){
                    this.ShowRecommend =  this.$store.state.HomeConten.TopBook.cacheKehuan
                }

            },
        }
    }
</script>

<style scoped>
  #Homerecommend2{
      background-color: #fff;
  }
</style>