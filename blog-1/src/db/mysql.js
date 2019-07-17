// 引入 MYSQL 插件
const mysql = require('mysql');
// 引入 MYSQL 配置
const { MYSQL_CONFIG } = require('../config/db');

// 创建链接对象
const con = mysql.createConnection(MYSQL_CONFIG);

// 统一执行 sql 函数
function exec(sql) {
  const promise = new Promise((resolve,reject)=>{
    con.query(sql,(error,result) => {
      if (error) {
        reject(error);
        return 
      }
      resolve(result);
    })
  })
  return promise
}

module.exports = {
  exec 
}