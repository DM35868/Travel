<template>
    <div class="city">
        <CityHeader></CityHeader>
        <CitySearch></CitySearch>
        <CityList :hotCities="hotCities" :cities="cities" :letter="letter"></CityList>
        <CityAlphabet :cities="cities" @change="handleChange"></CityAlphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './CityHeader.vue' 
import CitySearch from './CitySearch.vue'
import CityList from './CityList.vue'
import CityAlphabet from './CityAlphabet.vue'
export default {
    name:'city',
    components:{
        CityHeader,CitySearch,CityList,CityAlphabet
    },
    data(){
        return {
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    methods:{
        getCityList(){
            axios.get('api/city.json').then((res,erro)=>{
            if(res.data.ret && res.data.data){
                this.cities = res.data.data.cities;
                this.hotCities = res.data.data.hotCities;
            }else{
                console.log(erro);
            }
         });
        },
        handleChange(letter){
            this.letter = letter;
        }
    },
    mounted(){
        this.getCityList();
    }

}
</script>

<style lang="stylus" scoped>

</style>
