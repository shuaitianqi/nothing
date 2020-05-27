<template lang="pug">
  #e-futures
    BaseLayout
      .futures-header
      .futures-sort
        .futures-sort-content
          .futures-sort-item.down 按总收益率排序
          .futures-sort-item.up 按总获利排序
          .futures-sort-item 按月获利排序
          .futures-sort-item 按复制人数排序
          .futures-sort-item 按交易笔数排序
          .futures-sort-select
            select
              option(value="") 选择交易所
              option(value="") 上海期货交易所
              option(value="") 大连商品交易所
              option(value="") 郑州商品交易所
              option(value="") 中金所
              option(value="") 上海国际能源交易中心
          .futures-sort-input
            span 关键字：
            input
            span.search 搜索
      .futures-container
        .futures-item
          .futures-item-header
            .futures-item-name
              img(src="../../../assets/images/futures_icon.png")
              span 郑商所-苹果ap-04号信号源
            .futures-item-price.e-text-center 6080.00
            .futures-item-tip.e-text-center 总收益
          .futures-item-content
            .futures-item-list
              .futures-item-list-name 当前余额
              .futures-item-list-value ￥ 241302.03
            .futures-item-list
              .futures-item-list-name 当前净值
              .futures-item-list-value ￥ 241302.03
            .futures-item-list
              .futures-item-list-name 总获利
              .futures-item-list-value ￥ 60800.00
            .futures-item-list
              .futures-item-list-name 总收益率
              .futures-item-list-value 1.21%
            .futures-item-list
              .futures-item-list-name 月获利
              .futures-item-list-value ￥ 250900.00
            .futures-item-list
              .futures-item-list-name 总胜率
              .futures-item-list-value 37.14%
            .futures-item-list
              .futures-item-list-name 复制人数
              .futures-item-list-value 0
          .futures-item-footer
            a.e-text-center(href="") 复制
            a.e-text-center(href="") 查看详情
        .futures-item
          .futures-item-header
            .futures-item-name
              img(src="../../../assets/images/futures_icon.png")
              span 郑商所-苹果ap-04号信号源
            .futures-item-price.e-text-center 6080.00
            .futures-item-tip.e-text-center 总收益
          .futures-item-content
            .futures-item-list
              .futures-item-list-name 当前余额
              .futures-item-list-value ￥ 241302.03
            .futures-item-list
              .futures-item-list-name 当前净值
              .futures-item-list-value ￥ 241302.03
            .futures-item-list
              .futures-item-list-name 总获利
              .futures-item-list-value ￥ 60800.00
            .futures-item-list
              .futures-item-list-name 总收益率
              .futures-item-list-value 1.21%
            .futures-item-list
              .futures-item-list-name 月获利
              .futures-item-list-value ￥ 250900.00
            .futures-item-list
              .futures-item-list-name 总胜率
              .futures-item-list-value 37.14%
            .futures-item-list
              .futures-item-list-name 复制人数
              .futures-item-list-value 0
          .futures-item-footer
            a.e-text-center(href="") 复制
            a.e-text-center(href="") 查看详情
        .futures-item
          .futures-item-header
            .futures-item-name
              img(src="../../../assets/images/futures_icon.png")
              span 郑商所-苹果ap-04号信号源
            .futures-item-price.e-text-center 6080.00
            .futures-item-tip.e-text-center 总收益
          .futures-item-content
            .futures-item-list
              .futures-item-list-name 当前余额
              .futures-item-list-value ￥ 241302.03
            .futures-item-list
              .futures-item-list-name 当前净值
              .futures-item-list-value ￥ 241302.03
            .futures-item-list
              .futures-item-list-name 总获利
              .futures-item-list-value ￥ 60800.00
            .futures-item-list
              .futures-item-list-name 总收益率
              .futures-item-list-value 1.21%
            .futures-item-list
              .futures-item-list-name 月获利
              .futures-item-list-value ￥ 250900.00
            .futures-item-list
              .futures-item-list-name 总胜率
              .futures-item-list-value 37.14%
            .futures-item-list
              .futures-item-list-name 复制人数
              .futures-item-list-value 0
          .futures-item-footer
            a.e-text-center(href="") 复制
            a.e-text-center(href="") 查看详情
        .futures-item
          .futures-item-header
            .futures-item-name
              img(src="../../../assets/images/futures_icon.png")
              span 郑商所-苹果ap-04号信号源
            .futures-item-price.e-text-center 6080.00
            .futures-item-tip.e-text-center 总收益
          .futures-item-content
            .futures-item-list
              .futures-item-list-name 当前余额
              .futures-item-list-value ￥ 241302.03
            .futures-item-list
              .futures-item-list-name 当前净值
              .futures-item-list-value ￥ 241302.03
            .futures-item-list
              .futures-item-list-name 总获利
              .futures-item-list-value ￥ 60800.00
            .futures-item-list
              .futures-item-list-name 总收益率
              .futures-item-list-value 1.21%
            .futures-item-list
              .futures-item-list-name 月获利
              .futures-item-list-value ￥ 250900.00
            .futures-item-list
              .futures-item-list-name 总胜率
              .futures-item-list-value 37.14%
            .futures-item-list
              .futures-item-list-name 复制人数
              .futures-item-list-value 0
          .futures-item-footer
            a.e-text-center(href="") 复制
            a.e-text-center(href="") 查看详情
      .futures-pagination
        .futures-pagination-first 首页
        .futures-pagination-item.active 1
        .futures-pagination-item 2
        .futures-pagination-item 3
        .futures-pagination-item 4
        .futures-pagination-item 5
        .futures-pagination-last 尾页
