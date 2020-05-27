<template lang="pug">
  #e-school
    BaseLayout
      .school-header
        img.school-header-banner(src="../../../assets/images/school_banner.png")
        .school-header-content
          a.school-header-item(href="/school/article")
            img.school-header-item-icon(src="../../../assets/images/school_icon1.png")
            .school-header-item-info
              .school-header-item-name 文章
              .school-header-item-des 丰富的外汇文库，满足您的学习需求
          a.school-header-item(href="/school/video")
            img.school-header-item-icon(src="../../../assets/images/school_icon2.png")
            .school-header-item-info
              .school-header-item-name 视频课程
              .school-header-item-des 从外汇新手成长为高手的必备教程
          a.school-header-item(href="/school/wiki")
            img.school-header-item-icon(src="../../../assets/images/school_icon3.png")
            .school-header-item-info
              .school-header-item-name 外汇百科
              .school-header-item-des 外汇术语解说，让您更懂外汇
      .school-container
        .school-article
          .school-content
            .school-title
              img(src="../../../assets/images/school_title_icon1.png")
              span 精选文章
            .article-list
              a.article-list-item(v-for="artic in articleList" :href="`/school/article/${artic.id}`")
                img(:src="artic.image")
                .article-list-item-context
                  .article-list-item-title {{artic.title}}
                  .article-list-item-des {{artic.des}}
                  .article-list-item-info
                    .article-list-item-date {{artic.date}}
                    .article-list-item-read
                      img(src="../../../assets/images/read.png")
                      span {{artic.read}}人看过
      .school-container
        .school-video
          .school-content
            .school-title
              img(src="../../../assets/images/school_title_icon2.png")
              span 视频课程
            VideoItem(
              :videoList="videoList"
            )
      .school-container
        .school-wiki
          .school-content
            .school-title
              img(src="../../../assets/images/school_title_icon3.png")
              span 外汇百科
            .wiki-list
              a.wiki-list-item(v-for="wiki in wikiList" :href="`/school/wiki/${wiki.id}`")
                .wiki-list-item-title {{wiki.title}}
                .wiki-list-item-des {{wiki.des}}
</template>

<script>
import BaseLayout from '../../layout/base_layout.vue'
import VideoItem from './video_item.vue'

import Image1 from '../../../assets/images/school_atricle_image1.png'
import Image2 from '../../../assets/images/school_atricle_image2.png'
import Image3 from '../../../assets/images/school_atricle_image3.png'
import Image4 from '../../../assets/images/school_atricle_image4.png'
import Image5 from '../../../assets/images/school_atricle_image5.png'
import Image6 from '../../../assets/images/school_atricle_image6.png'

import VideoImage1 from '../../../assets/images/school_video_image1.jpg'
import VideoImage2 from '../../../assets/images/school_video_image2.jpg'
import VideoImage3 from '../../../assets/images/school_video_image3.png'
import VideoImage4 from '../../../assets/images/school_video_image4.jpg'
import VideoImage5 from '../../../assets/images/school_video_image5.jpg'
import VideoImage6 from '../../../assets/images/school_video_image6.jpg'
import VideoImage7 from '../../../assets/images/school_video_image7.jpg'
import VideoImage8 from '../../../assets/images/school_video_image8.jpg'

