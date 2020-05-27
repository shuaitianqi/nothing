<template lang="pug">
  #e-article-detail
    BaseLayout
      .article-detail-container.e-flex
        .article-detail-content
          .article-detail-title {{article.title}}
          .article-detail-date  {{article.date}}
          .article-detail-context {{article.context}}
          Control(
            :watch= "this.article.read"
            :collect= "this.article.collect"
          )
        Recommend
</template>

<script>
import BaseLayout from '../../layout/base_layout.vue'
import Recommend from './recommend.vue'
import Control from './control.vue'
import Image1 from "../../../assets/images/school_atricle_image1.png";
import Image2 from "../../../assets/images/school_atricle_image2.png";
import Image3 from "../../../assets/images/school_atricle_image3.png";
import Image4 from "../../../assets/images/school_atricle_image4.png";
import Image5 from "../../../assets/images/school_atricle_image5.png";
import Image6 from "../../../assets/images/school_atricle_image6.png";

export default {
    data() {
        return {
            titleId: 1,
            article: {},
            articleList: [
                {
                    id: '1',
                    title: '告诉你这么做外汇交易，超过一半的胜算已到手！',
                    des: '汇商君经常会在后来收到粉丝们提的一些关于外汇操作的问题，如何根据国家的宏观经济、地缘政治、军事等因素分析货币对的走势？如何以MACD\布林带等技术指标来分析支撑位、阻力位？如何摸清规律后的汇价做预测？等等诸如此类的问题。还有不少人认为交易就是赌博，甚至把交易的亏损归结于自己的赌运差。',
                    image: Image1,
                    date: '2020-05-01',
                    read: '2134',
                    collect: '89',
                    context: "<span style=\"color: rgb(68, 68, 68);\">汇商君经常会在后来收到粉丝们提的一些关于外汇操作的问题，如何根据国家的宏观经济、地缘政治、军事等因素分析货币对的走势？如何以MACD\\布林带等技术指标来分析支撑位、阻力位？如何摸清规律后的汇价做预测？等等诸如此类的问题。还有不少人认为交易就是赌博，甚至把交易的亏损归结于自己的赌运差。</span></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">汇商君想说，交易的确一部分有运气的成分，但是汇价的波动完全是符合一国经济强弱的规律以及货币市场的规矩。也就是说可分析和规律性，决定了交易和赌博是两个概念。</span></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">市场是永远没有确凿无疑的走势，只有相对确定的走势。入场了，你就有一半的胜算在手，另一半的胜算如何掌控那就要看你的心态、基本面、技术面的分析能力。</span></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">正是这种不确定性，给外汇交易增添了一份神秘又具有挑战性的色彩。汇商君今天给大家总结了一些分析汇市的规律和对于行情的波动因素，可做参考。</span></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">外汇市场通常对有一些国家定期公布的经济数据很敏感，有些数据甚至会导致某些货币短期走势逆转。但有些炒汇者对此不太了解，公布数据时不知道是利好还是利空。</span></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">汇商君经过长期的实践和摸索，在经济数据对汇市的影响方面，总结了一些规律，谨供参考。</span></p><p><br></p><p><strong style=\"color: rgb(68, 68, 68);\">失业率</strong></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">失业率是代表经济发展好坏的标志。失业率上升，意味着经济增长受阻；反之，则意味着经济发展势头良好。</span></p><p><br></p><p><strong style=\"color: rgb(68, 68, 68);\">消费物价指数</strong></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">主要反映消费者支付商品或劳务的价格变化情况。如果CPI大幅度上升，从短期看，有助于利率上升，从而支持汇价坚挺；从长期看，实质上是通货贬值。</span></p><p><br></p><p><strong style=\"color: rgb(68, 68, 68);\">消费者消费信心指数</strong></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">消费者消费信心指数是指消费者消费愿望的表示，指数增加，表示消费者乐意支出，对经济增长是利好的，汇率上升；反之，则对经济增长不利，汇率下降。</span></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">影响外汇行情的因素主要有以下5个方面：</span></p><p><br></p><p><strong style=\"color: rgb(68, 68, 68);\">国际收支</strong></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">国际收支是一国在一定时期内（通常是一年内）与外国的全部经济交易发生的收支总额，这是一国与其它各国之间经济交往的记录。</span></p><p><br></p><p><strong style=\"color: rgb(68, 68, 68);\">通货膨胀差异</strong></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">通货膨胀是指一般价格水平的持续、普遍上升。国内外通货膨胀的差异是决定汇率长期趋势的主导因素，在不兑现的信用货币条件下，两国之间的比率，是由各自所代表的价值决定的。如果一国通货膨胀高于他国，该国货币在外汇市场上就会趋于贬值；反之，就会趋于升值。</span></p><p><br></p><p><strong style=\"color: rgb(68, 68, 68);\">利率</strong></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">利率：“利息率”的简称，是一定时期内利息额对借贷本金之比。我们需要关注各国利率政策的制定及利率的波动。</span></p><p><br></p><p><strong style=\"color: rgb(68, 68, 68);\">市场预期</strong></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">市场预期：国际金融市场的游资数额巨大，这些游资对世界各国的政治、军事、经济状况具有高度敏感性，由此产生的预期支配着游资的流动方向，对外汇市场形成巨大冲击，预期因素是短期内影响外汇市场的最主要因素。</span></p><p><br></p><p><strong style=\"color: rgb(68, 68, 68);\">货币管理当局的干预</strong></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">各国货币当局为了使汇率维持在政府所期望的水平上，会对外汇市场进行直接干预，以改变外汇市场的供求状况，这种干预虽然不能从根本上改变汇率的长期趋势，但对外汇的短期走势仍有重要影响。</span></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">投资者在进行现交易之前，第一步要进行的就是基本面的分析。如果缺乏基本分析，投资者根本不可能知道市场的现状，了解不到市场状况是否过热；投资的资金应该增加还是减少；市场趋向如何，所有这一切的基本因素分析都是不可缺少的步骤。</span></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">下面以黄金为例，介绍下基本分析存在哪些局限性?</span></p><p><br></p><p><strong style=\"color: rgb(68, 68, 68);\">捕捉不到近期的峰顶和谷底</strong></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">即使是再大牛市阶段，金价也会有起有落。假如可以把握每一浪的走势，在高处吸纳、在低处沽出，获得的利润必然要比简单持有高得多。而基本分析，恰恰不能捕捉到这些细微的变化。正是基于基本分析只能分析市场的大势所趋，而不能解答市价起起落落的原因。因此除了在黄金买卖中要进行基本分析以外，还要通过技术分析来进行补充。</span></p><p><br></p><p><strong style=\"color: rgb(68, 68, 68);\">公开市场，需求数字很难精确</strong></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">黄金供应的数字，只需要将主要产金国家的每年产量相加，便可获得较为有效的数字。但是，需求方面数字的获得就较为困难。比如有的企业会将金币进行熔化，用于工业生产，从而使需求的数字含有重复计算的因素。所以，不可能用精确的数字来进行基本面的分析。</span></p><p><br></p><p><strong style=\"color: rgb(68, 68, 68);\">部分国家的资料难以获得或时间滞后</strong></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">部分产金国家，并不情愿向国际公布数字，或者数字的公布有一定的滞后期，专家的数字只能是估计得来。所以当这些国家在套取外汇时，其推出市场黄金的数量，完全可能使市场产生震荡。基本分析在这方面的资料上，就显得有些不全面。</span></p><p><br></p><p><strong style=\"color: rgb(68, 68, 68);\">不能告诉我们入市的时机</strong></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">我们经过基本面的分析以后，都知道金价是在大牛市阶段。但是哪一天介入呢？现在做多，可能后天价格就会低得更多。等到下星期再买，可能现在就是最低价。因此，基本面分析只能告诉我门黄金价格的大势所趋，而根本不能向我们提供入市的最佳时机。</span></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">以上就是对于基本面局限性做的分析。因此在投资中除了进行基本分析以外，还要通过技术分析来进行补充。</span></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">● 不是所有的基本因素在任意时间点上都可以获知；</span></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">● 不同基本因素的重要性在不同时期发生变化，难于知道那些基本因素在什么时间是最重要的；</span></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">● 普通投机者可能很难收集和解读在每个市场上都能提供的信息中的财富；</span></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">● 基本分析经常无法回答多数投机者面对的问题，即时机抉择的问题；</span></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">● 大多数基本因素统计只在事后可以获得，当它们经由不同政府机关或遍布世界的新闻通讯社收集时，它们经常成为陈旧的信息，并不必然反映最近的形势；</span></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">● 基本因素可能因一些突然变化而发生重大改变，如天气、政治、国际事件和一些科学技术上的因素，这些事项要反映在实际的基本因素统计上需要经过一段时间；</span></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">● 以长远观点看，收集、更新和解读基本因素数据所需的巨大努力，可能不会产生有效率的收获(在收益的意义上)；</span></p><p><br></p><p><span style=\"color: rgb(68, 68, 68);\">● 大多数基本分析并不提供根据价格行动的变化，而是反映基于内在条件的变化，这些变化可能很迟缓，当事实上一个趋势上的重大变化可能已经开始的时候，没有可见的或可理解的变化支持看多或看空立场的理由。</span></p>"
                },
                {
                    id: '2',
                    title: '外汇平台搭建 | 搭建外汇平台哪些坑害死你',
                    des: '今天笔者和大家分享一下从业多年来的经验，笔者一直从事外汇后台方面的工作，曾经服务过百家的券商的软件后台，看到一些搭建方技术的低劣和业余程度，笔者想写一篇经验贴给想搭建外汇平台的朋友，希望可以起到提示的作用。',
                    image: Image2,
                    date: '2019-12-21',
                    read: '2434'
                },
                {
                    id: '3',
                    title: '数汇学院 | 选择值得信赖的外汇经纪商，这5个细节不可忽视！',
                    des: '外汇市场作为全球最大的金融市场，吸引着越来越多的投资者参与其中，各类外汇经纪商也如春笋般涌现。对于刚踏入外汇市场的交易者来说，选择一个适合自己的经纪商是相当重要的一件事。今天小编就和大家聊聊外汇经纪商。',
                    image: Image3,
                    date: '2019-12-21',
                    read: '5433'
                },
                {
                    id: '4',
                    title: '普及外汇知识之：一千多家外汇经纪商，应该如何选择？',
                    des: '中国大陆是全球主要外汇经纪商竞相追逐的“大市场”，粗略统计目前国内有一千多家外汇经纪商。因为目前国内没有监管，甚至没有任何限制门槛，无论何时何地，只要有资金，都可以开展业务，导致国内经纪商的质量参差不齐。如何在众多的经纪商中选择一家最优经纪商成为了困扰投资者的一个难题。',
                    image: Image4,
                    date: '2019-12-21',
                    read: '965'
                },
                {
                    id: '5',
                    title: '美国外汇保证金当年是怎么去杠杆的？',
                    des: '美国次贷危机引发的全球金融危机之后，欧美各国的金融机构遭受巨大损失和面临破产威胁，美国的金融机构尤为严重。迫使美国政府出台各项政策限制金融业。过度使用高杠杆、资产负债表过度膨胀是造成此次危机的主要原因。于是去杠杆化成为应对金融危机的核心内容。',
                    image: Image5,
                    date: '2019-12-21',
                    read: '4533'
                },
                {
                    id: '6',
                    title: '对周线与日线的一些见解',
                    des: '日线是金价每天波动的反映，因此要从更长的周期把握股价的走势，还得应用周线图来观察。一般来说，在周线图上，我们可通过观察周线与日线的共振、二次金叉、阻力位、背离等几个现象寻找买卖点。',
                    image: Image6,
                    date: '2019-12-21',
                    read: '3231'
                }
            ]
        }
    },
    created() {
        this.titleId = this.$route.params.id
        for (var i=0;i < this.articleList.length;i++){
            if (this.titleId === this.articleList[i].id) {
                this.article = this.articleList[i]
                break
            }
        }
    },
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
