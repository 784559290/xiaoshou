<template>

    <div id='module'>
        <Hometitle :homttitle="homttitle"></Hometitle>

        <book-lis></book-lis>
        <book-lis></book-lis>
        <book-lis></book-lis>
        <book-lis></book-lis>

    </div>
</template>

<script>
    import Hometitle from "@views/Home/childComps/Hometitle";
    import BookLis from "@views/Home/childComps/Homelist/book-lis";
    export default {
        name: "module",
        components: {BookLis, Hometitle},
        data() {
            return {
                homttitle:{
                    title: "新书高榜",
                    Description: ""
                }
            }
        },
        created() {
        },
        methods: {}
    }
</script>

<style scoped>
    #module{
        margin: 12px 0;
        background-color: #ffffff;
    }
</style>