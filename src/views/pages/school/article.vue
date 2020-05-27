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

export default {
  data() {
    return {
      atricleList: [
        {
          id: '1',
          title: '美国外汇保证金当年是怎么去杠杆的？',
          des: '美国次贷危机引发的全球金融危机之后，欧美各国的金融机构遭受巨大损失和面临破产威胁，美国的金融机构尤为严重。迫使美国政府出台各项政策限制金融业。过度使用高杠杆、资产负债表过度膨胀是造成此次危机的主要原因。于是去杠杆化成为应对金融危机的核心内容。',
          read: '53',
          date: '2019-12-16'
        },
        {
          id: '1',
          title: '美国外汇保证金当年是怎么去杠杆的？',
          des: '美国次贷危机引发的全球金融危机之后，欧美各国的金融机构遭受巨大损失和面临破产威胁，美国的金融机构尤为严重。迫使美国政府出台各项政策限制金融业。过度使用高杠杆、资产负债表过度膨胀是造成此次危机的主要原因。于是去杠杆化成为应对金融危机的核心内容。',
          read: '53',
          date: '2019-12-16'
        },
        {
          id: '1',
          title: '美国外汇保证金当年是怎么去杠杆的？',
          des: '美国次贷危机引发的全球金融危机之后，欧美各国的金融机构遭受巨大损失和面临破产威胁，美国的金融机构尤为严重。迫使美国政府出台各项政策限制金融业。过度使用高杠杆、资产负债表过度膨胀是造成此次危机的主要原因。于是去杠杆化成为应对金融危机的核心内容。',
          read: '53',
          date: '2019-12-16'
        },
        {
          id: '1',
          title: '美国外汇保证金当年是怎么去杠杆的？',
          des: '美国次贷危机引发的全球金融危机之后，欧美各国的金融机构遭受巨大损失和面临破产威胁，美国的金融机构尤为严重。迫使美国政府出台各项政策限制金融业。过度使用高杠杆、资产负债表过度膨胀是造成此次危机的主要原因。于是去杠杆化成为应对金融危机的核心内容。',
          read: '53',
          date: '2019-12-16'
        },
        {
          id: '1',
          title: '美国外汇保证金当年是怎么去杠杆的？',
          des: '美国次贷危机引发的全球金融危机之后，欧美各国的金融机构遭受巨大损失和面临破产威胁，美国的金融机构尤为严重。迫使美国政府出台各项政策限制金融业。过度使用高杠杆、资产负债表过度膨胀是造成此次危机的主要原因。于是去杠杆化成为应对金融危机的核心内容。',
          read: '53',
          date: '2019-12-16'
        },
        {
          id: '1',
          title: '美国外汇保证金当年是怎么去杠杆的？',
          des: '美国次贷危机引发的全球金融危机之后，欧美各国的金融机构遭受巨大损失和面临破产威胁，美国的金融机构尤为严重。迫使美国政府出台各项政策限制金融业。过度使用高杠杆、资产负债表过度膨胀是造成此次危机的主要原因。于是去杠杆化成为应对金融危机的核心内容。',
          read: '53',
          date: '2019-12-16'
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
