const env = process.env.NODE_ENV // 环境参数

// 配置
let MySQL_CONFIG;

if ( env === 'dev' ) {
  MySQL_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: 'gleason',
    port: '3306',
    database: 'myblog'
  }
}

if ( evn === 'production' ) {
  MySQL_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: 'gleason',
    port: '3306',
    database: 'myblog'
  }
}

module.exports = {
  MySQL_CONFIG
}