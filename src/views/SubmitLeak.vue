<template>
  <div class="submit-leak">
    <Header />
    <div class="content-wrapper main-content">
      <div class="block-content">
        <div class="company-avatar" :style="{ backgroundImage: `url(${projectInfo && projectInfo.companyAvatar})` }"></div>
        <div class="company-name">{{ projectInfo && projectInfo.companyName }}</div>
        <div class="company-intro">
          <div class="intro-content">{{ projectInfo && projectInfo.companyIntro }}</div>
        </div>
        <el-divider></el-divider>
        <el-form label-width="80px">
          <el-form-item label="漏洞类型">
            <el-select v-model="form.type" placeholder="请选择">
              <el-option v-for="item in types" :key="item.id" :label="item.label" :value="item.id"> </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="漏洞标题">
            <el-input v-model="form.title"> </el-input>
          </el-form-item>
          <el-form-item label="漏洞等级">
            <el-select v-model="form.level" placeholder="请选择">
              <el-option v-for="item in levels" :key="item.id" :label="item.label" :value="item.id"> </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="域名/IP">
            <el-input v-model="form.domain"> </el-input>
          </el-form-item>
          <el-form-item label="URL">
            <el-input v-model="form.url"> </el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="block-content">
        <el-form label-width="80px">
          <el-form-item label="风险危害">
            <el-input type="textarea" rows="10" placeholder="简要描述漏洞概况以及影响，请勿在此填写漏洞URL等具体漏洞信息" v-model="form.harm"> </el-input>
          </el-form-item>
          <el-form-item label="风险细节">
            <el-input
              type="textarea"
              placeholder="1.请详细描述漏洞的测式或复现过程以及影响范围。并提供相关代码、截图， 必要时可以提供规频;  2.提供漏满利用过程使用到的组件(例如，组态软件。远程调试工具等)下载链接或在下方附件上传; 3.给出漏洞PoC或Exploit,语言不限。要求思路清晰。可阅读性高。易于复现。"
              rows="10"
              v-model="form.detail"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="附件">
            <el-upload style="width:94%" class="upload" :action="uploadUrl" :on-success="handleUploadSuccess">
              <el-input class="textarea_3" type="text" :rows="3" placeholder="" v-model="form.attachment">
                <el-button slot="prepend" size="small" type="success">点击上传</el-button>
              </el-input>
              <div slot="tip" class="el-upload__tip">附件仅支持上传压缩后的组件/固件/视频；只能上传zip/rar文件，且不超过50M</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="修复建议">
            <el-input type="textarea" :rows="10" placeholder="简要描述漏洞概况以及影响，请勿在此填写漏洞URL等具体漏洞信息" v-model="form.advise"> </el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="block-content">
        <div class="submit-info">
          <h3>提交漏洞前请仔细阅读此说明:</h3>
          <p>请务必选择正确的漏洞类别，以免影响您的漏洞审核结果，漏洞类别有：Web漏洞、结果，漏洞类别有：Web漏洞、App漏洞、IoT漏洞、工控漏洞、操作系统及通用软件漏洞专属SRC漏洞请填写准确的企业名称，专属SRC漏洞类别统一选择Web漏洞（系统会自动选择）。</p>
          <h4>漏洞详情要求填写</h4>
          <p>1.基础信息</p>
          <p>漏洞详情要求填写：</p>
          <p>1、基础信息</p>
          <p>漏洞利用的完整过程，相关URL、截图、代码以及POC。若不符合规则，漏洞可能会审核不通过。</p>
          <p>2、IoT漏洞还需提供：</p>
          <p>（1）漏洞触发对应的二进制位置</p>
          <p>（2）目标配置情况</p>
          <p>（3）漏洞研究环境：若为真实硬件设备，请提供购买相关链接；若为模拟仿真，</p>
          <p>3、漏洞奖励积分规则</p>
          <p>（1）若项目的漏洞奖励积分已到封顶，则新增漏洞将不会获得积分奖励</p>
          <p>（2）奖励规则详见帮助中心</p>
          <h4>附件</h4>
          <p>
            附件仅支持上传压缩后的组件/固件/视频等，若文件较大，请在漏洞详情中提供链接；漏洞详情必须在详细细节字段中填写，不能上传至附件中
          </p>
        </div>
        <el-divider></el-divider>
        <div class="bottom-btn">
          <el-checkbox v-model="checked">
            我同意
            <span class="span">
              <router-link style="color:red;" :to="{ path: '/rule', query: { name: '4' } }">
                《用户服务协议》和《用户隐私政策》
              </router-link>
            </span>
          </el-checkbox>
        </div>
        <div class="bottom-btn">
          <el-button type="success" @click="submitLeack">保存</el-button>
        </div>
      </div>
    </div>
    <home-footer />
  </div>
