<template>
  <div class="home-banner">
    <div class="l1">免费加入</div>
    <div class="l2">企业互联网安全守护计划</div>
    <div class="l3">连接50000+安全专家，快速发现安全隐患</div>
    <div class="banner-btn">
      <button>立即加入</button>
    </div>
    <div class="banner-title">
      <span class="content">应用漏洞管理平台 /SRC</span>
    </div>
    <div class="banner-search">
      <div class="search-links">
        <a class="a1">查看漏洞信息 | </a>
        <a class="a2">提交漏洞信息</a>
      </div>
      <div class="input-group">
        <input placeholder="请输入关键词" class="search-input" />
        <button>查看</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.l1,
.l2,
.l3 {
  color: #fff;
  line-height: 1;
  margin-bottom: 20px;
}
.l1 {
  font-size: 52px;
  font-weight: lighter;
}
.l2 {
  font-size: 54px;
  font-weight: bolder;
}
.l3 {
  font-size: 32px;
  font-weight: lighter;
}
.banner-btn button {
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
  width: 896px;
  margin: 50px auto 0;
  .search-links {
    padding-bottom: 5px;
    .a2 {
      color: #7cb83e;
    }
  }
  .search-input {
    height: 48px;
    width: 660px;
    line-height: 48px;
    font-size: 16px;
    padding: 0 10px;
    border: 0 none;
    float: left;
  }
  button {
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
