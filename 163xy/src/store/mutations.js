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
  [RECEIVE_FLASHSALE] (state, flashSale) {
    state.flashSale = flashSale;
  },
  [RECEIVE_NEWITEM] (state, newItem) {
    state.newItem = newItem;
  },
  [RECEIVE_POPULARITEM] (state, popularItem) {
    state.popularItem = popularItem;
  },
  [RECEIVE_CLASSIFYLIST] (state, classifyList) {
    state.classifyList = classifyList;
  },
  [RECEIVE_NAVLIST] (state, navList) {
    state.navList = navList;
  },
  [RECEIVE_CATEGORIES] (state, categoryList) {
    state.categoryList = categoryList;
  },
  //initsearch
  [RECEIVE_INITSEARCH] (state, initSearchData) {
    state.initSearchData = initSearchData;
  }
}
