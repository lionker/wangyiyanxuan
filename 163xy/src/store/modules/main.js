/**
 * 用于管理首页状态数据的模块
 */
import { reqMainData } from '../../api';
import {
  UPDATE_INDEX,
  RECEIVE_FLASHSALE,
  RECEIVE_NEWITEM,
  RECEIVE_POPULARITEM,
  RECEIVE_CLASSIFYLIST,
  RECEIVE_NAVLIST,
} from '../mutation-types';

const state = {
  tabIndex: 0, // 当前被选中的分类下标
  flashSale: [], // 限时购
  newItem: [], // 新品首发
  popularItem: [], // 人气推荐
  classifyList: [], // 分类列表
  navList: [] // 导航列表
};
const mutations = {
  [UPDATE_INDEX](state, tabIndex) {
    state.tabIndex = tabIndex;
  },
  [RECEIVE_FLASHSALE](state, flashSale) {
    state.flashSale = flashSale;
  },
  [RECEIVE_NEWITEM](state, newItem) {
    state.newItem = newItem;
  },
  [RECEIVE_POPULARITEM](state, popularItem) {
    state.popularItem = popularItem;
  },
  [RECEIVE_CLASSIFYLIST](state, classifyList) {
    state.classifyList = classifyList;
  },
  [RECEIVE_NAVLIST](state, navList) {
    state.navList = navList;
  }
};
const actions = {
  // 更新当前下标的同步action
  updateMainIndex({ commit }, tabIndex) {
    commit(UPDATE_INDEX, tabIndex)
  },
  async getMainData({ commit }) {
    const result = await reqMainData();
    if (result.code === 0) {
      commit(RECEIVE_FLASHSALE, result.data.flashSaleModule);
      commit(RECEIVE_NEWITEM, result.data.newItemList);
      commit(RECEIVE_POPULARITEM, result.data.popularItemList);
      commit(RECEIVE_CLASSIFYLIST, result.data.categoryModule);
      commit(RECEIVE_NAVLIST, result.data.kingKongModule.kingKongList);
    }
  }
};
const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters
}
