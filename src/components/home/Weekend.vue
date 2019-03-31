<template>
    <div class="Weekend">
        <div class="weekend-title">周末去哪玩</div>
        <ul>
            <router-link tag="li" class="weekend-info border-bottom" to="/" v-for="(item,key) in weekendList" :key="key">
                <div class="weekend-top"><img :src="item.imgUrl"></div>
                <div class="weekend-bottom">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </router-link>
        </ul>
    </div>    
</template>

<script>
export default {
    name:'Weekend',
    props:{
        weekendList:Array
    },
    data () {
        return {
        }
    }

}
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/mixins.styl';
    .weekend-title{
        background-color #eee;
        line-height: 0.8rem;
        text-indent: .2rem;
        margin-top: .1rem;
    }
    .weekend-info{ 
        .weekend-top{
            height: 0;
            padding-bottom: 26.9%;
            overflow: hidden;
            img{
                width:100%;
            }
        }
        .weekend-bottom{
            padding: 0.1rem;
            min-width: 0;
            .item-title{
                line-height:0.64rem;
                font-size: 0.32rem;
                ellipsis();
            }
            .item-desc{
                color: #666;
                line-height: 0.4rem;
                ellipsis();
            }
        }
    }
</style>
