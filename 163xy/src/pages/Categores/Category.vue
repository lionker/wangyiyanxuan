<template>
  <div class="category-container">
    <div class="category-main">
      <img class="category-bigImg" src="./images/bannerTitle.png" alt="居家生活大图" v-if="true">
      <ul v-if="true">
        <li>
          <img src="./images/dinglei.png" alt="category.name">
          <span>丁磊的好货推荐</span>
        </li>
        <li>
          <img src="./images/dinglei.png" alt="category.name">
          <span>丁磊的好货推荐</span>
        </li>
        <li>
          <img src="./images/dinglei.png" alt="category.name">
          <span>丁磊的好货推荐</span>
        </li>
        <li>
          <img src="./images/dinglei.png" alt="category.name">
          <span>丁磊的好货推荐</span>
        </li>
        <li>
          <img src="./images/dinglei.png" alt="category.name">
          <span>丁磊的好货推荐</span>
        </li>
        <li>
          <img src="./images/dinglei.png" alt="category.name">
          <span>丁磊的好货推荐</span>
        </li>
        <li>
          <img src="./images/dinglei.png" alt="category.name">
          <span>丁磊的好货推荐</span>
        </li>
        <li>
          <img src="./images/dinglei.png" alt="category.name">
          <span>丁磊的好货推荐</span>
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
.category-container {
  height: 100%;
  overflow: hidden;
  .category-main {
    height: 100%;
    margin-left: 162px;
    padding: 30px 30px 120px;
    .category-bigImg {
      width: 528px;
      height: 192px;
      margin-bottom: 30px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      li {
        text-align: center;
        width: 144px;
        margin-right: 30px;
        img {
          width: 144px;
          height: 144px;
        }
      }
    }
  }
}

</style>