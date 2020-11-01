<template>
  <div class="head-user">
    <div v-if="!user">
      <router-link to="/login" class="login-btn">登录</router-link>
      <router-link to="/login" class="login-btn">注册</router-link>
    </div>
    <el-dropdown v-else trigger="click">
      <div class="user-avatar" :style="{ backgroundImage: `url(${user.u.picture})` }"></div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <router-link tag="span" to="/editPwd">修改密码</router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <router-link tag="span" to="/myCenter">个人中心</router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <span @click="logout">退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Message } from 'element-ui'

export default {
  created() {
    this.$store.dispatch('user/check')
  },
  computed: mapState({
    user: (state) => state.user.user
  }),
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      if (!this.user) {
        Message.success('退出成功')
        this.$router.push({ path: '/login' })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.head-user {
  display: inline-block;
  .user-avatar {
    width: 38px;
    height: 38px;
    background: #2c54a0;
    margin-left: 10px;
    margin-top: -7px;
  }
  .user-menu-link {
  }
}
.login-btn {
  margin-left: 10px;
}
</style>
