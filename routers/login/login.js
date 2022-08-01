const express = require("express");
const loginRoute = express.Router();
const loginModule = require("./login_handler.js");
// 注册用户
loginRoute.post("/register", loginModule.register);
// 登录
loginRoute.post("/login", loginModule.login);
// 修改密码
loginRoute.post("/resetPassword", loginModule.resetPassword);
// 删除账号
loginRoute.delete("/delUser", loginModule.delUser);
module.exports = loginRoute;
