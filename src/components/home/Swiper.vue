<template>
    <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide v-for="item in swiperList" :key="item.id">
            <img class="swiper-images" :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'carrousel',
    props:{
      swiperList:Array
    },
    data() {
      return {
        swiperOption: {
          autoplay: 3500,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          loop:true,
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
        }
      }
    },
    computed:{
      showSwiper(){
        return this.swiperList.length;
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .wrapper{
        .swiper-images{
        width:100%;
        }

    }
    .wrapper>>> .swiper-pagination-bullet-active{
        background-color #fff;
    }
</style>
