<template>
    <div id='Homeswiper'>
        <swiper class="swiperimg">
            <swiper-slide v-for="(item,index) in banner">
                <img :src="item.image" alt="">
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "Homeswiper",
        data() {
            return {}
        },
        props: {
            banner: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        created() {

        },
        methods: {}
    }
</script>

<style scoped>
    .swiper-container {
        width: 100%;
        height: 120px;
        margin-top: 50px;
    }
    .swiper-container img{
        height: 100%;
        width: 100%;
    }
    #Homeswiper{
        margin: 0 13.5px  0 13.5px ;
    }
</style>