<template>
    
    <div id='Homeclassification'>
        <nav class="btn-group">
            <h3 :class="{'active':index==active}" @click="H3active(index,item)" v-for="(item,index) in fictionsort">{{item}}</h3>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Homeclassification",
        data() {
            return {
                active:0,
                itemfuncion:null
            }
        },
        props:['fictionsort'],
        created() {

        },
        methods: {
            H3active(index,item){
                if (this.active !== index){
                    this.active = index
                    this.$emit('sonswitchObj',index)
                }

            }
        }
    }
</script>

<style scoped>
    #Homeclassification{
        margin: 7px 16px;
    }
    .btn-group{
        display: table;
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        table-layout: fixed;
    }
    .btn-group h3{
        font-size: 100%;
        font-weight: 400;
        display: table-cell;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #ed424b;
        border: 1px solid #ed424b
    }
    .active{
        color: #fff!important;
        background-color: #ed424b;
    }
    h3:nth-child(2){
        border-left:  0!important;
        border-right: 0!important;
    }
    h3:nth-child(1){
        border-top-left-radius:5px!important;
        border-bottom-left-radius:5px!important;
    }
    h3:nth-last-child(1){
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
</style>