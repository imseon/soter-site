<template>
  <div class="forget-pwd">
    <Header />
    <div class="content-wrapper main-container">
      <div class="register-box">
        <div class="head-wrapper">
          <div class="page-title">忘记密码</div>
        </div>
        <div class="form-wrapper">
          <el-form :model="form" :rules="rules" ref="form" class="page-form">
            <el-form-item prop="type" label="选择类型" label-width="100px">
              <el-radio-group v-model="form.type">
                <el-radio :label="1">白帽用户</el-radio>
                <el-radio :label="2">企业用户</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item prop="uname">
              <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="form.uname"></el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-input placeholder="验证码" prefix-icon="el-icon-key" v-model="form.code">
                <el-button type="primary" slot="append" @click="getCode">获取验证码</el-button>
              </el-input>
            </el-form-item>
            <el-form-item prop="passwd">
              <el-input placeholder="新密码" type="password" prefix-icon="el-icon-lock" v-model="form.passwd"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input placeholder="确认密码" type="password" prefix-icon="el-icon-lock" v-model="form.checkPass"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="btn-panel">
          <el-button type="primary" @click="commit">确定</el-button>
        </div>
      </div>
    </div>
    <HomeFooter />
  </div>
</template>

<script>
import Header from '@/components/CommonHeader.vue'
import HomeFooter from '@/components/HomeFooter.vue'
import { mapState } from 'vuex'
import { Message } from 'element-ui'

export default {
  components: { Header, HomeFooter },
  data() {
    const validatePass2 = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入确认密码'))
      } else if (value.length < 8) {
        callback(new Error('密码必须多于8位!'))
      } else if (value !== this.form.passwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        type: 1,
        uname: '',
        passwd: '',
        checkPass: ''
      },
      rules: {
        name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
        passwd: [
          // { required: true, message: '字母、数字或者英文符号，最少8位，区分大小写', trigger: 'blur' },
          // { min: 8, max: 12, message: '密码必须多于8位', trigger: 'blur' }
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            pattern: /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/,
            message: '密码为数字、大写字母、小写字母、特殊符号至少包含三种，8-30位长度。（区分大小写)'
          }
        ],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }]
      }
    }
  },
  created() {
    this.$store.dispatch('user/check')
  },
  computed: mapState({
    user: (state) => state.user.user,
    userErr: (state) => state.user.updateError
  }),
  methods: {
    async getCode() {
      if (!this.form.uname) {
        Message.error('用户名不能为空')
        return
      }
      try {
        let msg = await this.$store.dispatch('user/forgetPwd', { type: this.form.type, uname: this.form.uname })
        Message.success(msg)
      } catch (e) {
        Message.error(e)
      }
    },
    async commit() {
      if (this.form.checkPass == '') {
        Message.error('新密码不能为空')
      }
      let params = {
        type: this.form.type,
        code: this.form.code,
        uname: this.form.uname,
        pwd: this.form.checkPass
      }
      try {
        await this.$store.dispatch('user/resetPwd', { params })
        Message.success('密码修改成功')
        this.$router.push({ path: '/login' })
      } catch (e) {
        Message.error(e)
      }
      params = 'type=' + params.type + '&code=' + params.code + '&uname=' + params.uname + '&pwd=' + params.pwd
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/common.scss';
.edit-pwd {
  min-height: 100vh;
  background-color: #f7f7f7;
  padding-bottom: 20px;
}
.main-container {
  padding-top: 140px;
  .head-wrapper {
    border-bottom: 1px solid #e0e0e0;
    padding-top: 40px;
    padding-bottom: 40px;
    .page-title {
      font-size: 24px;
      text-align: center;
    }
  }
  .page-form {
    width: 500px;
    margin: 0 auto;
    margin-top: 80px;
    .input-desc {
      color: #999;
    }
    .input-error {
      color: #f56c6c;
    }
    .input-error,
    .input-desc {
      line-height: 24px;
    }
  }
  .btn-panel {
    margin-top: 40px;
    text-align: center;
  }
}
</style>
<style lang="scss">
.forget-pwd {
  .el-form-item__label {
    text-align: left;
  }
}
</style>
