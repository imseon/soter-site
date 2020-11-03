<template>
  <div class="my-center">
    <CommonHeader />
    <div class="content-wrapper">
      <div class="side-nav">
        <div :class="{ 'side-nav-item': true, active: currNav === 'basic' }" v-scroll-to="{ el: '#basic', offset: -140 }" @click="activeNav('basic')">
          <div class="active-bg"></div>
          <div class="nav-text">基本资料</div>
        </div>
        <div :class="{ 'side-nav-item': true, active: currNav === 'account' }" v-scroll-to="{ el: '#account', offset: -140 }" @click="activeNav('account')">
          <div class="active-bg"></div>
          <div class="nav-text">收款信息</div>
        </div>
        <div :class="{ 'side-nav-item': true, active: currNav === 'project' }" v-scroll-to="{ el: '#project', offset: -140 }" @click="activeNav('project')">
          <div class="active-bg"></div>
          <div class="nav-text">我的项目</div>
        </div>
        <div :class="{ 'side-nav-item': true, active: currNav === 'leak' }" v-scroll-to="{ el: '#leak', offset: -140 }" @click="activeNav('leak')">
          <div class="active-bg"></div>
          <div class="nav-text">漏洞管理</div>
        </div>
        <div :class="{ 'side-nav-item': true, active: currNav === 'point' }" v-scroll-to="{ el: '#point', offset: -140 }" @click="activeNav('point')">
          <div class="active-bg"></div>
          <div class="nav-text">我的积分</div>
        </div>
      </div>
      <div class="right-panel">
        <div class="right-head">
          <div class="user-info-panel">
            <el-upload class="user-avatar-panel" :action="uploadUrl" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
              <div class="user-avatar" :style="{ backgroundImage: `url(${account.picture})` }"></div>
              <div class="set-avatar">更改头像</div>
            </el-upload>

            <div class="user-name-panel">
              <div class="user-name">
                <span class="user-name-text">{{ account.name }}</span>
                <span class="user-sex-icon"><i :class="{ iconfont: true, 'icon-male': true }"></i></span>
                <div class="id-card" v-if="account.identitycard"><i class="iconfont icon-id-card"></i>已实名认证</div>
              </div>
            </div>
          </div>
          <div class="user-data-panel">
            <div class="data-icon icon-1"></div>
            <div class="data-detail detail-1">
              <div class="data-num">{{ stat ? stat.l : 0 }}</div>
              <div class="data-desc">发现漏洞</div>
            </div>
          </div>
          <div class="user-data-panel">
            <div class="data-icon icon-2"></div>
            <div class="data-detail detail-2">
              <div class="data-num">{{ stat ? stat.p : 0 }}</div>
              <div class="data-desc">检测项目</div>
            </div>
          </div>
          <div class="user-data-panel">
            <div class="data-icon icon-3"></div>
            <div class="data-detail detail-3">
              <div class="data-num">{{ stat ? stat.c : 0 }}</div>
              <div class="data-desc">服务企业</div>
            </div>
          </div>
        </div>
        <div class="right-content">
          <div class="right-block">
            <div class="block-head">
              <div class="block-title" id="basic">
                基本资料
              </div>
              <div class="block-btn">
                <el-button type="primary" size="mini" v-if="!editing.basic" @click="edit('basic', true)">修改</el-button>
                <div v-else>
                  <span class="btn-cancal" @click="edit('basic', false)">取消</span>
                  <el-button type="primary" size="mini" @click="save('basic')">保存</el-button>
                </div>
              </div>
            </div>
            <div class="block-content">
              <el-form label-width="80px">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="用户名">
                      <el-input class="no-edit user-name-input" readonly v-model="account.account">
                        <el-radio-group slot="append" v-model="form.basic.gender" size="mini">
                          <el-radio-button :label="1">男</el-radio-button>
                          <el-radio-button :label="2">女</el-radio-button>
                        </el-radio-group>
                      </el-input>
                    </el-form-item>
                    <el-form-item label="注册邮箱">
                      <el-input class="no-edit" readonly v-model="account.email"></el-input>
                    </el-form-item>
                    <el-form-item label="注册时间">
                      <el-input class="no-edit" readonly v-model="account.createTime"></el-input>
                    </el-form-item>
                    <el-divider></el-divider>
                    <div class="sub-title">联系方式</div>
                    <el-row :gutter="20">
                      <el-col :span="12">
                        <el-form-item label="手机">
                          <el-input v-model="form.basic.tel" :class="{ 'no-edit': !editing.basic }" :readonly="!editing.basic"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="QQ">
                          <el-input v-model="form.basic.qq" :class="{ 'no-edit': !editing.basic }" :readonly="!editing.basic"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="1" style="visibility:hidden;">space</el-col>
                  <el-col :span="11">
                    <el-form-item label="个人简介" label-width="auto">
                      <el-input type="textarea" v-model="form.basic.intro" :rows="10" placeholder="请输入内容" v-if="editing.basic"> </el-input>
                      <el-input class="no-edit" v-model="form.basic.intro" v-else></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </div>
          <div class="right-block">
            <div class="block-head">
              <div class="block-title" id="account">
                收款信息
              </div>
              <div class="block-btn">
                <el-button type="primary" size="mini" v-if="!editing.account" @click="edit('account', true)">修改</el-button>
                <div v-else>
                  <span class="btn-cancal" @click="edit('account', false)">取消</span>
                  <el-button type="primary" size="mini" @click="save('account')">保存</el-button>
                </div>
              </div>
            </div>
            <div class="block-content">
              <el-form label-width="80px">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <div class="sub-title">银行卡信息</div>
                    <el-form-item label="银行卡号">
                      <el-input v-model="form.account.bankCard" :class="{ 'no-edit': !editing.account }" :readonly="!editing.account"> </el-input>
                    </el-form-item>
                    <el-form-item label="姓名">
                      <el-input v-model="form.account.name" :class="{ 'no-edit': !editing.account }" :readonly="!editing.account"></el-input>
                    </el-form-item>
                    <el-form-item label="开户行">
                      <el-input v-model="form.account.bank" :class="{ 'no-edit': !editing.account }" :readonly="!editing.account"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="1" style="visibility:hidden;">space</el-col>
                  <el-col :span="11">
                    <div class="sub-title">支付宝</div>
                    <el-form-item label="支付宝号">
                      <el-input v-model="form.account.alipay" :class="{ 'no-edit': !editing.account }" :readonly="!editing.account"> </el-input>
                    </el-form-item>
                    <el-form-item label="姓名">
                      <el-input v-model="form.account.name" :class="{ 'no-edit': !editing.account }" :readonly="!editing.account"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </div>
          <div class="right-block">
            <div class="block-head">
              <div class="block-title" id="project">
                我的项目
              </div>
              <div class="block-btn" style="text-align:right;">
                <el-row :gutter="20">
                  <el-col :span="16">
                    <el-input placeholder="请输入内容" v-model="inputKeyword" class="input-search" size="mini">
                      <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
                    </el-input>
                  </el-col>
                  <el-col :span="8">
                    <el-dropdown>
                      <el-button type="primary" size="mini">所有项目<i class="el-icon-arrow-down el-icon--right"></i> </el-button>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item>双皮奶</el-dropdown-item>
                        <el-dropdown-item>蚵仔煎</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="block-content">
              <div class="no-result" v-if="projectErr">
                没有项目
              </div>
              <div class="project-panel" v-if="myProjects && !projectErr">
                <div class="project-card" v-for="project of myProjects.list" :key="project.projectId">
                  <div class="project-logo">
                    <div class="project-avatar" :style="{ backgroundImage: `url(${project.avatar})` }"></div>
                  </div>
                  <div class="project-com-name">{{ project.companyName }}</div>
                  <div class="project-name">{{ project.projectName }}</div>
                  <div class="project-data">
                    <div class="project-data-item">
                      <div>基本积分</div>
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
                  <div class="project-status">有三人投标待分配</div>
                </div>
              </div>
              <div class="table-pagination" v-if="myProjects && !projectErr">
                <el-pagination :current-page.sync="projectPage" :total="myProjects.totalNum" :page-size="pagesize" layout="prev, pager, next"> </el-pagination>
              </div>
            </div>
          </div>
          <div class="right-block">
            <div class="block-head">
              <div class="block-title" id="leak">
                漏洞管理
              </div>
              <div class="block-btn">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <div class="leak-desc">漏洞级别及状态说明</div>
                  </el-col>
                  <el-col :span="16">
                    <el-input placeholder="请输入内容" class="input-search">
                      <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="block-content">
              <div class="leak-table-panel">
                <el-table :data="myLeaks && myLeaks.list" border style="width: 100%" header-row-class-name="table-head">
                  <el-table-column align="center" prop="createTime" label="漏洞级别" width="286"> </el-table-column>
                  <el-table-column header-align="center" prop="leakName" label="漏洞名称"> </el-table-column>
                  <el-table-column header-align="center" prop="title" label="所属行业"> </el-table-column>
                  <el-table-column header-align="center" prop="title" label="提交时间"> </el-table-column>
                  <el-table-column header-align="center" prop="title" label="漏洞状态"> </el-table-column>
                  <el-table-column header-align="center" prop="title" label="奖励积分"> </el-table-column>
                </el-table>
                <div class="table-pagination">
                  <el-pagination layout="prev, pager, next"> </el-pagination>
                </div>
              </div>
            </div>
          </div>
          <div class="right-block">
            <div class="block-head">
              <div class="block-title" id="point">
                我的积分
              </div>
            </div>
            <div class="block-content my-point">
              <div class="point-title"><i class="iconfont icon-coins"></i>积分余额</div>
              <div class="point-num">{{ score ? score.s || 0 : 0 }}</div>
              <div class="point-to-cash">
                <el-button type="primary" size="small" class="cash-btn">提现</el-button>
              </div>
              <div class="point-to-cash-rule">
                提现规则>>
              </div>
              <div class="point-table-panel">
                <el-table v-if="leakData" :data="leakData" border style="width: 100%" header-row-class-name="table-head">
                  <el-table-column align="center" prop="createTime" label="时间" width="286"> </el-table-column>
                  <el-table-column header-align="center" prop="title" label="项目"> </el-table-column>
                  <el-table-column header-align="center" prop="title" label="提现方式"> </el-table-column>
                  <el-table-column header-align="center" prop="title" label="积分变动"> </el-table-column>
                </el-table>
                <div class="table-pagination">
                  <el-pagination layout="prev, pager, next"> </el-pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui'
