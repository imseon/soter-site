<template>
  <div class="project-info">
    <Header />
    <div class="content-wrapper main-content" v-if="projectInfo">
      <div class="block-content block-1">
        <div class="company-avatar" :style="{ backgroundImage: `url(${projectInfo.companyAvatar})` }"></div>
        <div class="company-name">{{ projectInfo.companyName }}</div>
        <div class="company-intro">
          <div class="intro-content">{{ projectInfo.companyIntro }}</div>
        </div>
        <div :class="{ 'days-left': true, expired: expireDay <= 0 }">
          <div class="r1" v-if="expireDay > 0">
            <span class="num">
              {{ expireDay }}
            </span>
            天
          </div>
          <div v-else class="r1">
            已结束
          </div>
          <div class="r2">项目期限</div>
        </div>
        <el-divider></el-divider>
        <div class="project-detail">
          <div class="project-title-panel">
            <h3 class="subtitle">项目名</h3>
            <div class="project-title">{{ projectInfo.title }}</div>
          </div>
          <div class="project-desc-panel">
            <h3 class="subtitle">漏洞收集范围</h3>
            <div class="project-desc">{{ projectInfo.description }}</div>
          </div>
          <div class="project-bonus">
            <div class="bonus-title"><i class="iconfont icon-coins"></i>项目奖励积分</div>
            <div class="bonus-point">
              <div class="point-detail">
                <div class="bonus-num">{{ projectInfo.inspectionScore }}</div>
                <div class="bonus-name">基础积分</div>
              </div>
              <div class="point-detail">
                <i class="el-icon-plus"></i>
              </div>
              <div class="point-detail">
                <div class="bonus-num">{{ projectInfo.leakTopScore }}</div>
                <div class="bonus-name">奖励积分</div>
              </div>
            </div>
            <div class="bonus-rule">
              <router-link :to="{ path: '/rule', query: { name: '2' } }">积分奖励规则>></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="block-content" v-if="[0, 3, 5, 6].indexOf(projectInfo.status) !== -1">
        <div class="project-status" v-if="projectInfo.status === 0">待审核</div>
        <div class="project-status" v-if="projectInfo.status === 3">审核失败 {{ projectInfo.auditMsg || '' }}</div>
        <div v-if="projectInfo.status === 5 || projectInfo.status === 6">
          <h3 class="subtitle">漏洞列表</h3>
          <el-table class="leak-table" v-if="leaks" :data="leaks.list" border stripe align="center" header-row-class-name="table-head">
            <el-table-column prop="leakName" label="漏洞" align="center"> </el-table-column>
            <el-table-column prop="leakLevel" label="漏洞级别" align="center"> </el-table-column>
            <el-table-column prop="levelType" label="类型" align="center"> </el-table-column>
            <el-table-column prop="createTime" label="漏洞提交日期" align="center"> </el-table-column>
            <el-table-column prop="leakStatus" label="漏洞状态" align="center" :formatter="formatStatus"> </el-table-column>
            <el-table-column prop="leakScore" label="预计漏洞积分" align="center"> </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="block-content" v-if="projectInfo.status === 1">
        <h3 class="subtitle">应标人员</h3>
        <div class="acc-list" v-if="accs">
          <div v-for="acc of accs.list" :class="{ 'other-tops-item': true, active: selectedAcc && selectedAcc.id === acc.id }" :key="acc.id" @click="select(acc)">
            <div class="user-avatar" :style="{ backgroundImage: `url(${acc.picture})` }"></div>
            <div class="user-detail">
              <div class="detail-1">{{ acc.name }}</div>
              <div class="detail-2">积分: {{ acc.scoreTotal || 0 }}</div>
              <div class="detail-3">发现{{ acc.leakNum || 0 }}个漏洞</div>
            </div>
          </div>
        </div>
        <div class="bottom-btn">
          <el-button type="primary" @click="delegate">选择白帽</el-button>
        </div>
      </div>
    </div>
    <home-footer />
  </div>
</template>

<script>
import Header from '@/components/CommonHeader.vue'
// import { Message } from 'element-ui'
import { mapState } from 'vuex'
import HomeFooter from '../components/HomeFooter.vue'
import { Message } from 'element-ui'

