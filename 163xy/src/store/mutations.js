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
  },
  
  //KnowLedge
  [UPDATE_INDEX] (state, tabIndex) {
    state.tabIndex = tabIndex;
  },
  [RECEIVE_RECOMMENDTABS] (state, recommendTabs) {
    state.recommendTabs = recommendTabs;
  },
  [RECEIVE_RECOMMENDS] (state, recommends) {
    state.recommends = recommends;
  },
  [RECEIVE_AUTORECOMMENDS] (state, autoRecommends) {
    state.autoRecommends = autoRecommends;
  },
  [RECEIVE_ORDERSHOWTOP] (state, orderShowTop) {
    state.orderShowTop = orderShowTop;
  },
  [RECEIVE_ORDERSHOWRATINGS] (state, orderShowRatings) {
    state.orderShowRatings = orderShowRatings;
  } 
}