</template>

<script>
import Header from '@/components/CommonHeader.vue'
import { mapState } from 'vuex'
import { Message } from 'element-ui'
import HomeFooter from '../components/HomeFooter.vue'

export default {
  data() {
    return {
      form: {},
      types: null,
      levels: null,
      checked: false,
      uploadUrl: process.env.VUE_APP_API_ROOT + '/upload'
    }
  },
  async created() {
    this.fetch()
    this.types = await this.$store.dispatch('util/dic', { id: 6 })
    this.levels = await this.$store.dispatch('util/dic', { id: 1 })
  },
  components: {
    Header,
    HomeFooter
  },
  computed: {
    ...mapState({
      projectInfo: (state) => state.project.info,
      leakInfo: (state) => state.project.leakInfo
    })
  },
  methods: {
    async fetch() {
      let pid = this.$route.query.p
      if (this.$route.query.a) {
        await this.$store.dispatch('project/leakInfo', { aid: this.$route.query.a })
        if (this.leakInfo) {
          this.form = this.leakInfo
          pid = this.form.pid
        }
      }
      if (pid) {
        this.$store.dispatch('project/info', { pid })
      }
    },
    handleUploadSuccess(res) {
      console.log(res)
      if (res.code != 'A000000') {
        Message.error(res.message)
        return
      }
      this.form.attachment = res.data
    },
    async submitLeack() {
      if (this.checked == false) {
        Message.error('请勾选用户服务协议')
        return
      }
      if (this.$route.query.a) {
        let params = {
          ...this.form,
          id: this.$route.query.a
        }
        try {
          await this.$store.dispatch('project/updateLeak', { params })
        } catch (e) {
          return Message.error(e.message || e.data)
        }
        Message.success('提交成功')
        this.$router.back(-1)
      } else {
        let params = {
          ...this.form,
          aid: localStorage.getItem('d'),
          pid: this.$route.query.p
        }
        try {
          await this.$store.dispatch('project/addLeak', { params })
        } catch (e) {
          return Message.error(e.message || e.data)
        }
        Message.success('提交成功')
        this.$router.back(-1)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/common.scss';
.submit-leak {
  min-height: 100vh;
  background-color: #f7f7f7;
  padding-bottom: 20px;
}
.main-content {
  padding-top: 120px;
}
.block-content {
  position: relative;
  background-color: white;
  padding: 40px 60px;
  margin-top: 20px;
  .company-avatar {
    width: 200px;
    height: 200px;
    border: 1px solid #7cb83e;
    border-radius: 200px;
  }
  .company-name {
    position: absolute;
    font-size: 30px;
    left: 300px;
    top: 70px;
    font-weight: bolder;
  }
  .company-intro {
    position: absolute;
    font-size: 14px;
    left: 300px;
    top: 110px;
    right: 300px;
    .intro-content {
      max-height: 130px;
      overflow: auto;
    }
  }
  .submit-info {
    line-height: 2;
    h3 {
      color: #7cb83e;
    }
    h4 {
      font-weight: bolder;
      color: black;
    }
  }
  .bottom-btn {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
