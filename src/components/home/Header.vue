<template>
    <div class="header">
        <div class="header-left"><span class="travel-iconfont iconfanhui"></span></div>
        <div class="header-input">
            <span class="travel-iconfont iconsousuo"></span><input type="text" placeholder="输入城市/景点/游玩主题">
        </div>
        <router-link to="/city">
           <div class="header-right">{{this.$store.state.city}}<span class="travel-iconfont iconxiajiantou"></span></div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'Header',
    props:{
      city:String
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/varibles.styl';
 .header {
  height: $headerHight;
  width: 100%;
  background: $bgColor;
  display: flex;
  color: #fff;
  align-items: center;
  .header-left {
    .iconfanhui {
      font-size: 0.4rem;
      margin-left : 0.2rem;
    }
  }
  .header-input {
    flex: 1;
    height: .64rem;
    line-height: .64rem;
    background: #eee;
    border-radius: 0.1rem;
    margin-left: 0.2rem;
    overflow: hidden;
    position: relative;
    color: #ccc;
    .iconsousuo {
      position: absolute;
      left: 0.2rem;
      line-height: 0.64rem;
    }
    input {
      height: 100%;
      width: 100%;
      padding-left: 0.6rem;
    }
    input::-webkit-input-placeholder {
      color: #ccc;
    }
  }
  .header-right {
    height: 100%;
    line-height :0.8rem;
    text-align: center;
    min-width: 1.04rem;
    padding: 0 0.1rem;
    color:#fff;
    .arrow-bottom {
      font-size: 0.24rem;
    }
  }
}
</style>