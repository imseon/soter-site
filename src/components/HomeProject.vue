<template>
  <div class="home-project">
    <div class="project-title">应用漏洞管理平台/SRC</div>
    <div class="r1">
      <div class="project-btn-grid">
        <div class="grid-r1">
          <div class="grid-c1">
            <router-link to="/projectRoom">
              <div class="grid-item-1"></div>
            </router-link>
          </div>
          <div class="grid-c2">
            <router-link to="/projectRoom">
              <div class="grid-item-2"></div>
            </router-link>
          </div>
          <div class="grid-c3 ">
            <router-link to="/rule?name=2">
              <div class="grid-item-3"></div>
            </router-link>
          </div>
        </div>
        <div class="grid-r2">
          <div class="grid-c1">
            <router-link to="/myCenter">
              <div class="grid-item-4"></div>
            </router-link>
          </div>
          <div class="grid-c2 ">
            <router-link to="/myCenter">
              <div class="grid-item-5"></div>
            </router-link>
          </div>
          <div class="grid-c3" v-scroll-to="{ el: '#homeRank', offset: 0 }">
            <div class="grid-item-6"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="r2">
      <div class="c1"></div>
      <div class="c2"></div>
    </div>
    <div class="r3">
      <div class="c1">
        <div class="find-project-wrapper">
          <h3>奖励计划</h3>
          <div class="go-detail">
            <div class="project-desc">当日奖励总额共计</div>
            <div class="project-desc">人民币: 2万</div>
            <router-link to="/projectRoom" class="go-project-detail">
              <div class="btn-detail">查看详细</div>
            </router-link>
          </div>
          <div class="data-wrapper">
            <div class="data-box">
              <div class="data-r2">已认领项目: {{ proStat ? proStat.delegate : 0 }}</div>
            </div>
            <div class="data-box">
              <div class="data-r2">已完成总数: {{ proStat ? proStat.complete : 0 }}</div>
            </div>
            <div class="data-box">
              <div class="data-r2">总奖励金额: {{ proStat ? (proStat.scoreTotal / 10000).toFixed(2) : 0 }}万</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  created() {
    this.$store.dispatch('notice/fetch', { pagesize: 8 })
    this.$store.dispatch('project/top', { top: 5 })
    this.$store.dispatch('util/accStat')
    this.$store.dispatch('util/proStat')
  },
  computed: mapState({
    noticeList: (state) => (state.notice.notice ? state.notice.notice.list : null),
    topProjects: (state) => state.project.list,
    accStat: (state) => state.util.accStat,
    proStat: (state) => state.util.proStat
  })
}
</script>

