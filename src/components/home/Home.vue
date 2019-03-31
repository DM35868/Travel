<template>
     <div class="home">
          <Header></Header>
          <Swiper></Swiper>
          <Icons></Icons>
          <Recommend></Recommend>
          <Weekend></Weekend>
     </div>     
</template>
<script>
import Header from './Header.vue'
import Swiper from './Swiper.vue'
import Icons from './Icons.vue'
import Recommend from './Recommend.vue'
import Weekend from './Weekend.vue'
export default {
     name:'home',
     components:{
          Header,Swiper,Icons,Recommend,Weekend
     }
}
</script>
<style>

</style>