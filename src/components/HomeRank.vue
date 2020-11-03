<template>
  <div class="home-rank" id="homeRank">
    <div class="rank-title">
      <span>贡献英雄排行榜</span>
    </div>
    <div class="rank-switch">
      <div :class="{ 'rank-item': true, active: rank === 'person' }" @click="changeRank('person')">个人排行</div>
      <div :class="{ 'rank-item': true, active: rank === 'team' }" @click="changeRank('team')">团队排行</div>
    </div>
    <div class="top3-wrapper" v-if="rankList">
      <div class="top3-item">
        <div class="top3-avatar" :style="{ backgroundImage: `url(${rankList[1].picture});` }"></div>
        <div class="top-seq top2">No.2</div>
        <div class="top3-name">{{ rankList[1].name }}</div>
        <div class="top3-summary">
          共发现
          <span class="bug-count">{{ rankList[1].leakNum }}</span>
          个漏洞
        </div>
        <div class="top3-coin">
          <i class="iconfont icon-coins"></i>
          <span class="coin-count">{{ rankList[1].scoreTotal }}</span>
        </div>
        <div class="top3-point">
          积分: <span class="point-count">{{ rankList[1].scoreTotal }}</span>
        </div>
        <div class="top3-detail">
          帮助<span class="com-count">{{ rankList[1].compNum }}</span
          >家厂商发现漏洞
        </div>
      </div>
      <div class="top3-item top1">
        <div class="top3-avatar" :style="{ backgroundImage: `url(${rankList[0].picture});` }">
          <div class="top1-crown"></div>
        </div>
        <div class="top-seq top1">No.1</div>
        <div class="top3-name">{{ rankList[0].name }}</div>
        <div class="top3-summary">
          共发现
          <span class="bug-count"> {{ rankList[0].leakNum }}</span>
          个漏洞
        </div>
        <div class="top3-coin">
          <i class="iconfont icon-coins"></i>
          <span class="coin-count">{{ rankList[0].scoreTotal }}</span>
        </div>
        <div class="top3-point">
          积分: <span class="point-count">{{ rankList[0].scoreTotal }}</span>
        </div>
        <div class="top3-detail">
          帮助<span class="com-count">{{ rankList[0].compNum }}</span
          >家厂商发现漏洞
        </div>
      </div>
      <div class="top3-item">
        <div class="top3-avatar" :style="{ backgroundImage: `url(${rankList[2].picture});` }"></div>
        <div class="top-seq top3">No.3</div>
        <div class="top3-name">{{ rankList[2].name }}</div>
        <div class="top3-summary">
          共发现
          <span class="bug-count">{{ rankList[2].leakNum }} </span>
          个漏洞
        </div>
        <div class="top3-coin">
          <i class="iconfont icon-coins"></i>
          <span class="coin-count">{{ rankList[2].scoreTotal }}</span>
        </div>
        <div class="top3-point">
          积分: <span class="point-count">{{ rankList[2].scoreTotal }}</span>
        </div>
        <div class="top3-detail">
          帮助<span class="com-count">{{ rankList[2].compNum }}</span
          >家厂商发现漏洞
        </div>
      </div>
    </div>
    <div class="other-tops-wrapper" v-if="rankList">
      <div v-for="i of [3, 4, 5, 6, 7, 8, 9]" :key="i">
        <div v-if="rankList[i]" class="other-tops-item">
          <div class="user-avatar" :style="{ backgroundImage: `url(${rankList[i].picture});` }">
            <div class="user-seq">{{ i + 1 }}</div>
          </div>
          <div class="user-detail">
            <div class="detail-1">{{ rankList[i].name }}</div>
            <div class="detail-2">积分: {{ rankList[i].scoreTotal }}</div>
            <div class="detail-3">发现{{ rankList[i].leakNum }}个漏洞</div>
          </div>
        </div>
        <div v-else class="other-tops-item-empty">
          <div class="empty-seq">{{ i + 1 }}</div>
        </div>
      </div>
    </div>
    <div class="total-summary-wrapper" v-if="stat">
      <div class="summary-1">
        <div class="summary-count">{{ formatThousands(stat.accTotal) }}</div>
        <div class="summary-desc">白帽专家数量</div>
      </div>
      <div class="summary-2">
        <div class="summary-count">{{ formatThousands(stat.leakTotal) }}</div>
        <div class="summary-desc">发现漏洞总数</div>
      </div>
      <div class="summary-3">
        <div class="summary-count">6{{ formatThousands(stat.companyAffected) }}</div>
        <div class="summary-desc">漏洞影响企业数</div>
      </div>
      <div class="summary-4">
        <div class="summary-count">{{ formatThousands(stat.companyTotal) }}</div>
        <div class="summary-desc">入驻企业数量</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import formatThousands from 'format-thousands'

export default {
  data() {
    return {
      rank: 'person'
    }
  },
  created() {
    this.fetch(this.rank)
    this.$store.dispatch('util/stat')
  },
  computed: mapState({
    rankList: function(state) {
      return state.rank[this.rank]
    },
    stat: (state) => {
      return state.util.stat
    }
  }),
  methods: {
    changeRank(type) {
      this.rank = type
      this.fetch(this.rank)
    },
    fetch(rank) {
      this.$store.dispatch('rank/' + rank, { top: 10 })
    },
    formatThousands(num) {
      return formatThousands(num, ',')
    }
  }
}
</script>

