// 引入 sql 查询模块
const { exec } = require('../db/mysql')
/**
 * 博客 列表
 * @param { 作者 } author 
 * @param { 关键字 } keyword 
 */
const getList = (author, keyword) => {
  // 为什么 where 1=1?  常用小技巧 防止 不确定值导致 sql 拼接 语法错误 进而 程序报错
  // 注意 sql 语句之后有空格
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
  const sql = `select * from blogs where id='${id}';`
  return exec(sql).then(rows => {
    return rows[0];
  })
}

/**
 * 新建 博客
 * @param { blogData 是一个博客对象, 包含 title content 属性 } blogData 
 */
const newBlog = (blogData = {}) => {
  const title = blogData.title;
  const content = blogData.content;
  const author = blogData.author;
  const createtime = Date.now();
  const sql = `
    insert into blogs (title, content, createtime, author)
    value('${title}', '${content}', '${createtime}', '${author}')
  `
  // 执行 exec() 返回 操作结果
  return exec(sql).then(insertData => {
    return {
      id: insertData.insertId
    }
  })
}

/**
 * 更新 博客
 * @param { 要更新博客的id } id 
 * @param { blogData 是一个博客对象, 包含 title, content } blogData 
 */
const updateBlog = (id, blogData = {}) => {
  const title = blogData.title;
  const content = blogData.content;
  const sql = `
    update blogs set title='${title}', content='${content}' where id='${id}'
  `
  return exec(sql).then(updateData => {
    console.log("TCL: updateBlog -> updateData", updateData)
    if (updateData.affectedRows > 0) {
      return true
    }
    return false
  })
}
/**
 * 
 * @param {需要删除博客的id} id 
 */
const deleteBlog = (id,author) => {
  const sql = `delete from blogs where id='${id}' and author='${author}'`;
  return exec(sql).then(deleteData => {
    console.log("TCL: deleteBlog -> deleteData", deleteData)
    if (deleteData.affectedRows > 0) {
      return true
    }
    return false
  })
}
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
}