//自定义中间件
const ysend = require('./ysend')
const middlewares = (app) => {
  app.use(ysend)
}
module.exports = middlewares
