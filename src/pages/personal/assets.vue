<template>
  <div class="assets">
    <h4 class="title">My Purchases</h4>
    <div class="item">
      <i class="iconfont icon-yimaidaoshangpin"></i>
      <span class="text first">My Purchases</span>
    </div>
    <h4 class="title">My Settings</h4>
    <div class="item">
      <i class="iconfont icon-dingyue"></i>
      <span class="text">My Subscriptions</span>
    </div>
    <div class="item">
      <i class="iconfont icon-zhifu"></i>
      <span class="text">Payment Methods</span>
    </div>
    <div class="item">
      <i class="iconfont icon-tongzhi"></i>
      <span class="text">Notification Settings</span>
    </div>
    <div class="item">
      <i class="iconfont icon-kefuzhichi"></i>
      <span class="text">Customer Support</span>
    </div>
    <div class="item">
      <i class="iconfont icon-guanyuwomen"></i>
      <span class="text last">About Us</span>
    </div>
  </div>
</template>
<script>
export default {
  name: ""
};
</script>
<style lang="scss" scoped>
@import "~assets/scss/mixins";
.title {
  font-size: 18px;
  font-weight: bold;
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
}

.item {
  height: 50px;
  background-color: #fff;
  line-height: 50px;

  .iconfont {
    font-size: $icon-font-size;
    padding: 0 15px 0 10px;
  }

  .text {
    display: inline-block;
    font-size: 15px;
    height: 50px;
    border-bottom: 1px solid #ccc;
    line-height: 50px;
  }
  .first,
  .last {
    border-bottom: none;
  }
}
</style>
