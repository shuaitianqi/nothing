<template lang="pug">
  #e-wiki-detail
    BaseLayout
      .wiki-detail-container.e-flex
        .wiki-detail-content
          .wiki-detail-title 澳大利亚证券和投资委员会（ASIC）
          .wiki-detail-date 2019-12-16
          .wiki-detail-context
            p 成立于2001年，是澳大利亚金融服务和市场的法定监管机构，也是一个独立的联邦政府机构，依法对全澳大利亚金融体系、各金融机构和专业从业人员行使金融监管的职能。致力于确保澳大利亚金融市场公平与透明，以此来保障澳大利亚经济的名誉及健康。
            p 成立于2001年，是澳大利亚金融服务和市场的法定监管机构，也是一个独立的联邦政府机构，依法对全澳大利亚金融体系、各金融机构和专业从业人员行使金融监管的职能。致力于确保澳大利亚金融市场公平与透明，以此来保障澳大利亚经济的名誉及健康。
            p 成立于2001年，是澳大利亚金融服务和市场的法定监管机构，也是一个独立的联邦政府机构，依法对全澳大利亚金融体系、各金融机构和专业从业人员行使金融监管的职能。致力于确保澳大利亚金融市场公平与透明，以此来保障澳大利亚经济的名誉及健康。
            p 成立于2001年，是澳大利亚金融服务和市场的法定监管机构，也是一个独立的联邦政府机构，依法对全澳大利亚金融体系、各金融机构和专业从业人员行使金融监管的职能。致力于确保澳大利亚金融市场公平与透明，以此来保障澳大利亚经济的名誉及健康。
            p 成立于2001年，是澳大利亚金融服务和市场的法定监管机构，也是一个独立的联邦政府机构，依法对全澳大利亚金融体系、各金融机构和专业从业人员行使金融监管的职能。致力于确保澳大利亚金融市场公平与透明，以此来保障澳大利亚经济的名誉及健康。
            p 成立于2001年，是澳大利亚金融服务和市场的法定监管机构，也是一个独立的联邦政府机构，依法对全澳大利亚金融体系、各金融机构和专业从业人员行使金融监管的职能。致力于确保澳大利亚金融市场公平与透明，以此来保障澳大利亚经济的名誉及健康。
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
.wiki-detail

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