export default {
  data() {
    return {
      articleList: [
        {
          id: '1',
          title: '告诉你这么做外汇交易，超过一半的胜算已到手！',
          des: '汇商君经常会在后来收到粉丝们提的一些关于外汇操作的问题，如何根据国家的宏观经济、地缘政治、军事等因素分析货币对的走势？如何以MACD\布林带等技术指标来分析支撑位、阻力位？如何摸清规律后的汇价做预测？等等诸如此类的问题。还有不少人认为交易就是赌博，甚至把交易的亏损归结于自己的赌运差。',
          image: Image1,
          date: '2019-11-21',
          read: '234'
        },
        {
          id: '1',
          title: '告诉你这么做外汇交易，超过一半的胜算已到手！',
          des: '汇商君经常会在后来收到粉丝们提的一些关于外汇操作的问题，如何根据国家的宏观经济、地缘政治、军事等因素分析货币对的走势？如何以MACD\布林带等技术指标来分析支撑位、阻力位？如何摸清规律后的汇价做预测？等等诸如此类的问题。还有不少人认为交易就是赌博，甚至把交易的亏损归结于自己的赌运差。',
          image: Image2,
          date: '2019-11-21',
          read: '234'
        },
        {
          id: '1',
          title: '告诉你这么做外汇交易，超过一半的胜算已到手！',
          des: '汇商君经常会在后来收到粉丝们提的一些关于外汇操作的问题，如何根据国家的宏观经济、地缘政治、军事等因素分析货币对的走势？如何以MACD\布林带等技术指标来分析支撑位、阻力位？如何摸清规律后的汇价做预测？等等诸如此类的问题。还有不少人认为交易就是赌博，甚至把交易的亏损归结于自己的赌运差。',
          image: Image3,
          date: '2019-11-21',
          read: '234'
        },
        {
          id: '1',
          title: '告诉你这么做外汇交易，超过一半的胜算已到手！',
          des: '汇商君经常会在后来收到粉丝们提的一些关于外汇操作的问题，如何根据国家的宏观经济、地缘政治、军事等因素分析货币对的走势？如何以MACD\布林带等技术指标来分析支撑位、阻力位？如何摸清规律后的汇价做预测？等等诸如此类的问题。还有不少人认为交易就是赌博，甚至把交易的亏损归结于自己的赌运差。',
          image: Image4,
          date: '2019-11-21',
          read: '234'
        },
        {
          id: '1',
          title: '告诉你这么做外汇交易，超过一半的胜算已到手！',
          des: '汇商君经常会在后来收到粉丝们提的一些关于外汇操作的问题，如何根据国家的宏观经济、地缘政治、军事等因素分析货币对的走势？如何以MACD\布林带等技术指标来分析支撑位、阻力位？如何摸清规律后的汇价做预测？等等诸如此类的问题。还有不少人认为交易就是赌博，甚至把交易的亏损归结于自己的赌运差。',
          image: Image5,
          date: '2019-11-21',
          read: '234'
        },
        {
          id: '1',
          title: '告诉你这么做外汇交易，超过一半的胜算已到手！',
          des: '汇商君经常会在后来收到粉丝们提的一些关于外汇操作的问题，如何根据国家的宏观经济、地缘政治、军事等因素分析货币对的走势？如何以MACD\布林带等技术指标来分析支撑位、阻力位？如何摸清规律后的汇价做预测？等等诸如此类的问题。还有不少人认为交易就是赌博，甚至把交易的亏损归结于自己的赌运差。',
          image: Image6,
          date: '2019-11-21',
          read: '234'
        }
      ],
      videoList: [
        {
          id: '1',
          title: '日内交易',
          tag: '高手必备',
          image: VideoImage1,
          count: '14',
          read: '234'
        },
        {
          id: '1',
          title: '日内交易',
          tag: '高手必备',
          image: VideoImage2,
          count: '14',
          read: '234'
        },
        {
          id: '1',
          title: '日内交易',
          tag: '高手必备',
          image: VideoImage3,
          count: '14',
          read: '234'
        },
        {
          id: '1',
          title: '日内交易',
          tag: '高手必备',
          image: VideoImage4,
          count: '14',
          read: '234'
        },
        {
          id: '1',
          title: '日内交易',
          tag: '高手必备',
          image: VideoImage5,
          count: '14',
          read: '234'
        },
        {
          id: '1',
          title: '日内交易',
          tag: '高手必备',
          image: VideoImage6,
          count: '14',
          read: '234'
        },
        {
          id: '1',
          title: '日内交易',
          tag: '高手必备',
          image: VideoImage7,
          count: '14',
          read: '234'
        },
        {
          id: '1',
          title: '日内交易',
          tag: '高手必备',
          image: VideoImage8,
          count: '14',
          read: '234'
        },
      ],
      wikiList: [
        {
          id: '1',
          title: '自动交易系统',
          des: '自动化交易系统能让电脑执行并监管交易，因此很多交易者和投资者开始使用自动化交易系统，以更精准的执行入场和出场，并设置资金管理规则。自动化交易系统最吸引人的特色之一，就是它不像人那样具有情绪，只要达到了一定的标准，交易就会自动执行。不过，市场上对自动化交易系统褒贬不一。'
        },
        {
          id: '1',
          title: '自动交易系统',
          des: '自动化交易系统能让电脑执行并监管交易，因此很多交易者和投资者开始使用自动化交易系统，以更精准的执行入场和出场，并设置资金管理规则。自动化交易系统最吸引人的特色之一，就是它不像人那样具有情绪，只要达到了一定的标准，交易就会自动执行。不过，市场上对自动化交易系统褒贬不一。'
        },
        {
          id: '1',
          title: '自动交易系统',
          des: '自动化交易系统能让电脑执行并监管交易，因此很多交易者和投资者开始使用自动化交易系统，以更精准的执行入场和出场，并设置资金管理规则。自动化交易系统最吸引人的特色之一，就是它不像人那样具有情绪，只要达到了一定的标准，交易就会自动执行。不过，市场上对自动化交易系统褒贬不一。'
        },
        {
          id: '1',
          title: '自动交易系统',
          des: '自动化交易系统能让电脑执行并监管交易，因此很多交易者和投资者开始使用自动化交易系统，以更精准的执行入场和出场，并设置资金管理规则。自动化交易系统最吸引人的特色之一，就是它不像人那样具有情绪，只要达到了一定的标准，交易就会自动执行。不过，市场上对自动化交易系统褒贬不一。'
        },
        {
          id: '1',
          title: '自动交易系统',
          des: '自动化交易系统能让电脑执行并监管交易，因此很多交易者和投资者开始使用自动化交易系统，以更精准的执行入场和出场，并设置资金管理规则。自动化交易系统最吸引人的特色之一，就是它不像人那样具有情绪，只要达到了一定的标准，交易就会自动执行。不过，市场上对自动化交易系统褒贬不一。'
        },
        {
          id: '1',
          title: '自动交易系统',
          des: '自动化交易系统能让电脑执行并监管交易，因此很多交易者和投资者开始使用自动化交易系统，以更精准的执行入场和出场，并设置资金管理规则。自动化交易系统最吸引人的特色之一，就是它不像人那样具有情绪，只要达到了一定的标准，交易就会自动执行。不过，市场上对自动化交易系统褒贬不一。'
        },
        {
          id: '1',
          title: '自动交易系统',
          des: '自动化交易系统能让电脑执行并监管交易，因此很多交易者和投资者开始使用自动化交易系统，以更精准的执行入场和出场，并设置资金管理规则。自动化交易系统最吸引人的特色之一，就是它不像人那样具有情绪，只要达到了一定的标准，交易就会自动执行。不过，市场上对自动化交易系统褒贬不一。'
        },
        {
          id: '1',
          title: '自动交易系统',
          des: '自动化交易系统能让电脑执行并监管交易，因此很多交易者和投资者开始使用自动化交易系统，以更精准的执行入场和出场，并设置资金管理规则。自动化交易系统最吸引人的特色之一，就是它不像人那样具有情绪，只要达到了一定的标准，交易就会自动执行。不过，市场上对自动化交易系统褒贬不一。'
        },
        {
          id: '1',
          title: '自动交易系统',
          des: '自动化交易系统能让电脑执行并监管交易，因此很多交易者和投资者开始使用自动化交易系统，以更精准的执行入场和出场，并设置资金管理规则。自动化交易系统最吸引人的特色之一，就是它不像人那样具有情绪，只要达到了一定的标准，交易就会自动执行。不过，市场上对自动化交易系统褒贬不一。'
        }
      ]
    }
  },
  components: {
    BaseLayout,
    VideoItem
  }
}
</script>

