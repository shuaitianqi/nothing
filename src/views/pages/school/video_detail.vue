<template lang="pug">
  #e-video-detail
    BaseLayout
      .video-detail-container
        .video-detail-content
          .video-detail-left
            .video-detail-videoplayer
              video(
                :src="videoSelect.src"
                :poster="videoSelect.poster"
                controls="controls"
                autoplay="autoplay"
                width="100%"
                height="100%"
              )
            Control(
              :watch="23"
              :collect="12"
            )
          .video-detail-list
            .video-detail-name {{videoInfo.name}}
            .video-detail-count 共计{{videoInfo.videoList.length}}节课
            .video-detail-list-container
              .video-detail-list-item(
                v-for="list in videoInfo.videoList"
                :class="videoSelect.id === list.id ? 'active': null"
                @click="selectVideo(list)"
              )
                .video-detail-list-item-title {{list.title}}
                .video-detail-list-item-long
                  img(src="")
                  span 时长 {{list.long}}
        .video-detail-info.e-flex
          .video-detail-info-des
            .video-detail-info-des-title
              .video-detail-info-des-tag(
                :class="videoDesType === 0 ? 'active' : null"
                @click="videoDesType = 0"
              ) 课程概述
              .video-detail-info-des-tag(
                :class="videoDesType === 1 ? 'active' : null"
                @click="videoDesType = 1"
              ) 延伸阅读
            .video-detail-info-des-context {{videoDesType === 0 ? videoInfo.des : videoInfo.extend}}
          .video-detail-info-recommend
            .video-detail-info-recommend-title.e-flex
              img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABtElEQVQ4T6XTMWgUQRgF4Pf+2aBYKBLvVlREsbERQQs7K8FCsLMRbi+gthcLGwtTWVmkEwRR7yagfSBgYRlRsVICNjYWxswGFBUxR3bnye55lyAHcmTK+Wc+Zv43Q+xwcNx+AVSWvgB0ZlDnR0Id+vzVv+vHA61mKxJPAPYBFAD2AlhxPpz6L6CZY7sVf3+QdMSIs/T5+zJrfgG4z/mwZyygduN8IeeqolGXETEL4pHz4UY1V7abnyE0DHaxBqR1LoSV+nJqpeci9RJgDfwdv2xTJ/gsD1sADw2LBPqC7jmfz9WAiGUAb2hYjhEdQH3n8/3DDWX74C3E2BicEIxgB8CU88GNABnuu264WWbpV0DcDmy/d5VQzNKfADacDwcmB2amT8aYvDNykb21KxMDRZZeJ/DQiDvshbsTA2UrnQcxaxYvsbv+fGIgZulbQaet6Kd8+v3bFgA8sGLXXEw2PlXRV03U1aOjJOpGJqUJxaqAVefD8dE7qGJU1V5DKWEK0A+juyCVr0GWwxQkkJKR9PTh2gDIpg8LSbeKePRQiIBNu60kPh732SI5n/TWlmpgh78ZfwBqLusRciODHwAAAABJRU5ErkJggg==")
              span 推荐课程
</template>

<script>
import BaseLayout from '../../layout/base_layout.vue'
import Control from './control.vue'

