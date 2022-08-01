// 注册
const register = (req, res) => {
  res.send("register");
};
// 登录
const login = (req, res) => {
  res.send("login");
};
// 重置
const resetPassword = (req, res) => {
  res.send("resetPassword");
};
// 删除
const delUser = (req, res) => {
  res.send("delUser");
};
const loginHandler = {
  register,
  login,
  resetPassword,
  delUser,
};
module.exports = loginHandler;
