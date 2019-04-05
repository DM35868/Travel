<template>
    <div class="city">
        <CityHeader></CityHeader>
        <CitySearch></CitySearch>
        <CityList></CityList>
        <CityAlphabet></CityAlphabet>
    </div>
</template>

<script>
import CityHeader from './CityHeader.vue' 
import CitySearch from './CitySearch.vue'
import CityList from './CityList.vue'
import CityAlphabet from './CityAlphabet.vue'
export default {
    name:'city',
    components:{
        CityHeader,CitySearch,CityList,CityAlphabet
    }
}
</script>

<style lang="stylus" scoped>

</style>
