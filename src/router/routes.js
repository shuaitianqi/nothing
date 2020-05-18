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
