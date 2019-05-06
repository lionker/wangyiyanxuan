<template>
  <section class="time-container">
    <div class="time-header">
      <div class="header-top">
        <span>限时购</span>
        <div class="time-down">
          <span ref="timeHour">{{hour &lt; 10 ? '0' + hour : hour}}</span>
          <span>:</span>
          <span ref="timeMinute">{{minute &lt; 10 ? '0' + minute : minute}}</span>
          <span>:</span>
          <span ref="timeSecond">{{second &lt; 10 ? '0' + second : second}}</span>
        </div>
      </div>
      <span class="header-bottom">
        更多
        <i class="iconfont icon-52"></i>
      </span>
    </div>
    <ul class="time-list">
      <li >
        <img src="./images/goods.png" alt="限时购">
        <div class="good-price">
          <span class="new-price">￥298</span>
          <span class="old-price">￥1</span>
        </div>
      </li>
      <li >
        <img src="./images/goods.png" alt="限时购">
        <div class="good-price">
          <span class="new-price">￥298</span>
          <span class="old-price">￥1</span>
        </div>
      </li>
      <li >
        <img src="./images/goods.png" alt="限时购">
        <div class="good-price">
          <span class="new-price">￥298</span>
          <span class="old-price">￥1</span>
        </div>
      </li>
      <li >
        <img src="./images/goods.png" alt="限时购">
        <div class="good-price">
          <span class="new-price">￥298</span>
          <span class="old-price">￥1</span>
        </div>
      </li>
      <li >
        <img src="./images/goods.png" alt="限时购">
        <div class="good-price">
          <span class="new-price">￥298</span>
          <span class="old-price">￥1</span>
        </div>
      </li>
      <li >
        <img src="./images/goods.png" alt="限时购">
        <div class="good-price">
          <span class="new-price">￥298</span>
          <span class="old-price">￥1</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
    data () {
      return {
        hour: 2,
        minute: 59,
        second: 59
      }
    },
}
</script>
<style scoped lang='scss' rel='stylesheet/scss'>
@import "../../../../assets/styles/mixin";
.time-container {
  .time-header {
    display: flex;
    justify-content: space-between;
    height: 100px;
    font-size: 30px;
    line-height: 100px;
    padding: 0 30px;
    .header-top {
      display: flex;
      .time-down {
        span {
          font-size: 24px;
          &:nth-of-type(odd) {
            padding: 5px;
            color: #fff;
            background-color: #000;
            border-radius: 5px;
            margin: 0 10px;
          }
          &:nth-of-type(even) {
            height: 36px;
          }
        }
      }
    }
    .header-bottom {
      i {
        width: 30px;
        height: 30px;
        font-size: 30px;
      }
    }
  }
  .time-list {
    @extend %clearfix;
    padding: 0 10px 0 30px;
    li {
      float: left;
      width: 216px;
      height: 270px;
      margin-right: 20px;
      padding-bottom: 30px;
      img {
        width: 216px;
        height: 216px;
        background-color: #f5f5f5;
      }
      .good-price {
        height: 40px;
        line-height: 40px;
        padding: 0 0 0 10px;
        margin-top: 10px;
        .new-price {
          font-size: 28px;
          color: $red;
        }
        .old-price {
          font-size: 24px;
          color: #777;
          text-decoration: line-through;
        }
      }
    }
  }
}

</style>