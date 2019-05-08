<template>
  <section>
    <div class="classify-container" v-for="(classify, index) in classifyList" :key="index">
      <img :src="classify.titlePicUrl" alt="标题图片">
      <div class="classify-list">
        <ul class="ul-node">
          <li v-for="(item ,index) in classify.itemList" :key="index">
            <img :src="item.listPicUrl" alt="商品图片">
            <div class="good-info">
              <span class="good-name">{{item.name}}</span>
              <span class="good-price">￥{{item.retailPrice}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import BSroll from "better-scroll";
import { mapState } from "Vuex";
export default {
  mounted() {
    this.$nextTick(() => {
      this._setUlWidth();
      this._initScroll();
    });
  },
  computed: {
    ...mapState({
      classifyList: state => state.classifyList
    })
  },
  methods: {
    _setUlWidth() {
      const uls = document.querySelectorAll(".ul-node");
      let ulWidth;
      //Array.from() 方法从一个类似数组或可迭代对象中创建一个新的数组实例
      Array.from(uls).forEach((ul, index) => {
        const lis = ul.querySelectorAll("li");
        Array.from(lis).forEach((li, index) => {
          const width = li.clientWidth * lis.length + 20 * (lis.length - 1);
          ulWidth = width;
        });
        ul.style.width = ulWidth + "px";
      });
    },
    _initScroll() {
      const classifyList = document.querySelectorAll(".classify-list");
      Array.from(classifyList).forEach((classify, index) => {
        new BSroll(classify, {
          click: true,
          scrollX: true
        });
      });
    }
  }
};
</script>
<style scoped lang='scss' rel='stylesheet/scss'>
@import "../../../../assets/styles/mixin";
.classify-container {
  img {
    width: 100%;
    height: 370px;
    margin-bottom: 30px;
  }
  .classify-list {
    width: 100%;
    padding: 0 30px 20px;
    box-sizing: border-box;
    overflow: hidden;
    ul {
      display: flex;
      flex-wrap: nowrap;
      padding: 0 0.3rem;
      li {
        margin-right: 20px;
        img {
          width: 200px;
          height: 200px;
          margin-bottom: 50px;
          background-color: #f4f4f4;
        }
        .good-info {
          span {
            display: block;
            width: 200px;
          }
          .good-price {
            color: $red;
          }
        }
      }
    }
  }
}
</style>