<style scoped lang="scss">
.rank-title {
  padding-top: 75px;
  text-align: center;
  color: white;
  font-size: 36px;
  background: url('../assets/images/split-299.png') no-repeat center bottom;
  background-size: 320px;
  padding-bottom: 14px;
  span {
    display: inline-block;
    position: relative;
    height: 48px;
    line-height: 48px;
    &::before {
      content: '';
      width: 14px;
      height: 14px;
      background-color: white;
      display: block;
      position: absolute;
      top: 17px;
      transform: rotate(45deg);
      left: -30px;
    }
    &::after {
      content: '';
      width: 14px;
      height: 14px;
      background-color: white;
      display: block;
      position: absolute;
      top: 17px;
      transform: rotate(45deg);
      right: -30px;
    }
  }
}
.rank-switch {
  display: flex;
  justify-content: center;
  margin-top: 49px;
  font-size: 24px;
  color: white;
  line-height: 46px;
  .rank-item {
    width: 144px;
    height: 46px;
    padding-left: 100px;
    background: #19419f url('../assets/images/crown-blue.png') no-repeat left top;
    &:last-child {
      margin-left: 154px;
    }
    &.active {
      font-weight: bold;
      background: #65dbbd url('../assets/images/crown-green.png') no-repeat left top;
    }
  }
}
.top3-wrapper {
  display: flex;
  align-items: flex-end;
  height: 490px;
  justify-content: center;
  margin-top: 66px;
  .top3-item {
    width: 346px;
    height: 442px;
    background-image: linear-gradient(to top right, #3eb292, #66dbbe);
    border-radius: 5px;
    position: relative;
    box-sizing: border-box;
    &:not(:last-child) {
      margin-right: 60px;
    }
    &:nth-child(2) {
      align-self: flex-start;
    }
    .top3-avatar {
      width: 138px;
      height: 138px;
      background: #3f66a0;
      position: absolute;
      top: 38px;
      left: 50%;
      margin-left: -69px;
      .top1-crown {
        width: 48px;
        height: 56px;
        background: url('../assets/images/crown.png') no-repeat;
        position: absolute;
        top: -30px;
        left: 50%;
        margin-left: -24px;
      }
    }
    &.top1 {
      border: 2px solid #fff;
    }
    .top-seq {
      position: absolute;
      height: 40px;
      width: 122px;
      bottom: 56px;
      right: -2px;
      line-height: 40px;
      text-align: center;
      border-radius: 40px 8px 8px 40px;
      font-size: 20px;
      color: white;
      &.top1 {
        background: #d93636;
      }
      &.top2 {
        background: #fad401;
      }
      &.top3 {
        background: #3f66a0;
      }
    }
    .top3-name {
      position: absolute;
      top: 190px;
      width: 100%;
      text-align: center;
      font-size: 20px;
      color: white;
    }
    .top3-summary {
      position: absolute;
      top: 240px;
      width: 100%;
      text-align: center;
      color: white;
      font-size: 16px;
      .bug-count {
        font-size: 22px;
        font-weight: bolder;
      }
    }
    .top3-coin {
      position: absolute;
      left: 22px;
      bottom: 75px;
      .icon-coins {
        font-size: 24px;
        color: #3f669f;
      }
      .coin-count {
        font-size: 20px;
        color: white;
        padding-left: 5px;
        display: inline-block;
        height: 24px;
        line-height: 24px;
      }
    }
    .top3-point {
      position: absolute;
      left: 22px;
      bottom: 45px;
      font-size: 16px;
      color: white;
      .point-count {
        color: #3f669f;
      }
    }
    .top3-detail {
      position: absolute;
      left: 22px;
      font-size: 16px;
      color: white;
      bottom: 22px;
      .com-count {
        color: #3f669f;
      }
    }
  }
}
.other-tops-wrapper {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 22px;
  .other-tops-item {
    width: 156px;
    height: 156px;
    position: relative;
    background-image: linear-gradient(to top right, #3eb292, #66dbbe);
    .user-avatar {
      width: 58px;
      height: 58px;
      border-radius: 58px;
      border: 6px solid #5bc0b6;
      background: #d2fff4;
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
      color: white;
      font-size: 16px;
      bottom: 10px;
      .detail-1 {
        font-weight: bolder;
      }
    }
  }
  .other-tops-item-empty {
    width: 120px;
    height: 120px;
    position: relative;
    background-image: linear-gradient(to top right, #588bca, #6d97ca);
    .empty-seq {
      width: 48px;
      height: 48px;
      border-radius: 48px;
      line-height: 48px;
      text-align: center;
      color: white;
      background-color: #4d77b1;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -24px;
      margin-top: -24px;
    }
  }
}
.total-summary-wrapper {
  display: flex;
  margin-top: 180px;
  justify-content: space-between;
  & > * {
    width: 264px;
    height: 90px;
    position: relative;
    .summary-count {
      position: absolute;
      left: 90px;
      right: 0px;
      text-align: center;
      font-size: 30px;
      color: #64dabc;
      top: 10px;
    }
    .summary-desc {
      position: absolute;
      left: 90px;
      right: 0px;
      text-align: center;
      font-size: 20px;
      color: white;
      bottom: 10px;
    }
  }
  .summary-1 {
    background: url('../assets/images/summary-1-icon.png') no-repeat left center;
  }
  .summary-2 {
    background: url('../assets/images/summary-2-icon.png') no-repeat left center;
  }
  .summary-3 {
    background: url('../assets/images/summary-3-icon.png') no-repeat left center;
  }
  .summary-4 {
    background: url('../assets/images/summary-4-icon.png') no-repeat left center;
  }
}
</style>
