//验证手机号
const regPhone = (phone) => {
  const regStr = /^[a-z]+$/
  if (!regStr.test(phone)) {
    return false
  } else {
    return true
  }
}
const reg = {
  regPhone
}
module.exports = reg
