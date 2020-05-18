<template lang="pug">
  #e-trading-strategy-item
    router-link.trading-list-card(
      :to="detailUrl"
    )
      .trading-list-card-header
        .trading-list-card-info
          .trading-list-card-nickname(
            v-if="type === 'trading'"
          ) {{info.signalName}}
          .trading-list-card-nickname(
            v-if="type === 'follow'"
          ) {{info.username}}
          .trading-list-card-level(
            v-if="type === 'trading'"
          ) {{getLevel(info.level)}}
          .trading-list-card-server {{info.brokerName}}
        .trading-list-card-avatar
          img(
            :src="info.avatarUrl ? url + info.avatarUrl : avatar"
          )
      .trading-list-card-content
        .trading-list-card-list
          .trading-list-card-list-item
            .trading-list-card-list-label 账户余额
            .trading-list-card-list-balue ${{info.balance}}
          .trading-list-card-list-item
            .trading-list-card-list-label 账户收益
            .trading-list-card-list-balue ${{info.profit}}
          .trading-list-card-list-item
            .trading-list-card-list-label 账户杠杆
            .trading-list-card-list-balue ${{info.leverage}}
          .trading-list-card-list-item
            .trading-list-card-list-label 订阅人数
            .trading-list-card-list-balue {{info.signalFollows}}
      .trading-list-card-footer.trading(
        v-if="type === 'trading'"
      )
        .trading-list-card-footer-left
          span 累计订阅数
          span.num {{info.followsHistory}}
        .trading-list-card-footer-right
          .trading-list-card-footer-btn 免费订阅
      .trading-list-card-footer.follow(
        v-if="type === 'follow'"
      )
        .trading-list-card-footer-btn +关注
</template>

<script>
import _config from '../../../base_config'
import avatar from '../../../assets/images/avatar-default.svg'
import moment from "moment";

export default {
  data() {
    return {
      url: _config.BASE_URL,
      avatar,
      detailUrl: ''
    }
  },
  props: {
    info: {
      type: Object
    },
    type: {
      type: String,
      default: 'trading'
    }
  },
    created() {
        this.getDetailUrl()
    },
    methods: {
        // 交易汇总
        getDetailUrl() {
            if (this.type === 'trading') {
                this.detailUrl = '/trading_strategy/detail/' + this.info.signalId
            }
        },
        // 获取昨日的开始结束时间
        getDay: function(date) {
            return moment(date).format("YYYY-MM-DD")
        },
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
            } else  {
                return 'A'
            }
        }
    }
}
</script>

<style lang="sass" scoped>
#e-trading-strategy-item
  width: calc((100% - 36px) / 4)
  margin: 0 12px 15px 0

  &:nth-child(4n)
    margin-right: 0

.trading-list

  &-card
    display: block
    background: #fff
    transition: all ease .3s

    &:hover
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, .2)

    &-header
      padding: 20px 20px 0
      display: flex
      justify-content: space-between

    &-nickname
      font-size: 16px
      font-weight: 600
      color: #333

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

    &-server
      font-size: 12px
      color: #999

    &-avatar
      width: 50px
      height: 50px
      border-radius: 50%
      overflow: hidden
      background-color: #eee

      img
        display: block
        width: 100%
        height: 100%

    &-list
      padding: 15px 20px

      &-item
        display: flex
        justify-content: space-between
        align-items: center
        height: 23px
        margin-bottom: 10px

      &-label
        font-size: 12px
        color: #999

      &-value
        font-size: 14px
        color: #666

        &.present
          font-size: 16px
          font-weight: 500
          color: #1fbb95

    &-footer
      display: flex
      height: 50px
      border-top: 1px solid #f0f0f0

      &.trading
        justify-content: space-between
        align-items: center
        padding: 0 20px

      &-left
        font-size: 12px
        color: #999

        .num
          color: #333

      &.follow
        justify-content: center
        align-items: center

      &-btn
        font-size: 14px
        color: #409EFF
        border-radius: 16px
        border: 1px solid #409EFF
        padding: 5px 12px
        cursor: pointer
        transition: all ease .3s

        &:hover
          background-color: #409EFF
          color: #fff
</style>
