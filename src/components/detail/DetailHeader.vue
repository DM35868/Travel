<template>
    <div class="DetailHeader">
        <div class="hander-back" v-show="headerShow">
            <router-link to="/"><span class="travel-iconfont iconfanhui"></span></router-link>
        </div>
        <div class="header-info"
            v-show="!headerShow"
            :style="opacityStyle">
            <router-link to="/"><span class="travel-iconfont iconfanhui"></span></router-link>
            查看详情
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailHeader',
    data(){
        return {
            headerShow:true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    mounted(){
        window.addEventListener('scroll',this.handleHeaderShow);
    },
    methods:{ 
        handleHeaderShow(){
            const top = document.documentElement.scrollTop;
            if(top > 60){
                let opacity = top / 140;
                opacity = opacity > 1 ? 1 : opacity;
                this.opacityStyle = { opacity }
                this.headerShow = false;
            }else{
                this.headerShow = true;
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/varibles.styl';
.DetailHeader{
    position:fixed;
    z-index:100;
    .hander-back{
        position:fixed;
        left: 0;
        right:0;
        line-height:0.6rem;
        background-color: rgba(0,0,0,.4);
        .travel-iconfont{
             margin-left : 0.2rem;
             font-size: 0.4rem;
             color: #fff;
        }
       
    }
    .header-info{
        position: fixed;
        left: 0;
        right:0;
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
}
</style>
