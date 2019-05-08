import { reqMainData } from '../api/index';
import {
  RECEIVE_FLASHSALE,
  RECEIVE_NEWITEM,
  RECEIVE_POPULARITEM,
  RECEIVE_CLASSIFYLIST,
  RECEIVE_NAVLIST
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
  }
}