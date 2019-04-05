<template>
    <div class="CitySearch">   
        <input class="search-input" type="text" placeholder="请输入城市名或拼音">
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/varibles.styl';
    .CitySearch{
        height:.72rem;
        padding: 0 .1rem;
        background-color:$bgColor;
        .search-input{
            box-sizing:border-box;
            padding:0 .1rem;
            height:.62rem;
            width:100%;
            text-align:center;
            line-height:.62rem;
            color:#666;
            border-radius: .06rem;
        }
    }
</style>
