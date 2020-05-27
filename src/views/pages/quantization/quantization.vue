<template lang="pug">
  #e-quantization
    BaseLayout
      .quant-header
      .quant-container
        .quant-container-title
          h1 机器人
          p 全智能机器人自动交易，0成本进入AI时代
        .quant-content
          .quant-item(v-for="(robot, index) in robots")
            .quant-item-context
              img.quant-item-robot(src="../../../assets/images/robot.png")
              .quant-item-info
                .quant-item-info-name 稳健II型
                .quant-item-info-list
                  .quant-item-info-list-group
                    .quant-item-info-list-name 最少资金：
                    .quant-item-info-list-value 10000
                  .quant-item-info-list-group
                    .quant-item-info-list-name 最低杠杆：
                    .quant-item-info-list-value 100倍
                  .quant-item-info-list-group
                    .quant-item-info-list-name 最小交易：
                    .quant-item-info-list-value 0.01手
                .quant-item-info-list
                  .quant-item-info-list-group
                    .quant-item-info-list-name 年化收益：
                    .quant-item-info-list-value 50%-100%
                  .quant-item-info-list-group
                    .quant-item-info-list-name 最大回撤：
                    .quant-item-info-list-value 30%
                  .quant-item-info-list-group
                    .quant-item-info-list-name 最大交易：
                    .quant-item-info-list-value 0.05手
                .quant-item-info-platform
                  span 支持平台：
                  span(v-for="(plat, i) in robot.platform" :class="(robot.show || i < 6) ? null : 'none'") {{plat}}{{i < robot.platform.length - 1 ? '、' : null}}
                  span.more(@click="target(index)") {{robot.show ? '<< 收起' : '更多 >>'}}
              .quant-item-button
            .quant-item-des 交易品种：直盘货币对； 仓位控制：最小交易 0.01手，最大交易0.05手; 账号要求：账户资金1万美元起，杠杆100倍起； 账号收益：年化收益50%-100%; 交易手数：月交易10-20手 账号风控：五层风控双重止损，最大回撤30%； 交易策略：多策略混合，智能风控，智能交易，无人工干预，每天24小时全天候交易。
      .quant-pagination
        .quant-pagination-first 首页
        .quant-pagination-item.active 1
        .quant-pagination-item 2
        .quant-pagination-item 3
        .quant-pagination-item 4
        .quant-pagination-item 5
        .quant-pagination-last 尾页
</template>

<script>
import BaseLayout from '../../layout/base_layout.vue'

export default {
  data() {
    return {
      robots: [
        {
          platform: [
            '121Clearing',
            'ActivTrades',
            'ACY稀万',
            'ADSS达汇',
            'AGMBroker',
            'AIMS欧力',
            'Alpari艾福瑞',
            'Amana阿曼那资本',
            'ANB Group',
            'Anzo Capital昂首资本',
            'APJFX',
            'ArgusFX',
            'Asyusyoji',
            'ATCBrokers',
            'ATFX',
            'Atom Markets',
            'Atom8',
            'AUS澳汇',
            'AVATrade'
          ],
          show: false
        },
        {
          platform: [
            '121Clearing',
            'ActivTrades',
            'ACY稀万',
            'ADSS达汇',
            'AGMBroker',
            'AIMS欧力',
            'Alpari艾福瑞',
            'Amana阿曼那资本',
            'ANB Group',
            'Anzo Capital昂首资本',
            'APJFX',
            'ArgusFX',
            'Asyusyoji',
            'ATCBrokers',
            'ATFX',
            'Atom Markets',
            'Atom8',
            'AUS澳汇',
            'AVATrade'
          ],
          show: false
        },
        {
          platform: [
            '121Clearing',
            'ActivTrades',
            'ACY稀万',
            'ADSS达汇',
            'AGMBroker',
            'AIMS欧力',
            'Alpari艾福瑞',
            'Amana阿曼那资本',
            'ANB Group',
            'Anzo Capital昂首资本',
            'APJFX',
            'ArgusFX',
            'Asyusyoji',
            'ATCBrokers',
            'ATFX',
            'Atom Markets',
            'Atom8',
            'AUS澳汇',
            'AVATrade'
          ],
          show: false
        },
        {
          platform: [
            '121Clearing',
            'ActivTrades',
            'ACY稀万',
            'ADSS达汇',
            'AGMBroker',
            'AIMS欧力',
            'Alpari艾福瑞',
            'Amana阿曼那资本',
            'ANB Group',
            'Anzo Capital昂首资本',
            'APJFX',
            'ArgusFX',
            'Asyusyoji',
            'ATCBrokers',
            'ATFX',
            'Atom Markets',
            'Atom8',
            'AUS澳汇',
            'AVATrade'
          ],
          show: false
        }
      ],
    }
  },
  components: {
    BaseLayout
  },
  methods: {
    target(i) {
      this.robots[i].show = !this.robots[i].show
    }
  }
}
</script>

<style lang="sass" scoped>
.quant

  &-header
    height: 300px
    margin-top: 60px
    background: url('../../../assets/images/quant_header.png') no-repeat center center

  &-container
    width: 1200px
    margin: 0 auto

    &-title
      margin-top: 70px

      h1
        font-size: 28px
        font-weight: 600

      p
        color: #666
        font-size: 14px
        margin-top: 15px

  &-item
    font-size: 16px
    color: #333
    border-radius: 10px
    box-shadow: 0 0 10px #d0e4f7
    padding: 20px 40px
    margin: 20px 0

    &-context
      display: flex
      border-bottom: 1px solid #ccc

    &-robot
      width: 135px
      height: 135px

    &-info
      flex: 1

      &-name
        font-size: 18px
        color: #3887dd
        font-weight: 600
        line-height: 45px
        border-bottom: 1px solid #ccc

      &-list
        display: flex
        border-bottom: 1px dashed #ccc
        font-size: 14px

        &-group
          display: flex
          width: 33.33%
          line-height: 50px
          color: #666
          font-weight: 600

      &-platform
        display: flex
        flex-wrap: wrap
        line-height: 50px
        font-weight: 600

        &-item
          height: 30px
          line-height: 40px
          font-weight: 600

        .none
          display: none

        .more
          color: #3887dd
          cursor: pointer
          margin-left: 10px

    &-button
      width: 135px

    &-des
      padding: 20px 0 8px
      color: #666
      font-size: 14px

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
