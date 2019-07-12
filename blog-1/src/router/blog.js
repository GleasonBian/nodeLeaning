const { getList,getDetail,newBlog,updateBlog } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

const handleBlogRouter = (req,res) => {
  const method = req.method // GET || POST
  const id = req.query.id;

  // 博客列表
  if(method === 'GET' && req.path === '/api/blog/list'){
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    const listData = getList(author, keyword);
    return new SuccessModel(listData);
  }

  // 博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    const DetailData = getDetail(id);
    return new SuccessModel(DetailData)
  }

  // 新建博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    const data = newBlog(req.body);
    return new SuccessModel(data)
  }

  //更新博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id, req.body);
    if ( result ) {
      return new SuccessModel()
    } else {
      return new ErrorModel();
    }
  }

  // 删除博客
  if (method === 'POST' && req.path === '/api/blog/delete') {
    return {
      msg: 'post 删除博客'
    }
  }
}

module.exports = handleBlogRouter
