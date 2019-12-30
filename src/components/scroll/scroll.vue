<template>
    
    <div class='wrapper' ref="scroll" >
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll' //引入上拉滑动加载js插件
    export default {
        name: "scroll",
        data() {
            return {
                scroll:null
            }
        },
        props:{
            pullup:{
                type:Boolean,
                default:false
            },
            scrollX:{
                type:Boolean,
                default:true
            },
            freeScroll:{
                type:Boolean,
                default:true
            }
        },
        created() {
            window.console.log(this.scrollX)
        },
        mounted(){
            //创建插件
            if (this.pullup){
                var pullUpLoad = {
                    threshold: 20 // 当上拉距离超过30px时触发 pullingUp 事件
                }
            }else {
                var pullUpLoad =false
            }

            this.scroll = new BScroll(this.$refs.scroll,{
                probeType:3,
                click:true,
                pullUpLoad: pullUpLoad,//是否监听上拉事件
                scrollX:this.scrollX,
                freeScroll:this.freeScroll,
                eventPassthrough:'horizontal',
                topbot: false,
            })
            //2监听滚动事件  把数据传递到父组件
            this.scroll.on('scroll',(position)=>{
                this.$emit('scroll',position)
            })
            //3监听上拉事件
            this.scroll.on('pullingUp',()=>{
                this.$emit('pullUpLoad')
            })

        },
        methods: {
            //上拉加载完成以后需要调用一下才可以继续加载
            scfinishFlush(){
                this.scroll &&  this.scroll.finishFlush()
            },
            scroll_top(x=0,y=0,time=600){
                this.scroll && this.scroll.scrollTo(x,y,time);
            },
            refresh(){
                //从新刷新
                this.scroll.refresh();
            },

            //
        }
    }
</script>

<style scoped>

</style>