<template lang="pug">
    #e-index-trading-question
        .index-trading-question
            .index-trading-question-picture
                img(
                :src="question"
                )
                .index-trading-question-detail {{info.question}}
            .index-trading-question-answer {{info.answer}}

</template>

<script>
import question from '../../../assets/images/question.svg'

export default {
    data() {
        return {
            question
        }
    },
    props: {
        info: {
            type: Object
        }
    },
    created() {
    }
}
</script>

<style lang="sass" scoped>

#e-index-trading-question
    width: calc((100% - 36px) / 2)
    margin: 0 12px 15px 0

    &:nth-child(2n)
        margin-right: 0

.index-trading-question
    padding: 20px 10px 10px 10px

    &-picture
        height: 30px
        display: flex
    &-detail
        padding: 0 0 0 10px
        font-size: 18px
        font-weight: 600
    &-answer
        font-size: 15px
        font-weight: 500
        padding: 10px 0 20px 43px
        color: #999999
</style>


