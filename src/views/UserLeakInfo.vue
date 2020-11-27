<template>
  <div class="leak-info">
    <Header />
    <div class="content-wrapper main-content" v-if="leak">
      <div class="block-content">
        <div class="company-avatar" :style="{ backgroundImage: `url(${leak.companyAvatar})` }"></div>
        <div class="company-name">{{ leak.companyName }}</div>
        <div class="company-intro">
          <div class="intro-content">{{ leak.companyIntro }}</div>
        </div>
        <div class="block-btn">
          <el-button type="primary" size="mini" @click="$router.back(-1)">返回</el-button>
        </div>
        <el-divider></el-divider>
        <el-form label-width="80px">
          <el-form-item label="漏洞标题">
            <span>{{ leak.title }}</span>
          </el-form-item>
          <el-form-item label="漏洞类型">
            <span>{{ leak.typeName }}</span>
          </el-form-item>
          <el-form-item label="漏洞等级">
            <span>{{ leak.levelName }}</span>
          </el-form-item>
          <el-form-item label="域名/IP">
            <span>{{ leak.domain }}</span>
          </el-form-item>
          <el-form-item label="URL">
            <span>{{ leak.url }}</span>
          </el-form-item>
        </el-form>
      </div>
      <div class="block-content">
        <el-form label-width="80px">
          <el-form-item label="简要描述">
            <span>{{ leak.harm }}</span>
          </el-form-item>
          <el-form-item label="详细细节">
            <span>{{ leak.detail }}</span>
          </el-form-item>
          <el-form-item label="附件">
            <span>{{ leak.attachment }}</span>
          </el-form-item>
          <el-form-item label="修复建议">
            <span>{{ leak.advise }}</span>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <home-footer />
  </div>
</template>

<script>
import Header from '@/components/CommonHeader.vue'
import { mapState } from 'vuex'
import HomeFooter from '../components/HomeFooter.vue'

export default {
  components: { Header, HomeFooter },
  data() {
    return {}
  },
  async created() {
    this.fetch()
  },
  computed: {
    ...mapState({
      leak: (state) => state.project.leakInfo
    })
  },
  methods: {
    fetch() {
      this.$store.dispatch('project/leakInfo', { aid: this.$route.query.a })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/common.scss';
.leak-info {
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
    background-size: 100%;
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
  .block-btn {
    position: absolute;
    right: 60px;
    top: 40px;
    .leak-desc {
      line-height: 40px;
      height: 40px;
      color: #b5b5b5;
    }
    .btn-cancal {
      margin-right: 10px;
      &:hover {
        color: #ff6f6d;
      }
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
<style lang="scss">
.leak-info {
  .el-form-item__label {
    color: #7cb83e;
  }
}
</style>
