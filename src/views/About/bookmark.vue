<template>
    <div id="bookmark">

        <ul class="infinite-list"  style="overflow:auto">
            <div class="book-layout" v-for=" (item,index) in bookmarklist " @click="Jumpcontent(item.chid)">
                <el-row class="book-layout-border">
                    <el-col :span="5"><img class="book-layout-img"  src="~@/assets/img/home/300.jpg" alt=""></el-col>
                    <el-col :span="19">
                        <div><h4>{{item.novels.noName}}</h4></div>
                        <div>
                            <span>{{item.novels.noNickName}} | 读至{{item.novechapter.chapterName}}</span>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </ul>

    </div>
</template>

<script>

    import {GetAbout_Bookmark} from "@/network/user_About";

    export default {
        name: "bookmark",
        data() {
            return {
                bookmarklist: []
            }
        },
        components: {},
        created() {

        },
        mounted() {
            this.bookmarklist_obj()
        },
        methods: {
            bookmarklist_obj(){
                GetAbout_Bookmark().then(res =>{
                    this.bookmarklist = res.data;
                })
            },
            Jumpcontent(chid){
                this.$router.push({path:'/Read',query:{chid:chid}})
            }
        }
    }
</script>

<style scoped>
    .infinite-list{
        margin: 0;
        padding: 0;
    }
    infinite-list li{

    }
    .book-layout{
        padding: 16px 16px 0 16px;
        height: 104px;

    }
    .book-layout-border{
        height: 88px;
        border-bottom: 1px solid #969ba3;
    }
    .book-layout-img{
        height: 72px;
        width: 56px;
    }
    .book-layout h4{
        line-height: 22px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 16px;
        font-weight:bold ;
    }
    .book-layout span{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #969ba3;
        font-size: 14px;
    }
</style>