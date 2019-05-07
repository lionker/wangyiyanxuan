<template>
  <div class="reco-page">
    <div class="reco-goods">
      <ul>
        <li>
          <div class="style-LR" v-if="true">
            <div class="style-left">
        <span class="user-info">
          <img src="../images/avator.png" alt="avatar">
          <span>daidai师兄</span>
        </span>
              <p class="title">开发半年的神仙杯子，半天抢光。问我感想，我说太假了</p>
              <p class="desc">复合酵素，强力去污</p>
              <span class="view-count">
          <i class="iconfont icon-view"></i>
          <span>231k人看过</span>
        </span>
            </div>
            <div class="style-right">
              <img src="../images/mainImg.jpg" alt="mainImg">
            </div>
          </div>
          <div class="style-TB" v-if="true">
            <div class="user-info">
              <img src="../images/avator.png" alt="avatar">
              <span>niconiJ</span>
            </div>
            <p class="title">有了这些懒人都爱用的清洁神器，享受无罪，偷懒有理~}</p>
            <img class="main-img" src="../images/bz.jpg" alt="mainImg">
            <span class="view-count">
            <i class="iconfont icon-view"></i>
            <span>2323k人看过</span>
          </span>
          </div>
        </li>
        <li>
          <div class="style-LR" v-if="true">
            <div class="style-left">
        <span class="user-info">
          <img src="../images/avator.png" alt="avatar">
          <span>daidai师兄</span>
        </span>
              <p class="title">开发半年的神仙杯子，半天抢光。问我感想，我说太假了</p>
              <p class="desc">复合酵素，强力去污</p>
              <span class="view-count">
          <i class="iconfont icon-view"></i>
          <span>231k人看过</span>
        </span>
            </div>
            <div class="style-right">
              <img src="../images/mainImg.jpg" alt="mainImg">
            </div>
          </div>
          <div class="style-TB" v-if="true">
            <div class="user-info">
              <img src="../images/avator.png" alt="avatar">
              <span>niconiJ</span>
            </div>
            <p class="title">有了这些懒人都爱用的清洁神器，享受无罪，偷懒有理~}</p>
            <img class="main-img" src="../images/bz.jpg" alt="mainImg">
            <span class="view-count">
            <i class="iconfont icon-view"></i>
            <span>2323k人看过</span>
          </span>
          </div>
        </li>
        <li>
          <div class="style-LR" v-if="true">
            <div class="style-left">
        <span class="user-info">
          <img src="../images/avator.png" alt="avatar">
          <span>daidai师兄</span>
        </span>
              <p class="title">开发半年的神仙杯子，半天抢光。问我感想，我说太假了</p>
              <p class="desc">复合酵素，强力去污</p>
              <span class="view-count">
          <i class="iconfont icon-view"></i>
          <span>231k人看过</span>
        </span>
            </div>
            <div class="style-right">
              <img src="../images/mainImg.jpg" alt="mainImg">
            </div>
          </div>
          <div class="style-TB" v-if="true">
            <div class="user-info">
              <img src="../images/avator.png" alt="avatar">
              <span>niconiJ</span>
            </div>
            <p class="title">有了这些懒人都爱用的清洁神器，享受无罪，偷懒有理~}</p>
            <img class="main-img" src="../images/bz.jpg" alt="mainImg">
            <span class="view-count">
            <i class="iconfont icon-view"></i>
            <span>2323k人看过</span>
          </span>
          </div>
        </li>
        <li>
          <div class="style-LR" v-if="true">
            <div class="style-left">
        <span class="user-info">
          <img src="../images/avator.png" alt="avatar">
          <span>daidai师兄</span>
        </span>
              <p class="title">开发半年的神仙杯子，半天抢光。问我感想，我说太假了</p>
              <p class="desc">复合酵素，强力去污</p>
              <span class="view-count">
          <i class="iconfont icon-view"></i>
          <span>231k人看过</span>
        </span>
            </div>
            <div class="style-right">
              <img src="../images/mainImg.jpg" alt="mainImg">
            </div>
          </div>
          <div class="style-TB" v-if="true">
            <div class="user-info">
              <img src="../images/avator.png" alt="avatar">
              <span>niconiJ</span>
            </div>
            <p class="title">有了这些懒人都爱用的清洁神器，享受无罪，偷懒有理~}</p>
            <img class="main-img" src="../images/bz.jpg" alt="mainImg">
            <span class="view-count">
            <i class="iconfont icon-view"></i>
            <span>2323k人看过</span>
          </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style scoped lang='scss' rel='stylesheet/scss'>
@import '../../../assets/styles/mixin';
.reco-page {
  .reco-goods {
    .style-LR {
      @extend %clearfix;
      width: 100%;
      padding: 32px 30px;
      box-sizing: border-box;
      margin: 16px 0;
      background-color: #fff;
      .style-left {
        float: left;
        width: 400px;
        .user-info {
          display: flex;
          align-items: center;
          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 10px;
          }
        }
        .title {
          font-size: 34px;
          margin-top: 20px;
        }
        .desc {
          font-size: 28px;
          color: #999;
        }
        .view-count {
          display: flex;
          color: #999;
          margin-top: 40px;
          i {
            font-size: 30px;
            margin: 0 10px;
          }
        }
      }
      .style-right {
        float: right;
        img {
          width: 272px;
          height: 272px;
          border-radius: 10px;
        }
      }
    }
    .style-TB {
      width: 100%;
      padding: 32px 30px;
      box-sizing: border-box;
      margin: 16px 0;
      background-color: #fff;
      .user-info {
        display: flex;
        align-items: center;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 10px;
        }
      }
      .title {
        font-size: 38px;
        margin-top: 20px;
      }
      .main-img {
        width: 690px;
        height: 376px;
        margin-top: 20px;
      }
      .view-count {
        display: flex;
        color: #999;
        margin-top: 20px;
        i {
          font-size: 30px;
          margin: 0 10px;
        }
      }
    }
  }
}


</style>