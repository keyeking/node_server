const register = require('./registerHandler')
const login = require('./loginHandler')
const updatePassword = require('./updatePasswordHandler')
const delUser = require('./delUserhandler')
const userinfo = require('./userInfoHandler')
const loginModule = {
  register,
  login,
  updatePassword,
  delUser,
  userinfo
}
module.exports = loginModule
