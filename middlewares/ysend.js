// res.send中间件封装
const ysend = (req, res, next) => {
  // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，
  res.ysend = (err, status = 1) => {
    res.send({
      status,
      // 状态描述，判断err是错误对象 还是字符串
      // msg: err instanceof Error ? err.message : err,
      msg: err instanceof Error ? err : err
    })
  }
  next()
}
module.exports = ysend
