//连接数据库模块
const mysql = require('mysql')
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'node_server'
})
module.exports = db
