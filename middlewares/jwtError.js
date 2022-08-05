// 捕获并处理姐token错误的中间件
const jwtError=(err,req,res,next)=>{
  // 捕获身份认证失败的错误
   if (err.name === 'UnauthorizedError') {
    return res.ysend('身份认证失败！')
   }
   if (err) {
    return res.ysend('未知的认证错误')
   }
   next()
}
module.exports = jwtError
