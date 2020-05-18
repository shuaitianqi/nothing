<template lang="pug">
  #nav-user
    .nav-user-container(
      v-if="userInfo === null"
    )
      router-link.nav-user-btn.register(to="/user/registe") 注册
      router-link.nav-user-btn.login(to="/user/login") 登录
    .nav-user-container(
      v-else
    )
      .nav-user-content
        .nav-user-avatar
          img(
            :src="avatar"
          )
        .nav-user-name {{userInfo.refName}}
        .nav-user-menu
          .nav-user-menu-item(@click="logout()") 退出
</template>

<script>
import E from '../../utils'
import avatar from '../../assets/images/avatar-default.svg'

export default {
  data() {
    return {
      avatar,
      userInfo: null
    }
  },
  created() {
    const storage = window.localStorage
    const userInfo = storage.getItem('follow_user_info')

    if (userInfo !== null) {
      this.userInfo = JSON.parse(userInfo)
    }
  },
  computed: {

  },
  methods: {
    logout() {
        let userInfo = window.localStorage.getItem('follow_user_info')
        if(userInfo==null) {
            this.$message.warning('用户未登录！')
            return
        }
        let params = JSON.parse(userInfo)
        E.handleRequest(E.api().post('admin/logout', params))
            .then(res => {
                if (res.data.code && res.data.code !== 0) {
                    this.$message.warning(res.data.message)
                } else {
                    window.localStorage.removeItem('follow_user_info')
                    this.$router.go(0)
                }
            })
    }
  }
}
</script>

<style lang="sass" scoped>
.nav-user

  &-container
    display: flex
    align-items: center
    height: 100%

  &-btn
    display: block
    height: 34px
    line-height: 34px
    padding: 0 24px
    margin: 0 4px
    border-radius: 18px
    cursor: pointer

    &.register
      color: #409EFF
      border: 1px solid #409EFF

      &:hover
        background-color: #f05102
        border: 1px solid #f05102
        color: #fff

    &.login
      background-color: #409EFF
      color: #fff

      &:hover
        background-color: #f05102

  &-content
    display: flex
    align-items: center
    cursor: pointer
    position: relative
    height: 60px

    &:hover .nav-user-menu
      display: block

  &-avatar
    width: 40px
    height: 40px
    border-radius: 50%
    overflow: hidden
    margin-right: 12px

    img
      width: 100%
      height: 100%

  &-name
      color: #fff

  &-menu
    position: absolute
    top: 100%
    right: -10px
    background-color: #282828
    display: none
    border-top: 1px solid #e9e9e9

    &-item
      min-width: 100px
      height: 50px
      align-content: center
      color: #e9e9e9
      line-height: 50px
      padding: 0 20px
      border-bottom: 1px solid #e9e9e9
      cursor: pointer

      &:hover
          background-color: #696969

      &:last-child
        border-bottom: none
</style>
