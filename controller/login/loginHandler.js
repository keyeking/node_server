/**
 * @登录
 */
// 导入数据库连接工具
const db = require('../../utils/mysql')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken') //导入加密文件
const {
  jwtSecretKey
} = require('../../config/jwt') //导入加密的配置文件
const login = (req, res) => {
  const userinfo = req.body
  db.getConnection((err, connection) => {
    if (err) {
      return res.ysend(err)
    }
    const sql = `select * from login where username=?`
    connection.query(sql, userinfo.username, (err, result) => {
      if (err) {
        return res.ysend(err)
      }
      if (result.length !== 1) {
        return res.ysend('登录失败！')
      }
      // 判断用户输入的登录密码是否和数据库中的密码一致
      const isPassword = bcrypt.compareSync(userinfo.password, result[0].password)
      if (!isPassword) {
        return res.ysend('密码错误')
      }
      // 密码正确生成 Token 字符串
      // 将用户信息提取出来,不需要密码，将密码置位空
      const user = {
        ...result[0],
        password: ''
      }
      // 生成token ,有效时间7天
      const TOKEN = jwt.sign(user, jwtSecretKey, {
        expiresIn: "7d"
      })
      res.send({
        status: 0,
        msg: '登录成功',
        token: 'Bearer '+TOKEN
      })
    })
  })
}
module.exports = login
