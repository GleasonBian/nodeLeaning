const handleUserRouter = (req,res)=>{
  const method = req.method;

  console.log(method)
  // 登录
  if (method === 'POST' && req.path === '/api/user/login') {
    return {
      msg: 'post 登录'
    }
  }
}

module.exports = handleUserRouter;