<template>
    <div class="CityHeader">
        城市选择
        <router-link to="/"><span class="travel-iconfont iconfanhui"></span></router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/varibles.styl';
    .CityHeader{
        position: relative;
        height: $headerHight;
        line-height:$headerHight;
        background-color:$bgColor;
        overflow: hidden;
        text-align:center;
        color:#fff;
        font-size: .32rem; 
        .travel-iconfont{
            position:absolute;
            top:0;
            left:0;
            font-size: 0.4rem;
            margin-left : 0.2rem;
            color:#fff;
        }   
    }
</style>
