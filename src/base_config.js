let BASE_URL = ''
// const BASE_URL_DEVELOPMENT = ''
// const BASE_URL_TEST = ''
// const BASE_URL_PRODUCTION = ''
const BASE_URL_ALL = 'http://47.96.165.40:8188'
const CRM_URL = 'http://47.96.165.40:8080'
// const BASE_URL_ALL = 'http://127.0.0.1:8088'
// let CRM_URL = 'http://127.0.0.1:8181'

switch (process.env.NODE_ENV) {
  case 'development':
    BASE_URL = BASE_URL_ALL
    break
  case 'test':
    BASE_URL = BASE_URL_ALL
    break
  case 'production':
    BASE_URL = BASE_URL_ALL
    break
  default:
    BASE_URL = BASE_URL_ALL
    break
}

export default {
  TITLE: '交易',
  BASE_URL,
  CRM_URL
}
