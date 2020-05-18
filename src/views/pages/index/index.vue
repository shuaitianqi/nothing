<template lang="pug">
  #e-index
    BaseLayout
      .index-header
        .index-header-bk
        .index-header-content
          .index-header-title Trade Copier
            span.index-header-title-sub TM
          .index-header-sub-title 基于用户交易数据分析的量化策略开发平台与智能交易全流程解决方案的服务提供商，帮助企业提升风控管理与业务盈利能力。
          .index-header-btn(
            v-if="userInfo === null"
          )
            router-link.index-header-btn-item(to="/user/registe") 在线申请
            router-link.index-header-btn-item(to="/user/login") 登录
      .index-trading
        .index-trading-signal-title 优秀的交易信号
        .index-trading-signal-sub-title 使用业界领先的自动跟单系统，直接复制高手交易。如果您有成熟的交易技巧，也可以加入我们，赢取您成功交易的额外收益！
        .index-trading.e-flex
          TradingItem.trading-list-item(
            v-for="(item, index) in tradingList"
            :key="index"
            :info="item"
            type="trading"
          )

        .index-trading-question
            .index-trading-question-title 基本问题答疑
            .index-trading.e-flex
                questionItem.question-list-item(
                    v-for="(item, index) in questionList"
                    :key="index"
                    :info="item"
                )
</template>

<script>
import BaseLayout from '../../layout/base_layout.vue'
import TradingItem from '../trading_strategy/trading_strategy_item.vue'
import questionItem from '../index/question.vue'
import E from "../../../utils";

export default {
  components: {
    BaseLayout,
    TradingItem,
    questionItem
  },
    data() {
        return {
            tradingList: [],
            questionList: [
                {
                    question: '社区平台是外汇经纪商吗？',
                    answer: '不是外汇经纪商。社区平台是一个为投资者提供策略复制交易，连接经纪商、跟随者、交易达人的第三方服务平台。'
                },
                {
                    question: '我的账号在社区跟单会影响资金安全吗？',
                    answer: '社区仅为第三方服务平台，您所有的出入金操作仍旧是在经纪商处完成，对您的资金安全没有任何影响。'
                },
                {
                    question: '交易达人能确保一直盈利吗？',
                    answer: '没有任何人或任何机构能保证在全球贵金属、外汇市场的投资只盈不亏。社区的交易达人大多都是操盘经验丰富，投资回报表现良好的投资人，复制交易可以提高盈利机率，但是无法保障100%盈利，客户须自主承担所有风险。'
                },
                {
                    question: '交易达人的交易数据都是真实的吗？',
                    answer: '所有达人的交易都是真实存在，很多都是操盘经验丰富的投资专家操盘。每个策略下单数据都是其MT4真实账户的实盘交易数据。且社区平台绝不隐藏达人持仓信息，用户可以实时追踪查看比对，确保数据真实！'
                }
            ],
            trandingRequest: {
                pageSize: 4,
                pageNo: 1},
            userInfo: null
        }
    },
    created() {
        if(this.$route.query.token !== null && this.$route.query.token !== ''&& this.$route.query.token !== undefined){
            this.getTokenLogin(this.$route.query.token)
        }
        const storage = window.localStorage
        const userInfo = storage.getItem('follow_user_info')
        if (userInfo !== null) {
            this.userInfo = JSON.parse(userInfo)
        }
        this.getTradingList()
    },
    methods: {
        getTokenLogin(token) {
            let params = {
                token
            }
            let data = {
                params
            }
            E.handleRequest(E.api().post('admin/tokenLogin', data))
                .then(res => {
                    if (res.data.status !== 0) {
                        this.$message.warning(res.data.msg)
                    } else {
                        const storage = window.localStorage
                        storage.setItem('follow_user_info', JSON.stringify(res.data.content.data))
                        this.$router.push({
                            name: 'index'
                        })
                        this.$router.go(0)
                    }
                })
        },
        // 交易员列表
        getTradingList() {
            this.trandingRequest.pageSize = 4
            return E.handleRequest(E.api().post('signal/querySignalUsers', this.trandingRequest))
                .then(res => {
                    this.tradingList = res.data.content.data
                })
        }
    }
}
</script>

<style lang="sass" scoped>
.index

  &-header
    height: 750px
    background: url('../../../assets/images/header2.jpg') no-repeat center center
    background-size: cover
    position: relative

    &-bk,
    &-content
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0

    &-bk
      background: linear-gradient(123deg,rgba(0,2,9,.79),#000)
      opacity: .7

    &-content
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      text-align: center
      color: #fff
      font-size: 18px
    &-title
      font-size: 50px
      font-weight: 500
      position: relative
      padding: 16px 0
      &-sub
        vertical-align: top
        padding: 0 24px
        font-size: 18px
    &-sub-title
      padding: 0 10% 52px
    &-btn
      width: 500px
      display: flex
      justify-content: space-between
      &-item
        display: block
        font-size: 18px
        color: #fff
        width: 200px
        height: 65px
        line-height: 65px
        background: #409EFF
        cursor: pointer

  &-trading
    flex-wrap: wrap
    width: 1200px
    margin: 0 auto
    &-signal-title
      font-size: 35px
      font-weight: 500
      text-align: center
      padding: 50px 0 20px
    &-signal-sub-title
      padding: 0 10% 25px
      text-align: center
      font-size: 17px

    &-question
      &-title
        font-size: 35px
        font-weight: 500
        text-align: center
        padding: 50px 0 20px
</style>


