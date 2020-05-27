<template lang="pug">
  #e-video-detail
    BaseLayout
      .video-detail-container
        .video-detail-content
          .video-detail-left
            .video-detail-videoplayer
              video(
                :src="videoSelect.src"
                :poster="videoSelect.poster"
                controls="controls"
                autoplay="autoplay"
                width="100%"
                height="100%"
              )
            Control(
              :watch="23"
              :collect="12"
            )
          .video-detail-list
            .video-detail-name {{videoInfo.name}}
            .video-detail-count 共计{{videoInfo.videoDetailList.length}}节课
            .video-detail-list-container
              .video-detail-list-item(
                v-for="list in videoInfo.videoDetailList"
                :class="videoSelect.id === list.id ? 'active': null"
                @click="selectVideo(list)"
              )
                .video-detail-list-item-title {{list.title}}
                .video-detail-list-item-long
                  img(src="")
                  span 时长 {{list.long}}
        .video-detail-info.e-flex
          .video-detail-info-des
            .video-detail-info-des-title
              .video-detail-info-des-tag(
                :class="videoDesType === 0 ? 'active' : null"
                @click="videoDesType = 0"
              ) 课程概述
              .video-detail-info-des-tag(
                :class="videoDesType === 1 ? 'active' : null"
                @click="videoDesType = 1"
              ) 延伸阅读
            .video-detail-info-des-context {{videoDesType === 0 ? videoInfo.des : videoInfo.extend}}
          .video-detail-info-recommend
            .video-detail-info-recommend-title.e-flex
              img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABtElEQVQ4T6XTMWgUQRgF4Pf+2aBYKBLvVlREsbERQQs7K8FCsLMRbi+gthcLGwtTWVmkEwRR7yagfSBgYRlRsVICNjYWxswGFBUxR3bnye55lyAHcmTK+Wc+Zv43Q+xwcNx+AVSWvgB0ZlDnR0Id+vzVv+vHA61mKxJPAPYBFAD2AlhxPpz6L6CZY7sVf3+QdMSIs/T5+zJrfgG4z/mwZyygduN8IeeqolGXETEL4pHz4UY1V7abnyE0DHaxBqR1LoSV+nJqpeci9RJgDfwdv2xTJ/gsD1sADw2LBPqC7jmfz9WAiGUAb2hYjhEdQH3n8/3DDWX74C3E2BicEIxgB8CU88GNABnuu264WWbpV0DcDmy/d5VQzNKfADacDwcmB2amT8aYvDNykb21KxMDRZZeJ/DQiDvshbsTA2UrnQcxaxYvsbv+fGIgZulbQaet6Kd8+v3bFgA8sGLXXEw2PlXRV03U1aOjJOpGJqUJxaqAVefD8dE7qGJU1V5DKWEK0A+juyCVr0GWwxQkkJKR9PTh2gDIpg8LSbeKePRQiIBNu60kPh732SI5n/TWlmpgh78ZfwBqLusRciODHwAAAABJRU5ErkJggg==")
              span 推荐课程
</template>

<script>
import BaseLayout from '../../layout/base_layout.vue'
import Control from './control.vue'
import VideoImage1 from "../../../assets/images/school_video_image1.jpg";
import VideoImage2 from "../../../assets/images/school_video_image2.jpg";
import VideoImage3 from "../../../assets/images/school_video_image3.png";
import VideoImage4 from "../../../assets/images/school_video_image4.jpg";
import VideoImage5 from "../../../assets/images/school_video_image5.jpg";
import VideoImage6 from "../../../assets/images/school_video_image6.jpg";
import VideoImage7 from "../../../assets/images/school_video_image7.jpg";
import VideoImage8 from "../../../assets/images/school_video_image8.jpg";

