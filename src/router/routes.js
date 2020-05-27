export default [
  {
    path: '/',
    component: () => import('../views/pages/index/index.vue'),
    name: 'index',
    meta: {
      title: '首页'
    }
  },
  {
    path: '/trading_strategy',
    component: () => import('../views/pages/trading_strategy/index.vue'),
    name: 'tradingStrategy',
    redirect: '/trading_strategy/list',
    meta: {
      title: '交易员'
    },
    children: [
      {
        path: 'list',
        component: () => import('../views/pages/trading_strategy/trading_strategy.vue'),
        name: 'tradingStrategyList',
        meta: {
          title: '交易员'
        }
      },
      {
        path: 'detail/:id',
        component: () => import('../views/pages/trading_strategy/trading_strategy_detail.vue'),
        name: 'tradingStrategyDetail',
        meta: {
          title: '交易员详情'
        }
      },
      {
        path: 'follow',
        component: () => import('../views/pages/trading_strategy/trading_strategy_follow.vue'),
        name: 'tradingStrategyFollow',
        meta: {
          title: '跟随大师'
        }
      }
    ]
  },
  {
    path: '/message',
    component: () => import('../views/pages/message/finance.vue'),
    name: 'message',
    meta: {
      title: '交易资讯'
    }
  },
  {
    path: '/message/market_message',
    component: () => import('../views/pages/message/market.vue'),
    name: 'marketMessage',
    meta: {
      title: '闪电数据'
    }
  },
  {
    path: '/message/finance_message',
    component: () => import('../views/pages/message/finance.vue'),
    name: 'financeMessage',
    meta: {
      title: '财经日志'
    }
  },
  {
    path: '/school',
    component: () => import('../views/pages/school/school.vue'),
    name: 'school',
    meta: {
      title: '外汇学院'
    }
  },
  {
    path: '/school/article',
    component: () => import('../views/pages/school/article.vue'),
    name: 'schoolArticle',
    meta: {
      title: '精选文章'
    }
  },
  {
    path: '/school/article/:id',
    component: () => import('../views/pages/school/article_detail.vue'),
    name: 'schoolArticleDetail',
    meta: {
      title: '文章详情'
    }
  },
  {
    path: '/school/video',
    component: () => import('../views/pages/school/video.vue'),
    name: 'schoolVideo',
    meta: {
      title: '视频课程'
    }
  },
  {
    path: '/school/video/:id',
    component: () => import('../views/pages/school/video_detail.vue'),
    name: 'schoolVideoDetail',
    meta: {
      title: '视频课程详情'
    }
  },
  {
    path: '/school/wiki',
    component: () => import('../views/pages/school/wiki.vue'),
    name: 'schoolWiki',
    meta: {
      title: '外汇百科'
    }
  },
  {
    path: '/school/wiki/:id',
    component: () => import('../views/pages/school/wiki_detail.vue'),
    name: 'schoolWikiDetail',
    meta: {
      title: '外汇百科'
    }
  },
  {
    path: '/quantization',
    component: () => import('../views/pages/quantization/quantization.vue'),
    name: 'quantization',
    meta: {
      title: '量化交易'
    }
  },
  {
    path: '/futures',
    component: () => import('../views/pages/futures/futures.vue'),
    name: 'futures',
    meta: {
      title: '期货跟投'
    }
  },
  {
    path: '/about',
    component: () => import('../views/pages/about/about.vue'),
    name: 'about',
    meta: {
      title: '关于我们'
    }
  },
  {
    path: '/user',
    component: () => import('../views/pages/user/index.vue'),
    redirect: '/user/registe',
    children: [
      {
        path: 'registe',
        name: 'registe',
        component: () => import('../views/pages/user/registe.vue'),
        meta: {
          title: '注册'
        }
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/pages/user/login.vue'),
        meta: {
          title: '登录'
        }
      }
    ]
  }
]
