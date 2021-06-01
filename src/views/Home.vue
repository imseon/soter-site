<template>
  <div class="home">
    <Header />
    <HomeBanner />
    <div class="main-content">
      <div class="project-bg">
        <div class="content-wrapper">
          <HomeProject />
        </div>
      </div>
      <div class="rank-bg">
        <div class="content-wrapper">
          <HomeRank />
        </div>
      </div>
    </div>
    <div class="footer-bg">
      <!-- <div class="divider"></div> -->
      <div class="content-wrapper">
        <HomeFooter />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HomeBanner from '@/components/HomeBanner.vue'
import HomeProject from '@/components/HomeProject.vue'
import HomeRank from '@/components/HomeRank.vue'
import HomeFooter from '@/components/HomeFooter.vue'

export default {
  components: {
    Header,
    HomeBanner,
    HomeProject,
    HomeRank,
    HomeFooter
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/common.scss';
.home {
  background: #3f66a0 url('../assets/images/home-bg-new.jpg') no-repeat center top;
  background-size: 1920px 892px;
  min-height: 100vh;
}
.header {
  padding-top: 77px;
  width: 1716px;
}
.main-content {
  background: #3f66a0 url('../assets/images/body-bg.jpg') repeat-y center top;
}
.home-banner {
  width: 1716px;
  margin: 124px auto 0;
  height: 647px;
  position: relative;
}
.project-bg {
  width: 100%;
}
.rank-bg {
  width: 100%;
  height: 1373px;
}
.footer-bg {
  width: 100%;
  background-color: rgba(#0a9d8d, 0.8);
}
.divider {
  padding-top: 20px;
  /* background: url('../assets/images/split-299.png') no-repeat bottom center; */
  background-size: 100% 1px;
  height: 1px;
  overflow: hidden;
}
</style>
