const { getList,getDetail,newBlog,updateBlog,deleteBlog } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req,res) => {
  const method = req.method // GET || POST
  const id = req.query.id;

  // 博客列表
  if(method === 'GET' && req.path === '/api/blog/list'){
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    const result = getList(author,keyword);
    return result.then(listData => {
      return new SuccessModel(listData);
    })
  }

  // 博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const result = getDetail(id)
    return result.then(data => {
      return new SuccessModel(data);
    })
  }

  // 新建博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    req.body.author = 'gleason'; // 假数据, 待开发登录时改成真数据
    const result = newBlog(req.body);
    return result.then(data => {
      return new SuccessModel(data)
    })
  }

  //更新博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body);
    return result.then( value=>{
      if (value) 
        return new SuccessModel('博客更新成功')
      else
        return new ErrorModel('更新博客失败')
    })
  }

  // 删除博客
  if (method === 'POST' && req.path === '/api/blog/delete') {
    const author = 'gleason'
    const result = deleteBlog(id,author);
    return result.then(val => {
      if ( val ) {
        return new SuccessModel('删除成功!')
      } else {
        return new ErrorModel("删除博客失败");
      }
    })
  }
}

module.exports = handleBlogRouter
