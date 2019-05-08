import { reqMainData, reqCategoryList, reqInitSearch } from '../api';


import {
  RECEIVE_FLASHSALE,
  RECEIVE_NEWITEM,
  RECEIVE_POPULARITEM,
  RECEIVE_CLASSIFYLIST,
  RECEIVE_NAVLIST,
  RECEIVE_CATEGORIES,
  RECEIVE_INITSEARCH
} from './mutation-types';

export default {

  // 首页
  async getMainData({ commit }) {
    const result = await reqMainData();
    if (result.code === 0) {
      commit(RECEIVE_FLASHSALE, result.data.flashSaleModule);
      commit(RECEIVE_NEWITEM, result.data.newItemList);
      commit(RECEIVE_POPULARITEM, result.data.popularItemList);
      commit(RECEIVE_CLASSIFYLIST, result.data.categoryModule);
      commit(RECEIVE_NAVLIST, result.data.kingKongModule.kingKongList);
    }
  },

  // 定义获取分类列表数据的异步action
  async getCategoryList({ commit }) {
    const result = await reqCategoryList();
    if (result.code === 0) {
      commit(RECEIVE_CATEGORIES, result.data.categoryL1List);
    } else {
      console.log('获取数据失败');
    }
  },

  //init Search
  async getInitSearch({ commit }) {
    const result = await reqInitSearch();
    if (result.code === '200') {
      commit(RECEIVE_INITSEARCH, result.data)
      console.log(result.data)
    }
  }
}