<style lang="sass" scoped>
.school

  &-header
    width: 1200px
    margin: 80px auto 0
    padding-bottom: 20px

    &-banner
      height: 350px
      margin-bottom: 20px

    &-content
      display: flex
      justify-content: space-between

    &-item
      width: 33.33%
      padding: 34px 20px
      display: flex
      cursor: pointer

      &:hover
        box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.05)

        .school-header-item-name
          color: #E74B3A

      &-icon
        margin-right: 20px

      &-name
        font-size: 20px
        font-weight: 600
        color: #333
        margin-bottom: 10px

      &-des
        font-size: 16px
        color: #333
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap

  &-article,
  &-wiki
    background-color: #F8F8F8

  &-video
    background-color: #fff

  &-content
    width: 1200px
    margin: 0 auto
    padding: 60px 0

  &-title
    display: flex
    font-size: 20px
    font-weight: 600
    color: #333
    align-items: center
    margin-bottom: 20px

    img
      width: 20px
      height: 20px
      margin-right: 10px

// 文章
.article

  &-list
    display: flex
    flex-wrap: wrap

    &-item
      width: calc(( 100% - 20px ) / 2)
      display: flex
      margin-top: 20px
      cursor: pointer

      &:nth-child(odd)
        margin-right: 20px

      &:nth-child(-n+2)
        margin-top: 0

      &:hover

        .article-list-item-title
          color: #E74B3A

      img
        width: 140px
        height: 140px

      &-context
        flex: 1
        height: 140px
        padding: 20px
        background-color: #fff

      &-title
        margin-bottom: 10px
        font-size: 16px
        font-weight: 600
        color: #333

      &-des
        color: #666
        display: -webkit-box
        overflow: hidden
        text-overflow: ellipsis
        word-break: break-all
        -webkit-box-orient: vertical
        -webkit-line-clamp: 2
        margin-bottom: 10px

      &-info
        display: flex
        color: #999

      &-date
        margin-right: 20px

      &-read
        display: flex
        align-items: center

        img
          width: 16px
          height: 16px
          margin-right: 6px

// 百科
.wiki

  &-list
    display: flex
    flex-wrap: wrap

    &-item
      width: calc(( 100% - 40px ) / 3)
      margin-right: 20px
      margin-top: 20px
      height: 140px
      padding: 20px
      background: url('../../../assets/images/school_bg.png') no-repeat center center
      box-sizing: border-box
      color: #333

      &:nth-child(3n)
        margin-right: 0

      &:nth-child(-n+3)
        margin-top: 0

      &:hover
        box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.05)

        .wiki-list-item-title
          color: #E74B3A

      &-title
        font-size: 20px
        margin-bottom: 15px

      &-des
        display: -webkit-box
        overflow: hidden
        text-overflow: ellipsis
        word-break: break-all
        -webkit-box-orient: vertical
        -webkit-line-clamp: 3
</style>
