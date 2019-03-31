<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img :src="item.imgUrl" alt="" class="icon-img-info">
                    </div>
                    <p class="icon-p">{{item.dec}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name:"icons",
    data () {
        return {
            IconsList:[
                {id:1,imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',dec:'常见景点'},
                {id:2,imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',dec:'珠海游'},
                {id:3,imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',dec:'海岛游'},
                {id:4,imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',dec:'港澳游'},
                {id:5,imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',dec:'常见景点'},
                {id:6,imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',dec:'常见景点'},
                {id:7,imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',dec:'常见景点'},
                {id:8,imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',dec:'常见景点'},
            ]
        }
    },
    computed:{
        pages (){
            const pages = []
            this.IconsList.forEach((item,index) => {
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
