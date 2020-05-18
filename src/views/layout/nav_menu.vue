<template lang="pug">
  #e-menu
    .menu-container
      .menu-item(
        v-for="m in menus"
        :key="m.path"
        :to="m.path"
        :class="menuActive(m.name)"
        @click="routeTo(m.name)"
      ) {{m.text}}
        .menu-item-icon(
            v-if="m.child"
        )
            .menu-item-icon-img
            img(
                src="../../assets/images/down.svg"
                )
        .menu-item-arrow(
            v-if="m.child"
        )
            .menu-item-arrow-item(
                v-for="c in m.child"
                :key="c.path"
                :to="c.path"
                :class="menuActive(c.name)"
                @click="routeTo(c.name)"
              ) {{c.text}}
</template>

<script>
import _config from '../../base_config'
export default {
  data() {
    return {
      crmUrl:_config.CRM_URL,
      menus: [
          {
              text: '首页',
              path: '/index',
              name: 'index'
          },
        {
          text: '交易策略',
          path: '/trading_strategy',
          name: 'tradingStrategy'
        },
        {
          text: '交易资讯',
          path: '',
          name: '',
          child: [
              {
                  text: '财经日历',
                  path: '/message/finance_message',
                  name: 'financeMessage'
              },
              {
                  text: '闪电数据',
                  path: '/message/market_message',
                  name: 'marketMessage'
              },
              {
                  text: '投资情绪',
                  name: ''
              },
              {
                  text: '机构订单',
                  path: '',
                  name: ''
              }
          ]
        },
        {
          text: '交易学院',
          name: '#',
          child: [
              {
                  text: '外汇学院',
                  name: '#'
              },
              {
                  text: '外汇百科',
                  name: '#'
              },
              {
                  text: '外汇问卷',
                  name: '#'
              }
          ]
        },
          {
              text: '量化交易',
              name: '#'
          },
          {
              text: '期货跟投',
              name: '#'
          },
        {
          text: '关于我们',
          path: '/about',
          name: 'about'
        },
        {
          text: 'CRM',
          name: 'crm'
        }
      ],
      routeName: ''
    }
  },
  created() {
    this.routeName = this.$route.matched[0].name
    this.$router.afterEach((to, from) => {
      this.routeName = to.matched[0].name
    })
  },
  mounted() {

  },
  methods: {
    menuActive(name) {
      if (name === this.routeName) {
        return 'active'
      }
    },
    routeTo(name) {
        if(name === '' || name === '#' || name === null ||name === undefined){
            return
        }
      if(name === 'crm'){
          let newUrl = this.crmUrl
          const userInfo = window.localStorage.getItem('follow_user_info')
          if (userInfo !== null) {
              let userData = JSON.parse(userInfo)
              if (userData.token !==null) {
                  newUrl = newUrl + '?token='+userData.token
              }
          }
        window.open(newUrl)
      } else {
          this.$router.push({
              name
          })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.menu

  &-container
    display: flex
    margin: 0 24px

  &-item
    height: 60px
    line-height: 60px
    color: #fff
    padding: 0 12px
    cursor: pointer
    font-size: 15px
    &:hover .menu-item-arrow-item
      display: block
    &:hover
      background-color: #696969
    &.active
      color: #409EFF
    &-icon
      display: inline-flex
      margin: 0 0 0 5px
    &-arrow
      border-radius: 30%
      width: 120px
      position: absolute
      margin-left: -12px
      &-item
        margin: 1px 0 0 0
        height: 40px
        text-align: center
        line-height: 40px
        font-size: 14px
        display: none
        background: #282828
        &:hover
          background-color: #696969

</style>



