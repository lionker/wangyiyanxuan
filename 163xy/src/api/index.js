import ajax from './ajax'

// const prefix = '/api'
// const prefix = 'http://m.you.163.com'
const prefix = process.env.NODE_ENV === 'development' ? '/api' : 'http://m.you.163.com';
// console.log(prefix)
// 获取首页数据
export const reqMainData = () => ajax('/main');

// 获取分类列表
export const reqCategoryList = () => ajax('/categorylist');

// 搜索 关键字
export const reqInitSearch = () => ajax(`${prefix}/xhr/search/init.json`, 'POST');


