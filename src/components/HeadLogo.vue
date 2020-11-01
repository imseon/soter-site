<template>
  <div class="head-logo"></div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head-logo {
  width: 404px;
  height: 100%;
  background: url('../assets/images/logo-white.png') no-repeat;
  background-size: 100% 100%;
  display: inline-block;
}
</style>
