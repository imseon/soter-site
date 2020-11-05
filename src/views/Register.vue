<template>
  <div class="register">
    <Header />
    <div class="content-wrapper main-container">
      <div class="register-box">
        <div class="step-wrapper">
          <div class="step-inner">
            <el-steps :active="currStep" finish-status="success">
              <el-step title="基本信息"> </el-step>
              <el-step title="选择类型"></el-step>
              <el-step title="信息登记"></el-step>
              <el-step title="注册完成" :status="currStep === 3 ? 'success' : 'wait'"></el-step>
            </el-steps>
          </div>
        </div>
        <div class="form-wrapper" v-if="currStep === 0">
          <el-form :model="form" :rules="rules" ref="form" class="register-form" :show-message="false" @validate="onValidate">
            <el-form-item prop="email">
              <el-input placeholder="邮箱" prefix-icon="el-icon-search" v-model="form.email"></el-input>
              <div class="input-error" v-if="errors.email">{{ errors.email }}</div>
              <div class="input-desc">作为登录账号，请填写未被双创平台注册邮箱</div>
            </el-form-item>
            <el-form-item prop="passwd">
              <el-input placeholder="密码" type="password" prefix-icon="el-icon-search" v-model="form.passwd"></el-input>
              <div class="input-error" v-if="errors.passwd">{{ errors.passwd }}</div>
              <div class="input-desc">字母、数字或者英文符号，最少8位，区分大小写</div>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input placeholder="确认密码" type="password" prefix-icon="el-icon-search" v-model="form.checkPass"></el-input>
              <div class="input-error" v-if="errors.checkPass">{{ errors.checkPass }}</div>
              <div class="input-desc">请再次输入密码</div>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="checked">
                我同意并遵守
                <router-link style="color:red;" :to="{ path: '/rule', query: { name: '4' } }">
                  《双创平台服务协议》
                </router-link>
              </el-checkbox>
            </el-form-item>
          </el-form>
        </div>
        <div class="form-wrapper" v-if="currStep === 1">
          <div class="step-2-notice">请选择注册账号类型</div>
          <div class="account-types">
            <div :class="{ 'account-type-item': true, active: form.type === 1 }" @click="selectType(1)">
              <div class="r1">
                <div class="icon"></div>
                <div class="account-type">个人用户</div>
              </div>
              <div class="r2">成为个人用户你能：</div>
              <div class="r3">提交漏洞获得积分，积分可用于兑换现金</div>
            </div>
            <div :class="{ 'account-type-item': true, active: form.type === 2 }" @click="selectType(2)">
              <div class="r1">
                <div class="icon"></div>
                <div class="account-type">团队用户</div>
              </div>
              <div class="r2">成为个人用户你能：</div>
              <div class="r3">提交漏洞获得积分，积分可用于兑换现金</div>
            </div>
            <div :class="{ 'account-type-item': true, active: form.type === 3 }" @click="selectType(3)">
              <div class="r1">
                <div class="icon"></div>
                <div class="account-type">企业用户</div>
              </div>
              <div class="r2">成为个人用户你能：</div>
              <div class="r3">提交漏洞获得积分，积分可用于兑换现金</div>
            </div>
          </div>
        </div>
        <div class="form-wrapper step-3" v-if="currStep === 2">
          <!-- 企业信息填写 -->
          <el-form v-if="form.type === 3" :model="form" :rules="rules" ref="form" class="register-form" :show-message="false" @validate="onValidate">
            <el-row :gutter="20" class="step-3-content">
              <el-col :span="1">
                <div class="empty">space</div>
              </el-col>
              <el-col :span="10">
                <div class="subtitle">企业信息</div>
                <el-form-item prop="account">
                  <el-row>
                    <el-col :span="17">
                      <el-input placeholder="用户名" prefix-icon="el-icon-user" v-model="form.account"></el-input>
                      <div class="input-error" v-if="errors.account">{{ errors.account }}</div>
                      <div class="input-success" v-if="checkNameResult && checkNameResult.valid">{{ checkNameResult.message }}</div>
                    </el-col>
                    <el-col :span="1">
                      <div class="empty">space</div>
                    </el-col>
                    <el-col :span="6">
                      <el-button type="primary" @click="checkName">用户名检查</el-button>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item prop="companyName">
                  <el-input placeholder="企业名称" prefix-icon="el-icon-notebook-2" v-model="form.companyName"></el-input>
                  <div class="input-error" v-if="errors.companyName">{{ errors.companyName }}</div>
                </el-form-item>
                <el-form-item prop="uscc">
                  <el-input placeholder="统一社会信用代码" prefix-icon="el-icon-postcard" v-model="form.uscc"></el-input>
                  <div class="input-error" v-if="errors.uscc">{{ errors.uscc }}</div>
                </el-form-item>
                <el-form-item>
                  <div class="upload-wrapper">
                    <el-upload :action="uploadUrl" :limit="1" list-type="picture-card" :auto-upload="true" :on-success="handleLicenseSuccess" :before-upload="beforeUpload">
                      <div class="register-company-upload" slot="default">
                        <i class="el-icon-plus"></i>
                        <div class="register-company-upload-text">上传营业执照</div>
                      </div>
                    </el-upload>
                    <el-upload :action="uploadUrl" list-type="picture-card" :auto-upload="true" :on-success="handleIDCardSuccess" :before-upload="beforeUpload">
                      <div class="register-company-upload" slot="default">
                        <i class="el-icon-plus"></i>
                        <div class="register-company-upload-text">上传法人身份证</div>
                        <div class="register-company-upload-text">正面</div>
                      </div>
                    </el-upload>
                    <el-upload :action="uploadUrl" list-type="picture-card" :auto-upload="true" :on-success="handleIDCardSuccess" :before-upload="beforeUpload">
                      <div class="register-company-upload" slot="default">
                        <i class="el-icon-plus"></i>
                        <div class="register-company-upload-text">上传营业执照</div>
                        <div class="register-company-upload-text">背面</div>
                      </div>
                    </el-upload>
                  </div>
                </el-form-item>
                <el-form-item prop="intro" label="企业介绍">
                  <el-input type="textarea" rows="6" v-model="form.intro"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="2">
                <div class="empty">space</div>
              </el-col>
              <el-col :span="10">
                <div class="subtitle">企业管理员身份信息</div>
                <el-form-item prop="identitycard">
                  <el-input placeholder="身份证号" prefix-icon="el-icon-postcard" v-model="form.identitycard"></el-input>
                  <div class="input-error" v-if="errors.identitycard">{{ errors.identitycard }}</div>
                </el-form-item>
                <el-form-item prop="name">
                  <el-input placeholder="真实姓名" prefix-icon="el-icon-s-custom" v-model="form.name"></el-input>
                  <div class="input-error" v-if="errors.name">{{ errors.name }}</div>
                </el-form-item>
              </el-col>
              <el-col :span="1">
                <div class="empty">space</div>
              </el-col>
            </el-row>
          </el-form>
          <!-- 个人&团队信息填写 -->
          <el-form v-else :model="form" :rules="rules" ref="form" class="register-form" :show-message="false" @validate="onValidate">
            <el-row :gutter="20" class="step-3-content">
              <el-col :span="1">
                <div class="empty">space</div>
              </el-col>
              <el-col :span="10">
                <div class="subtitle">个人信息</div>
                <el-form-item prop="account">
                  <el-row>
                    <el-col :span="17">
                      <el-input placeholder="用户名" prefix-icon="el-icon-user" v-model="form.account"></el-input>
                      <div class="input-error" v-if="errors.account">{{ errors.account }}</div>
                      <div class="input-success" v-if="checkNameResult && checkNameResult.valid">{{ checkNameResult.message }}</div>
                    </el-col>
                    <el-col :span="1">
                      <div class="empty">space</div>
                    </el-col>
                    <el-col :span="6">
                      <el-button type="primary" @click="checkName">用户名检查</el-button>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item prop="tel">
                  <el-input placeholder="联系方式（QQ/手机号/微信号 选填）" prefix-icon="el-icon-notebook-2" v-model="form.tel"></el-input>
                  <div class="input-error" v-if="errors.tel">{{ errors.tel }}</div>
                </el-form-item>
                <el-form-item prop="identitycard">
                  <el-input placeholder="身份证号" prefix-icon="el-icon-postcard" v-model="form.identitycard"></el-input>
                  <div class="input-error" v-if="errors.identitycard">{{ errors.identitycard }}</div>
                </el-form-item>
                <el-form-item prop="name">
                  <el-input placeholder="真实姓名" prefix-icon="el-icon-s-custom" v-model="form.name"></el-input>
                  <div class="input-error" v-if="errors.name">{{ errors.name }}</div>
                </el-form-item>
                <el-form-item prop="intro" label="个人简介">
                  <el-input type="textarea" rows="6" v-model="form.intro"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="2">
                <div class="empty">space</div>
              </el-col>
              <el-col :span="10">
                <div class="subtitle">账户信息</div>
                <el-radio-group v-model="accountType" class="account-type-radio">
                  <el-radio-button label="bank">银行卡</el-radio-button>
                  <el-radio-button label="alipay">支付宝</el-radio-button>
                </el-radio-group>
                <div v-if="accountType === 'bank'">
                  <el-form-item prop="bankCard">
                    <el-input placeholder="银行卡号" prefix-icon="el-icon-postcard" v-model="form.bankCard"></el-input>
                    <div class="input-error" v-if="errors.bankCard">{{ errors.bankCard }}</div>
                  </el-form-item>
                  <el-form-item prop="name">
                    <el-input placeholder="真实姓名" prefix-icon="el-icon-s-custom" v-model="form.name"></el-input>
                    <div class="input-error" v-if="errors.name">{{ errors.name }}</div>
                  </el-form-item>
                  <el-form-item prop="bank">
                    <el-input placeholder="开户行" prefix-icon="el-icon-office-building" v-model="form.bank"></el-input>
                    <div class="input-error" v-if="errors.bank">{{ errors.bank }}</div>
                  </el-form-item>
                </div>
                <div v-else>
                  <el-form-item prop="alipay">
                    <el-input placeholder="填写您的支付宝账号" prefix-icon="el-icon-bank-card" v-model="form.alipay"></el-input>
                    <div class="input-error" v-if="errors.alipay">{{ errors.alipay }}</div>
                  </el-form-item>
                  <el-form-item prop="name">
                    <el-input placeholder="真实姓名" prefix-icon="el-icon-s-custom" v-model="form.name"></el-input>
                    <div class="input-error" v-if="errors.name">{{ errors.name }}</div>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="1">
                <div class="empty">space</div>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="form-wrapper step-4" v-if="currStep === 3">
          <div v-if="activeSuccess">
            <div class="icon-check">
              <i class="el-icon-check"></i>
            </div>
            <div class="success-notice">激活成功</div>
            <div class="active-notice">{{ redirectCountdown }}秒后跳转至平台首页</div>
            <div class="redirect-btn">
              <el-button type="primary" @click="redirectToHome">立即跳转</el-button>
            </div>
          </div>
          <div v-else>
            <div class="icon-check">
              <i class="el-icon-check"></i>
            </div>
            <div class="success-notice">注册成功</div>
            <div class="active-notice" v-if="form.type !== 3">请您前往邮箱点击链接进行账号激活</div>
            <div class="active-notice" v-else>请您耐心等待平台管理员审核，审核结果以邮件通知</div>
          </div>
        </div>
        <div class="btn-panel">
          <el-button type="primary" @click="goPrev" v-if="currStep > 0 && currStep !== 3">上一步</el-button>
          <el-button type="primary" v-if="currStep < 2" @click="goNext">下一步</el-button>
          <el-button type="primary" v-else-if="currStep === 2" @click="commit">提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/CommonHeader.vue'