export default {
  components: { Header, HomeFooter },
  data() {
    return {
      leaks: null,
      accs: null,
      selectedAcc: null
    }
  },
  created() {
    this.fetch()
  },
  computed: {
    ...mapState({
      projectInfo: (state) => state.project.info
    }),
    expireDay() {
      if (this.projectInfo) {
        if (this.projectInfo.expireDate) {
          return this.timeDown(this.projectInfo.expireDate)
        } else {
          return this.projectInfo.expireDay * 1
        }
      }
      return 0
    }
  },
  methods: {
    async fetch() {
      this.$store.dispatch('project/info', { pid: this.$route.query.pid })
      this.leaks = await this.$store.dispatch('project/leakList', { pid: this.$route.query.pid, pagesize: 1000 })
      this.accs = await this.$store.dispatch('project/accList', { pid: this.$route.query.pid, order: 1 })
    },
    timeDown(endDateStr) {
      var endDate = new Date(endDateStr.replace(/-/g, '/'))
      var nowDate = new Date()
      var totalSeconds = parseInt((endDate - nowDate) / 1000)
      return Math.floor(totalSeconds / (60 * 60 * 24))
    },
    formatStatus(row) {
      if (row.leakStatus == 0) {
        return '待审核'
      } else if (row.leakStatus == 1) {
        return '审核通过'
      } else if (row.leakStatus == 3) {
        return '审核失败'
      } else if (row.leakStatus == 4) {
        return '已确认'
      } else if (row.leakStatus == 5) {
        return '已完成'
      } else if (row.leakStatus == 6) {
        return '已结束'
      } else if (row.leakStatus == 7) {
        return '已确认'
      }
    },
    select(acc) {
      if (!this.selectedAcc || this.selectedAcc.id !== acc.id) {
        this.selectedAcc = acc
      } else {
        this.selectedAcc = null
      }
    },
    async delegate() {
      try {
        await this.$store.dispatch('project/delegate', { rid: this.selectedAcc.rid })
      } catch (e) {
        Message.error('分配失败')
        return
      }
      Message.success('分配成功')
      this.$store.dispatch('project/info', { pid: this.$route.query.pid })
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
  .project-status {
    font-size: 18px;
    color: #7cb83e;
  }
  .project-title {
    margin-top: 20px;
  }
  .project-desc-panel {
    margin-top: 40px;
  }
  .project-desc {
    margin-top: 20px;
    margin-right: 500px;
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
      height: 185px;
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
    }
  }
  .bonus-rule {
    font-size: 18px;
    a {
      color: #9a9a9a;
    }
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
    &.expired {
      color: #999999;
    }
    .r1 {
      font-size: 34px;
      font-weight: bolder;
      display: flex;
      align-items: baseline;
    }
    .r2 {
      font-size: 22px;
      letter-spacing: 2px;
    }
    .num {
      font-size: 60px;
      margin-right: 5px;
    }
  }
  .leak-table {
    margin-top: 20px;
  }
  .acc-list {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    margin-top: 22px;
    .other-tops-item {
      width: 156px;
      height: 156px;
      position: relative;
      border: 1px solid #3eb292;
      cursor: pointer;
      &:not(:nth-child(5)) {
        margin-right: 10px;
      }
      &.active {
        background-image: linear-gradient(to top right, #3eb292, #66dbbe);
        border: 1px solid white;
        .user-detail {
          color: white;
        }
      }
      .user-avatar {
        width: 58px;
        height: 58px;
        border-radius: 58px;
        border: 6px solid #5bc0b6;
        background-size: 100%;
        position: absolute;
        top: 12px;
        left: 50%;
        margin-left: -35px;
        .user-seq {
          width: 28px;
          height: 28px;
          border-radius: 28px;
          line-height: 28px;
          background: #3f66a0;
          font-size: 16px;
          color: white;
          text-align: center;
          font-weight: bolder;
          position: absolute;
          bottom: 0;
          left: -13px;
        }
      }
      .user-detail {
        position: absolute;
        width: 100%;
        text-align: center;
        color: #666;
        font-size: 16px;
        bottom: 10px;
        .detail-1 {
          font-weight: bolder;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.leak-table .table-head {
  background-image: linear-gradient(to right, #3f66a0, #7cb83e);
  th {
    background-color: transparent;
    color: white;
    font-weight: bolder;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }
}
</style>
