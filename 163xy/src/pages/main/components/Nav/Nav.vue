<template>
  <section class="nav-container">
    <ul class="nav-box">
      <li class="nav-item" v-for="(nav, index) in navList" :key="index">
        <img :src="nav.picUrl" alt="navlist">
        <span>{{nav.text}}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState} from "Vuex"
export default {
  computed: {
    ...mapState({
      navList: state => state.main.navList
    })
  }
};
</script>
<style scoped lang='scss' rel='stylesheet/scss'>
@import "../../../../assets/styles/mixin";
.nav-container {
  padding-bottom: 30px;
  .nav-box {
    @extend %clearfix;
    text-align: center;
    .nav-item {
      float: left;
      width: 110px;
      height: 156px;
      margin: 10px 20px 9px;
      img {
        width: 110px;
        height: 110px;
        margin-bottom: 10px;
      }
      span {
        font-size: 24px;
        width: 110px;
        height: 36px;
        margin-top: 10px;
      }
    }
  }
}
</style>