import { mapState } from 'vuex'
import { Message } from 'element-ui'

export default {
  components: { Header },
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
    const checkEmail = (rule, value, callback) => {
      let regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if (value != '' && !regEmail.test(value)) {
        callback(new Error('邮箱格式错误'))
      } else {
        callback()
      }
    }
    const idCard = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入身份证号码'))
      } else if (value && !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
        callback(new Error('身份证号码不符合规范'))
      } else {
        if (value && !idCardNoUtil.checkIdCardNo(value)) {
          callback(new Error('身份证号码有误'))
        } else {
          callback()
        }
      }
    }
    const idCardNoUtil = {
      /*省,直辖市代码表*/
      provinceAndCitys: {
        11: '北京',
        12: '天津',
        13: '河北',
        14: '山西',
        15: '内蒙古',
        21: '辽宁',
        22: '吉林',
        23: '黑龙江',
        31: '上海',
        32: '江苏',
        33: '浙江',
        34: '安徽',
        35: '福建',
        36: '江西',
        37: '山东',
        41: '河南',
        42: '湖北',
        43: '湖南',
        44: '广东',
        45: '广西',
        46: '海南',
        50: '重庆',
        51: '四川',
        52: '贵州',
        53: '云南',
        54: '西藏',
        61: '陕西',
        62: '甘肃',
        63: '青海',
        64: '宁夏',
        65: '新疆',
        71: '台湾',
        81: '香港',
        82: '澳门',
        91: '国外'
      },
      /*每位加权因子*/
      powers: ['7', '9', '10', '5', '8', '4', '2', '1', '6', '3', '7', '9', '10', '5', '8', '4', '2'],
      /*第18位校检码*/
      parityBit: ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'],
      /*性别*/
      genders: { male: '男', female: '女' },
      /*校验地址码*/
      checkAddressCode: function(addressCode) {
        let check = /^[1-9]\d{5}$/.test(addressCode)
        if (!check) return false
        if (idCardNoUtil.provinceAndCitys[parseInt(addressCode.substring(0, 2))]) {
          return true
        } else {
          return false
        }
      },
      /*校验日期码*/
      checkBirthDayCode: function(birDayCode) {
        let check = /^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(birDayCode)
        if (!check) return false
        let yyyy = parseInt(birDayCode.substring(0, 4), 10)
        let mm = parseInt(birDayCode.substring(4, 6), 10)
        let dd = parseInt(birDayCode.substring(6), 10)
        let xdata = new Date(yyyy, mm - 1, dd)
        if (xdata > new Date()) {
          return false //生日不能大于当前日期
        } else if (xdata.getFullYear() == yyyy && xdata.getMonth() == mm - 1 && xdata.getDate() == dd) {
          return true
        } else {
          return false
        }
      },
      /*计算校检码*/
      getParityBit: function(idCardNo) {
        let id17 = idCardNo.substring(0, 17)
        /*加权 */
        let power = 0
        for (let i = 0; i < 17; i++) {
          power += parseInt(id17.charAt(i), 10) * parseInt(idCardNoUtil.powers[i])
        }
        /*取模*/
        let mod = power % 11
        return idCardNoUtil.parityBit[mod]
      },
      /*验证校检码*/
      checkParityBit: function(idCardNo) {
        let parityBit = idCardNo.charAt(17).toUpperCase()
        if (idCardNoUtil.getParityBit(idCardNo) == parityBit) {
          return true
        } else {
          return false
        }
      },
      /*校验15位或18位的身份证号码*/
      checkIdCardNo: function(idCardNo) {
        //15位和18位身份证号码的基本校验
        let check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo)
        if (!check) return false
        //判断长度为15位或18位
        if (idCardNo.length == 15) {
          return idCardNoUtil.check15IdCardNo(idCardNo)
        } else if (idCardNo.length == 18) {
          return idCardNoUtil.check18IdCardNo(idCardNo)
        } else {
          return false
        }
      },
      //校验15位的身份证号码
      check15IdCardNo: function(idCardNo) {
        //15位身份证号码的基本校验
        let check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo)
        if (!check) return false
        //校验地址码
        let addressCode = idCardNo.substring(0, 6)
        check = idCardNoUtil.checkAddressCode(addressCode)
        if (!check) return false
        let birDayCode = '19' + idCardNo.substring(6, 12)
        //校验日期码
        return idCardNoUtil.checkBirthDayCode(birDayCode)
      },
      //校验18位的身份证号码
      check18IdCardNo: function(idCardNo) {
        //18位身份证号码的基本格式校验
        let check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo)
        if (!check) return false
        //校验地址码
        let addressCode = idCardNo.substring(0, 6)
        check = idCardNoUtil.checkAddressCode(addressCode)
        if (!check) return false
        //校验日期码
        let birDayCode = idCardNo.substring(6, 14)
        check = idCardNoUtil.checkBirthDayCode(birDayCode)
        if (!check) return false
        //验证校检码
        return idCardNoUtil.checkParityBit(idCardNo)
      }
    }
    return {
      checked: false,
      currStep: 0,
      form: {
        type: 1
      },
      errors: {
        email: '',
        passwd: '',
        checkPass: '',
        account: '',
        name: '',
        tel: '',
        identitycard: ''
      },
      accountType: 'bank',
      rules: {
        email: [
          { required: true, message: '请输入正确的邮箱', trigger: 'blur' },
          { validator: checkEmail, trigger: 'blur' }
        ],
        passwd: [
          // { required: true, message: '字母、数字或者英文符号，最少8位，区分大小写', trigger: 'blur' },
          // { min: 8, max: 12, message: '密码必须多于8位', trigger: 'blur' }
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            pattern: /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/,
            message: '密码为数字、大写字母、小写字母、特殊符号至少包含三种，8-30位长度。（区分大小写)'
          }
        ],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        account: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        name: [{ required: true, message: '请输入真实姓名', trigger: 'blur' }],
        companyName: [{ required: true, message: '请输入企业名称', trigger: 'blur' }],
        uscc: [{ required: true, message: '请输入统一社会信用代码', trigger: 'blur' }],
        tel: [{ required: true, message: '请输入联系方式', trigger: 'blur' }],
        identitycard: [{ validator: idCard, trigger: 'blur' }]
      },
      activeSuccess: false,
      redirectCountdown: 0,
      countdownTimer: null,
      uploadUrl: process.env.VUE_APP_API_ROOT + '/upload'
    }
  },
  created() {
    let path = this.$route.path
    // 兼容原有路由
    if (path.match(/\d$/)) {
      let num = path.substr(-1)
      this.currStep = num - 1
      // 如果直接打开register4，则直接显示激活成功
      if (this.currStep === 3) {
        this.activeSuccess = true
        this.startCountdown(10)
      }
    } else if (path === '/registerCompany') {
      this.currStep = 2
      this.form.type = 3
    }
  },
  computed: mapState({
    checkNameResult: (state) => state.user.checkNameResult,
    addUserError: (state) => state.user.addUserError,
    addCompanyError: (state) => state.company.addCompanyError
  }),
  methods: {
    redirectToHome() {
      clearTimeout(this.countdownTimer)
      this.$router.push('/home')
    },
    startCountdown(n) {
      clearTimeout(this.countdownTimer)
      if (n === 0) {
        return this.$router.push('/home')
      }
      this.redirectCountdown = n
      this.countdownTimer = setTimeout(() => {
        this.startCountdown(n - 1)
      }, 1000)
    },
    goPrev() {
      if (this.currStep > 0) {
        this.currStep--
      }
    },
    goNext() {
      if (this.currStep === 0) {
        this.$refs['form'].validate((valid) => {
          if (!valid) {
            return
          } else {
            if (!this.checked) {
              Message.error('请先同意服务协议')
              return
            }
            this.currStep++
          }
        })
      } else if (this.currStep === 1) {
        this.currStep++
      }
    },
    selectType(type) {
      this.form.type = type
    },
    onValidate(field, valid, message) {
      if (!valid) {
        this.errors[field] = message
      } else {
        this.errors[field] = ''
      }
    },
    async checkName() {
      if (this.form.account) {
        await this.$store.dispatch('user/checkName', { username: this.form.account })
        if (this.checkNameResult && !this.checkNameResult.valid) {
          this.errors.account = this.checkNameResult.message
        }
      }
    },
    commit() {
      this.$refs['form'].validate(async (valid) => {
        if (!valid) {
          return
        } else {
          // 如果用户检查之后，又修改了用户名，也需要提示重新检查
          if (!this.checkNameResult || this.checkNameResult.username !== this.form.account || this.checkNameResult.valid === false) {
            return Message.error('请先完成用户名检查')
          }
          let params
          //个人&团队注册
          if (this.form.type !== 3) {
            params = {
              ...this.form,
              type: this.form.type === 1 ? 0 : 1
            }
            await this.$store.dispatch('user/add', { params })
            if (this.addUserError) {
              return Message.error(this.addUserError.message || this.addUserError.data)
            }
          }
          //企业注册
          else {
            params = {
              ...this.form
            }
            await this.$store.dispatch('company/add', { params })
            if (this.addCompanyError) {
              return Message.error(this.addCompanyError.message || this.addCompanyError.data)
            }
          }
          this.currStep++
        }
      })
    },
    handleLicenseSuccess(res, file) {
      if (res.code != 'A000000') {
        Message.error(res.data)
        return
      }
      Message.success('上传成功')
      this.imgUrl = URL.createObjectURL(file.raw)
      this.form.license = res.data
    },
    handleIDCardSuccess(res, file) {
      if (res.code != 'A000000') {
        Message.error(res.data)
        return
      }
      Message.success('上传成功')
      this.imgUrl = URL.createObjectURL(file.raw)
      this.form.license = res.data
    },
    beforeUpload(file) {
      let typeArray = ['image/jpeg', 'image/jpg', 'image/png', 'image/bmp']
      let isJPG = typeArray.indexOf(file.type) > -1
      if (!isJPG) {
        Message.error('上传头像图片只能是 JPG/PNG/BMP 格式!')
      }
      return isJPG
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/common.scss';
.register {
  min-height: 100vh;
  background-color: #f7f7f7;
  padding-bottom: 20px;
}
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
  z-index: 1;
}
.main-container {
  padding-top: 140px;
  .register-box {
    padding: 40px;
    background-color: white;
  }
  .step-wrapper {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 40px;
    .step-inner {
      width: 680px;
      margin: 0 auto;
    }
  }
  .register-form {
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
  .step-2-notice {
    text-align: center;
    margin-top: 80px;
  }
  .account-types {
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    .account-type-item {
      width: 300px;
      height: 135px;
      border: 1px solid #7cb83e;
      border-radius: 4px;
      cursor: pointer;
      .r1 {
        display: flex;
        justify-content: center;
        margin-top: 15px;
        color: #222;
        align-items: center;
        .icon {
          width: 48px;
          height: 48px;
          margin-right: 10px;
        }
      }
      .r2,
      .r3 {
        text-align: center;
        color: #999999;
        margin-top: 5px;
      }
      &:nth-child(1) {
        .r1 .icon {
          background: url('../assets/images/register-icon-1.png') no-repeat;
          background-size: 100%;
        }
      }
      &:nth-child(2) {
        .r1 .icon {
          background: url('../assets/images/register-icon-2.png') no-repeat;
          background-size: 100%;
        }
      }
      &:nth-child(3) {
        .r1 .icon {
          background: url('../assets/images/register-icon-3.png') no-repeat;
          background-size: 100%;
        }
      }
      &.active {
        background-color: #f6f8f9;
      }
    }
  }
  .step-3 {
    .empty {
      visibility: hidden;
    }
    .register-form {
      width: 100%;
      margin-top: 45px;
    }
    .step-3-content {
      margin-top: 45px;
    }
    .subtitle {
      margin-bottom: 30px;
      color: #999;
    }
    .account-type-radio {
      width: 100%;
      margin-bottom: 40px;
    }
    .upload-wrapper {
      display: flex;
      justify-content: space-between;
    }
    .register-company-upload {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      i {
        background-color: #7cb83e;
        width: 30px;
        height: 30px;
        line-height: 30px;
        color: white;
        font-size: 20px;
        font-weight: bolder;
        border-radius: 30px;
      }
    }
    .register-company-upload-text {
      height: 30px;
      line-height: 30px;
    }
  }
  .step-4 {
    text-align: center;
    .icon-check {
      width: 290px;
      height: 290px;
      border-radius: 290px;
      background-color: #7cb83e;
      margin: 80px auto 30px;
      text-align: center;
      line-height: 290px;
      i {
        color: white;
        font-size: 220px;
        margin-top: 30px;
      }
    }
    .success-notice {
      font-size: 30px;
    }
    .active-notice {
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }
}
</style>
<style lang="scss">
.register-form {
  .el-input__prefix {
    color: #7cb83e;
  }
  .el-input__inner {
    border: 1px solid #7cb83e;
  }
}
.account-type-radio .el-radio-button {
  width: 50%;
  .el-radio-button__inner {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
}
.step-3 {
  .el-upload--picture-card {
    width: 120px;
    height: 120px;
    line-height: 120px;
  }
}
</style>
