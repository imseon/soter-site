<template>
  <div class="head-bg">
    <div class="content-wrapper">
      <Header />
    </div>
  </div>
</template>

<script>
import Header from './Header'
export default {
  components: { Header }
}
</script>

<style>
.header {
  padding-top: 38px;
}
.head-bg {
  width: 100%;
  background: url('../assets/images/header-bg.jpg') no-repeat center center;
  background-size: 1920px 120px;
  height: 120px;
  position: fixed;
  top: 0;
  z-index: 2;
}
</style>
