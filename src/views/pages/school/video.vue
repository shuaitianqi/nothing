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
