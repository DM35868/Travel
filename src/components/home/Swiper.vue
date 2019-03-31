<template>
    <div class="wrapper">
    <swiper :options="swiperOption">
        <swiper-slide v-for="item in swiperList" :key="item.id">
            <img class="swiper-images" :src="item.url">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'carrousel',
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
        },
        //定义URL地址数组
        swiperList:[{
            id:'1',
            url:'https://img1.qunarzz.com/order/comp/1805/2e/6e407f088bfb902.png'
        },{
            id:'2',
            url:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/6b6fd3d9e40b749ac1d189ce80ebb3cc.jpg_750x200_9616e2e7.jpg'
        }]
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
