<template lang="pug">
  #e-order
    .order-header
      .order-header-btn(
        v-for="t in orderTypes"
        :class="activeClass(t.value)"
        @click="orderTypeSelectHandler(t.value)"
      ) {{t.label}}
    .order-body
      .order-table
        .order-table-header
          .order-table-header-item 品种
          .order-table-header-item 类别
          .order-table-header-item 手数
          .order-table-header-item 开仓时间
          .order-table-header-item 平仓时间
          .order-table-header-item 开/平仓价
          .order-table-header-item 隔夜利息
          .order-table-header-item 手续费
          .order-table-header-item 获利
          .order-table-header-item 详情
        .order-table-body(
          v-if="order.length > 0"
        )
          .order-table-body-tr(
            v-for="ord in order"
          )
            .order-table-body-td {{ord.orderSymbol}}
            .order-table-body-td {{getOrderType(ord.orderType)}}
            .order-table-body-td {{ord.orderLots}}
            .order-table-body-td.wrap {{getDateTime(ord.orderOpenDate)}}
            .order-table-body-td.wrap {{getDateTime(ord.orderCloseDate)}}
            .order-table-body-td.wrap
              .order-table-body-td-item {{ord.orderOpenPrice}}
              .order-table-body-td-item {{ord.orderClosePrice}}
            .order-table-body-td {{ord.orderSwap}}
            .order-table-body-td {{ord.orderCommission}}
            .order-table-body-td {{ord.orderProfit}}
            .order-table-body-td.detail 查看
        .order-table-body.emety(
          v-else
        ) 没有数据
</template>

<script>
import E from '../../../utils'
import moment from "moment";

const orderTypes = [
  {
    value: 0,
    label: '历史交易'
  },
  {
    value: 1,
    label: '正在持仓'
  }
]

export default {
  data() {
    return {
      orderTypes,
      orderType: [
          {
              value: 0,
              label: 'buy'
          },
          {
              value: 1,
              label: 'sell'
          }
      ],
      order: [],
      orderRequest: {
        orderState: 0
      }
    }
  },
  created() {
    this.orderRequest.signalId = this.$route.params.id
    this.getOrderData()
  },
  methods: {
    // 订单列表
    getOrderData() {
        let params = this.orderRequest
        let pageInfoHelper = {
            pageSize: 20,
            pageNo: 1
        }
        let data = {
            params,
            pageInfoHelper
        }
      return E.handleRequest(E.api().post('orderSignal/queryUserSignalOrder', data))
        .then(res => {
          this.order = res.data.content.data
        })
    },
    activeClass(val) {
      if (val === this.orderRequest.orderState) {
        return 'active'
      }
    },
      // 获取昨日的开始结束时间
      getDateTime: function(date) {
          return moment(date).format("YYYY-MM-DD HH:mm:ss")
      },
    getOrderType: function(dicKey) {
        if (dicKey === null || dicKey === undefined || dicKey === '') {
            return ''
        }
        let key = dicKey
        for (let index = 0; index < this.orderType.length; index++) {
            if (key === this.orderType[index].value) {
                return this.orderType[index].label
            }
        }
    },
    orderTypeSelectHandler(val) {
      this.orderRequest.orderState = val
      this.getOrderData()
    }
  }
}
</script>

<style lang="sass" scoped>
.order

  &-header
    display: flex
    margin-bottom: 20px

    &-btn
      height: 34px
      line-height: 32px
      border: 1px solid #ccc
      margin-right: 10px
      padding: 0 12px
      border-radius: 16px
      cursor: pointer

      &.active
        border: 1px solid #409EFF
        color: #409EFF

  &-table
    font-size: 12px

    &-header
      display: flex
      border-top: 1px solid #eee
      height: 40px
      line-height: 40px

      &-item
        flex: 1
        padding: 0 10px

    &-body

      &.emety
        background-color: #f9f9f9
        text-align: center
        height: 80px
        line-height: 80px
        color: #999

      &-tr
        display: flex
        height: 50px
        line-height: 50px

        &:nth-child(odd)
          background-color: #f9f9f9

      &-td
        flex: 1
        padding: 4px 10px
        word-wrap: break-word
        word-break: break-all

        &.wrap
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center
          line-height: 16px

        &-item:last-child
          color: #999

        &.detail
          cursor: pointer
          color: #999
</style>
