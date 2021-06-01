<template>
  <div class="material">
    <Header />
    <PageBanner>
      <div class="r1">资料中心</div>
      <div class="r2">ZI LIAO ZHONG XIN</div>
    </PageBanner>
    <div class="white-area">
      <div class="content-wrapper">
        <div class="breadcrumb">
          <router-link to="/home">回到首页></router-link>
        </div>
        <div class="table-wrapper">
          <el-table v-if="materialData" :data="materialData.data" border style="width: 100%" header-row-class-name="table-head" @row-click="openInfo" row-class-name="notice-table-row">
            <el-table-column header-align="left" prop="title" label="标题"> </el-table-column>
            <el-table-column header-align="left" label="下载" width="100">
              <template slot-scope="scope">
                <a target="_blank" class="down-link" v-if="scope.row.annex" @click="(e) => e.stopPropagation()" :href="JSON.parse(scope.row.annex).path">下载资料</a>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="pagination-wrapper" v-if="materialData">
          <el-pagination @current-change="handleCurrentChange" :current-page.sync="page" :page-size="pagesize" layout="prev, pager, next, jumper" :total="materialData.totalItemNum"> </el-pagination>
        </div>
      </div>
    </div>
    <home-footer />
  </div>
</template>

<script>
import Header from '@/components/CommonHeader.vue'
import PageBanner from '@/components/PageBanner.vue'
import HomeFooter from '@/components/HomeFooter.vue'
import { MessageBox } from 'element-ui'

import { mapState } from 'vuex'

export default {
  components: { Header, PageBanner, HomeFooter },
  data() {
    return {
      pagesize: 10,
      page: 1
    }
  },
  created() {
    this.fetch()
  },
  computed: mapState({
    materialData: (state) => state.material.data
  }),
  methods: {
    handleCurrentChange(page) {
      this.page = page
      this.fetch()
    },
    fetch() {
      this.$store.dispatch('material/fetch', { pagesize: this.pagesize, page: this.page })
    },
    openInfo(notice) {
      MessageBox.alert(notice.content, notice.title, {
        customClass: 'notice-msg-box',
        confirmButtonClass: 'notice-msg-box-confirm-btn',
        confirmButtonText: '关闭'
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/common.scss';
.material {
  background-color: #f7f7f7;
}
.page-banner {
  margin-top: 120px;
}
.r1 {
  font-size: 48px;
  color: white;
  padding-top: 98px;
  text-align: center;
  line-height: 1;
  letter-spacing: 4px;
}
.r2 {
  font-size: 16px;
  color: white;
  padding-top: 18px;
  text-align: center;
  letter-spacing: 2px;
}
.white-area {
  margin: 30px;
  padding: 20px;
  background-color: white;
}
.table-wrapper {
  margin-top: 20px;
}
.pagination-wrapper {
  text-align: right;
  margin-top: 32px;
}
.tabs-wrapper {
  display: inline-block;
}
.breadcrumb {
  text-align: right;
  a {
    color: #7cb83e;
  }
}
.down-link {
  color: #666;
}
</style>
<style lang="scss">
.notice-table-row {
  cursor: pointer;
}
.notice-msg-box {
  width: 800px;
  .el-message-box__title {
    text-align: center;
  }
  .el-message-box__message {
    text-align: left;
    max-height: 600px;
    word-break: break-all;
    overflow: auto;
  }
}
// .notice-msg-box-confirm-btn {
//   background-color: #7cb83e !important;
//   border: 0 none !important;
// }
.table-head th {
  background-color: #7cb83e;
  color: white;
}
</style>
