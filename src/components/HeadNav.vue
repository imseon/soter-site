<template>
  <div class="head-nav">
    <ul class="nav-list">
      <li><router-link class="nav-item" to="/home">首页</router-link></li>
      <li><router-link class="nav-item" to="/projectRoom" v-if="!user || user.u.identitycard">项目大厅</router-link></li>
      <li><router-link class="nav-item" to="/messageCenter">公告中心</router-link></li>
      <li><router-link class="nav-item" to="/help">帮助中心</router-link></li>
    </ul>
    <i class="iconfont icon-bell"></i>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    user: (state) => state.user.user
  }),
  created() {
    this.$store.dispatch('user/check')
  }
}
</script>

<style scoped lang="scss">
.nav-list {
  display: inline-block;
  li {
    display: inline-block;
  }
}
.nav-item {
  display: inline-block;
  width: 90px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  &.router-link-active {
    background-color: #f5f6f5;
    color: #7cb83e;
    border-radius: 10px;
    margin: 0 16px;
  }
}
.icon-bell {
  display: inline-block;
  color: white;
  &:hover {
    color: #014e17;
  }
}
</style>
