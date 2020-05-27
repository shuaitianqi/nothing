<template lang="pug">
  .video-list
    a.video-list-item(v-for="video in videoList" :href="`/school/video/${video.id}`")
      img(:src="video.image")
      .video-list-item-context
        .video-list-item-title {{video.title}}
        .video-list-item-tag {{video.tag}}
        .video-list-item-info
          .video-list-item-count 共{{video.count}}节
          .video-list-item-read
            img(src="../../../assets/images/read.png")
            span {{video.read}}人看过
</template>

<script>
export default {
  props: {
    videoList: Array
  }
}
</script>

<style lang="sass" scoped>
.video

  &-list
    display: flex
    flex-wrap: wrap

    &-item
      width: calc(( 100% - 60px ) / 4)
      margin-right: 20px
      margin-top: 20px
      cursor: pointer

      &:nth-child(4n)
        margin-right: 0

      &:nth-child(-n+4)
        margin-top: 0

      &:hover
        box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.05)

      img
        display: block
        width: 100%
        height: 160px

      &-context
        padding: 20px

      &-title
        font-size: 16px
        margin-bottom: 10px
        color: #333

      &-tag
        display: inline-block
        padding: 1px 5px
        background: #eaeaea
        border-radius: 3px
        font-size: 12px
        margin-bottom: 20px

      &-info
        display: flex
        justify-content: space-between
        color: #999

      &-read
        display: flex
        align-items: center

        img
          width: 16px
          height: 16px
          margin-right: 6px
</style>
