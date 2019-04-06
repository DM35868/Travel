<template>
    <div>
        <div class="CitySearch">   
            <input class="search-input" type="text" placeholder="请输入城市名或拼音" v-model="searchInner">
        </div>
        <div class="search-content" v-show="searchInner" ref="search">
            <ul>
                <li v-for="item in showList" :key="item.id" class="listInner border-bottom">{{item.name}}</li>
                <li v-show="hasNoData" class="listInner border-bottom">未找到符合该字段的内容</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CitySearch',
    props:{
        cities:Object
    },
    data(){
        return {
            searchInner:'',
            showList:[],
            timer:null
        }
    },
    computed:{
        hasNoData(){
            return !this.showList.length;
        }
    },
    watch:{
        searchInner:function(){
            if(this.timer){
                clearTimeout(this.timer);
            }
            if(!this.searchInner){
                this.showList = [];
            }
            this.timer = setTimeout(()=>{
                const arr = [];
                 for(let i in this.cities){
                    this.cities[i].forEach((value) => {
                        if(value.spell.indexOf(this.searchInner) > -1 || value.name.indexOf(this.searchInner) > -1){
                            arr.push(value);
                        }
                    });
                }
                this.showList = arr;
                },100);
            }
    },
    mounted () {
       this.scroll = new Bscroll(this.$refs.search)
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/varibles.styl';
    .CitySearch{
        height:.72rem;
        padding: 0 .1rem;
        background-color:$bgColor;
        .search-input{
            box-sizing:border-box;
            padding:0 .1rem;
            height:.62rem;
            width:100%;
            text-align:center;
            line-height:.62rem;
            color:#666;
            border-radius: .06rem;
        }
    }
    .search-content{
            z-index:1;
            position: absolute;
            top: 1.58rem;
            left:0;
            right:0;
            bottom:0;
            background-color: #eee;
            .listInner{
                background-color #fff;
                padding: 0.2rem 0 0.2rem 0.2rem;
            }
    }
</style>
