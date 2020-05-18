<template lang="pug">
  #e-registe
    .registe-container
      router-link.registe-login(
        to="/user/login"
      ) 登录
      .registe-content
        .registe-title Hi, 欢迎加入我们
        .registe-item 邀请码:
          input(
            type="text"
            placeholder='请输入邀请码'
            v-model="request.introducer"
          )
        .registe-item 用户名:
          input(
            type="text"
            placeholder='请输入用户名'
            v-model="request.username"
          )
        .registe-item 密码:
          input(
            type="password"
            placeholder='请输入密码'
            v-model="request.password"
          )
        .registe-item 确认密码:
          input(
            type="password"
            placeholder='请输入确认密码'
            v-model="request.password2"
          )
        .registe-item 昵称:
          input(
            type="text"
            placeholder='请输入昵称'
            v-model="request.refName"
          )
        .registe-item  手机号:
          input(
            type="num"
            maxlength='11'
            placeholder='请输入手机号'
            v-model="request.mobile"
          )
        .registe-item Email:
          input(
            type="text"
            placeholder='请输入Email'
            v-model="request.email"
          )
        .registe-item 省份:
          input(
            type="text"
            placeholder='请输入省份'
            v-model="request.province"
          )
        .registe-item 城市:
          input(
            type="text"
            placeholder='请输入城市'
            v-model="request.city"
          )
      .registe-btn(
        @click="registeHandler"
      ) 注册
      .registe-agreement
        span 注册即代表同意
        span.click(
          @click="agreementHandler"
        ) 《用户协议》
    transition(name="fade")
      .registe-agreement-mark(
        v-if="agreementShow"
      )
        .registe-agreement-content
          .registe-agreement-close(
            @click="agreementHandler"
          )
          .registe-agreement-title 用户协议
          .registe-agreement-context {{context}}
</template>
<script>
import E from '../../../utils'

export default {
  data() {
    return {
      agreementShow: false,
      context: '平台官网及其下属网页(以下简称“平台”)上的任何信息，旨在为公众提供网站交易员和跟随者的交易动态以及资讯服务。 本网站不提供任何形式的投资建议。本网站已采取谨慎的措施对信息进行核实，但并不保证所含信息全部准确。 请您理解我们的信息可能会不全面，或有疏漏或滞后。 本网站或独立信息提供者均不会对任何因信息错误、不完整、迟延、不精确或基于对本网站信息的依赖而采取的任何措施负责。 所有预测或观点，仅代表第三方的个人观点和行为，并不代表本网站的立场。请不要直接或者间接地效仿。 您必须进行独立分析以做出投资判断，同时，您基于本网站提供的交易策略和信号，运用个人配置交易系统所做出的投资行为是您自己决定的结果，需自行承担所有风险。 本网站明确表明，外汇、差价合约、衍生产品及其他金融工具交易带来的不仅是收益，同时还伴随相当大的风险。 本网站的交易跟随系统仅适用于对高风险投资有一定了解的跟随者。您可以使用闲散的资金进行投资，不要影响到到您的日常生活开支。 任何交易策略在过去取得的业绩均不能代表其将来的表现。一般未来汇率变动是不可预测的，所以对待投资预测一定要经过自己的分析作出判断，切忌盲从。 您必须理解并同意基于提供的信息，而使用个人配置交易系统和交易跟随系统所产生的所有风险需由您自行承担。 除此之外，平台作为跟随交易系统的开发者，不会对任何由于第三方(如作为这项服务的提供者公司或者合作经纪商)延误、疏忽而导致的客户损失承担责任。 除了以上，平台明确表明不会对交易员提供的策略和交易信号承担任何责任。平台注册所在地法律、法规应规范本声明以及本声明各方之间引起的争议， 除非存在法律指定适用其他管辖法律。在合约一方寻求实现本声明下的权利，或寻求宣告本声明下的任何权利或义务的任何民事诉讼或其他诉讼过程中， 各合约方应承担其代理律师的费用和支出。合约方认可专属管辖和法院审判地。',
      request: {
        username: '',
        refName: '',
        mobile: '',
        introducer: '',
        email: '',
        password: '',
        password2: '',
        province: '',
        city: ''
      }
    }
  },
  methods: {
    agreementHandler() {
      this.agreementShow = !this.agreementShow
    },
    validPhone: function (value){ // 手机号验证
          if (!value) {
              this.$message.warning('请输入电话号码')
          } else {
              var reg = /^1[3|4|5|7|6|8][0-9]\d{8}$/
              var reg2 = /^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/
              if (reg2.test(value) || reg.test(value)) {
                  return true
              }
              return false
          }
      },
      validEmail: function (value){
          if (!value) {
              this.$message.warning('请正确填写邮箱')
          } else {
              if (value !== '') {
                  var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
                  if (reg.test(value)) {
                      return true
                  }
              }
              return false
          }
      },
      introducerDecode: function(value) {
          let Base64 = require('js-base64').Base64
          return Base64.decode(value)  //
      },
    registeHandler() {
      if (this.request.username === '') {
        this.$message.warning('请输入姓名')
        return false
      }
      if (this.request.introducer === '') {
        this.$message.warning('请输入邀请码')
        return false
      }
        if (this.request.password === '') {
            this.$message.warning('请输入密码')
            return false
        }
        if (this.request.password2 === '') {
            this.$message.warning('请确认密码')
            return false
        }
      if (this.request.refName === '') {
        this.$message.warning('请输入昵称')
        return false
      }
      if (this.request.mobile === '') {
        this.$message.warning('请输入手机号')
        return false
      }
      if (this.request.email === '') {
        this.$message.warning('请输入邮箱')
        return false
      }
      if (this.request.password !== this.request.password2) {
        this.$message.warning('两次输入的密码不一致')
        return false
      }
      if(!this.validPhone(this.request.mobile)){
          this.$message.warning('请输入正确格式的手机号')
          return false
      }
      if(!this.validEmail(this.request.email)){
          this.$message.warning('请输入正确格式的邮箱')
          return false
       }
        let params = this.request
        params.introducer = this.introducerDecode(this.request.introducer)
      E.handleRequest(E.api().post('admin/registered', params))
        .then(res => {
          if (res.data.code && res.data.code !== 0) {
            this.$message.warning(res.data.message)
          } else {
            const storage = window.localStorage
            storage.setItem('follow_user_info', JSON.stringify(res.data.content.data))
            this.$router.push({
              name: 'index'
            })
          }
        })
    }
  }
}
</script>

