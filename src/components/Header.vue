<template>
  <div class="header">
    <HeadLogo />
    <HeadUser />
    <HeadNav />
  </div>
</template>

<script>
import HeadLogo from '@/components/HeadLogo'
import HeadNav from '@/components/HeadNav'
import HeadUser from '@/components/HeadUser'

export default {
  components: {
    HeadLogo,
    HeadNav,
    HeadUser
  }
}
</script>

<style scoped>
.header {
  height: 44px;
  line-height: 44px;
  overflow: hidden;
  margin: 0 auto;
}
.head-nav {
  float: right;
}
.head-user {
  float: right;
  margin-left: 10px;
  height: 26px;
  line-height: 26px;
  margin-top: 9px;
  border-left: 1px solid #89d1cb;
}
</style>
