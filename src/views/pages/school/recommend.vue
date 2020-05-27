<template lang="pug">
  #e-recommend.recommend
    .recommend-title.e-flex
      img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACDklEQVQ4T6XTTUiVQRTG8f8z782PAj8SNA3pw6DCoGULKdDQhZHRonb5EVT7oHZBq6CgrRBBlNaqIHAVFZoUFES7DIu0EE1MAwsyzfvOE/dC0hVbOds585szc84R61xa53nkrpor0ZzA/JY8J8JbAq9JNaj+6YncBe6s2oqTFkI4YHufoVqiWGZQsbN6StJVzDh2ZQzskNVmsytIz5FtOBQjE5IeBcWPEL6By7CvKXZVT4mkQ3em3/z7HHdv2e7oW4haKTmu219GC/Z76upJ44sVIDpeEGyS9B4YYiEdpiRct6jTrw0ns6XLTQEOC/aSi0uS0wVANk03h8DOAA0RjoEeBlOZAwwvBWckBmLq0ZBJPiGNFAAsL4znU1z+/oNGzAiipKY3n0HfTAcn2EAjWT5XlJEWF5FJigsBYq9NLZBV4HE2jXczhFN5wOEiiucst4tQ4hiXlMm0FAILyTuKFqoIRQ0Et4I/ENWUA6K5p0BzkB+QJu8p1RzLVBUAq6uQr/+pmhs5IPTNHF3dcF6pQmf1pBTOk8k8pX5yXpeJf4PXAgyiu6KctGQ/wf1yZ83NCEeClI22BWPGQyHoCSk9+T8I8RJO2hxjs6Xd+S4EO/qV8uLZulIWlyqJyTaC9kT5oEwrphwpAeYtngV7GDSGGWMxznJ/9ud/h8ndFRXE4vYUNiZmQP0zX9cavHVP4x9XDgdTe/WlZQAAAABJRU5ErkJggg==")
      span 推荐阅读
    .recommend-content
      a.recommend-item(
        v-for="rec in recommend"
        :href="`/school/article/${rec.id}`"
      )
        span.icon
        span {{rec.title}}
</template>

<script>
export default {
  data() {
    return {
      recommend: [
        {
          id: '1',
          title: '告诉你这么做外汇交易，超过一半的胜算已到手！'
        },
        {
          id: '2',
          title: '外汇平台搭建 | 搭建外汇平台哪些坑害死你'
        },
        {
          id: '3',
          title: '数汇学院 | 选择值得信赖的外汇经纪商，这5个细节不可忽视！'
        },
        {
          id: '4',
          title: '普及外汇知识之：一千多家外汇经纪商，应该如何选择？'
        },
        {
          id: '5',
          title: '美国外汇保证金当年是怎么去杠杆的？'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.recommend
  flex: 1
  height: 336px
  background-color: #fff

  &-title
    height: 56px
    align-items: center
    border-bottom: 1px solid #F0F0F0
    padding-left: 20px

    img
      margin-right: 10px

  &-content
    padding: 0 20px

  &-item
    display: block
    height: 54px
    line-height: 54px
    border-bottom: 1px solid #F0F0F0
    color: #666
    cursor: pointer
    overflow: hidden

    .icon
      display: inline-block
      width: 5px
      height: 5px
      background: var(--theme-color, #E74B3A)
      border-radius: 50%
      margin-right: 10px

    &:last-child
      border-bottom: none
</style>
