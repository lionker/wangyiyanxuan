import ajax from './ajax'

// 获取首页数据
export const reqMainData = () => ajax('/main');

// 获取分类列表
export const reqCategoryList = () => ajax('/categorylist');