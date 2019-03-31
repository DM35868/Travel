<template>
    <div class="Recommend">
        <div class="recommend-title">热销推荐</div>
        <ul>
            <router-link tag="li" class="recommend-info border-bottom" to="/" v-for="(item,key) in recommendList" :key="key">
                <img :src="item.imgUrl" class="recommend-left">
                <div class="recommend-right">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>    
</template>

<script>
export default {
    name:'Recommend',
    props:{
        recommendList:Array
    },
    data () {
        return {
        }
    }

}
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/mixins.styl';
    .recommend-title{
        background-color #eee;
        line-height: 0.8rem;
        text-indent: .2rem;
        margin-top: .1rem;
    }
    .recommend-info{
        display:flex; 
        .recommend-left{
            width: 1.7rem;
            height: 1.7rem;
            padding: 0.1rem;
        }
        .recommend-right{
            flex: 1;
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
            .item-button{
                line-height:0.44rem;
                margin-top :0.16rem;
                background-color: #ff9300;
                padding: 0 0.2rem;
                border-radius :0.06rem;
                color: #fff;
            }
        }
    }
</style>
