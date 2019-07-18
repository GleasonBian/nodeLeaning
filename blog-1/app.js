
// 引入
const queryString = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

/**
 * 处理 post data
 * @param {请求消息头} req
 */
const getPostData = (req) => {
  const promise = new Promise( (resolve, reject) => {

    // 请求 方法不是 post 直接 返回 空对象
    if ( req.method !== 'POST') {
      resolve( {} )
      return
    }

    // 请求 头 类型 不是 application/json 直接返回 空对象
    if ( req.headers['content-type'] !== 'application/json' ) {
      resolve( {} )
      return
    }

    // 处理 post 请求数据 post data
    let postData = '';
    req.on('data', chunk => {
      postData += chunk.toString();
    })
    
    req.on('end', ()=>{
      // postData 没有数据 返回 空
      if (!postData) {
        resolve({})
        return 
      }
      resolve( JSON.parse( postData ) )
    })
  })
  return promise;
}

/**
 * 处理 服务 函数
 * @param {请求消息头} req 
 * @param {响应消息头} res 
 */
const serverHandle = (req, res) => {
  // 设置返回格式 JSON
  res.setHeader('Content-type', 'application/json');

  // 获取 path
  const url = req.url;
  req.path = url.split('?')[0];

  // 解析 query
  req.query = queryString.parse(url.split('?')[1])

  // 处理 post data
  getPostData(req).then( postData => {
    req.body = postData;

    // 处理 blog 路由
    const blogResult = handleBlogRouter(req, res);
    if ( blogResult ) {
      blogResult.then(blogData => {
        res.end( JSON.stringify(blogData))
      })
      return
    }

    // 处理 user 路由
    const userData = handleUserRouter(req, res)
    if (userData) {
      res.end( JSON.stringify(userData) );
      return
    }

    // 未命中路由, 返回 404
    res.writeHead(404, {"Content-type": "text/plain"})
    res.write("404 Not Found-gleason\n")
    res.end()
  })
}

module.exports = serverHandle;