<style scoped lang="scss">
.home-project {
  padding-top: 80px;
  .project-title {
    font-size: 30px;
    color: #0a9d8d;
  }
  .r1 {
    padding-top: 14px;
    text-align: center;
  }
  .r2 {
    display: flex;
    justify-content: space-between;
    .c1 {
      background: url('../assets/images/r2-c1.png') no-repeat left top;
      background-size: 100%;
      width: 586px;
      height: 150px;
    }
    .c2 {
      background: url('../assets/images/r2-c2.png') no-repeat left top;
      background-size: 100%;
      width: 586px;
      height: 150px;
    }
  }
  .r3 {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    .c1 {
      width: 100%;
      height: 300px;
      position: relative;
    }
    .c1 {
      background: rgba(#ffffff, 0.6);
    }
  }
}
.project-hall {
  width: 220px;
  height: 354px;
  position: relative;
  background: #19419f url('../assets/images/home-project-bg1.png') no-repeat center top;
}
.project-hall,
.platform-notice {
  h3 {
    font-size: 20px;
    padding-top: 18px;
    padding-bottom: 3px;
    color: #3f66a2;
  }
}
.project-top {
  margin-top: 13px;
  text-align: left;
  padding: 13px 20px;
}
.link-more {
  position: absolute;
  bottom: 20px;
  right: 5px;
  a {
    color: #ccc;
  }
}
.sub-title {
  width: 120px;
  margin: 0 auto;
  color: white;
  border-bottom: 1px solid white;
  font-size: 12px;
  height: 22px;
}
.project-top-item {
  height: 36px;
  line-height: 36px;
  display: flex;
  margin-bottom: 10px;
  color: white;
  cursor: pointer;
  & > * {
    margin-right: 8px;
  }
  .seq {
    display: inline-block;
    line-height: 36px;
  }
  .project-avatar {
    width: 36px;
    height: 36px;
    border-radius: 36px;
    background-size: 100%;
    display: inline-block;
    flex-shrink: 0;
  }
  .project-name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.platform-notice {
  width: 220px;
  height: 354px;
  position: relative;
  background: #19419f url('../assets/images/home-project-bg1.png') no-repeat center top;
}
.project-btn-grid {
  .grid-r1,
  .grid-r2 {
    display: flex;
    justify-content: space-between;
    height: 390px;
  }
  .grid-c1,
  .grid-c2,
  .grid-c3 {
    height: 390px;
    width: 386px;
    position: relative;
    background: url('../assets/images/btn_up.png') no-repeat center;
    &:hover {
      background: url('../assets/images/btn_dn.png') no-repeat center;
      .grid-item-1 {
        background: url('../assets/images/grid-1-dn.png') no-repeat center;
      }
      .grid-item-2 {
        background: url('../assets/images/grid-2-dn.png') no-repeat center;
      }
      .grid-item-3 {
        background: url('../assets/images/grid-3-dn.png') no-repeat center;
      }
      .grid-item-4 {
        background: url('../assets/images/grid-4-dn.png') no-repeat center;
      }
      .grid-item-5 {
        background: url('../assets/images/grid-5-dn.png') no-repeat center;
      }
      .grid-item-6 {
        background: url('../assets/images/grid-6-dn.png') no-repeat center;
      }
    }
    a {
      display: block;
    }
  }
  .grid-item-text {
    margin-top: 5px;
    font-size: 18px;
    color: white;
    font-weight: bolder;
  }
  .grid-item-1,
  .grid-item-2,
  .grid-item-3,
  .grid-item-4,
  .grid-item-5,
  .grid-item-6 {
    width: 138px;
    height: 176px;
    position: absolute;
    top: 50%;
    margin-top: -88px;
    left: 50%;
    margin-left: -69px;
  }
  .grid-item-1 {
    background: url('../assets/images/grid-1-up.png') no-repeat center;
  }
  .grid-item-2 {
    background: url('../assets/images/grid-2-up.png') no-repeat center;
  }
  .grid-item-3 {
    background: url('../assets/images/grid-3-up.png') no-repeat center;
  }
  .grid-item-4 {
    background: url('../assets/images/grid-4-up.png') no-repeat center;
  }
  .grid-item-5 {
    background: url('../assets/images/grid-5-up.png') no-repeat center;
  }
  .grid-item-6 {
    background: url('../assets/images/grid-6-up.png') no-repeat center;
  }
}
.notice-content {
  margin-top: 10px;
  padding: 20px;
  text-align: left;
  max-height: 200px;
  overflow: auto;
  color: white;
  line-height: 1.2;
  .notice-item {
    height: 24px;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.find-project-wrapper {
  padding-left: 90px;
  color: #999;
  h3 {
    font-size: 28px;
    color: #666;
    margin-top: 50px;
  }
  .go-detail {
    margin-top: 5px;
    a {
      color: #ccc;
    }
    .project-desc {
      font-size: 20px;
      line-height: 36px;
      &:nth-child(1) {
        margin-top: 30px;
      }
    }
    .btn-detail {
      width: 162px;
      height: 46px;
      border: 1px solid #0a9d8d;
      border-radius: 4px;
      font-size: 20px;
      line-height: 46px;
      color: #0a9d8d;
      text-align: center;
      margin-top: 45px;
    }
  }
}
.data-wrapper {
  top: 70px;
  position: absolute;
  right: 260px;
  .data-box {
    font-size: 20px;
    margin-top: 10px;
    height: 40px;
    line-height: 40px;
    .user-avatar-36 {
      width: 36px;
      height: 36px;
      border-radius: 36px;
      background-size: 100%;
      margin: 0 auto;
    }
  }
}
.stat-total {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 254px;
  height: 30px;
  line-height: 30px;
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
