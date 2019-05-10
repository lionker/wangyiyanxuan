<template>
  <div id="app-container">
    <router-view/>
    <Footer v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
import Main from "./pages/Main/Main.vue";
import Categores from "./pages/Categores/Categores.vue";
import Knowledge from "./pages/Knowledge/Knowledge.vue";
import ShopCart from "./pages/ShopCart/ShopCart.vue";
import Person from "./pages/Person/Person.vue";
import Search from "./pages/Search/Search.vue";

export default {
  components: {
    Main,
    Categores,
    Knowledge,
    ShopCart,
    Person,
    Search
  },
  created() {
    // 在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  }
};
</script>

<style lang='scss'>
@import "./assets/styles/reset.scss";
#app-container {
  height: 100%;
}
</style>
