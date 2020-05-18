<template lang="pug">
  #e-index
    BaseLayout
        .index
            .index-top.e-flex
                .index-top-left 财经日历
            .index-iframe
            <iframe frameborder="0" width="1200" height="900" scrolling="yes" src="https://rili-d.jin10.com/open.php?fontSize=14px&theme=primary"></iframe>
</template>

<script>
import BaseLayout from '../../layout/base_layout.vue'

export default {
  components: {
    BaseLayout
  }
}
</script>

<style lang="sass" scoped>
    .index
        flex-wrap: wrap
        width: 1200px
        margin: 4% auto
        &-top
            justify-content: space-between
            height: 50px
            padding: 10px 0 0 20px
            border-bottom: 1px solid #e6e6e6
            font-size: 16px
            color: #409EFF
            margin: 80px 0 auto
            background-color: #fff

            &-right
                height: 50px
                line-height: 50px
                cursor: pointer

            &-left
                border-bottom: 2px solid #409EFF
                font-weight: bold

            &-right
                color: #409EFF
        &-iframe
</style>


