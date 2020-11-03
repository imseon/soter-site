<template>
  <div class="notice">
    <Header />
    <PageBanner>
      <div class="r1">平台白帽中心 企业安全保障</div>
      <div class="r2">大厅任务悬赏</div>
      <div class="r3">DA TING REN WU XUAN SHANG</div>
    </PageBanner>
    <div class="content-wrapper">
      <div class="white-area">
        <div class="project-header">
          <h3>任务悬赏</h3>
          <el-form class="search-bar">
            <el-input placeholder="请输入内容" v-model="inputKeyword" class="input-search" size="small">
              <el-button slot="append" icon="el-icon-search" @click="search" native-type="submit"></el-button>
            </el-input>
            <el-dropdown>
              <el-button type="primary" size="small"> 所有项目<i class="el-icon-arrow-down el-icon--right"></i> </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>双皮奶</el-dropdown-item>
                <el-dropdown-item>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-form>
        </div>
        <div class="project-wrapper" v-if="projectData">
          <div class="project-card" v-for="project of projectData.list" :key="project.projectId">
            <div class="project-logo">
              <div class="project-avatar" :style="{ backgroundImage: `url(${project.avatar})` }"></div>
            </div>
            <div class="project-com-name">{{ project.companyName }}</div>
            <div class="project-name">{{ project.projectName }}</div>
            <div class="project-data">
              <div class="project-data-item">
                <div>测试积分</div>
                <div>{{ project.inspectionScore }}</div>
              </div>
              <div class="project-data-item">
                <div>奖励积分</div>
                <div>{{ project.leakTopScore }}</div>
              </div>
              <div class="project-data-item" v-if="project.projectStatus == 5">
                <div>剩余时间</div>
                <div>{{ getExpireDay(project.expireDate) }}天</div>
              </div>
              <div class="project-data-item" v-if="project.projectStatus == 6">
                <div>剩余时间</div>
                <div>已完成</div>
              </div>
              <div class="project-data-item" v-if="project.projectStatus == 1">
                <div>剩余时间</div>
                <div>{{ project.expireDay }}天</div>
              </div>
            </div>
            <div class="project-status">
              <router-link :to="`/userInfo?pid=${project.projectId}`">
                <el-button type="primary" size="mini">项目详情</el-button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="pagination-wrapper" v-if="projectData">
          <el-pagination @current-change="handleCurrentChange" :current-page.sync="page" :page-size="pagesize" layout="prev, pager, next, jumper" :total="projectData.totalNum"> </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/CommonHeader.vue'
import PageBanner from '@/components/PageBanner.vue'
import { MessageBox } from 'element-ui'

import { mapState } from 'vuex'

export default {
  components: { Header, PageBanner },
  data() {
    return {
      page: 1,
      pagesize: 6,
      noticeType: 'platform',
      inputKeyword: '',
      keyword: ''
    }
  },
  created() {
    this.fetch()
  },
  computed: mapState({
    projectData: (state) => state.project.unApplyList
  }),
  methods: {
    handleCurrentChange(page) {
      this.page = page
      this.fetch()
    },
    fetch() {
      this.$store.dispatch('project/fetchUnApply', { page: this.page, pagesize: this.pagesize, title: this.keyword })
    },
    openNotice(notice) {
      MessageBox.alert(notice.content, notice.title, {
        customClass: 'notice-msg-box',
        confirmButtonClass: 'notice-msg-box-confirm-btn',
        confirmButtonText: '关闭'
      })
    },
    search() {
      this.keyword = this.inputKeyword
      this.page = 1
      this.fetch()
    },
    getExpireDay(expireDate) {
      if (expireDate) {
        let endDate = new Date(expireDate.replace(/-/g, '/'))
        let nowDate = new Date()
        expireDate = parseInt((endDate - nowDate) / 1000)
        expireDate = Math.floor(expireDate / (60 * 60 * 24))
        expireDate = expireDate > 0 ? expireDate : '已结束'
        return expireDate
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/common.scss';
.notice {
  min-height: 100vh;
  background-color: #f7f7f7;
}
.page-banner {
  margin-top: 120px;
}
.r2 {
  font-size: 48px;
  color: white;
  text-align: center;
  line-height: 1;
  letter-spacing: 4px;
}
.r3,
.r1 {
  font-size: 16px;
  color: white;
  text-align: center;
  letter-spacing: 2px;
}
.r2,
.r3 {
  padding-top: 18px;
}
.r1 {
  padding-top: 88px;
  font-size: 22px;
}
.white-area {
  padding: 40px;
  margin-top: 30px;
  background-color: white;
}
.project-header {
  margin-top: 20px;
  position: relative;
  h3 {
    font-size: 20px;
    color: #8b8b8b;
    padding-bottom: 5px;
    border-bottom: 2px solid #7cb83e;
    width: 90px;
    text-align: center;
  }
  .search-bar {
    display: flex;
    position: absolute;
    right: 0;
    top: 0;
    & > *:first-child {
      margin-right: 10px;
    }
  }
}
.project-wrapper {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .project-card {
    margin-top: 50px;
    width: 300px;
    height: 200px;
    border: 1px solid #7cb83e;
    color: #7cb83e;
    border-radius: 5px;
    position: relative;
    text-align: center;
    .project-logo {
      width: 54px;
      height: 54px;
      border-radius: 54px;
      border: 1px solid #7cb93c;
      background-color: white;
      position: absolute;
      left: 50%;
      margin-left: -33px;
      top: -33px;
      padding: 5px;
      .project-avatar {
        background-color: rgba(0, 0, 0, 0.3);
        width: 54px;
        height: 54px;
        border-radius: 54px;
      }
    }
    .project-com-name {
      margin-top: 40px;
      font-size: 18px;
    }
    .project-name {
      margin-top: 5px;
      color: #666666;
    }
    .project-status {
      margin-top: 5px;
      font-weight: bolder;
    }
    .project-data {
      display: flex;
      justify-content: center;
      position: relative;
      margin-top: 10px;
      &::before {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: url('../assets/images/split-299.png') no-repeat center top;
        background-size: 250px;
        position: absolute;
        left: 0;
        top: 0;
      }
      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: url('../assets/images/split-299.png') no-repeat center top;
        background-size: 250px;
        position: absolute;
        left: 0;
        bottom: 0;
      }
      .project-data-item {
        margin: 10px 0;
        padding: 0px 20px;
        &:not(:last-child) {
          border-right: 1px solid #ebf4e2;
        }
      }
    }
    &:not(:nth-child(3n)) {
      margin-right: 40px;
    }
  }
}
.pagination-wrapper {
  text-align: center;
  margin-top: 32px;
}
</style>
<style lang="scss">
.notice-table-row {
  cursor: pointer;
}
.notice-msg-box {
  width: 800px;
}
.notice-msg-box-confirm-btn {
  background-color: #7cb83e !important;
  border: 0 none !important;
}
.table-head th {
  background-color: #7cb83e;
  color: white;
}
.input-search {
  .el-input-group__append {
    background-color: #7cb83e;
    color: white;
  }
}
</style>
