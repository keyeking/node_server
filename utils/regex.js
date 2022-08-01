//验证手机号
const regPhone = (phone) => {
  const regStr = /^[a-z]+$/
  if (!regStr.test(phone)) {
    console.log(false)
    return false
  } else {
    console.log(true)
    return true
  }
}
const reg = {
  regPhone,
  regPassword
}
module.exports = reg
