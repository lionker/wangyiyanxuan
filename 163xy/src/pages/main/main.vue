<template>
  <div class="home-container">
    <Header/>
    <div class="home-main">
      <div class="scroll">
        <Swiper ref="swiper"/>
        <ul class="wangyi-grow">
          <li>
            <i class="grow-icon"></i>
            <span>网易自营品牌</span>
          </li>
          <li>
            <i class="grow-icon"></i>
            <span>30天无忧退货</span>
          </li>
          <li>
            <i class="grow-icon"></i>
            <span>48小时快速退款</span>
          </li>
        </ul>
        <Nav/>
        <Split/>
        <!--首页主导航区-->
        <Gift/>
        <!--首页福利区-->
        <Split/>
        <Manufacturer/>
        <!--首页品牌制造商区-->
        <Split/>
        <Popular/>
        <!--首页热销榜单区-->
        <Split/>
        <Recommend/>
        <Split/>
        <FlashSale/>
        <Split/>
        <NewProducts/>
        <Split/>
        <Classify/>
        <Split/>
        <FooterCopy/>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

import Swiper from "./components/Swiper/Swiper.vue";
import Nav from "./components/Nav/Nav.vue";
import Gift from "./components/Gift/Gift.vue";
import Manufacturer from "./components/Manufacturer/Manufacturer.vue";
import Popular from "./components/Popular/Popular.vue";
import Recommend from "./components/Recommend/Recommend.vue";
import FlashSale from "./components/FlashSale/FlashSale.vue";
import NewProducts from "./components/NewProducts/NewProducts.vue";
import Classify from "./components/Classify/Classify.vue";
import FooterCopy from "./components/FooterCopy/FooterCopy.vue";
export default {
  components: {
    Nav,
    Swiper,
    Gift,
    Manufacturer,
    Popular,
    Recommend,
    FlashSale,
    NewProducts,
    Classify,
    FooterCopy
  },

  mounted() {
    this.$nextTick(() => {
      const height = document.documentElement.clientHeight;
      const recoFindMain = document.querySelector(".home-main");
      const footerHeight = document.querySelector(".m-ftWrap").clientHeight;
      recoFindMain.style.height = height - (footerHeight * 1.3) + "px";
      this.$refs.swiper._initSwiper();
      this.$store.dispatch('getMainData'); // 初始化后请求数据
      if (!this.classScroll) {
          this.classScroll = new BScroll('.home-main', {
            click: true
          })
        }
    });
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.home-container {
  padding-bottom: 100px;
  background-color: #fff;
  .home-main {
    padding-top: 83px;
    .scroll {
      .wangyi-grow {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 72px;
        li {
          display: flex;
          &:nth-of-type(1) {
            i {
              background-image: url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png");
            }
          }
          &:nth-of-type(2) {
            i {
              background-image: url("http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png");
            }
          }
          &:nth-of-type(3) {
            i {
              background-image: url("http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png");
            }
          }
          .grow-icon {
            width: 32px;
            height: 32px;
            background-image: url("http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png");
            background-size: 32px 32px;
            background-repeat: no-repeat;
            background-position: center;
            margin: 4px 10px 0 0;
          }
          span {
            color: #b4282d;
          }
        }
      }
    }
  }
}
</style>