import { mapState } from 'vuex'
import CommonHeader from '@/components/CommonHeader'

export default {
  components: { CommonHeader },
  data() {
    return {
      pagesize: 6,
      projectPage: 1,
      leakPage: 1,
      noticeType: 'platform',
      leakData: [],
      currNav: 'basic',
      uploadUrl: process.env.VUE_APP_API_ROOT + '/upload',
      account: {},
      editing: {
        basic: false,
        account: false
      },
      form: {
        basic: {},
        account: {}
      },
      inputKeyword: '',
      leakInputKeyword: '',
      keyword: '',
      leakKeyword: ''
    }
  },
  created() {
    this.fetch()
  },
  computed: mapState({
    noticeData: (state) => state.notice.notice,
    updateError: (state) => state.user.updateError,
    stat: (state) => state.user.stat,
    score: (state) => state.user.score,
    myProjects: (state) => state.project.myProjects,
    myLeaks: (state) => state.project.myLeaks,
    projectErr: (state) => state.project.err
  }),
  methods: {
    fetch() {
      this.loadAccount()
      this.$store.dispatch('user/stat')
      this.$store.dispatch('user/score')
      this.$store.dispatch('project/mine', { page: this.projectPage, pagesize: this.pagesize, title: '' })
      this.$store.dispatch('project/myLeaks', { page: this.leakPage, pagesize: this.pagesize, title: '' })
    },
    loadAccount() {
      let account = localStorage.getItem('u')
      if (account) {
        this.account = JSON.parse(account)
        this.reset('basic')
        this.reset('account')
      }
    },
    reset(block) {
      if (block === 'basic') {
        this.form.basic = {
          intro: this.account.intro,
          tel: this.account.tel,
          qq: this.account.qq
        }
      }
      if (block === 'account') {
        this.form.account = {
          name: this.account.name,
          bankCard: this.account.bankCard,
          bank: this.account.bank,
          alipay: this.account.alipay
        }
      }
    },
    activeNav(nav) {
      this.currNav = nav
    },
    edit(block, bool) {
      this.editing[block] = !!bool
      if (!bool) {
        this.reset(block)
      }
    },
    async save(block) {
      let data = this.form[block]
      await this.$store.dispatch('user/update', { params: data })
      if (this.updateError) {
        Message.success('保存失败')
        return
      }
      Message.success('操作成功')
      this.account = {
        ...this.account,
        ...data
      }
      localStorage.setItem('u', JSON.stringify(this.account))
      this.edit(block, false)
    },
    async handleAvatarSuccess(res, file) {
      if (res.code != 'A000000') {
        Message.error(res.data)
        return
      }
      this.imgUrl = URL.createObjectURL(file.raw)
      let params = {
        id: localStorage.getItem('d'),
        picture: res.data
      }
      await this.$store.dispatch('user/update', { params })
      if (this.updateError) {
        Message.error(this.updateError.data)
        return
      }
      Message.success('保存成功')
      this.account.picture = params.picture
      localStorage.setItem('u', JSON.stringify(this.account))
    },
    beforeAvatarUpload(file) {
      let typeArray = ['image/jpeg', 'image/jpg', 'image/png', 'image/bmp']
      let isJPG = typeArray.indexOf(file.type) > -1
      if (!isJPG) {
        Message.error('上传头像图片只能是 JPG 格式!')
      }
      return isJPG
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
    },
    search() {
      this.keyword = this.inputKeyword
      this.projectPage = 1
      this.$store.dispatch('project/mine', { page: this.projectPage, pagesize: this.pagesize, title: this.keyword })
    },
    searchLeak() {
      this.leakKeyword = this.leakInputKeyword
      this.leakPage = 1
      this.$store.dispatch('project/myLeaks', { page: this.leakPage, pagesize: this.pagesize, title: this.leakKeyword })
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
.side-nav {
  width: 144px;
  height: 450px;
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
      margin-top: 44px;
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
  width: 1044px;
  margin-left: 154px;
  padding-top: 140px;
  .right-head {
    margin-top: 42px;
    height: 98px;
    .user-info-panel {
      border-right: 1px solid #e6e6e6;
      width: 423px;
      height: 100%;
      display: inline-block;
      position: relative;
      .user-avatar-panel {
        position: absolute;
        top: 0;
        left: 34px;
        height: 100%;
        .user-avatar {
          width: 72px;
          height: 72px;
          border: 1px solid #7cb83e;
          border-radius: 72px;
          background-size: 100%;
        }
        .set-avatar {
          position: absolute;
          bottom: 0;
          text-align: center;
          width: 74px;
        }
      }
      .user-name-panel {
        position: absolute;
        left: 128px;
        top: 20px;
        .id-card {
          height: 20px;
          line-height: 20px;
          width: 101px;
          text-align: center;
          background-color: #7cb83e;
          color: white;
          border-radius: 2px;
          margin-top: 5px;
        }
        .icon-id-card {
          vertical-align: middle;
        }
        .icon-male,
        .icon-female {
          margin-left: 10px;
          color: #7cb83e;
          font-size: 24px;
          position: absolute;
          right: -40px;
        }
        .user-name {
          position: relative;
        }
        .user-name-text {
          font-size: 20px;
          font-weight: bolder;
          color: #545454;
          letter-spacing: 2px;
        }
      }
    }
    .user-data-panel {
      width: 205px;
      height: 100%;
      display: inline-block;
      text-align: center;
      & > * {
        float: left;
      }
      &:not(:last-child) {
        border-right: 1px solid #e6e6e6;
      }
      .data-icon {
        width: 58px;
        height: 52px;
        padding-top: 30px;
        margin-left: 38px;
        &.icon-1 {
          background: url('../assets/images/mc-icon-1.png') no-repeat center;
        }
        &.icon-2 {
          background: url('../assets/images/mc-icon-2.png') no-repeat center;
        }
        &.icon-3 {
          background: url('../assets/images/mc-icon-3.png') no-repeat center;
        }
      }
      .data-detail {
        padding-top: 23px;
        padding-left: 10px;
        .data-num {
          font-size: 24px;
        }
        &.detail-1 {
          color: #ff6f6d;
        }
        &.detail-2 {
          color: #3a68a6;
        }
        &.detail-3 {
          color: #ffc20b;
        }
      }
      &::after {
        content: '';
        display: block;
        clear: both;
      }
    }
  }
}
.right-content {
  margin-top: 80px;
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
    }
    .block-content {
      margin-top: 20px;
      .sub-title {
        font-weight: bolder;
        padding-bottom: 20px;
      }
    }
    .no-result {
      text-align: center;
      color: #999;
      padding: 20px;
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
        .project-com-name {
          margin-top: 40px;
          font-size: 18px;
          color: white;
        }
        .project-name {
          margin-top: 5px;
          color: white;
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
        &:nth-child(4) {
          background-image: linear-gradient(to top right, #c2c3c2, #dfdfdf);
        }
        &:nth-child(5) {
          background-image: linear-gradient(to top right, #7cb93c, #85d038);
        }
        &:nth-child(6) {
          background-image: linear-gradient(to top right, #7cb93c, #85d038);
        }
      }
    }
    .table-pagination {
      margin-top: 10px;
      text-align: center;
    }
    .leak-table-panel {
      padding-bottom: 20px;
      .table-pagination {
        text-align: right;
      }
    }
    .my-point {
      text-align: center;
      color: #7cb83e;
      .point-title {
        font-size: 16px;
        .icon-coins {
          margin-right: 5px;
        }
      }
      .point-num {
        font-size: 48px;
        line-height: 1.2;
        font-weight: bolder;
      }
      .cash-btn {
        width: 120px;
      }
      .point-to-cash {
        margin-top: 10px;
      }
      .point-to-cash-rule {
        margin-top: 10px;
        color: #9a9a9a;
      }
      .point-table-panel {
        margin-top: 10px;
        padding-bottom: 20px;
        .table-pagination {
          text-align: right;
        }
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
.user-name-input {
  .el-input-group__append {
    background-color: transparent;
    border: 0 none;
    padding-right: 0;
  }
}
.input-search {
  .el-input-group__append {
    background-color: #7cb83e;
    color: white;
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
