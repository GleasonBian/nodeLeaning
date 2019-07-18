
// 引用 exec 函数
const { exec } = require('../db/mysql');


const loginCheck = (username, password) => {
  const sql = `select username, realname from users where `
}

module.exports = {
  loginCheck
}