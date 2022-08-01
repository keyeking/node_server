/**
 * @注册
 */

// 导入数据库
const db = require('../../utils/mysql')
// 导入对密码加密模块
const bcrypt = require('bcryptjs')
// 导入账号验证模块
const reg = require('../../utils/regex')

// 注册
const register = (req, res) => {
  // 获取传入的json数据
  const userinfo = req.body
  // 判断是否为空
  if (!userinfo.username || !userinfo.password) {
    return res.ysend('用户名或者密码不能为空')
  }
  // 判断是否合法
  if (!reg.regPhone(userinfo.username) || !reg.regPhone(userinfo.password)) {
    return res.ysend('用户名不合法')
  }
  // 检查用户名是否被占用
  db.getConnection((err, connection) => {
    if (err) {
      return res.ysend(err)
    }
    // 定义查询用户名的语句
    const sql = 'select * from login where username=?'
    connection.query(sql, userinfo.username, (err, result) => {
      if (err) {
        return res.ysend(err)
      }
      if (result.length > 0) {
        return res.ysend('用户名已被使用，请重新输入用户名')
      }
      // 对密码进行加密，随机盐的长度为10
      userinfo.password = bcrypt.hashSync(userinfo.password, 10)
      // 将用户写入到数据库中
      const sql = 'insert into login set?'
      connection.query(sql, userinfo, (err, result) => {
        if (err) {
          result.ysend(err)
        }
        //SQL 语句执行成功，但影响行数不为 1
        if (result.affectedRows !== 1) {
          return res.ysend('注册用户失败，请稍后再试！')
        }
        // 注册成功
        res.ysend('注册成功！', 0)
      })
    })
    // 缓存到连接池中
    connection.release()
  })
}
module.exports = register
