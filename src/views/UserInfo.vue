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
          <div class="r1" v-else>
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
          <div class="project-domain-panel">
            <h3 class="subtitle">项目范围</h3>
            <div class="project-title">{{ projectInfo.domain }}</div>
          </div>
          <div class="project-desc-panel">
            <h3 class="subtitle">项目介绍</h3>
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
      <div class="bottom-btn" v-if="projectInfo.status === 1" :disabled="applied">
        <el-button type="primary" :disabled="applied" @click="applyProject">{{ applied ? '已申领' : '申领项目' }}</el-button>
      </div>
      <div class="bottom-btn" v-if="[5, 6].indexOf(projectInfo.status) !== -1 && !mine">
        <el-button type="primary" disabled>已分配给他人</el-button>
      </div>
      <div class="block-content" v-if="[5, 6].indexOf(projectInfo.status) !== -1 && mine">
        <h3 class="subtitle">漏洞列表</h3>
        <el-table class="leak-table" :data="leaks && leaks.list" border style="width: 100%; margin-top: 20px;" header-row-class-name="table-head" row-class-name="clickable-row">
          <el-table-column header-align="center" prop="leakName" label="漏洞名称"> </el-table-column>
          <el-table-column header-align="center" prop="leakLevel" label="漏洞级别"> </el-table-column>
          <el-table-column header-align="center" prop="levelType" label="漏洞类型"> </el-table-column>
          <el-table-column header-align="center" prop="createTime" label="提交时间"> </el-table-column>
          <el-table-column header-align="center" prop="leakStatus" label="漏洞状态" :formatter="formatStatus"> </el-table-column>
          <el-table-column header-align="center" prop="leakScore" label="预计积分"> </el-table-column>
          <el-table-column label="操作" width="150" align="center">
            <template slot-scope="scope">
              <el-button v-if="scope.row.leakStatus == 3" @click="handleEdit(scope.row)" type="text" size="small">修改</el-button>
              <el-button v-else @click="handleInfo(scope.row)" type="text" size="small">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="bottom-btn">
          <router-link :to="`/submitLeak?p=${projectInfo.id}`">
            <el-button type="primary">提交漏洞</el-button>
          </router-link>
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
import { Message } from 'element-ui'
import HomeFooter from '../components/HomeFooter.vue'

export default {
  data() {
    return {
      applied: true,
      mine: true,
      leaks: null,
      page: 1,
      pagesize: 1000
    }
  },
  created() {
    this.fetch()
  },
  components: {
    Header,
    HomeFooter
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
      let result = await this.$store.dispatch('user/checkProject', { pid: this.$route.query.pid })
      this.applied = result.isApply
      this.mine = result.isMe
      if (this.mine) {
        this.leaks = await this.$store.dispatch('project/leakList', { pid: this.$route.query.pid, page: this.page, pagesize: this.pagesize })
      }
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
    async applyProject() {
      try {
        await this.$store.dispatch('project/apply', { pid: this.$route.query.pid })
      } catch (e) {
        return Message.error(e.message || '申领失败，请稍后重试')
      }
      Message.success('申领成功')
    },
    handleInfo(row) {
      this.$router.push({ path: '/userLeakInfo?a=' + row.leakId })
    },
    handleEdit(row) {
      this.$router.push({ path: '/submitLeak?a=' + row.leakId })
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
  .project-title {
    margin-top: 20px;
  }
  .project-desc-panel,
  .project-domain-panel {
    margin-top: 40px;
  }
  .project-desc {
    margin-top: 20px;
    margin-right: 500px;
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
}
.bottom-btn {
  text-align: center;
  margin-top: 20px;
}
</style>
<style lang="scss">
.leak-table {
  .table-head {
    background-image: linear-gradient(to right, #3f66a0, #7cb83e);
    th {
      background-color: transparent;
      color: white;
      font-weight: bolder;
      border-right: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
  .clickable-row {
    cursor: pointer;
  }
}
</style>
