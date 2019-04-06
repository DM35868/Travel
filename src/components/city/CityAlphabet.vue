<template>
  <ul class="alphabetList">
    <li class="item"
    v-for="item in letters"
    :key="item"
    :ref="item"
    @touchstart.prevent="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @click="handleClick"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props:{
    cities:Object
  },
  data(){
    return {
      status:false,
      clientY:0,
      timer:null
    }
  },
  computed:{
    letters(){
      const letters = [];
      for(let i in this.cities){
        letters.push(i);
      }
      return letters;
    }
  },
  updated (){
    this.clientY = this.$refs['A'][0].offsetTop;
  },
  methods:{
    handleTouchStart(){
      this.status = true;
    },
    handleTouchMove(e){
      if(this.status){
        if(this.timer){
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() =>{
          //通过事件对象toucehs数组获取到手指滑动到的元素，获取到该元素后得到它的可视高度，他的高度一直会到顶部，然后减去顶部的79像素
            const touchY = e.touches[0].clientY - 79;
              //通过移动的高度-可视的高度/20字体大小就会得到当前的位置
            const index = Math.floor((touchY - this.clientY) / 20);
              //再次出发change事件传给父元素
            if(index >= 0 && index < this.letters.length){
              this.$emit('change',this.letters[index]);
            }
          },16);
      }
    },
    handleTouchEnd(){
      this.status = false;
    },
    handleClick(e){
      this.$emit('change',e.target.innerText);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/varibles.styl';
.alphabetList {
  display:flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: .4rem;
  .item{
      text-align:center;
      color:$bgColor;
      line-height:.4rem;
  }
}
</style>
