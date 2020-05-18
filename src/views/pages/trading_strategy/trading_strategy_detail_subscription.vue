<template lang="pug">
  #e-sub
    .sub-header
      .sub-header-btn(
        v-for="t in subTypes"
        :class="activeClass(t.value)"
        @click="subTypeSelectHandler(t.value)"
      ) {{t.label}}
    .sub-body
      .sub-table
        .sub-table-header
          .sub-table-header-item 跟随者
          .sub-table-header-item 经纪商
          .sub-table-header-item 订阅时间
          .sub-table-header-item 订阅天数
          .sub-table-header-item 收益
        .sub-table-body(
          v-if="subList.length > 0"
        )
          .sub-table-body-tr(
            v-for="sub in subList"
          )
            .sub-table-body-td {{sub.refName}}
            .sub-table-body-td {{getBroker(sub.userServerName)}}
            .sub-table-body-td {{getDay(sub.createDate)}}
            .sub-table-body-td {{dateDiff(sub.createDate)}}
            .sub-table-body-td {{sub.profit}} $
        .sub-table-body.emety(
          v-else
        ) 没有数据
</template>

<script>
import E from '../../../utils'
import moment from "moment";

const subTypes = [
  {
    value: 0,
    label: '正在订阅'
  },
  {
    value: 1,
    label: '历史订阅'
  }
]

export default {
  data() {
    return {
      sub: {},
      subRequest: {
        ruleState: 0
      },
      subTypes,
      subList: []
    }
  },
  created() {
    this.subRequest.signalId = this.$route.params.id

    this.getSubData()
  },
  methods: {
    // 订阅信息
    getSubData() {
      return E.handleRequest(E.api().post('signal/queryFollowUsers', this.subRequest))
        .then(res => {
          this.subList = res.data.content.data
        })
    },
    activeClass(val) {
      if (val === this.subRequest.ruleState) {
        return 'active'
      }
    },
      // 获取昨日的开始结束时间
      getDay: function(date) {
          return moment(date).format("YYYY-MM-DD")
      },
      // 获取指定日期(字符串类型)到当前时间的天数 sDate1 格式:2018-01-04
    dateDiff : function(sDate1) {
        sDate1 =this.getDay(sDate1)
        var date2 = new Date()
        var date1 = new Date(Date.parse(sDate1.replace(/-/g,   "/")))
        var iDays = parseInt(Math.abs(date2.getTime()- date1.getTime()) /1000/60/60/24)
        return iDays
    },
      // 获取昨日的开始结束时间
      getBroker: function(data) {
        if (data !==null && data!== "") {
            return data.substr(0,data.indexOf("-"))
        }else {
            return ""
        }
      },
    subTypeSelectHandler(val) {
      this.subRequest.ruleState = val

      this.getSubData()
    }
  }
}
</script>

<style lang="sass" scoped>
.sub

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
        padding: 0 10px
        align-items: center

        &.wrap
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center
          line-height: 16px
</style>
