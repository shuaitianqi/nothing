<template lang="pug">
  #e-wiki
    BaseLayout
      .wiki-container.e-flex
        .wiki-list.e-clear
          a.wiki-list-item(
            v-for="wiki in wikiList"
            :href="`/school/wiki/${wiki.id}`"
          ) {{wiki.title}}
        Recommend
</template>

<script>
import BaseLayout from '../../layout/base_layout.vue'
import Recommend from './recommend.vue'

export default {
  data() {
    return {
      wikiList: [
        {
          id: '1',
          title: 'A-Book'
        },
        {
          id: '1',
          title: '白标'
        },
        {
          id: '1',
          title: '布林线'
        },
        {
          id: '1',
          title: '避险货币'
        },
        {
          id: '1',
          title: '爆仓'
        },
        {
          id: '1',
          title: '波浪理论'
        },
        {
          id: '1',
          title: '澳大利亚证券和投资委员会（ASIC）'
        },
        {
          id: '1',
          title: 'B-Book'
        },
        {
          id: '1',
          title: '波兰外汇市场'
        },
        {
          id: '1',
          title: 'B-Book'
        },
        {
          id: '1',
          title: '波兰外汇市场'
        },
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
.wiki

  &-container
    width: 1200px
    margin: 80px auto 20px

  &-list
    width: 844px
    background-color: #fff
    margin-right: 20px
    padding: 30px
    box-sizing: border-box

    &-item
      width: 25%
      height: 20px
      line-height: 20px
      float: left
      padding: 0 15px
      margin-bottom: 15px
      box-sizing: border-box
      font-size: 16px
      color: #666
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
</style>
