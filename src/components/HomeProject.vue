<template>
  <div class="home-project">
    <div class="r1">
      <div class="project-hall">
        <h3>项目大厅</h3>
        <div class="sub-title">TOP5</div>
        <ul class="project-top" v-if="topProjects">
          <router-link tag="li" :to="`/userInfo?pid=${project.projectId}`" class="project-top-item" v-for="(project, index) of topProjects" :key="project.projectId">
            <span class="seq">{{ index + 1 }}</span>
            <span class="project-avatar" :style="{ backgroundImage: `url(${project.avatar})` }"></span>
            <span class="project-name">{{ project.projectName }}</span>
          </router-link>
          <li class="link-more">查看更多...</li>
        </ul>
      </div>
      <div class="project-btn-grid">
        <div class="grid-r1">
          <div class="grid-c1">
            <router-link to="/projectRoom">
              <img src="../assets/images/grid-1.png" width="85" height="85" class="grid-icon" />
              <div class="grid-item-text">查看项目</div>
            </router-link>
          </div>
          <div class="grid-c2">
            <router-link to="/projectRoom">
              <img src="../assets/images/grid-2.png" width="85" height="85" class="grid-icon" />
              <div class="grid-item-text">可认领项目</div>
            </router-link>
          </div>
          <div class="grid-c3 ">
            <router-link to="/rule">
              <img src="../assets/images/grid-3.png" width="85" height="85" class="grid-icon" />
              <div class="grid-item-text">奖励信息</div>
            </router-link>
          </div>
        </div>
        <div class="grid-r2">
          <div class="grid-c1">
            <router-link to="/myCenter">
              <img src="../assets/images/grid-4.png" width="85" height="85" class="grid-icon" />
              <div class="grid-item-text">漏洞复查</div>
            </router-link>
          </div>
          <div class="grid-c2 ">
            <router-link to="/myCenter">
              <img src="../assets/images/grid-5.png" width="85" height="85" class="grid-icon" />
              <div class="grid-item-text">申领中项目</div>
            </router-link>
          </div>
          <div class="grid-c3" v-scroll-to="{ el: '#homeRank', offset: 0 }">
            <img src="../assets/images/grid-6.png" width="85" height="85" class="grid-icon" />
            <div class="grid-item-text">任务排名</div>
          </div>
        </div>
      </div>
      <div class="platform-notice">
        <h3>平台公告</h3>
        <div class="notice-content" v-if="noticeList">
          <div class="notice-item" v-for="notice of noticeList" :key="notice.id">{{ notice.title }}</div>
        </div>
        <div class="link-more">查看更多...</div>
      </div>
    </div>
    <div class="r2">
      <div class="c1">
        <div class="find-project-wrapper">
          <h3>奖励计划</h3>
          <div class="go-detail">查看项目</div>
          <div class="data-wrapper">
            <div class="data-box">
              <div class="data-r1">{{ proStat ? proStat.delegate : 0 }}</div>
              <div class="data-r2">已认领总数</div>
            </div>
            <div class="data-box">
              <div class="data-r1">{{ proStat ? proStat.complete : 0 }}</div>
              <div class="data-r2">已完成总数</div>
            </div>
            <div class="data-box">
              <div class="data-r1">{{ proStat ? (proStat.scoreTotal / 10000).toFixed(2) : 0 }}万</div>
              <div class="data-r2">奖励总额</div>
            </div>
          </div>
        </div>
        <div class="stat-total">项目大数据{{ proStat ? proStat.projectTotal : 0 }}</div>
      </div>
      <div class="c2">
        <div class="find-people-wrapper">
          <h3>人才筛选</h3>
          <div class="go-detail">查看详细</div>
          <div class="data-wrapper">
            <div class="data-box">
              <div class="data-r3">
                <div class="user-avatar-36"></div>
              </div>
              <div class="data-r4">满意度最高</div>
            </div>
            <div class="data-box">
              <div class="data-r3">
                <div class="user-avatar-36"></div>
              </div>
              <div class="data-r4">检查漏洞最多</div>
            </div>
            <div class="data-box">
              <div class="data-r3">
                <div class="user-avatar-36"></div>
              </div>
              <div class="data-r4">积分最高</div>
            </div>
          </div>
        </div>
        <div class="stat-total">人才大数据{{ accStat ? accStat.accTotal : 0 }}</div>
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
  .r1 {
    padding-top: 14px;
    display: flex;
    text-align: center;
    justify-content: space-between;
  }
  .r2 {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    .c1,
    .c2 {
      width: 586px;
      height: 198px;
      position: relative;
    }
    .c1 {
      background: #19419f url('../assets/images/sqr-1.png') no-repeat left top;
    }
    .c2 {
      background: #19419f url('../assets/images/sqr-2.png') no-repeat left top;
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
  color: #ccc;
}
.sub-title {
  width: 120px;
  margin: 0 auto;
  color: white;
  padding-bottom: 6px;
  border-bottom: 1px solid white;
  font-size: 12px;
}
.project-top-item {
  height: 36px;
  line-height: 36px;
  display: flex;
  margin-bottom: 10px;
  color: white;
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
    background: #2c54a0;
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
  width: 734px;
  height: 354px;
  background: url('../assets/images/project-btn-grid-bg.png') no-repeat center top;
  background-size: 726px;
  .grid-r1,
  .grid-r2 {
    display: flex;
    height: 172px;
  }
  .grid-c1,
  .grid-c2,
  .grid-c3 {
    padding-top: 28px;
    height: 100%;
    &:hover {
      background: url('../assets/images/project-btn-grid-highlight.png') repeat-x;
      height: 173px;
    }
    a {
      display: block;
    }
  }
  .grid-c1 {
    width: 245px;
  }
  .grid-c2 {
    width: 245px;
    &.active {
      width: 246px;
    }
  }
  .grid-c3 {
    width: 245px;
    &.active {
      width: 246px;
    }
  }
  .grid-item-text {
    margin-top: 5px;
    font-size: 18px;
    color: white;
    font-weight: bolder;
  }
}
.notice-content {
  margin-top: 30px;
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
.find-project-wrapper,
.find-people-wrapper {
  padding-left: 254px;
  h3 {
    font-size: 18px;
    color: white;
    margin-top: 20px;
  }
  .go-detail {
    color: #ccc;
    margin-top: 5px;
  }
}
.data-wrapper {
  width: 300px;
  margin-top: 24px;
  background: url('../assets/images/split-299.png') no-repeat center top;
  display: flex;
  .data-box {
    width: 116px;
    height: 80px;
    margin-top: 10px;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:not(:last-child) {
      border-right: 1px solid #4f6eb6;
    }
    .data-r1 {
      font-size: 24px;
    }
    .data-r2,
    .data-r4 {
      font-size: 14px;
      margin-top: 14px;
    }
    .user-avatar-36 {
      width: 36px;
      height: 36px;
      border-radius: 36px;
      background-color: #2c54a2;
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
