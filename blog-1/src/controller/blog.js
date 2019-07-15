
/**
 * 博客 列表
 * @param { 作者 } author 
 * @param { 关键字 } keyword 
 */
const getList = (author, keyword) => {
  // 先返回假数据 (格式是正确的)
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: '1562552735407',
      author: 'gleason',
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      createTime: '1562552735997',
      author: '张三',
    }
  ]
}

/**
 * 博客 详情
 * @param {id} id 
 */
const getDetail = (id) => {
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: '1562552735407',
      author: 'gleason',
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      createTime: '1562552735997',
      author: '张三',
    }
  ]
}

/**
 * 新建 博客
 * @param { blogData 是一个博客对象, 包含 title content 属性 } blogData 
 */
const newBlog = (blogData = {}) => {
  return {
    id: 3 // 表示新建博客, 插入到数据表里面的 id
  }
}

/**
 * 更新 博客
 * @param { 要更新博客的id } id 
 * @param { blogData 是一个博客对象, 包含 title, content } blogData 
 */
const updateBlog = (id, blogData = {}) => {
  console.log("TCL: updateBlog -> id", id)
  console.log("TCL: updateBlog -> blogData", blogData)
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
}