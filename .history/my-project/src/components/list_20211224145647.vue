<template>
  <!-- 头部 -->
  <div class="max_max">
    <myheader></myheader>
    <router-view></router-view>
    <myfooter></myfooter>
  </div>
</template>
<script>
import myheader from "../components/header.vue";
import myfooter from "../components/footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    myheader,
    myfooter,
  },
  methods: {},
  mounted() {},
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
  background: #000;
}
.max_max {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
