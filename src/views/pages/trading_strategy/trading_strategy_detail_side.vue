<template lang="pug">
  #e-trading-strategy-detail-side
    .trading-detail-side-container
      .trading-detail-side-title 交易账户
      .trading-detail-side-info
        .trading-detail-side-info-top
          .trading-detail-side-info-name # {{summary.signalId}} 交易员
          .trading-detail-side-info-level {{getLevel(summary.level)}}
        .trading-detail-side-info-bottom
          .trading-detail-side-info-item
            .trading-detail-side-info-label 账户余额
            .trading-detail-side-info-value {{summary.balance}}
          .trading-detail-side-info-item
            .trading-detail-side-info-label 账户收益
            .trading-detail-side-info-value {{summary.profit}}
          .trading-detail-side-info-item
            .trading-detail-side-info-label 账户杠杆
            .trading-detail-side-info-value 1:{{summary.leverage}}
          .trading-detail-side-info-item
            .trading-detail-side-info-label 订阅人数
            .trading-detail-side-info-value {{summary.signalFollows}}
      .trading-detail-side-disclaimer
        .trading-detail-side-disclaimer-title 重要免责声明
        .trading-detail-side-disclaimer-context 外汇市场的保证金交易（含外汇交易、差价合约等）存在较高风险，不适合所有投资者。 您需为完全民事行为能力人， 能有效签署并遵守条款和所确认的合同。 本网站的网页内容（含数据部分）是通过在不同经纪商获取的交易结果整理公布，所有信息仅供您参考，并无任何责任， 未经许可不得使用或以任何形式出售。
</template>

<script>
export default {
    props: {
        summary: {
            type: Object
        }
    },
    methods: {
        // 获取昨日的开始结束时间
        getLevel: function(data) {
            if (data === '1' || data === 1) {
                return 'A'
            } else if (data === '2' || data === 2) {
                return 'B'
            } else if (data === '3' || data === 3) {
                return 'C'
            } else if (data === '4' || data === 4) {
                return 'D'
            } else {
                return 'A'
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.trading-detail-side

  &-container
    width: 280px
    background-color: #fff

  &-title
    height: 50px
    line-height: 50px
    padding: 0 20px
    font-size: 16px
    font-weight: 600

  &-info
    border-left: 2px solid #409EFF
    border-top: 1px solid #e9e9e9
    border-bottom: 1px solid #e9e9e9
    padding: 12px 20px
    background-color: #f9f9f9

    &-top
      display: flex
      justify-content: space-between
      align-items: center
      height: 28px
      line-height: 28px

    &-name
      font-weight: 700

    &-level
      width: 20px
      height: 14px
      line-height: 14px
      margin: 4px 0
      border-radius: 4px 2px 4px 2px
      color: #fff
      background-color: #aaa
      text-align: center
      font-size: 12px

    &-bottom
      display: flex
      flex-wrap: wrap

    &-item
      display: flex
      align-items: center
      width: 50%
      font-size: 12px
      margin-top: 5px

      &:nth-child(2n)
        text-align: right

    &-label
      color: #999
      margin-right: 4px

  &-disclaimer
    padding: 50px 20px

    &-title
      font-size: 17px
      font-weight: 700
      margin-bottom: 10px

    &-context
      font-size: 12px
</style>
