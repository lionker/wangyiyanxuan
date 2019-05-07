<template>
  <ul>
    <li :class="{active: $route.path === '/main'}" @click="goto('/main')">
      <div class="footer-icon">
        <img
          src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
          alt="icon"
        >
      </div>
      <span>首页</span>
    </li>
    <li
      :class="{active: $route.path === '/categores' || $route.path.indexOf('/categores') !== -1}"
      @click="goto('/categores')"
    >
      <div class="footer-icon">
        <img
          src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
          alt="icon"
        >
      </div>
      <span>分类</span>
    </li>
    <li
      :class="{active: $route.path === '/knowledge' || $route.path.indexOf('/knowledge') !== -1}"
      @click="goto('/knowledge')"
    >
      <div class="footer-icon">
        <img
          src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
          alt="icon"
        >
      </div>
      <span>识物</span>
    </li>
    <li :class="{active: $route.path === '/shopcart'}" @click="goto('/shopcart')">
      <div class="footer-icon">
        <img
          src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
          alt="icon"
        >
      </div>
      <span>购物车</span>
    </li>
    <li :class="{active: $route.path === '/person'}" @click="goto('/person')">
      <div class="footer-icon">
        <img
          src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
          alt="icon"
        >
      </div>
      <span>个人</span>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    goto(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/styles/mixin";
ul {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  height: 83px;
  width: 100%;
  font-size: 24px;
  background-color: #fff;
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .footer-icon {
      position: relative;
      width: 40px;
      height: 44px;
      overflow: hidden;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 40px;
        height: 490px;
      }
    }
    &:nth-of-type(1) {
      img {
        top: -245px;
      }
    }
    &:nth-of-type(1) {
      img {
        top: -245px;
      }
    }
    &:nth-of-type(2) {
      img {
        top: -147px;
      }
    }
    &:nth-of-type(3) {
      img {
        top: -343px;
      }
    }
    &:nth-of-type(4) {
      img {
        top: -49px;
      }
    }
    &:nth-of-type(5) {
      img {
        top: -441px;
      }
    }
    &.active {
      img {
        transform: translateY(49px);
      }
      span {
        color: $red;
      }
    }
    span {
      font-size: 24px;
    }
  }
}
</style>
