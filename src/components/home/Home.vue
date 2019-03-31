<template>
     <div class="home">
          <Header :city="city"></Header>
          <Swiper :swiperList="swiperList"></Swiper>
          <Icons :iconList="iconList"></Icons>
          <Recommend :recommendList="recommendList"></Recommend>
          <Weekend :weekendList="weekendList"></Weekend>
     </div>     
</template>
<script>
import Header from './Header.vue'
import Swiper from './Swiper.vue'
import Icons from './Icons.vue'
import Recommend from './Recommend.vue'
import Weekend from './Weekend.vue'
import axios from 'axios'
export default {
     name:'home',
     components:{
          Header,Swiper,Icons,Recommend,Weekend
     },
     data(){
          return {
               city:'',
               iconList:[],
               recommendList:[],
               swiperList:[],
               weekendList:[]
          }
     },
     methods:{
          getData(){
               axios.get('api/index.json').then((res,erro)=>{
                    if(res.data && res.data.ret){
                         const data = res.data.data;
                         this.city = data.city;
                         this.iconList = data.iconList;
                         this.recommendList = data.recommendList;
                         this.swiperList = data.swiperList;
                         this.weekendList = data.weekendList;
                    }else{
                         console.log(erro);
                    }
                    
               });
          }
     },
     mounted(){
          this.getData();
     }
}
</script>
<style>

</style>