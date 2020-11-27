<template>
  <div class="footer">
    Copyright © 2019
    <!-- <div class="link-col">
      <h3>服务企业</h3>
      <ul class="links">
        <li class="link-item">
          公司简讯
        </li>
        <li class="link-item">
          创始人
        </li>
        <li class="link-item">
          大事记
        </li>
        <li class="link-item">
          获奖记录
        </li>
        <li class="link-item">
          品牌宣传片
        </li>
      </ul>
    </div>
    <div class="link-col">
      <h3>投资者关系</h3>
      <ul class="links">
        <li class="link-item">
          公司公告
        </li>
      </ul>
    </div>
    <div class="link-col">
      <h3>加入360</h3>
      <ul class="links">
        <li class="link-item">
          社会招聘
        </li>
        <li class="link-item">
          校园招聘
        </li>
        <li class="link-item">
          360大学
        </li>
      </ul>
    </div>
    <div class="link-col">
      <h3>用户服务</h3>
      <ul class="links">
        <li class="link-item">
          意见反馈
        </li>
        <li class="link-item">
          理赔举报
        </li>
        <li class="link-item">
          手机回收
        </li>
        <li class="link-item">
          电脑/手机维修
        </li>
        <li class="link-item">
          360隐私保护白皮书
        </li>
      </ul>
    </div>
    <div class="link-col">
      <h3>商务合作</h3>
      <ul class="links">
        <li class="link-item">
          联系我们
        </li>
        <li class="link-item">
          360点睛营销平台
        </li>
        <li class="link-item">
          360奇胜效果联盟
        </li>
        <li class="link-item">
          电脑/手机维修
        </li>
      </ul>
    </div>
    <div class="qr-col">
      <h3>官方微博</h3>
      <div class="qr-code"></div>
      <div class="qr-name">技术支持</div>
    </div>
    <div class="qr-col">
      <h3>关注我们</h3>
      <div class="qr-code"></div>
      <div class="qr-name">官方微信</div>
    </div> -->
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.footer {
  text-align: center;
  padding: 20px 0;
  .link-col {
    vertical-align: top;
    margin-right: 80px;
    display: inline-block;
    .links {
      margin-top: 20px;
      color: #999999;
      line-height: 26px;
    }
  }
  .link-col,
  .qr-col {
    h3 {
      font-size: 18px;
      color: #cccccc;
    }
  }
  .qr-col {
    float: right;
    margin-left: 36px;
  }
  .qr-code {
    margin-top: 20px;
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
  .qr-name {
    margin-top: 10px;
    text-align: center;
    color: #999;
  }
}
</style>
