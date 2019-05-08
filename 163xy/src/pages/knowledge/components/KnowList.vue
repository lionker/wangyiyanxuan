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
import BScroll from "better-scroll";
export default {
  mounted() {
    this.$nextTick(() => {
      // 页面显示完成后设置将要实现scroll滚动效果的元素的父元素的高度，使子元素高度超出父元素才能实现滚动
      const height = document.documentElement.clientHeight;
      const recoPage = document.querySelector(".reco-page");
      recoPage.style.height = height - 300 + "px";
      // 实现滚动
      this._initScroll();
    });
  },
  methods: {
          // 可以上拉刷新的初始化scroll方法
      _initScroll () {
        if (this.recoScroll) {
          this.recoScroll.refresh();
        } else {
          this.recoScroll = new BScroll('.reco-page', {
            probeType: 2,
            // 下拉刷新：可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
            // 这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
            pullUpLoad: {
              threshold: 50
            },
            /* mouseWheel: { // pc端同样能滑动
             speed: 20,
             invert: false
             }, */
            useTransition: false // 防止iphone微信滑动卡顿
          });
          // ?
          this.recoScroll.on('pullingUp', async () => {
            this.moreDataPage++;
            // alert('已到最底部');
            console.log('加载ajax数据');
            await this.$store.dispatch('getAutoRecommends', this.moreDataPage, 5);
            this.recoScroll.finishPullUp(); // 可以多次执行上拉刷新
          });
        }
      }
  }
};
</script>
<style scoped lang='scss' rel='stylesheet/scss'>
@import "../../../assets/styles/mixin";
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