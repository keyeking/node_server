const express = require('express')
const loginRoute = express.Router()
const loginModule = require('../../controller/login/index')

// 注册用户
loginRoute.post('/register', loginModule.register)
// 登录
loginRoute.post('/login', loginModule.login)
// 修改密码
loginRoute.post('/resetPassword', loginModule.updatePassword)
// 删除账号
loginRoute.delete('/delUser', loginModule.delUser)
// 查看详情
loginRoute.get('/userinfo', loginModule.userinfo)

module.exports = loginRoute
