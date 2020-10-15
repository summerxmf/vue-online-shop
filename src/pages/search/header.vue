<template>
  <me-navbar class="header">
    <i class="iconfont icon-back" slot="left" @click="goBack"></i>
    <me-search-box
      placeholder="Search for anything"
      slot="center"
      @query="query"
    />
  </me-navbar>
</template>
<script>
import MeNavbar from "base/navbar";
import MeSearchBox from "base/search-box";
export default {
  name: "SearchHeader",
  components: {
    MeNavbar,
    MeSearchBox
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    query(query) {
      this.$emit("query", query);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.header {
  border-bottom: 1px solid $border-color;
  .iconfont {
    color: $icon-color;
    font-size: $icon-font-size;
  }
  .mine-search-box-wrapper {
    background-color: #f7f7f7;
  }
}
</style>
