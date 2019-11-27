<template>

    <div id='Tab-value'>
        <b-navbar-brand   :class="{'active':isActve}" v-on:click="itemClick()"  class="tab-wid">
            <slot  name="tab_name"></slot>
        </b-navbar-brand >
    </div>
</template>

<script>
    export default {
        name: "Tab-value",
        props:{
            path:String
        },

        data() {
            return{
              //  isActve:true
            }
        },
        methods:{
            itemClick(){
                window.console.log(111);
                this.$router.push(this.path)
                //console.log(this.path)
            }
        },
        computed:{
            isActve(){
                return this.$route.path.indexOf(this.path) !== -1
            },
        },
    }
</script>

<style scoped>
    .tab-wid {
        width: 25%;
        text-align: center;

    }
    .active {
        color: #b8762c !important;
    }
</style>