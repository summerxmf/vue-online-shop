<template>
  <me-navbar class="header">
    <div slot="center" class="header-text">My profile</div>
    <i class="iconfont icon-setting" slot="right"></i>
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>
</template>
<script>
import MeNavbar from "base/navbar";
export default {
  name: "profileHeader",
  components: {
    MeNavbar
  }
};
</script>
<style lang="scss" scoped>
// @import "~assets/scss/mixins";
</style>
