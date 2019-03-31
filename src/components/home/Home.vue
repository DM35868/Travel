<template>
     <div class="home">
          <Header></Header>
          <Swiper></Swiper>
          <Icons></Icons>
     </div>     
</template>
<script>
import Header from './Header.vue'
import Swiper from './Swiper.vue'
import Icons from './Icons.vue'
export default {
     name:'home',
     components:{
          Header,Swiper,Icons
     }
}
</script>
<style>

</style>