<style lang="sass" scoped>
.registe

  &-container
    width: 100%
    padding: 50px 180px
    position: relative

  &-login
    position: absolute
    top: 20px
    right: 30px
    color: #409EFF
    font-size: 16px

  &-content
    margin-bottom: 30px
    text-align: right

  &-title
    font-size: 24px
    margin-bottom: 30px

  &-item
    height: 48px
    border-radius: 2px
    margin-bottom: 12px

    &::last-child
      margin-bottom: 0

    input
      width: 85%
      height: 100%
      background-color: #f2f2f270
      padding: 0 20px
      border: 1px solid #ebebeb
      outline: none
      caret-color: #409EFF
      box-sizing: border-box
      font-size: 14px

  &-agreement
    margin-top: 12px
    color: #999
    text-align: center

    .click
      cursor: pointer

      &:hover
        color: #409EFF

    &-mark
      position: fixed
      top: 0
      left: 0
      right: 0
      bottom: 0
      background-color: rgba(0, 0, 0, 0.5)

    &-content
      width: 840px
      height: 560px
      position: fixed
      top: 50%
      left: 50%
      margin: -250px 0 0 -400px
      background-color: #fff
      padding: 20px

    &-close
      width: 30px
      height: 30px
      position: absolute
      top: 20px
      right: 30px
      cursor: pointer

      &:before
        content: ""
        position: absolute
        top: 50%
        left: 50%
        background-color: #ccc
        width: 24px
        height: 4px
        border-radius: 2px
        transform: translate(-50%, -50%) rotate(45deg)

      &:after
        content: ""
        position: absolute
        top: 50%
        left: 50%
        background-color: #ccc
        width: 4px
        height: 24px
        border-radius: 2px
        transform: translate(-50%, -50%) rotate(45deg)

    &-title
      font-size: 18px
      font-weight: bold
      margin: 30px 0
      text-align: center

  &-btn
    background-color: #409EFF
    border-radius: 2px
    width: 100%
    height: 50px
    line-height: 50px
    color: #fff
    font-size: 16px
    cursor: pointer
    margin-top: 20px
    text-align: center

    &:hover
      background-color: #F15001
</style>


