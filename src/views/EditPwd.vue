<template>
  <div class="edit-pwd">
    <Header />
    <div class="content-wrapper main-container">
      <div class="register-box">
        <div class="head-wrapper">
          <div class="page-title">修改密码</div>
        </div>
        <div class="form-wrapper">
          <el-form :model="form" :rules="rules" ref="form" class="page-form">
            <el-form-item prop="opwd">
              <el-input placeholder="原密码" type="password" prefix-icon="el-icon-search" v-model="form.opwd"></el-input>
            </el-form-item>
            <el-form-item prop="passwd">
              <el-input placeholder="新密码" type="password" prefix-icon="el-icon-search" v-model="form.passwd"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input placeholder="确认密码" type="password" prefix-icon="el-icon-search" v-model="form.checkPass"></el-input>
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
        opwd: '',
        passwd: '',
        checkPass: ''
      },
      errors: {
        opwd: '',
        passwd: '',
        checkPass: ''
      },
      rules: {
        opwd: [{ required: true, message: '请输入原始密码', trigger: 'blur' }],
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
    commit() {
      this.$refs['form'].validate(async (valid) => {
        if (!valid) return
        if (!this.user) {
          return Message.error('用户未登录')
        }
        if (!this.user.u.identitycard) {
          let params = {
            id: this.user.u.id,
            opwd: this.form.opwd,
            passwd: this.form.checkPass
          }
          try {
            this.$store.dispatch('company/update', { params })
          } catch (e) {
            Message.error(this.userErr.data)
            return
          }
        } else {
          let params = {
            id: localStorage.getItem('d'),
            opwd: this.form.opwd,
            passwd: this.form.checkPass
          }
          await this.$store.dispatch('user/update', { params })
          if (this.userErr) {
            Message.error(this.userErr.data)
            return
          }
        }
        Message.success('修改成功')
      })
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
