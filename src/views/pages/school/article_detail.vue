<template lang="pug">
  #e-article-detail
    BaseLayout
      .article-detail-container.e-flex
        .article-detail-content
          .article-detail-title 美国外汇保证金当年是怎么去杠杆的？
          .article-detail-date 2019-12-16
          .article-detail-context
            p 美国次贷危机引发的全球金融危机之后，欧美各国的金融机构遭受巨大损失和面临破产威胁，美国的金融机构尤为严重。迫使美国政府出台各项政策限制金融业。过度使用高杠杆、资产负债表过度膨胀是造成此次危机的主要原因。于是去杠杆化成为应对金融危机的核心内容。
            p 美国次贷危机引发的全球金融危机之后，欧美各国的金融机构遭受巨大损失和面临破产威胁，美国的金融机构尤为严重。迫使美国政府出台各项政策限制金融业。过度使用高杠杆、资产负债表过度膨胀是造成此次危机的主要原因。于是去杠杆化成为应对金融危机的核心内容。
            p 美国次贷危机引发的全球金融危机之后，欧美各国的金融机构遭受巨大损失和面临破产威胁，美国的金融机构尤为严重。迫使美国政府出台各项政策限制金融业。过度使用高杠杆、资产负债表过度膨胀是造成此次危机的主要原因。于是去杠杆化成为应对金融危机的核心内容。
            p 美国次贷危机引发的全球金融危机之后，欧美各国的金融机构遭受巨大损失和面临破产威胁，美国的金融机构尤为严重。迫使美国政府出台各项政策限制金融业。过度使用高杠杆、资产负债表过度膨胀是造成此次危机的主要原因。于是去杠杆化成为应对金融危机的核心内容。
            p 美国次贷危机引发的全球金融危机之后，欧美各国的金融机构遭受巨大损失和面临破产威胁，美国的金融机构尤为严重。迫使美国政府出台各项政策限制金融业。过度使用高杠杆、资产负债表过度膨胀是造成此次危机的主要原因。于是去杠杆化成为应对金融危机的核心内容。
            p 美国次贷危机引发的全球金融危机之后，欧美各国的金融机构遭受巨大损失和面临破产威胁，美国的金融机构尤为严重。迫使美国政府出台各项政策限制金融业。过度使用高杠杆、资产负债表过度膨胀是造成此次危机的主要原因。于是去杠杆化成为应对金融危机的核心内容。
          Control(
            :watch="23"
            :collect="12"
          )
        Recommend
</template>

<script>
import BaseLayout from '../../layout/base_layout.vue'
import Recommend from './recommend.vue'
import Control from './control.vue'

export default {
  components: {
    BaseLayout,
    Recommend,
    Control
  }
}
</script>

<style lang="sass" scoped>
.article-detail

  &-container
    width: 1200px
    margin: 80px auto 20px

  &-content
    width: 844px
    background-color: #fff
    margin-right: 20px
    padding: 30px
    box-sizing: border-box

  &-title
    font-size: 20px
    font-weight: 600
    color: #333
    margin-bottom: 20px

  &-date
    color: #999
    margin-bottom: 20px

  &-context
    font-size: 16px
    color: #666

    p
      margin-bottom: 20px
</style>
