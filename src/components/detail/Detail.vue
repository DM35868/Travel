<template>
    <div class="detail">
        <detail-header></detail-header>
        <banner></banner>
        <div class="dv"></div>
    </div>
</template>

<script>
import Banner from './Banner.vue'
import DetailHeader from './DetailHeader.vue'
export default {
    components:{
        Banner,DetailHeader
    }
}
</script>

<style lang="stylus" scoped>
    .dv{
        height: 1000px;
    }
</style>
