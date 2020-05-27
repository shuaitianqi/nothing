<template lang="pug">
  .control
    .control-left.e-flex
      .control-left-item.e-flex
        img(src="../../../assets/images/read.png")
        span {{watch}}人看过
      .control-left-item.e-flex
        img.collect(src="../../../assets/images/collect.png")
        span {{collect}}人收藏
    .control-right.e-flex
      .control-right-label 分享到：
      a.control-right-item(href="#")
        img(src="../../../assets/images/share1.png")
      a.control-right-item(href="#")
        img(src="../../../assets/images/share2.png")
      a.control-right-item(href="#")
        img(src="../../../assets/images/share3.png")
      a.control-right-item(href="#")
        img(src="../../../assets/images/share4.png")
</template>

<script>
export default {
  props: {
    watch: Number,
    collect: Number
  }
}
</script>

<style lang="sass" scoped>
.control
  width: 100%
  display: flex
  justify-content: space-between
  height: 60px

  &-left
    align-items: center

    &-item
      align-items: center
      height: 20px
      padding: 0 20px

      &:first-child
        border-right: 1px solid #eee

      img
        width: 16px
        height: 16px
        margin-right: 6px

    .collect
      cursor: pointer

  &-right
    align-items: center

    &-item

      img
        display: block
        width: 24px
        height: 24px
        margin-left: 10px
</style>
