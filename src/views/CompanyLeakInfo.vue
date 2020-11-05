<template>
  <div class="my-center">
    <Header />
    <div class="content-wrapper">
      <div class="right-panel">
        <div class="right-content">
          <div class="right-block" id="basic">
            <div class="block-head basic-head">
              <div class="company-avatar-panel">
                <div class="company-avatar" :style="{ backgroundImage: `url(${account.picture})` }"></div>
              </div>
              <div class="company-name">{{ account && account.name }}</div>
              <div class="company-intro">
                <div class="intro-content">{{ account.intro }}</div>
              </div>
              <div class="block-btn">
                <el-button v-if="leak.status == 1" type="success" size="mini" @click="confirm">确认前往修复漏洞</el-button>
                <el-button v-if="leak.status == 4" type="primary" size="mini" @click="$router.back(-1)">返回</el-button>
              </div>
            </div>
            <div class="block-content data-table">
              <div class="data-item">
                <div class="data-item-title">漏洞标题</div>
                <div class="data-item-content">{{ leak.title }}</div>
              </div>
              <div class="data-item">
                <div class="data-item-title">漏洞类型</div>
                <div class="data-item-content">{{ leak.typeName }}</div>
              </div>
              <div class="data-item">
                <div class="data-item-title">漏洞等级</div>
                <div class="data-item-content">{{ leak.levelName }}</div>
              </div>
              <div class="data-item">
                <div class="data-item-title">域名/IP</div>
                <div class="data-item-content">{{ leak.domain }}</div>
              </div>
              <div class="data-item">
                <div class="data-item-title">URL</div>
                <div class="data-item-content">{{ leak.url }}</div>
              </div>
            </div>
          </div>
          <div class="right-block">
            <div class="block-head">
              <div class="block-title" id="project">
                白帽建议
              </div>
            </div>
            <div class="block-content data-table">
              <div class="data-item">
                <div class="data-item-title">简要描述</div>
                <div class="data-item-content">{{ leak.harm }}</div>
              </div>
              <div class="data-item">
                <div class="data-item-title">详细细节</div>
                <div class="data-item-content">{{ leak.detail }}</div>
              </div>
              <div class="data-item">
                <div class="data-item-title">附件</div>
                <div class="data-item-content">
                  <el-link v-if="leak.attachment" type="success" :href="leak.attachment" v-text="leak.attachment" target="block">下载附件</el-link>
                  <label v-else>无附件</label>
                </div>
              </div>
              <div class="data-item">
                <div class="data-item-title">修复建议</div>
                <div class="data-item-content">
                  <div v-html="leak.advise"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="right-block">
            <div class="block-head">
              <div class="block-title" id="leak">
                平台建议
              </div>
            </div>
            <div class="block-content data-table">
              <div class="data-item">
                <div class="data-item-title">分析漏洞成因</div>
                <div class="data-item-content">{{ leak.reason }}</div>
              </div>
              <div class="data-item">
                <div class="data-item-title">漏洞修复建议</div>
                <div class="data-item-content">{{ leak.auditAdvise }}</div>
              </div>
            </div>
          </div>
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
    return {}
  },
  created() {
    this.loadAccount()
    this.fetch()
  },
  computed: mapState({
    leak: (state) => state.project.leakInfo,
    leakErr: (state) => state.project.leakErr
  }),
  methods: {
    async fetch() {
      this.$store.dispatch('project/leakInfo', { aid: this.$route.query.a })
    },
    loadAccount() {
      let account = localStorage.getItem('u')
      if (account) {
        this.account = JSON.parse(account)
      }
    },
    async confirm() {
      await this.$store.dispatch('project/verify', { leakId: this.leak.id })
      if (this.leakErr) {
        Message.error('操作失败')
        return
      }
      this.leak.status = 4
      Message.success('操作成功')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/common.scss';
.my-center {
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
.side-nav {
  width: 144px;
  height: 260px;
  background-color: #3a68a6;
  position: fixed;
  top: 140px;
  .side-nav-item {
    width: 100%;
    height: 49px;
    margin-top: 28px;
    font-size: 20px;
    color: white;
    text-align: center;
    line-height: 49px;
    position: relative;
    &:first-child {
      margin-top: 30px;
    }
    &:hover {
      background-color: #4e8087;
    }
    &.active {
      .active-bg {
        display: block;
      }
    }
    .active-bg {
      display: none;
      background-color: #7cb83e;
      width: 144px;
      height: 49px;
      position: absolute;
      left: -8px;
      &::before {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 6px 6px;
        border-color: transparent transparent #103b74 transparent;
        position: absolute;
        bottom: -5px;
        left: 0px;
        transform: rotate(45deg);
      }
      &::after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 6px 6px;
        border-color: transparent transparent white transparent;
        position: absolute;
        transform: rotate(90deg);
        right: 10px;
        top: 22px;
      }
    }
    .nav-text {
      width: 144px;
      height: 49px;
      position: absolute;
    }
  }
}
.right-panel {
  padding-top: 140px;
}
.right-content {
  .right-block {
    background: white;
    padding: 30px 30px 0;
    margin-bottom: 10px;
    .block-head {
      position: relative;
      .block-title {
        background: #7cb83e;
        color: white;
        padding-left: 15px;
        width: 130px;
        height: 36px;
        line-height: 36px;
        position: relative;
        &::before {
          content: '';
          display: block;
          width: 4px;
          height: 100%;
          background-color: #7cb83e;
          left: -8px;
          position: absolute;
        }
      }
      .block-btn {
        position: absolute;
        right: 0;
        top: 0;
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
      &.basic-head {
        border-bottom: 1px solid #eaeaea;
        padding-bottom: 24px;
      }
      .company-avatar-panel {
        .company-avatar {
          width: 200px;
          height: 200px;
          border: 1px solid #7cb83e;
          border-radius: 200px;
        }
        .set-avatar {
          position: absolute;
          bottom: 0;
          text-align: center;
          width: 74px;
        }
      }
      .company-name {
        position: absolute;
        font-size: 30px;
        left: 216px;
        top: 42px;
      }
      .company-intro {
        position: absolute;
        font-size: 14px;
        left: 216px;
        top: 80px;
        right: 0;
        .intro-editor {
          width: 100%;
        }
      }
    }
    .block-content {
      margin-top: 20px;
      .sub-title {
        font-weight: bolder;
        padding-bottom: 20px;
      }
    }
    .data-table {
      display: table;
    }
    .data-item {
      display: table-row;
      .data-item-title {
        padding-bottom: 10px;
        display: table-cell;
        color: #7cb83e;
        text-align: right;
      }
      .data-item-content {
        display: table-cell;
        padding-left: 20px;
      }
    }
    .project-panel {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .project-card {
        margin-top: 50px;
        width: 292px;
        height: 200px;
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
        .project-name {
          margin-top: 24px;
          font-size: 18px;
          color: white;
        }
        .project-handle {
          margin-top: 5px;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 28px;
          line-height: 28px;
          .handler-avatar {
            width: 28px;
            height: 28px;
            border-radius: 28px;
            background: #fff;
          }
          &::after {
            content: '';
            display: block;
            clear: both;
          }
        }
        .project-status {
          margin-top: 5px;
          color: white;
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
            color: white;
            margin: 10px 0;
            padding: 0px 20px;
            &:not(:last-child) {
              border-right: 1px solid rgba(255, 255, 255, 0.6);
            }
          }
        }
        &:nth-child(1) {
          background-image: linear-gradient(to top right, #3267a7, #2475d6);
        }
        &:nth-child(2) {
          background-image: linear-gradient(to top right, #7cb93c, #85d038);
        }
        &:nth-child(3) {
          background-image: linear-gradient(to top right, #ffa70f, #ffbc24);
        }
      }
    }
    .table-pagination {
      margin-top: 10px;
      text-align: center;
    }
    .bottom-btn {
      text-align: center;
      padding: 20px 0;
      a {
        margin: 0 auto;
        display: block;
        width: 120px;
        background-color: #7cb83e;
        height: 30px;
        line-height: 30px;
        border-radius: 4px;
        font-size: 14px;
      }
    }
    .leak-table-panel {
      padding-bottom: 20px;
      .table-pagination {
        text-align: right;
      }
    }
  }
}
</style>
<style lang="scss">
.right-content {
  .el-form-item__label {
    text-align: left;
    color: #7cb83e;
  }
  .no-edit {
    .el-input__inner {
      border: 0 none;
    }
  }
}
.leak-table-panel .table-head,
.point-table-panel .table-head {
  background-image: linear-gradient(to right, #3f66a0, #7cb83e);
  th {
    background-color: transparent;
    color: white;
    font-weight: bolder;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }
}
</style>
