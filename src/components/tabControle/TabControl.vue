<template>
    
    <div id='TabControl'>
        <div class="TabControl_item" v-for="(item,index) in title"
        :class="{active:index ==currenIndex}" @click="currenIndex = index">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        data() {
            return {
                currenIndex:0
            }
        },
        props:{
          title:{
              type:Array,
              default(){
                  return []
              }
          }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>
    #TabControl{
        display: flex;
        text-align: center;
        font-size: 13px;
        background-color: #fff;
    }
    .TabControl_item{
        flex: 1;
        line-height: 30px;
        height: 30px;
    }
    .active{
        color: rgba(133, 49, 113,);

    }
    .TabControl_item span{
        padding: 5px;
    }
    .active span{
        border-bottom: 2px solid #c7254e;
    }
</style>