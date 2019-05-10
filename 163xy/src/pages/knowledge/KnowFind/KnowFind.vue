<template>
  <section class="recoFind-container">
    <KnowList v-if="tabIndex !== 4"/>
    <OrderList v-if="tabIndex == 4"/>
  </section>
</template>

<script>
  import {mapState} from 'Vuex';
import KnowList from "../components/KnowList.vue";
import OrderList from "../components/OrderList.vue";
export default {
  computed: {
    ...mapState({
      tabIndex: state => state.knowLedge.tabIndex
    })
  },
  components: {
    KnowList,
    OrderList
  }
};
</script>
<style scoped lang='scss' rel='stylesheet/scss'>
.recoFind-container {
  background-color: #eee;
}
</style>