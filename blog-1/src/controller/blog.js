// 引入 sql 查询模块
const { exec } = require('../config/db')
/**
 * 博客 列表
 * @param { 作者 } author 
 * @param { 关键字 } keyword 
 */
const getList = (author, keyword) => {
  // 为什么 where 1=1?  常用小技巧 防止 不确定值导致 sql 拼接 语法错误 进而 程序报错
  let sql = `select * from blogs where 1=1 `
  if ( author ) 
    sql += `and author='${author}' `

  if ( keyword ) 
    sql += `and title like '%${keyword}%' `
  
  sql += `order by createtime desc;`

  // 返回 promise
  return exec(sql);
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
  if (id) 
    return true
  else 
    return false
}
/**
 * 
 * @param {需要删除博客的id} id 
 */
const deleteBlog = (id) => {
  return true
}
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
}