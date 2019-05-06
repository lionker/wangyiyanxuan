<template>
  <section class="nav-container">
    <ul class="nav-box">
      <li class="nav-item">
        <img src="./images/navPng.png" alt="navlist">
        <span>美食酒水</span>
      </li>
      <li class="nav-item">
        <img src="./images/navPng.png" alt="navlist">
        <span>美食酒水</span>
      </li>
      <li class="nav-item">
        <img src="./images/navPng.png" alt="navlist">
        <span>美食酒水</span>
      </li>
      <li class="nav-item">
        <img src="./images/navPng.png" alt="navlist">
        <span>美食酒水</span>
      </li>
      <li class="nav-item">
        <img src="./images/navPng.png" alt="navlist">
        <span>美食酒水</span>
      </li>
      <li class="nav-item">
        <img src="./images/navPng.png" alt="navlist">
        <span>美食酒水</span>
      </li>
      <li class="nav-item">
        <img src="./images/navPng.png" alt="navlist">
        <span>美食酒水</span>
      </li>
      <li class="nav-item">
        <img src="./images/navPng.png" alt="navlist">
        <span>美食酒水</span>
      </li>
      <li class="nav-item">
        <img src="./images/navPng.png" alt="navlist">
        <span>美食酒水</span>
      </li>
      <li class="nav-item">
        <img src="./images/navPng.png" alt="navlist">
        <span>美食酒水</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>
<style scoped lang='scss' rel='stylesheet/scss'>
@import "../../../../assets/styles/mixin";
.nav-container {
  padding-bottom: 30px;
  background-color: #f4f4f4;
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