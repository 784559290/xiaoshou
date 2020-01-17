<template>
    <div>
        <ol class="Catalog">
            <li>11111</li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "BookCatalog",
        method:{
            contentscroll(position) {

                this.top = position.y < -500
                //this.saveY = position.y
                if (position.y >= 0) {
                    //  this.$refs.scroll.scroll.scrollTo(0, 0);
                }
            },
        }
    }
</script>

<style scoped>
    .Catalog{
        border-bottom:1px solid #f0f1f2;
        display: block;
        list-style-type: decimal;
        padding-inline-start: 0px
    }
    .Catalog li{
        line-height: 28px;
        padding: 8px 1rem 0;
        color: #969ba3;
        background-color: #f6f7f9;
    }

</style>