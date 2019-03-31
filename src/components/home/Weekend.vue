<template>
    <div class="Weekend">
        <div class="weekend-title">周末去哪玩</div>
        <ul>
            <router-link tag="li" class="weekend-info border-bottom" to="/" v-for="(item,key) in weekendList" :key="key">
                <div class="weekend-top"><img :src="item.imgUrl"></div>
                <div class="weekend-bottom">
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
    name:'Weekend',
    data () {
        return {
            weekendList:[
                {id:'1',imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/892f011c3b7bd6815b460c659acc5651.jpg_750x200_e2242cfb.jpg',title:'珠海一日游',desc:'珠海好玩好吃，带你玩转大珠海，开心一夏。'},
                {id:'2',imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/892f011c3b7bd6815b460c659acc5651.jpg_750x200_e2242cfb.jpg',title:'珠海一日游',desc:'珠海好玩好吃，带你玩转大珠海，开心一夏。'},
                {id:'3',imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/892f011c3b7bd6815b460c659acc5651.jpg_750x200_e2242cfb.jpg',title:'珠海一日游',desc:'珠海好玩好吃，带你玩转大珠海，开心一夏。'}
            ]
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
            margin-bottom: .2em;
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
