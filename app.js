const express = require('express')
const app = express()
const route = require('./routers/index.js')
const middlewares = require('./middlewares/index') //引用自定义中间件
//解析 application/x-www-form-urlencoded数据
app.use(express.urlencoded({ extended: false }))
//配置解析application/json格式数据的内置中间件
app.use(express.json())
middlewares(app)
route(app)
app.listen(3000, () => {
  console.log('====================================')
  console.log('服务器已启http:127.0.0.1:3000')
  console.log('====================================')
})
