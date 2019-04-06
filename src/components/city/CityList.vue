<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button-item">北京</div>
                    </div>
                </div>
            </div>

            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
                        <div class="button-item">{{item.name}}</div>
                    </div>
                </div>
            </div>

            <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
                <div class="title">{{key}}</div>
                <div class="city-list">
                    <div class="city-item border-bottom" v-for="items in item" :key="items.id">{{items.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//导入滚动条的包
import Bscroll from 'better-scroll'
export default {
    name:"CityList",
    props:{
        hotCities:Array,
        cities:Object,
        letter:String
    },
    mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper);
    },
    watch:{
        letter: function(){
            if(this.letter){
                const element = this.$refs[this.letter][0];
                //调用scroll插件的一个滚动定位到该元素的方法
                this.scroll.scrollToElement(element);
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.border-topbottom{
    &:before{
        border-color:#ccc;
    }
    &:after{
        border-color:#ccc;
    }
}
.border-bottom{
    &:before{
        border-color:#ccc;
    }
}
 .list{
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
     .area{
         .title{
             line-height:.67rem;
             background-color: #ccc;
             padding-left:.38rem;
         }
         .button-list{
             overflow: hidden;
             padding: .1rem .6rem .1rem .1rem;
         }
         .city-list{
             .city-item{
                 padding: .2rem 0 .2rem .2rem;
             }
         }
         .button-wrapper{
             float: left;
             width:33.33%;
         }
         .button-item{
             line-height:0.58rem;
             text-align: center;
             padding: .1rem 0;
             margin: .1rem;
             border:.02rem solid #ccc;
             border-radius: .06rem;
         }
     }
 }
</style>
