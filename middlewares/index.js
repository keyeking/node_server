//自定义中间件
const ysend = require('./ysend')
const jwtError = require('./jwtError.js')
const middlewares = (app) => {
  app.use(ysend)
  app.use(jwtError)
}
module.exports = middlewares
