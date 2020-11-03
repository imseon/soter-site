<template>
  <div class="my-center">
    <Header />
    <div class="content-wrapper">
      <div class="side-nav">
        <div :class="{ 'side-nav-item': true, active: currNav === 'basic' }" v-scroll-to="{ el: '#basic', offset: -140 }" @click="activeNav('basic')">
          <div class="active-bg"></div>
          <div class="nav-text">基本信息</div>
        </div>
        <div :class="{ 'side-nav-item': true, active: currNav === 'project' }" v-scroll-to="{ el: '#project', offset: -140 }" @click="activeNav('project')">
          <div class="active-bg"></div>
          <div class="nav-text">项目管理</div>
        </div>
        <div :class="{ 'side-nav-item': true, active: currNav === 'leak' }" v-scroll-to="{ el: '#leak', offset: -140 }" @click="activeNav('leak')">
          <div class="active-bg"></div>
          <div class="nav-text">漏洞管理</div>
        </div>
      </div>
      <div class="right-panel">
        <div class="right-content">
          <div class="right-block" id="basic">
            <div class="block-head basic-head">
              <el-upload class="company-avatar-panel" :action="uploadUrl" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <div class="company-avatar" :style="{ backgroundImage: `url(${account.picture})` }"></div>
              </el-upload>
              <div class="company-name">{{ account && account.name }}</div>
              <div class="company-intro">
                <el-input type="textarea" class="intro-editor" v-model="form.basic.intro" :rows="5" placeholder="请输入内容" v-if="editing.basic"> </el-input>
                <div class="intro-content" v-else>{{ form.basic && form.basic.intro }}</div>
              </div>
              <div class="block-btn">
                <el-button type="primary" size="mini" v-if="!editing.basic" @click="edit('basic', true)">修改企业信息</el-button>
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
                    <div class="sub-title">基本信息</div>
                    <el-form-item label="入住时间">
                      <el-input class="no-edit user-name-input" readonly v-model="account.createTime"> </el-input>
                    </el-form-item>
                    <el-form-item label="企业地址">
                      <el-input :class="{ 'no-edit': !editing.basic }" :readonly="!editing.basic" v-model="form.basic.address"></el-input>
                    </el-form-item>
                    <el-form-item label="企业邮箱">
                      <el-input :class="{ 'no-edit': !editing.basic }" :readonly="!editing.basic" v-model="form.basic.email"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="1" style="visibility:hidden;">space</el-col>
                  <el-col :span="11">
                    <div class="sub-title">管理员信息</div>
                    <el-form-item label="姓名">
                      <el-input :class="{ 'no-edit': !editing.basic }" :readonly="!editing.basic" v-model="form.basic.linkman"> </el-input>
                    </el-form-item>
                    <el-form-item label="手机">
                      <el-input :class="{ 'no-edit': !editing.basic }" :readonly="!editing.basic" v-model="form.basic.tel"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </div>
          <div class="right-block">
            <div class="block-head">
              <div class="block-title" id="project">
                项目中心
              </div>
              <div class="block-btn" style="text-align:right;">
                <el-row :gutter="20">
                  <el-col :span="16">
                    <el-input placeholder="请输入内容" class="input-search">
                      <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                  </el-col>
                  <el-col :span="8">
                    <el-dropdown>
                      <el-button type="primary">所有项目<i class="el-icon-arrow-down el-icon--right"></i> </el-button>
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
              <div class="project-panel">
                <div class="project-card">
                  <div class="project-name">北京奇虎科技有限公司</div>
                  <div class="project-handle">项目名称可以使用十二个字</div>
                  <div class="project-data">
                    <div class="project-data-item">
                      <div>基本积分</div>
                      <div>3000</div>
                    </div>
                    <div class="project-data-item">
                      <div>基本积分</div>
                      <div>3000</div>
                    </div>
                  </div>
                  <div class="project-status">有三人投标待分配</div>
                </div>
                <div class="project-card">
                  <div class="project-name">北京奇虎科技有限公司</div>
                  <div class="project-handle">项目名称可以使用十二个字</div>
                  <div class="project-data">
                    <div class="project-data-item">
                      <div>基本积分</div>
                      <div>3000</div>
                    </div>
                    <div class="project-data-item">
                      <div>基本积分</div>
                      <div>3000</div>
                    </div>
                  </div>
                  <div class="project-status">有三人投标待分配</div>
                </div>
                <div class="project-card">
                  <div class="project-name">北京奇虎科技有限公司</div>
                  <div class="project-handle">
                    <span class="handler-prefix">测试白帽: </span>
                    <span class="handler-avatar"></span>
                    <span class="handler-name">用户名字七个字</span>
                  </div>
                  <div class="project-data">
                    <div class="project-data-item">
                      <div>基本积分</div>
                      <div>3000</div>
                    </div>
                    <div class="project-data-item">
                      <div>基本积分</div>
                      <div>3000</div>
                    </div>
                  </div>
                  <div class="project-status">有三人投标待分配</div>
                </div>
                <div class="project-card">
                  <div class="project-name">北京奇虎科技有限公司</div>
                  <div class="project-handle">项目名称可以使用十二个字</div>
                  <div class="project-data">
                    <div class="project-data-item">
                      <div>基本积分</div>
                      <div>3000</div>
                    </div>
                    <div class="project-data-item">
                      <div>基本积分</div>
                      <div>3000</div>
                    </div>
                  </div>
                  <div class="project-status">有三人投标待分配</div>
                </div>
                <div class="project-card">
                  <div class="project-name">北京奇虎科技有限公司</div>
                  <div class="project-handle">项目名称可以使用十二个字</div>
                  <div class="project-data">
                    <div class="project-data-item">
                      <div>基本积分</div>
                      <div>3000</div>
                    </div>
                    <div class="project-data-item">
                      <div>基本积分</div>
                      <div>3000</div>
                    </div>
                    <div class="project-data-item">
                      <div>基本积分</div>
                      <div>3000</div>
                    </div>
                  </div>
                  <div class="project-status">有三人投标待分配</div>
                </div>
                <div class="project-card">
                  <div class="project-name">北京奇虎科技有限公司</div>
                  <div class="project-handle">项目名称可以使用十二个字</div>
                  <div class="project-data">
                    <div class="project-data-item">
                      <div>基本积分</div>
                      <div>3000</div>
                    </div>
                    <div class="project-data-item">
                      <div>基本积分</div>
                      <div>3000</div>
                    </div>
                  </div>
                  <div class="project-status">有三人投标待分配</div>
                </div>
              </div>
              <div class="table-pagination">
                <el-pagination layout="prev, pager, next"> </el-pagination>
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
                <el-table v-if="leakData" :data="leakData" border style="width: 100%" header-row-class-name="table-head">
                  <el-table-column align="center" prop="createTime" label="漏洞级别" width="286"> </el-table-column>
                  <el-table-column header-align="center" prop="title" label="漏洞名称"> </el-table-column>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/CommonHeader.vue'
import { Message } from 'element-ui'
import { mapState } from 'vuex'

export default {
  components: { Header },
  data() {
    return {
      pagesize: 10,
      page: 1,
      noticeType: 'platform',
      leakData: [{ createTime: 'haha', title: '333' }],
      currNav: 'basic',
      uploadUrl: process.env.VUE_APP_API_ROOT + '/upload',
      account: null,
      editing: {
        basic: false
      },
      form: {
        basic: {}
      }
    }
  },
  created() {
    this.fetch()
  },
  computed: mapState({}),
  methods: {
    async fetch() {
      this.loadAccount()
      this.$store.dispatch('company/fetch')
      this.reset()
    },
    loadAccount() {
      let account = localStorage.getItem('u')
      if (account) {
        this.account = JSON.parse(account)
        this.reset()
      }
    },
    reset() {
      this.form.basic = {
        intro: this.account.intro,
        email: this.account.email,
        address: this.account.address,
        tel: this.account.tel,
        qq: this.account.qq,
        linkman: this.account.linkman
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
  width: 1044px;
  margin-left: 154px;
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
    .project-panel {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .project-card {
        margin-top: 50px;
        width: 292px;
        height: 200px;
        background-image: linear-gradient(to top right, #7cb93c, #85d038);
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
