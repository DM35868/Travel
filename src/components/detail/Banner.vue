<template>
    <div class="banner">
        <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="" class="banner-img">
        <div class="banner-info">
            <div class="banner-title">323232</div>
            <div class="banner-number"><span class="travel-iconfont icontupian banner-icon"></span>32</div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
    .banner{
        position: relative;
        overflow: hidden;
        height:0;
        padding-bottom:55%;
        .banner-img{
            width:100%;
        }
        .banner-info{
            display:flex;
            position:absolute;
            left:0;
            right:0;
            bottom:0
            color:#fff;
            line-height:.6rem;
            background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8));
            .banner-title{
                flex:1;
                padding: 0 .2rem;
            }
            .banner-number{
                padding: 0 .4rem;
                background-color: rgba(0,0,0,.3);
                border-radius:.24rem;
                .banner-icon{
                    font-size: .24rem
                    padding-right: .1rem;
                }
            }
        }
    }
</style>
