<template>
    <div class="gallery" @click="closeImgs">
       <div class="gallery-img">
           <swiper :options="swiperOptions">
                <swiper-slide v-for="(item,key) in imgs" :key=key>
                    <img class="banner-img" :src="item">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
           </swiper>
       </div>
    </div>
</template>

<script>
export default {
    name:'gallery',
    data(){
        return {
            swiperOptions:{
                pagination : '.swiper-pagination',
                paginationType:'fraction',
                observeParents: true,
                observer: true,
            },
            imgs:[
                'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg',
                'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg'
            ]
        }
    },
    methods:{
        closeImgs(){
            this.$emit('close');
        }
    }
}
</script>

<style lang="stylus" scoped>
    .gallery>>> .swiper-container{
        overflow:inherit;
    }
    .gallery{
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index:99;
        background-color #000;
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        .gallery-img{
            width:100%;
            height:0;
            padding-bottom: 100%
            .banner-img{
                width:100%;
            }
            .swiper-pagination{
                color:#fff;
                bottom: -1rem;
            }
        }
    }
</style>
