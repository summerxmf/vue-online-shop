<template>
  <div class="g-tabbar">
    <router-link class="g-tabbar-item" to="/home">
      <i class="iconfont icon-home"></i>
      <span>Home</span>
    </router-link>
    <router-link class="g-tabbar-item" to="/category">
      <i class="iconfont icon-category"></i>
      <span>Category</span>
    </router-link>
    <router-link class="g-tabbar-item" to="/cart">
      <i class="iconfont icon-cart"></i>
      <span>Cart</span>
    </router-link>
    <router-link class="g-tabbar-item" to="/personal">
      <i class="iconfont icon-personal"></i>
      <span>Me</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CTabbar"
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.router-link-active {
  color: $link-active-color;
}
</style>