</template>

<script>
import BaseLayout from '../../layout/base_layout.vue'

export default {
  components: {
    BaseLayout
  }
}
</script>

<style lang="sass" scoped>
.futures

  &-header
    height: 390px
    margin-top: 60px
    background: url('../../../assets/images/futures_header.jpg') no-repeat center center

  &-sort
    border-bottom: 1px solid #e0e2e5
    background: #fff

    &-content
      display: flex
      justify-content: space-around
      align-items: center
      width: 1200px
      height: 50px

    &-item
      position: relative
      height: 50px
      line-height: 50px
      margin: 0 20px
      cursor: pointer

      &::before
        content: ""
        position: absolute
        width: 0
        height: 0
        right: -15px
        border-left: 4px solid transparent
        border-right: 4px solid transparent
        color: #bcbcbc
        top: 21px
        border-bottom: 4px solid

      &::after
        content: ""
        position: absolute
        width: 0
        height: 0
        right: -15px
        border-left: 4px solid transparent
        border-right: 4px solid transparent
        color: #bcbcbc
        top: 27px
        border-top: 4px solid

      &.down,
      &.up
        color: #ff7326

      &.down

        &::before
          display: none

        &::after
          color: #ff7326
          top: 24px

      &.up

        &::after
          display: none

        &::before
          color: #ff7326
          top: 24px

    &-select
      margin: 0 30px

    &-input
      display: flex
      align-items: center
      margin: 0 30px

      span
        color: #868686

      input
        padding: 4px 10px
        border: 1px solid #ccc
        margin-right: 10px

      .search
        cursor: pointer

  &-container
    display: flex
    flex-wrap: wrap
    width: 1200px
    margin: 0 auto

  &-item
    width: calc( (100% - 60px) / 3)
    margin: 30px 10px 24px
    border: 1px solid #e9e9e9

    &:hover
      transform: translate(0px, -6px)
      transition: all 200ms linear

      & .futures-item-header
        background: #1360d4
        transition: all 200ms linear

    &-header
      padding: 20px
      background-color: #3E81E6
      color: #fff
      font-weight: 400

    &-name
      display: flex
      font-size: 20px
      justify-content: flex-start
      align-items: center

      img
        width: 40px
        height: 40px
        margin-right: 40px

      span
        flex: 1

    &-price
      margin: 18px 0
      font-size: 29px

    &-tip
      margin: 18px 0
      font-size: 18px

    &-list
      display: flex
      justify-content: space-between
      padding: 14px 16px
      border-bottom: 1px solid #f2f0f0

    &-footer
      display: flex
      justify-content: center

      a
        width: 64px
        margin: 18px 14px
        padding: 4px 20px
        color: #fff
        border-radius: 14px

        &:first-child
          background-color: #3E81E6

        &:last-child
          background-color: #474747

  &-pagination
    display: flex
    justify-content: center
    margin-bottom: 20px

    &-first,
    &-last,
    &-item
      padding: 0 10px
      margin: 5px
      border: 1px solid #ccc
      cursor: pointer
      height: 32px
      line-height: 32px

      &.active
        background-color: #3E81E6
        border: 1px solid #3E81E6
        color: #fff

      &:hover
        background-color: #3E81E6
        border: 1px solid #3E81E6
        color: #fff
</style>
