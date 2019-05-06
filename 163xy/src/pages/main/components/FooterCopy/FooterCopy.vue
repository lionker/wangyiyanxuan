<template>
  <section class="m-ftWrap">
    <div class="m-ft g-row">
      <div class="bd">
        <a href="javascript:(0)" class="w-button">下载App</a>
        <a href="javascript:(0)" class="w-button">电脑版</a>
      </div>
      <p class="copyright">
        XX网络公司版权所有 &copy; 1995-
          2019
        <br>
        食品经营许可证 : JY1274617421312368127
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>
<style scoped lang='scss' rel='stylesheet/scss'>
.m-ftWrap {
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  background-color: #414141;
  .m-ft {
    text-align: center;
    padding: .72rem .26667rem .37333rem;
    .w-button {
      box-sizing: border-box;
      display: inline-block;
      vertical-align: middle;
      width: 2.29333rem;
      line-height: 0.8rem;
      font-size: 0.32rem;
      color: #fff;
      border: 1px solid #999;
      border-radius: 2px;
      background-color: transparent;
    }
    .copyright {
      margin-top: 0.48rem;
      font-size: 0.32rem;
      line-height: 0.42667rem;
      color: #999;
    }
  }
  .g-row {
    width: 10rem;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>