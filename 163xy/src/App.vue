<template>
  <div id="app-container">
    <router-view/>
    <Footer v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
import Main from './pages/Main/Main.vue'
import Categores from './pages/Categores/Categores.vue'
import Knowledge from './pages/Knowledge/Knowledge.vue'
import ShopCart from './pages/ShopCart/ShopCart.vue'
import Person from './pages/Person/Person.vue'
import Search from './pages/Search/Search.vue'

export default {
  components: {
    Main,
    Categores,
    Knowledge,
    ShopCart,
    Person,
    Search,
  }
};
</script>

<style lang='scss'>
@import "./assets/styles/reset.scss";
#app-container {
  height: 100%;
}
</style>
