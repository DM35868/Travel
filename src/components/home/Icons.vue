<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img :src="item.imgUrl" alt="" class="icon-img-info">
                    </div>
                    <p class="icon-p">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name:"icons",
    props:{
        iconList:Array
    },
    data () {
        return {
            swiperOption: {
              autoplay: false
            }
        }
    },
    computed:{
        pages (){
            const pages = []
            this.iconList.forEach((item,index) => {
                //算出多少页
                const page = Math.floor(index/8);
                if(!pages[page]){
                    pages[page] = [];
                }
                pages[page].push(item);
            });
            return pages;
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/varibles.styl';
    .icons{
        width:100%;
        height:0;
        overflow hidden;
        padding-bottom:50%;
        .icon{
            position: relative;
            overflow: hidden;
            float left;
            height:0;
            width:25%;
            padding-bottom:25%;
            .icon-img{
                position:absolute;
                left:0;
                top:0;
                right: 0;
                bottom:.44rem;
                box-sizing:border-box;
                padding:.1rem;
                .icon-img-info{
                    display:block;
                    height: 100%;
                    margin:0 auto;
                }
            }
            .icon-p{
                position:absolute;
                left:0;
                right:0;
                bottom:0;
                height: .44rem;
                line-height:.44rem;
                color: $darkTextColor;
                text-align: center;
            }
        }
    }
</style>
