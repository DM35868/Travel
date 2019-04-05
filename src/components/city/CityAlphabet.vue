<template>
  <ul class="alphabetList">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet"
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
