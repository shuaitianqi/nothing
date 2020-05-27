<template lang="pug">
  #e-video
    BaseLayout
      .video-container
        .video-filter
          .video-filter-item(
            v-for="tag in filterTag"
            :class="filterSelect === tag ? 'active' : null"
            @click="filterHandler(tag)"
          ) {{tag}}
        VideoItem(
          :videoList="videoListFilter"
        )

</template>

<script>
import BaseLayout from '../../layout/base_layout.vue'
import VideoItem from './video_item.vue'

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
      filterTag: ['全部', '新手入门', '中级攻略', '高手必备'],
      filterSelect: '全部',
      videoList: [
        {
          id: '1',
          title: '日内交易',
          tag: '高手必备',
          image: VideoImage1,
          count: '14',
          read: '1204'
        },
        {
          id: '2',
          title: '外汇交易介绍',
          tag: '新手入门',
          image: VideoImage2,
          count: '6',
          read: '2763'
        },
        {
          id: '3',
          title: '用价格行为来进行交易',
          tag: '中级攻略',
          image: VideoImage3,
          count: '5',
          read: '2209'
        },
        {
          id: '4',
          title: '用双布林带进行交易',
          tag: '中级攻略',
          image: VideoImage4,
          count: '5',
          read: '1843'
        },
        {
          id: '5',
          title: '斐波那契回归线',
          tag: '新手入门',
          image: VideoImage5,
          count: '3',
          read: '1657'
        },
        {
          id: '6',
          title: '高级支撑阻力和趋势线',
          tag: '新手入门',
          image: VideoImage6,
          count: '5',
          read: '1917'
        },
        {
          id: '7',
          title: '移动均线交叉和动量',
          tag: '中级攻略',
          image: VideoImage7,
          count: '3',
          read: '2034'
        },
        {
          id: '8',
          title: '外汇基本面简述',
          tag: '新手入门',
          image: VideoImage8,
          count: '2',
          read: '1381'
        },
      ],
      videoListFilter: []
    }
  },
  components: {
    BaseLayout,
    VideoItem
  },
  created() {
    this.videoListFilter = this.videoList
  },
  methods: {
    filterHandler(tag) {
      this.filterSelect = tag

      if (tag === '全部') {
        this.videoListFilter = this.videoList
      } else {
        this.videoListFilter = this.videoList.filter(item => item.tag === tag)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.video

  &-container
    width: 1200px
    margin: 80px auto 20px
    overflow: hidden

  &-filter
    display: flex
    background-color: #fff
    padding: 10px 20px
    margin-bottom: 20px

    &-item
      cursor: pointer
      padding: 4px 14px
      margin-right: 10px
      border-radius: 14px

      &.active
        background-color: #e74b3a
        color: #fff
</style>
