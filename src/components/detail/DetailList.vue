<template>
    <div class="detail-list">
        <div v-for="(item, key) in list" :key="key" class="item">
             <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
       
    </div>
</template>

<script>
export default {
    name:'DetailList',
    props:{
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
    .item-title{
        line-height: 0.8rem;
        padding:0 .2rem;
        font-size:0.32rem;
        .item-title-icon{
            display: inline-block;
            position: relative;
            left: .06rem;
            top: .08rem;
            width: .36rem;
            height: .36rem;
            background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
            margin-right: .1rem;
            background-size: .4rem 3rem;
        }
    }
    .item-children{
        padding: 0 .2rem;
    }
</style>
