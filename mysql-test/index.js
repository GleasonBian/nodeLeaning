const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'gleason',
  port: '3306',
  database: 'myblog'
})

// 开始链接
connection.connect();

// 执行 sql 语句
const sql = 'select * from users;'
connection.query(sql,(err,result) => {
  if (err) {
    console.error(err);
    return 
  }
  console.log(result);
})

// 关闭 链接
connection.end()