export default {
  data() {
    return {
      videoInfo: {
        name: '日内交易',
        des: '日内交易是一种交易模式，英文名字是daytrade,主要是指持仓时间短，不留过夜持仓的交易方式。日内交易捕捉入市后能够马上脱离入市成本的交易机会，入市之后如果不能马上获利，就准备迅速离场。因为这种交易方式在市时间短，所以承受的市场波动的风险较低。目前，全球范围内有一些操盘高手采用此交易方式取得稳定的盈利，获得了成功，比如查理D已经成为日内交易的神话，因此日内交易现在已经被越来越多的人所推崇和接受。',
        extend: '在我们进入到我的日内交易策略之前，我将快速引导你去了解一个可以使用且潜在可以盈利的策略应该为你提供的是什么。',
        videoList: [
          {
            id: '1',
            title: '01 在交易策略中我们看重的是什么',
            long: '05:07',
            src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/d2df071e88044e2990eb2aa5f59e10e8.mp4',
            poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/bdbcbd5480244ceaa850f397027a69af.jpg',
            watch: 12,
            collect: 8
          },
          {
            id: '2',
            title: '02 在交易策略中我们看重的是什么',
            long: '05:07',
            src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/d2df071e88044e2990eb2aa5f59e10e8.mp4',
            poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/bdbcbd5480244ceaa850f397027a69af.jpg',
            watch: 12,
            collect: 8
          },
          {
            id: '3',
            title: '03 在交易策略中我们看重的是什么',
            long: '05:07',
            src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/d2df071e88044e2990eb2aa5f59e10e8.mp4',
            poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/bdbcbd5480244ceaa850f397027a69af.jpg',
            watch: 12,
            collect: 8
          },
          {
            id: '4',
            title: '04 在交易策略中我们看重的是什么',
            long: '05:07',
            src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/d2df071e88044e2990eb2aa5f59e10e8.mp4',
            poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/bdbcbd5480244ceaa850f397027a69af.jpg',
            watch: 12,
            collect: 8
          },
          {
            id: '5',
            title: '05 在交易策略中我们看重的是什么',
            long: '05:07',
            src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/d2df071e88044e2990eb2aa5f59e10e8.mp4',
            poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/bdbcbd5480244ceaa850f397027a69af.jpg',
            watch: 12,
            collect: 8
          },
          {
            id: '6',
            title: '06 在交易策略中我们看重的是什么',
            long: '05:07',
            src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/d2df071e88044e2990eb2aa5f59e10e8.mp4',
            poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/bdbcbd5480244ceaa850f397027a69af.jpg',
            watch: 12,
            collect: 8
          },
          {
            id: '7',
            title: '07 在交易策略中我们看重的是什么',
            long: '05:07',
            src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/d2df071e88044e2990eb2aa5f59e10e8.mp4',
            poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/bdbcbd5480244ceaa850f397027a69af.jpg',
            watch: 12,
            collect: 8
          },
          {
            id: '8',
            title: '08 在交易策略中我们看重的是什么',
            long: '05:07',
            src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/d2df071e88044e2990eb2aa5f59e10e8.mp4',
            poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/bdbcbd5480244ceaa850f397027a69af.jpg',
            watch: 12,
            collect: 8
          }
        ]
      },
      videoSelect: null,
      videoDesType: 0, // 0:概要； 1：延伸
    }
  },
  created() {
    this.videoSelect = this.videoInfo.videoList[0]
  },
  components: {
    BaseLayout,
    Control
  },
  methods: {
    selectVideo(video) {
      this.videoSelect = video
    }
  }
}
</script>

<style lang="sass" scoped>
.video-detail

  &-container
    width: 1200px
    margin: 60px auto 0

  &-content
    background-color: #fff
    display: flex
    margin-bottom: 20px

  &-videoplayer
    width: 780px
    height: 456px

  &-list
    padding: 30px
    flex: 1

    &-container
      height: 352px
      overflow-y: scroll

    &-item
      padding-bottom: 15px
      margin-bottom: 15px
      border-bottom: 1px solid #F0F0F0;
      cursor: pointer

      &.active
        color: #E74B3A

      &-title
        font-size: 16px
        margin-bottom: 15px

  &-name
    font-size: 20px
    font-weight: 600
    margin-bottom: 15px

  &-count
    margin-bottom: 10px

  &-info
    margin-bottom: 20px

    &-des
      width: 793px
      height: 352px
      margin-right: 20px
      background-color: #fff

      &-title
        display: flex
        height: 56px
        line-height: 56px
        padding-left: 20px
        border-bottom: 1px solid #F0F0F0

      &-tag
        padding: 0 10px
        margin-right: 20px
        cursor: pointer

        &.active
          font-weight: 600
          border-bottom: 3px solid #333333

      &-context
        min-height: 352px
        padding: 20px 30px
        box-sizing: border-box
        font-size: 16px

    &-recommend
      flex: 1
      background-color: #fff

      &-title
        align-items: center
        height: 56px
        line-height: 56px
        border-bottom: 1px solid #F0F0F0
        padding-left: 20px

        img
          margin-right: 10px
</style>
