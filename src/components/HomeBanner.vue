<template>
  <div class="home-banner">
    <div class="l1">争新时代科技创新的引导者</div>
    <div class="l2">做新时代强军事业的守护者</div>
    <div class="banner-btn">
      <button v-if="!user" @click="$router.push('/login')">立即加入</button>
    </div>
    <div class="banner-search">
      <div class="search-links">
        <a class="a1">搜索项目</a>
      </div>
      <div class="input-group">
        <el-form @submit="search">
          <el-form-item>
            <el-input class="search-input" placeholder="请输入关键词" v-model="projectKeyword">
              <i @click="search" size="medium" slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      projectKeyword: ''
    }
  },
  computed: mapState({
    user: (state) => state.user.user
  }),
  created() {
    this.$store.dispatch('user/check')
  },
  methods: {
    search(e) {
      e.preventDefault()
      this.$router.push('/projectRoom?s=' + this.projectKeyword)
    }
  }
}
</script>

<style scoped lang="scss">
.l1,
.l2 {
  color: #fff;
  line-height: 1;
  margin-bottom: 20px;
  letter-spacing: 4px;
}
.l1 {
  font-size: 70px;
  position: absolute;
  top: 176px;
  right: 60px;
}
.l2 {
  font-size: 70px;
  position: absolute;
  top: 290px;
  right: 60px;
}

.banner-btn {
  position: absolute;
  right: 400px;
  top: 430px;
  button {
    width: 256px;
    height: 64px;
    line-height: 64px;
    background-color: transparent;
    border: 1px solid #fff;
    font-size: 28px;
    color: white;
    font-weight: bolder;
    border-radius: 5px;
  }
}
.banner-title {
  color: white;
  font-size: 40px;
  text-align: center;
  margin-top: 124px;
  background: url('../assets/images/banner-title-bottom-line.png') no-repeat center bottom;
  padding-bottom: 14px;
  .content {
    display: inline-block;
    position: relative;
    height: 42px;
    line-height: 42px;
    &::before {
      content: '';
      width: 14px;
      height: 14px;
      background-color: white;
      display: block;
      position: absolute;
      top: 14px;
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
      top: 14px;
      transform: rotate(45deg);
      right: -30px;
    }
  }
}
.banner-search {
  width: 680px;
  position: absolute;
  bottom: -55px;
  left: 50%;
  margin-left: -340px;
  .search-links {
    padding-bottom: 5px;
    font-size: 20px;
    .a2 {
      color: #7cb83e;
    }
  }
  .search-input {
    height: 70px;
    line-height: 70px;
    font-size: 16px;
    padding: 0;
    border: 0 none;
    float: left;
  }
  .search-btn {
    width: 208px;
    height: 48px;
    box-sizing: border-box;
    border: 1px solid white;
    float: left;
    margin-left: 5px;
    background-color: transparent;
    font-size: 16px;
    color: white;
  }
  &::after {
    content: '';
    display: block;
    clear: both;
  }
}
</style>
<style lang="scss">
.search-input {
  input {
    height: 70px;
    line-height: 70px;
    font-size: 20px;
  }
  .el-input__suffix {
    right: 20px;
    font-size: 24px;
  }
}
</style>
