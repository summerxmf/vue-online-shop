<template>
  <div class="personal">
    <header class="g-header-container">
      <profile-header />
    </header>
    <div class="g-content-container">
      <me-scroll>
        <profile-banner />
      </me-scroll>
    </div>
  </div>
</template>
<script>
import profileHeader from "./header";
import MeScroll from "base/scroll";
import ProfileBanner from "./banner";
export default {
  name: "personal",
  components: {
    profileHeader,
    MeScroll,
    ProfileBanner
  }
};
</script>
<style lang="scss" scoped>
.personal {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
