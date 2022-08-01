// 路由模块
const loginRoute = require('./login/login')

function route(app) {
  app.use('/api', loginRoute)
}
module.exports = route
