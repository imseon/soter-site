<template>
  <div class="page-banner">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.page-banner {
  width: 100%;
  height: 300px;
  background: url('../assets/images/banner-bg.jpg') no-repeat center center;
  background-size: 1920px 300px;
}
</style>