export default {
  data() {
    return {
      videoInfo1: {
        name: '日内交易',
        des: '日内交易是一种交易模式，英文名字是daytrade,主要是指持仓时间短，不留过夜持仓的交易方式。日内交易捕捉入市后能够马上脱离入市成本的交易机会，入市之后如果不能马上获利，就准备迅速离场。因为这种交易方式在市时间短，所以承受的市场波动的风险较低。目前，全球范围内有一些操盘高手采用此交易方式取得稳定的盈利，获得了成功，比如查理D已经成为日内交易的神话，因此日内交易现在已经被越来越多的人所推崇和接受。',
        extend: '在我们进入到我的日内交易策略之前，我将快速引导你去了解一个可以使用且潜在可以盈利的策略应该为你提供的是什么。',
        videoDetailList: [
          {
            id: '1',
            title: '01 在交易策略中我们看重的是什么',
            long: '05:07',
            src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/d2df071e88044e2990eb2aa5f59e10e8.mp4',
            poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/bdbcbd5480244ceaa850f397027a69af.jpg',
            watch: 1204,
            collect: 76
          },
          {
            id: '2',
            title: '02 成为专业交易者的必要条件',
            long: '03:29',
            src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/91807bb15ddc4f6e992604b428d39677.mp4',
            poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/6796d140a3284b85a8f1457bc087d1ce.jpg',
            watch: 1165,
            collect: 65
          },
          {
            id: '3',
            title: '03 日内交易顺势策略的快速概览',
            long: '04:04',
            src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/4b8179183b3b48a89f48282728c7be87.mp4',
            poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/c064dd192801470e8b2dbaaedbe51547.jpg',
            watch: 1076,
            collect: 61
          },
          {
            id: '4',
            title: '04 在Metatrader里面设置图表／交易浏览',
            long: '01:01',
            src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/9446ff2c805347aaa45d4297dd11e6f7.mp4',
            poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/ec8a41b54d9d468e9c2b17051cf5b7cf.jpg',
            watch: 879,
            collect: 55
          },
          {
            id: '5',
            title: '05 枢轴点',
            long: '03:07',
            src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/310b593446064715b844d60a17b8bb91.mp4',
            poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/28cec726dd5a4ecea02a6725778334d3.jpg',
            watch: 855,
            collect: 54
          },
          {
            id: '6',
            title: '06 近似数和心理界限',
            long: '03:15',
            src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/cb31e5ec48ca42178efa8a157d7333aa.mp4',
            poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/f597e72923b2425f982b19ce7b902f9b.jpg',
            watch: 811,
            collect: 51
          },
          {
            id: '7',
            title: '07 蜡烛线',
            long: '01:49',
            src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/989958bebe8e49ad8a47e82ad584f2f5.mp4',
            poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/ec68a2ad5f2f4d118c3a670182a4d507.jpg',
            watch: 789,
            collect: 41
          },
          {
            id: '8',
            title: '08 移动平均 - 动量确认',
            long: '01:50',
            src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/803be0525939435c9fa3678318274686.mp4',
            poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/451997fae0434cd6a9fa290273e8ec8f.jpg',
            watch: 745,
            collect: 41
          },
            {
                id: '9',
                title: '09 随机震荡指标',
                long: '02:03',
                src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/55b1e7593166451eb64cf2c4606cc8df.mp4',
                poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/4cb15f3fa9114cea8653604ada6a0fda.jpg',
                watch: 721,
                collect: 41
            },
            {
                id: '10',
                title: '10 相对强度指标',
                long: '01:56',
                src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/5cfd0cc2f7664af281e6d3359cefd3f0.mp4',
                poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/948f47980a1040609932358ae9d9660b.jpg',
                watch: 745,
                collect: 41
            },
            {
                id: '11',
                title: '11 多周期分析的操作',
                long: '03:31',
                src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/9151afc4d5b44b77888ae802adefadd2.jpg',
                poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/c737a35d069845cdb510b3fb8b75c65f.jpg',
                watch: 745,
                collect: 41
            },
            {
                id: '12',
                title: '12 一次完整的交易过程',
                long: '05:06',
                src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/b0ecdda58a1a4d4db4cbe19849efab87.mp4',
                poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/6027e0ae24ff41328c3ae633aebd2999.jpg',
                watch: 745,
                collect: 41
            },
            {
                id: '13',
                title: '13 交易时间和工具',
                long: '02:08',
                src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/e6d7c4795713443c95979d1ec5b9007f.mp4',
                poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/5dd637ee86194f539e1b4bc7114e347a.jpg',
                watch: 715,
                collect: 41
            },
            {
                id: '14',
                title: '14 资金管理',
                long: '03:57',
                src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/f75811ba48b24e6a8d688f9ca8f74bc5.mp4',
                poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/d9e8779f65894db69b23af6ea81f79de.jpg',
                watch: 709,
                collect: 41
            }
        ]
      },
        videoInfo2: {
            name: '外汇交易介绍',
            des: '外汇市场是全球最大的市场，每天会有大约2万亿美元等值货币被转手交易。在本课程中，你将了解到为什么几乎每一个人或者企业都会或多或少被卷入到这个市场中，同时你也会知晓为什么人们为什么想要在外汇中投机，这些理由包括： 交易者能够使用非常高的杠杆倍率进行外汇交易； 没有任何做空限制； 非常灵活的(交易)时间、市场很难被人为操纵，滑点水平亦可控； 外汇是具有吸引力的、可替代性的和指示性的资产类别。' ,
            extend: '外汇市场是全球最大的市场，每天会有大约2万亿美元等值货币被转手交易。在本课程中，你将了解到为什么几乎每一个人或者企业都会或多或少被卷入到这个市场中，同时你也会知晓为什么人们为什么想要在外汇中投机，这些理由包括： 交易者能够使用非常高的杠杆倍率进行外汇交易； 没有任何做空限制； 非常灵活的(交易)时间、市场很难被人为操纵，滑点水平亦可控； 外汇是具有吸引力的、可替代性的和指示性的资产类别。',
            videoDetailList: [
                {
                    id: '1',
                    title: '01 外汇交易介绍',
                    long: '02:52',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/e121b0ab95d748e9b7f46392acca6dd2.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/924f921e05ba4a6eb1b39705006fd199.jpg',
                    watch: 2763,
                    collect: 177
                },
                {
                    id: '2',
                    title: '02 为什么要交易外汇',
                    long: '03:24',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/68c144e75b5a42b19620e0885e59b953.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/338e069363634e9d91ed99b03f4d0d66.jpg',
                    watch: 1165,
                    collect: 65
                },
                {
                    id: '3',
                    title: '03 交易外汇更多的理由',
                    long: '02:33',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/deffa0d32ddd4a67bfcb4276ff108ba0.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/06d936fdd52047388f6e0bf362b5c643.jpg',
                    watch: 1076,
                    collect: 61
                },
                {
                    id: '4',
                    title: '04 进行货币对交易',
                    long: '04:03',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/a46a373a8988489f80ce472e0a1d84b8.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/1ac933781bcb483ca975bfe80bc8cfae.jpg',
                    watch: 879,
                    collect: 55
                },
                {
                    id: '5',
                    title: '05 市场价格基础',
                    long: '03:49',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/3a95af93a2284874a176060963ada6a5.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/48b05a60688e4e1ba9a54eb24ec4fc13.jpg',
                    watch: 855,
                    collect: 54
                },
                {
                    id: '6',
                    title: '06 选择一家在线经纪商',
                    long: '03:57',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/26a0659dcc604c1287e8b2042dc8662c.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/653832b019d649438808bdd5fc781c0d.jpg',
                    watch: 811,
                    collect: 51
                }
            ]
        },
        videoInfo3: {
            name: '用价格行为来进行交易',
            des: '本课将教投资者如何解读外汇K线图，目前为止显示汇率变化的最常见方法。K线图是几百年前日本米商描述米价变动的OHLC条形图的高级替代品。投资者将学习以下内容： • 如何绘制外汇K线图 • 如何解读K线图主体和阴线部分所预示的未来价格变动 • K线图如何被用来衡量价格波动强度 • 与买卖区间结合后，如何解读K线图能指导交易决策。' ,
            extend: '起源于日本的K线图可视化的呈现了价格走势，被普遍认为较西方条形图描述性更强。K线图使得价格信息更容易被人眼感知，所以课程开始于阐释如何绘制不同类型的K线图。 每只K线图的开盘价、最高价、最低价和收盘价均有意义，但本课重点是教大家如何识别五个最重要K线图形态中的三个：大头针K线/锤子线（the Pin Bar），内包线(the Inside Bar) ，外包线(the Outside Bar)。',
            videoDetailList: [
                {
                    id: '1',
                    title: '01 重要的蜡烛图类型——第一部分',
                    long: '03:56',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/bec96b4d11e44c078571d99555f77447.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/64eb44a5156d4caaa715342f4c5d5c5a.jpg',
                    watch: 2763,
                    collect: 177
                },
                {
                    id: '2',
                    title: '02 重要的蜡烛图类型——第二部分',
                    long: '04:10',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/a03b6f4b5a134547be87e9c6dd53d7fb.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/d04e85b20890448a8977e45a4a636c62.jpg',
                    watch: 1165,
                    collect: 65
                },
                {
                    id: '3',
                    title: '03 价格行为基础',
                    long: '03:49',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/c77b69492a4f4ebb8f36cecabf0c65b4.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/ab85d4be27f541c796afb6b9676579a1.jpg',
                    watch: 1076,
                    collect: 61
                },
                {
                    id: '4',
                    title: '04 支撑和阻力水平',
                    long: '05:13',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/3cc7a8e82a974690ab8c9c9cc2e6719a.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/23050db5d6034fe38194b99684744022.jpg',
                    watch: 879,
                    collect: 55
                },
                {
                    id: '5',
                    title: '05 价格行为的交易策略',
                    long: '04:35',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/ca860c3406144cb6aadcddc320b150a9.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/a67b098025fd46f98463a2e1df4d02ca.jpg',
                    watch: 855,
                    collect: 54
                }
            ]
        },
        videoInfo4: {
            name: '用双布林带进行交易',
            des: '双布林带指标(缩写为DBB’s)是基于技术交易规则的基础而衍生出来的一种策略，双布林带指标是由两套布林带指标联系在一起的，但优于典型的单布林带指标，因为，双布林带指标不仅适用于在横盘走势，在有较强趋势性的行情走势中都也适用。' ,
            extend: '在上一课中，我们了解到布林带是可以用于横盘或窄幅波动中的市场的一种趋势指标，但在有强趋势的背景下，其单独使用的效果就可能不尽如人意。所以，现在我们将引入双布林带（DBBs）这一概念，并对其加以更多了解。 双布林带是标准单个布林带的强大变化，' +
                '因为它在横盘波动和有强劲趋势的的市场中都能透露出关于动量状况的信息，从而更多地反映了趋势强度。 本课程将显示出，与标准布林带不同的是，双布林带在强势趋势市场中非常有用，因为它们有助于我们更好地确定K线图中价格行为中所显示的真实动量。',
            videoDetailList: [
                {
                    id: '1',
                    title: '01 双布林带——定义和构建',
                    long: '03:21',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/3088c1ef1ea943a2a4d2abbeed5579cf.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/44efb8449075465aaa0dd3cae7a7c171.jpg',
                    watch: 2763,
                    collect: 177
                },
                {
                    id: '2',
                    title: '02 双布林带——三个区域之三套规则',
                    long: '03:20',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/ec0e34a23a344daba44250285cc99f39.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/39718c94b83f4861a06cd33fdd4d4462.jpg',
                    watch: 1165,
                    collect: 65
                },
                {
                    id: '3',
                    title: '03 双布林带——四大规则之规则1和2',
                    long: '05:13',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/5c93a986fe3742a3a81c77698b7d0834.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/9bc4cd92e7c1498fab63653252e5219f.jpg',
                    watch: 1076,
                    collect: 61
                },
                {
                    id: '4',
                    title: '04 双布林带——四大规则之规则3',
                    long: '03:51',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/6b617cb499094a5489b9a82cf5def039.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/36624cef7f664260bfaf8e01def63c9c.jpg',
                    watch: 879,
                    collect: 55
                },
                {
                    id: '5',
                    title: '05 双布林带——四大规则之规则4',
                    long: '03:08',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/dfebed1769af4e4aaf57427714f75364.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/af7552dba41a41fabef899984b7df96f.jpg',
                    watch: 855,
                    collect: 54
                }
            ]
        },
        videoInfo5: {
            name: '斐波那契回归线',
            des: '本节将介绍斐波那契回撤指标，该指标是基本在自然界和人类行为中广泛存在的数学比例。简而言之，当价格朝某一方向运行时，它通常会出现一定程度的回撤，而这一回撤的水平和价格运行区间存在某些特定的比例关系。从斐波那契指标中，我们将得知哪些回撤的水平比较可靠，以及： 如何在图表上绘制斐波那契回撤线，以确定可能的支撑或阻力位。 如何通过多个时间周期去绘制斐波那契回撤位。 如何通过斐波那契支撑区设置进出场的点位' ,
            extend: '本节将介绍另一种类型的支撑阻力——斐波那契回撤指标。斐波那契中黄金比例是基于特定的数学规律，也就是“斐波那契数列”前后项之间的比值推导出来的。至少在西方世界范畴中，这个数例是由13世纪的意大利数学家列奥纳多・斐波那契所率先发现的，这一数例在生物学、音乐、美术、建筑和其他诸多领域都有广泛应用，但此处，我们仅讨论其在交易领域的应用。',
            videoDetailList: [
                {
                    id: '1',
                    title: '01 斐波那契指标的介绍',
                    long: '03:00',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/a4d4fe0363704da0abcca6ef089497c4.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/51b3e6b6bfd0497591759a7618bc952f.jpg',
                    watch: 2763,
                    collect: 177
                },
                {
                    id: '2',
                    title: '02 斐波那契指标叠加斐波那契指标',
                    long: '02:35',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/abe93d4efa594f838a5ae4f1aacb93a8.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/4fbcdb7b951f47cfb6c3d822e409c9d7.jpg',
                    watch: 1165,
                    collect: 65
                },
                {
                    id: '3',
                    title: '03 如何绘制斐波那契指标',
                    long: '05:19',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/3e87742fe10842b489a4e3817ec652a4.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/70a39b39135b413ea918fd9d94f5bcf0.jpg',
                    watch: 1076,
                    collect: 61
                }
            ]
        },
        videoInfo6: {
            name: '高级支撑阻力和趋势线',
            des: '由于在外汇交易中正确的理解如何区分阻力位和支撑位对获利很重要，因而，掌握好阻力位和支撑位的概念，也就变得至关重要。在本章中，我们将展示如何通过评估支撑位/阻力位上所汇聚的好几个因素，来确定支撑位和阻力位的效力(不仅仅是位置)，' +
                '这些因素包括支撑位/阻力位所存在的时间和持久性。我们还将探索一些先进的方法来确定哪些区域可能成为支撑/阻力位。如： 前几天或前几周的最高点和最低点； 之前趋势的始点和终点； 整数关口、布林线、移动均线； 趋势线所显示的重要支撑位/阻力位； ' +
                '目前为止，通过上述的学习，大家已经了解了一些关于K线图的基础知识，你已准备好学一些核心的技术分析，并学习一些区分支撑位/阻力位的工具，以及辨识支撑位/阻力位附近最佳的入场交易点和退出点。' ,
            extend: '阻力/支撑位并不是难以逾越的屏障。支撑位是指在汇价下跌时可能遇到支撑，从而止跌回稳的价位。其对应的是阻力位。阻力位则是指在汇价上升时可能遇到压力，从而反转下跌的价位。在汇价运行时，阻力与支撑是可以互换的。具体地说，' +
                '如果重大的阻力位被有效突破，那么该阻力位则反过来变成未来重要的支撑位；反之，如果重要的支撑位被有效击穿，则该价位反而变成今后汇价上涨的阻力位了。交易员密切关注阻力位/支撑位，研究其对价格波动的影响。 在此，我们将学习这些支撑/阻力位如何给市场提供结构性支撑、并确定一些交易员极有可能会寻找交易机会的点。',
            videoDetailList: [
                {
                    id: '1',
                    title: '01 支撑阻力的价格水平',
                    long: '02:47',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/9354ceb9600b4639a4f4ddfcfa0d7a72.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/fc6523e5f231425c879e1fa0c12696f6.jpg',
                    watch: 2763,
                    collect: 177
                },
                {
                    id: '2',
                    title: '02 单趋势线的支撑阻力',
                    long: '02:38',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/ac4a1573e1784614b4ac9af6890f695b.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/790e9e27e474447c97b560d802a51c0c.jpg',
                    watch: 1165,
                    collect: 65
                },
                {
                    id: '3',
                    title: '03 支撑阻力趋势线——通道',
                    long: '04:48',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/0796d6e3c92a49bd89b19aa519aeada2.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/15bf3d929ae645a1987130cc60317739.jpg',
                    watch: 1076,
                    collect: 61
                },
                {
                    id: '4',
                    title: '04 支撑阻力趋势线——移动均线',
                    long: '04:10',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/d4e8991822f5419083dba2323075a132.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/ff2eaa5cb2ef444fa18cc10e2b6a5732.jpg',
                    watch: 879,
                    collect: 55
                },
                {
                    id: '5',
                    title: '05 支撑阻力趋势线——布林带',
                    long: '04:59',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/607eea6f43834f2f85515bc080589be1.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/54c0318b2acc4f5b9eb25e91635b519b.jpg',
                    watch: 855,
                    collect: 54
                }
            ]
        },
        videoInfo7: {
            name: '移动均线交叉和动量',
            des: '本课，我们将学习如何之前学习的技术指标相结合进行分析。技术分析是一种利用技术指标对历史行情走势进行分析从而预测将来行情走势的行为。本课中，你将看到动能指标如移动均线(MAs)与支撑/阻力结合，是如何向投资者提供更为精确的入场和离场位置预测的。 双布林带指标可以作为外汇分析中的动能指标，同样支撑/阻力区间以及通道可以作为动能指标，而两种类型的移动均线交叉可以辨别趋势的变化。' ,
            extend: '动能指标用来衡量价格变动的速率，通常被用来判断趋势弱化和潜在的反转点。虽然，动量指标通常由于太过简单而被忽视，但在外汇市场中，动量指标的重要性并不应当被忽略。 在本课中，我们将会学到如何使用动能指标。只要使用得好，动能交易的盈利能力不亚于使用支撑/阻力交易。',
            videoDetailList: [
                {
                    id: '1',
                    title: '01 动量指标',
                    long: '04:13',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/07095e12c235438f83d9726924cf219c.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/3af39729909f4a9583d044076e9326ed.jpg',
                    watch: 2763,
                    collect: 177
                },
                {
                    id: '2',
                    title: '02 移动均线交叉和简单的交易系统——第一部分',
                    long: '02:45',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/5e03b3a8260a4f129cf9c46ee9bfe05f.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/2d1beee233e34542940d0618032436a1.jpg',
                    watch: 1165,
                    collect: 65
                },
                {
                    id: '3',
                    title: '03 移动均线交叉和简单的交易系统——第二部分',
                    long: '02:53',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/7d3cab13f4534f93a0b8cbe66cab9002.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/9f05e0eeebf74b7cb87d59feb4045083.jpg',
                    watch: 1076,
                    collect: 61
                }
            ]
        },
        videoInfo8: {
            name: '外汇基本面简述',
            des: '在选择完一家经济商后，理论上你就可以开始进行外汇交易了。但是在实际交易前，你还需要做一些准备，以便更好的计划交易。' ,
            extend: '在第一课中我们提到，外汇是一个连续开放的市场，并且是一个全球性的市场。因此在进行交易前，必须知道一些关于外汇交易时间方面的信息。',
            videoDetailList: [
                {
                    id: '1',
                    title: '01 市场时段',
                    long: '03:24',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/bc248bf9096841abb47a7809f384e51d.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/4468e2f6ddb64d5984edc445a47aded8.jpg',
                    watch: 2763,
                    collect: 177
                },
                {
                    id: '2',
                    title: '02 央行简介',
                    long: '02:54',
                    src: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/video/fbd0a40f3910421b96653073cb0e4596.mp4',
                    poster: 'https://oss-hk2069.oss-accelerate.aliyuncs.com/image/4e618c68f88c4ccf8da0e47dac16ebd5.jpg',
                    watch: 1165,
                    collect: 65
                }
            ]
        },
      videoInfo: {},
      videoId: '',
      videoSelect: null,
      videoDesType: 0, // 0:概要； 1：延伸
    }
  },
  created() {
      this.videoId = this.$route.params.id
      if(this.videoId === 1 || this.videoId === '1'){
          this.videoInfo = this.videoInfo1
      }
      if(this.videoId === 2 || this.videoId === '2'){
          this.videoInfo = this.videoInfo2
      }
      if(this.videoId === 3 || this.videoId === '3'){
          this.videoInfo = this.videoInfo3
      }
      if(this.videoId === 4 || this.videoId === '4'){
          this.videoInfo = this.videoInfo4
      }
      if(this.videoId === 5 || this.videoId === '5'){
          this.videoInfo = this.videoInfo5
      }
      if(this.videoId === 6 || this.videoId === '6'){
          this.videoInfo = this.videoInfo6
      }
      if(this.videoId === 7 || this.videoId === '7'){
          this.videoInfo = this.videoInfo7
      }
      if(this.videoId === 8 || this.videoId === '8'){
          this.videoInfo = this.videoInfo8
      }
      console.log(this.videoInfo)
    this.videoSelect = this.videoInfo.videoDetailList[0]
  },
  components: {
    BaseLayout,
    Control
  },
  methods: {
    selectVideo(video) {
      this.videoSelect = video
    }
  }
}
</script>

