<template>
  <div class="home">
    <div class="content-wrapper">
      <Header />
    </div>
    <div class="content-wrapper">
      <HomeBanner />
    </div>
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
    <div class="footer-bg">
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

<style scoped>
@import '../styles/common.scss';
.home {
  background: #3f66a0 url('../assets/images/home-bg.png') no-repeat center top;
  background-size: 1920px;
  min-height: 100vh;
}
.header {
  padding-top: 77px;
}
.home-banner {
  margin-top: 124px;
}
.project-bg {
  margin-top: 84px;
  width: 100%;
  height: 598px;
  background-color: rgba(26, 66, 158, 0.6);
}
.rank-bg {
  width: 100%;
  height: 1373px;
  background: url('../assets/images/rank-bg.png') no-repeat left top;
}
.footer-bg {
  width: 100%;
  height: 319px;
  background: url('../assets/images/footer-bg.jpg');
}
</style>
