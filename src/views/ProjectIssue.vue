<template>
  <div class="project-info">
    <Header />
    <div class="content-wrapper main-content">
      <div class="block-content block-1">
        <div class="company-avatar" :style="{ backgroundImage: `url(${company.avatar})` }"></div>
        <div class="company-name">{{ company.name }}</div>
        <div class="company-intro">
          <div class="intro-content">{{ company.intro }}</div>
        </div>
        <div class="days-left">
          <div class="r1">
            <span class="num">
              <el-input class="expire-input" v-model="form.expireDay"></el-input>
            </span>
            <span>天</span>
          </div>
          <div class="r2">项目时间</div>
        </div>
        <el-divider></el-divider>
        <div class="project-detail">
          <div class="project-title-panel">
            <h3 class="subtitle">项目名</h3>
            <div class="project-title">
              <el-input class="title-input" v-model="form.title"></el-input>
            </div>
          </div>
          <div class="project-domain-panel">
            <h3 class="subtitle">项目范围</h3>
            <div class="project-title">
              <el-input class="title-input" v-model="form.domain"></el-input>
            </div>
          </div>
          <div class="project-desc-panel">
            <h3 class="subtitle">项目详情</h3>
            <div class="project-desc">
              <el-input type="textarea" class="desc-input" v-model="form.description" :rows="10"> </el-input>
            </div>
          </div>
          <div class="project-bonus">
            <div class="bonus-title"><i class="iconfont icon-coins"></i>项目奖励积分</div>
            <div class="bonus-point">
              <div class="point-detail">
                <div class="bonus-num">
                  <el-input class="point-input" v-model="form.inspectionScore"></el-input>
                </div>
                <div class="bonus-name">基础积分</div>
              </div>
              <div class="point-detail">
                <i class="el-icon-plus"></i>
              </div>
              <div class="point-detail">
                <div class="bonus-num">
                  <el-input class="point-input" v-model="form.leakTopScore"></el-input>
                </div>
                <div class="bonus-name">奖励积分</div>
              </div>
            </div>
            <div class="bonus-rule">积分奖励规则>></div>
          </div>
        </div>
        <div class="bottom-btn">
          <el-button type="primary" :disabled="adding" @click="publish" style="width:120px">发布项目</el-button>
        </div>
      </div>
    </div>
    <home-footer />
  </div>
</template>

<script>
import Header from '@/components/CommonHeader.vue'
import { Message } from 'element-ui'
import { mapState } from 'vuex'
import HomeFooter from '../components/HomeFooter.vue'

export default {
  components: { Header, HomeFooter },
  data() {
    return {
      form: {},
      adding: false
    }
  },
  created() {
    this.fetch()
  },
  computed: mapState({
    company: (state) => state.user.user.u,
    addErr: (state) => state.project.err
  }),
  methods: {
    async fetch() {
      await this.$store.dispatch('user/check')
    },
    async publish() {
      if (!this.form.title) {
        Message.error('请填写项目标题')
        return
      } else if (this.form.title.length > 10) {
        Message.error('标题最多十个字')
        return
      }
      if (!this.form.domain) {
        Message.error('请填写项目范围')
        return
      }
      if (!this.form.description) {
        Message.error('请填写项目描述')
        return
      }
      if (!this.form.expireDay) {
        Message.error('请填写限定时长')
        return
      }
      if (!this.form.inspectionScore || !this.form.leakTopScore) {
        Message.error('请填写项目积分')
        return
      }
      this.form.compId = this.company.id
      await this.$store.dispatch('project/add', { params: this.form })
      if (this.addErr) {
        Message.error('发布失败')
        return
      }
      Message.success('发布成功')
      this.$router.back(-1)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/common.scss';
.project-info {
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
.main-content {
  padding-top: 120px;
}
.block-content {
  position: relative;
  background-color: white;
  padding: 40px 60px;
  margin-top: 20px;
  &.block-1 {
    min-height: 546px;
  }
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
  .subtitle {
    width: 164px;
    height: 44px;
    font-size: 22px;
    padding-left: 20px;
    color: white;
    background-color: #7cb83e;
    line-height: 44px;
    position: relative;
    &::before {
      content: '';
      display: block;
      width: 4px;
      background-color: #7cb83e;
      height: 44px;
      position: absolute;
      top: 0;
      left: -8px;
    }
  }
  .project-title-panel,
  .project-domain-panel {
    display: flex;
    align-items: center;
  }
  .project-domain-panel {
    margin-top: 40px;
  }
  .project-title {
    margin-left: 20px;
    .title-input {
      width: 400px;
    }
  }
  .project-desc-panel {
    margin-top: 40px;
  }
  .project-desc {
    margin-top: 20px;
    margin-right: 500px;
    .desc-input {
      width: 604px;
    }
  }
  .bottom-btn {
    margin-top: 20px;
  }
  .project-bonus {
    height: 240px;
    position: absolute;
    right: 60px;
    top: 286px;
    text-align: center;
  }
  .bonus-title {
    font-size: 24px;
    color: #7cb83e;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .icon-coins {
      font-size: 36px;
    }
  }
  .bonus-point {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .point-detail {
      height: 125px;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #7cb83e;
      .bonus-num {
        font-size: 60px;
        line-height: 1.5;
      }
      .bonus-name {
        font-size: 20px;
        line-height: 1.5;
      }
      .el-icon-plus {
        font-size: 40px;
        font-weight: bolder;
        margin: 0 30px;
      }
      .point-input {
        width: 120px;
      }
    }
  }
  .bonus-rule {
    font-size: 18px;
    color: #9a9a9a;
  }
  .bottom-btn {
    text-align: center;
  }
  .days-left {
    position: absolute;
    top: 70px;
    right: 60px;
    text-align: right;
    line-height: 1.2;
    color: #7cb83e;
    .r1 {
      font-size: 34px;
      font-weight: bolder;
      display: flex;
      align-items: flex-start;
      margin-bottom: 6px;
    }
    .r2 {
      font-size: 22px;
      letter-spacing: 2px;
    }
    .num {
      font-size: 60px;
      margin-right: 5px;
      display: flex;
      .expire-input {
        width: 60px;
      }
    }
  }
}
</style>
