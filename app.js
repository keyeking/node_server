const express = require("express");
const app = express();
const route = require("./routers/index.js");
//解析 application/x-www-form-urlencoded数据
app.use(express.urlencoded({ extended: false }));
route(app);
app.listen(3000, () => {
  console.log("====================================");
  console.log("服务器已启http:127.0.0.1:3000");
  console.log("====================================");
});
