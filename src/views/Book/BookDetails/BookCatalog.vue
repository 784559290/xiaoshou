<template>
    <div>
        <div class="module-header">
            <el-row>
                <el-col :span="12">
                    <div class="grid-content bg-purple "><h4 class="total">共{{boocklist.length}}章</h4></div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple"><h4 class="just" @click="ClickFlashback()">{{Flashback}}</h4></div>
                </el-col>
            </el-row>
        </div>
        <ol class="Catalog">
            <li v-for=" (item,index) in  boocklist" @click="getRead(item.chid)">
                {{item.chapterName}}
            </li>
        </ol>
    </div>
</template>

<script>

    export default {
        name: "BookCatalog",
        data() {
            return {
                Catalog: [],
                Flashback:"倒叙"
            }
        },
        props: {
            boocklist: {
                type: Array,
                default: []
            }
        },
        created() {
            console.log(this.boocklist)
        },
        mounted() {
            this.$refs.scroll.refresh()
        },
        methods: {
            contentscroll(position) {
                this.top = position.y < -500
                //this.saveY = position.y
                if (position.y >= 0) {
                    //  this.$refs.scroll.scroll.scrollTo(0, 0);
                }
            },
            //章节目录

            ClickFlashback(){
                this.Flashback = this.Flashback==='倒叙' ? '正叙': '倒叙';
                this.boocklist = this.boocklist.reverse()
            },
            getRead(chid){
                this.$router.push({path:'/Read',query:{chid:chid}})
            }
        }
    }
</script>

<style scoped>
    .Catalog {
        border-bottom: 1px solid #f0f1f2;
        display: block;
        list-style-type: decimal;
        padding-inline-start: 0px
    }

    .Catalog li {
        line-height: 28px;
        padding: 8px 1rem 0;
        color: #969ba3;
        background-color: #f6f7f9;
    }

    .total {
        font-size: 14px;
        padding-left: 10px;
    }

    .just {
        font-size: 14px;
        text-align: right;
        padding-right: 20px;
    }
</style>