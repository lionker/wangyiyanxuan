import {
  reqMainData,
  reqCategoryList,
  reqInitSearch,
  reqRecommendTabs,
  reqRecommendData,
  reqAutoRecommendData,
  reqOrderShowTop,
  reqOrderShowRatings
} from '../api';


import {
  RECEIVE_FLASHSALE,
  RECEIVE_NEWITEM,
  RECEIVE_POPULARITEM,
  RECEIVE_CLASSIFYLIST,
  RECEIVE_NAVLIST,
  RECEIVE_CATEGORIES,
  RECEIVE_INITSEARCH,
  UPDATE_INDEX,
  RECEIVE_RECOMMENDTABS,
  RECEIVE_RECOMMENDS,
  RECEIVE_AUTORECOMMENDS,
  RECEIVE_ORDERSHOWTOP,
  RECEIVE_ORDERSHOWRATINGS
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
  },

  // KnowLedge
  
  // 更新当前下标的同步action
  updateTabIndex({ commit }, tabIndex) {
    commit(UPDATE_INDEX, tabIndex)
  },

  // 识物--获取导航列表的异步action
  async getRecommendTabs({ commit }) {
    const result = await reqRecommendTabs();
    if (result.code === '200') {
      console.log('getRecommendTabs')
      commit(RECEIVE_RECOMMENDTABS, result.data);
    }
  },
  // 识物--推荐--获取推荐的商品数据的异步action
  async getRecommends({ commit }) {
    const result = await reqRecommendData();
    if (result.code === '200') {
      commit(RECEIVE_RECOMMENDS, result.data);
    }
  },
  // 识物--推荐--上拉自动获取推荐商品数据的异步action
  async getAutoRecommends({ commit }, page, size) {
    console.log(page, size)
    const result = await reqAutoRecommendData(page, size);
    if (result.code === '200') {
      commit(RECEIVE_AUTORECOMMENDS, result.data);
    }
  },
  // 识物--晒单--获取晒单页种草商品数据的异步action
  async getOrderShowTop({ commit }, id) {
    const result = await reqOrderShowTop(id);
    if (result.code === '200') {
      commit(RECEIVE_ORDERSHOWTOP, result.data);
    }
  },
  // 识物--晒单--获取晒单页用户评论数据的异步action
  async getOrderShowRatings({ commit }, { page, size, type }) {
    const result = await reqOrderShowRatings(page, size, type);
    if (result.code === '200') {
      commit(RECEIVE_ORDERSHOWRATINGS, result.data);
    }
  }
}