<style lang="sass" scoped>
.video-detail

  &-container
    width: 1200px
    margin: 60px auto 0

  &-content
    background-color: #fff
    display: flex
    margin-bottom: 20px

  &-videoplayer
    width: 780px
    height: 456px

  &-list
    padding: 30px
    flex: 1

    &-container
      height: 352px
      overflow-y: scroll

    &-item
      padding-bottom: 15px
      margin-bottom: 15px
      border-bottom: 1px solid #F0F0F0;
      cursor: pointer

      &.active
        color: #E74B3A

      &-title
        font-size: 16px
        margin-bottom: 15px

  &-name
    font-size: 20px
    font-weight: 600
    margin-bottom: 15px

  &-count
    margin-bottom: 10px

  &-info
    margin-bottom: 20px

    &-des
      width: 793px
      height: 352px
      margin-right: 20px
      background-color: #fff

      &-title
        display: flex
        height: 56px
        line-height: 56px
        padding-left: 20px
        border-bottom: 1px solid #F0F0F0

      &-tag
        padding: 0 10px
        margin-right: 20px
        cursor: pointer

        &.active
          font-weight: 600
          border-bottom: 3px solid #333333

      &-context
        min-height: 352px
        padding: 20px 30px
        box-sizing: border-box
        font-size: 16px

    &-recommend
      flex: 1
      background-color: #fff

      &-title
        align-items: center
        height: 56px
        line-height: 56px
        border-bottom: 1px solid #F0F0F0
        padding-left: 20px

        img
          margin-right: 10px
</style>
