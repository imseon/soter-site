<template>
  <div class="login">
    <div class="login-form-wrapper">
      <div class="logo-h"></div>
      <div class="login-form">
        <el-form ref="form" :model="formData" class="" :rules="rules" @submit="onSubmit">
          <el-form-item class="login-form-item" prop="username">
            <el-input placeholder="邮箱/用户名/ID" v-model="formData.username" class="login-input" suffix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item class="login-form-item" prop="password">
            <el-input type="password" placeholder="输入密码" v-model="formData.password" class="login-input" suffix-icon="el-icon-lock"></el-input>
          </el-form-item>
          <el-form-item class="login-form-item">
            <el-dropdown trigger="click" @command="changeRole">
              <span class="el-dropdown-link">{{ roleMap[loginRole] }}<i class="el-icon-arrow-down el-icon--right"></i></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item :command="role" v-for="role of Object.keys(roleMap)" :key="role" :class="{ 'login-role': true, 'active-login-role': role == loginRole }">{{ roleMap[role] }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-button class="login-submit" @click="onSubmit">立即登录</el-button>
          </el-form-item>
        </el-form>
        <router-link to="/register" class="btn-register">还没有账号？立即注册</router-link>
        <router-link v-if="errLink" :to="errLink" class="error-msg link">{{ errInfo }}</router-link>
        <span v-else class="error-msg">{{ errInfo }}</span>
      </div>
      <div class="logo-v"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Message } from 'element-ui'

export default {
  data() {
    return {
      roleMap: {
        1: '个人/团队用户登录',
        2: '企业登录'
      },
      loginRole: 1,
      rules: {
        username: { required: true, message: '请输入用户名', trigger: 'blur' },
        password: { required: true, message: '请输入密码', trigger: 'blur' }
      },
      formData: {
        username: '',
        password: ''
      },
      errInfo: '',
      errLink: ''
    }
  },
  computed: mapState({
    user: (state) => state.user.user,
    loginError: (state) => state.user.loginError
  }),
  methods: {
    changeRole(role) {
      this.loginRole = role
    },
    async onSubmit() {
      let params = {
        account: this.formData.username,
        pwd: this.formData.password,
        type: this.loginRole
      }
      await this.$store.dispatch('user/login', { params })
      if (this.loginError) {
        let code = this.loginError.code
        if (code == 'E000001') {
          this.errInfo = '您的账号还未激活，请到您得注册邮箱激活后登录'
        } else if (code == 'E000002') {
          this.errInfo = '您的企业资质审核未通过！点击查看和修改企业信息'
          this.errLink = '/registersupp?c=' + this.loginError.u.id
        } else if (code == 'E000003') {
          this.errInfo = '您的账号正在审核中，请耐心等待审核结果'
        } else {
          Message.error(this.loginError.message)
        }
      }
      if (this.user) {
        if (this.loginRole == 1) {
          this.$router.push({ path: '/home' })
        } else if (this.loginRole == 2) {
          this.$router.push({ path: '/companyCenter' })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: url('../assets/images/login-bg.jpg') no-repeat left top;
  background-size: 1920px;
  position: relative;
}
.login-form-wrapper {
  width: 84vw;
  height: 84vh;
  background: url('../assets/images/login-form-bg.png') no-repeat left top;
  background-size: 1629px;
  position: absolute;
  top: 8vh;
  left: 6vw;
}
.logo-h {
  position: absolute;
  top: 40px;
  left: 60px;
  width: 134px;
  height: 38px;
  background: url('../assets/images/login-logo-h.png') no-repeat left top;
  background-size: 100%;
}
.logo-v {
  width: 38px;
  height: 299px;
  background: url('../assets/images/login-logo-v.png') no-repeat left top;
  position: absolute;
  bottom: 0;
  right: -63px;
}
.login-form {
  width: 544px;
  height: 359px;
  background-color: #3f66a0;
  position: absolute;
  top: 220px;
  left: 59px;
  form {
    width: 428px;
    margin: 0 auto;
    padding-top: 40px;
  }
  .login-submit {
    width: 225px;
    height: 60px;
    position: absolute;
    right: 0;
    background-color: #ffd621;
    color: #3f66a0;
    font-size: 18px;
    border: 0 none;
    border-radius: 0;
  }
  .el-dropdown-link {
    color: white;
    line-height: 60px;
    font-size: 18px;
  }
  .login-form-item {
    margin-bottom: 30px;
  }
}
.login-role {
  font-size: 18px;
}
.active-login-role {
  color: #3f66a0;
}
.btn-register {
  background-color: #ffd621;
  color: #3f66a0;
  font-size: 22px;
  height: 60px;
  width: 100%;
  position: absolute;
  bottom: -80px;
  text-align: center;
  line-height: 60px;
  border-radius: 5px;
}
.error-msg {
  width: 100%;
  position: absolute;
  bottom: -118px;
  text-align: center;
  font-size: 18px;
  color: #3f66a0;
  &.link {
    text-decoration: underline;
  }
}
</style>
<style lang="scss">
.login-input {
  .el-input__inner {
    height: 68px;
    font-size: 16px;
  }
  .el-input__icon {
    font-size: 24px;
    color: #3f66a0;
    padding-right: 20px;
  }
}
</style>
