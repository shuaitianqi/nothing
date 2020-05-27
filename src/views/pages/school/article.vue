<template lang="pug">
  #e-article
    BaseLayout
      .article-container.e-flex
        .article-list
          a.article-item(
            v-for="art in atricleList"
            :href="`/school/article/${art.id}`"
          )
            .article-item-title {{art.title}}
            .article-item-des {{art.des}}
            .article-item-info.e-flex
              .article-item-date {{art.date}}
              .article-item-read
                img(src="")
                span {{art.read}}人看过
        Recommend
</template>

<script>
import BaseLayout from '../../layout/base_layout.vue'
import Recommend from './recommend.vue'
import Image1 from "../../../assets/images/school_atricle_image1.png";
import Image2 from "../../../assets/images/school_atricle_image2.png";
import Image3 from "../../../assets/images/school_atricle_image3.png";
import Image4 from "../../../assets/images/school_atricle_image4.png";
import Image5 from "../../../assets/images/school_atricle_image5.png";
import Image6 from "../../../assets/images/school_atricle_image6.png";

export default {
  data() {
    return {
        articleList: [
            {
                id: '1',
                title: '告诉你这么做外汇交易，超过一半的胜算已到手！',
                des: '汇商君经常会在后来收到粉丝们提的一些关于外汇操作的问题，如何根据国家的宏观经济、地缘政治、军事等因素分析货币对的走势？如何以MACD\布林带等技术指标来分析支撑位、阻力位？如何摸清规律后的汇价做预测？等等诸如此类的问题。还有不少人认为交易就是赌博，甚至把交易的亏损归结于自己的赌运差。',
                image: Image1,
                date: '2020-05-01',
                read: '2134'
            },
            {
                id: '2',
                title: '外汇平台搭建 | 搭建外汇平台哪些坑害死你',
                des: '今天笔者和大家分享一下从业多年来的经验，笔者一直从事外汇后台方面的工作，曾经服务过百家的券商的软件后台，看到一些搭建方技术的低劣和业余程度，笔者想写一篇经验贴给想搭建外汇平台的朋友，希望可以起到提示的作用。',
                image: Image2,
                date: '2019-12-21',
                read: '2434'
            },
            {
                id: '3',
                title: '数汇学院 | 选择值得信赖的外汇经纪商，这5个细节不可忽视！',
                des: '外汇市场作为全球最大的金融市场，吸引着越来越多的投资者参与其中，各类外汇经纪商也如春笋般涌现。对于刚踏入外汇市场的交易者来说，选择一个适合自己的经纪商是相当重要的一件事。今天小编就和大家聊聊外汇经纪商。',
                image: Image3,
                date: '2019-12-21',
                read: '5433'
            },
            {
                id: '4',
                title: '普及外汇知识之：一千多家外汇经纪商，应该如何选择？',
                des: '中国大陆是全球主要外汇经纪商竞相追逐的“大市场”，粗略统计目前国内有一千多家外汇经纪商。因为目前国内没有监管，甚至没有任何限制门槛，无论何时何地，只要有资金，都可以开展业务，导致国内经纪商的质量参差不齐。如何在众多的经纪商中选择一家最优经纪商成为了困扰投资者的一个难题。',
                image: Image4,
                date: '2019-12-21',
                read: '965'
            },
            {
                id: '5',
                title: '美国外汇保证金当年是怎么去杠杆的？',
                des: '美国次贷危机引发的全球金融危机之后，欧美各国的金融机构遭受巨大损失和面临破产威胁，美国的金融机构尤为严重。迫使美国政府出台各项政策限制金融业。过度使用高杠杆、资产负债表过度膨胀是造成此次危机的主要原因。于是去杠杆化成为应对金融危机的核心内容。',
                image: Image5,
                date: '2019-12-21',
                read: '4533'
            },
            {
                id: '6',
                title: '对周线与日线的一些见解',
                des: '日线是金价每天波动的反映，因此要从更长的周期把握股价的走势，还得应用周线图来观察。一般来说，在周线图上，我们可通过观察周线与日线的共振、二次金叉、阻力位、背离等几个现象寻找买卖点。',
                image: Image6,
                date: '2019-12-21',
                read: '3231'
            }
        ]
    }
  },
  components: {
    BaseLayout,
    Recommend
  }
}
</script>

<style lang="sass" scoped>
.article

  &-container
    width: 1200px
    margin: 80px auto 20px

  &-list
    width: 844px
    background-color: #fff
    margin-right: 20px
    padding: 0 30px
    box-sizing: border-box

  &-item
    display: block
    border-bottom: 1px solid #E6E6E6
    padding: 30px 0
    cursor: pointer

    &:last-child
      border-bottom: none

    &-title
      font-size: 18px
      font-weight: 600
      color: #333
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
      margin-bottom: 15px

    &-des
      margin-bottom: 20px
      max-height: 42px
      color: #999
      display: -webkit-box
      overflow: hidden
      text-overflow: ellipsis
      word-break: break-all
      -webkit-box-orient: vertical
      -webkit-line-clamp: 2

    &-info
      align-items: center
      color: #999

    &-date
      margin-right: 20px
</style>
