const express = require('express')
const app = express()
const route = require('./routers/index.js')
const {jwtSecretKey}=require('./config/jwt')//导入生成token的配置文件
const { expressjwt: jwt } = require('express-jwt')//解析token的中间件

// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(jwt({ secret: jwtSecretKey,algorithms: ["HS256"], }).unless({ path: [/^\/api\//] }))

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
