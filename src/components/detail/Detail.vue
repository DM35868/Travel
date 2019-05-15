<template>
    <div class="detail">
        <detail-header></detail-header>
        <banner></banner>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import Banner from './Banner.vue'
import DetailHeader from './DetailHeader.vue'
import DetailList from './DetailList.vue'
export default {
    components:{
        Banner,DetailHeader,DetailList
    },
    data(){
        return {
            list:[
                {title:'成人票',
                children:[{
                    title:'成人三联票'
                }]
                },
                {title:'半场票'},
                {title:'儿童票'},
                {title:'优惠票'},
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .content{
        height: 1000px;
    }
</style>
