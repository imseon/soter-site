<template>
  <div class="body" style="height: auto;;">
    <div class="register_header_Box">
      <Header></Header>
    </div>
    <div class="content-wrapper">
      <div class="myCenter_Box" style="height:auto;float: none;">
        <div class="myCenter_Box_center">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="平台介绍" name="3">
              <p class="p_title">
                网络安全公共服务平台是国内专注于漏洞响应的第三方平台。网络安全公共服务平台以守护企业网络安全为使命，是一个致力于企业网络漏洞发现与响应的安全平台。从解决企业网络安全中的漏洞入手，助力保护企业网络安全，在漏洞响应领域内建立公信力和权威性，成为企业漏洞响应的首席知识官。
              </p>
            </el-collapse-item>
            <el-collapse-item title="奖励规则" name="2">
              <table class="rule-table">
                <tr>
                  <td>漏洞等级</td>
                  <td>奖励积分</td>
                </tr>
                <tr>
                  <td>低</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>中</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td>高</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>严重</td>
                  <td>1000</td>
                </tr>
              </table>
            </el-collapse-item>
            <el-collapse-item title="提现规则" name="1">
              <p class="p_title">每自然月可申请一次提现，平台在7个工作日内处理完成，通过银行汇款方式进行奖励支付，银行信息务必保证填写完整有效。</p>
            </el-collapse-item>
            <el-collapse-item title="用户服务协议" name="4">
              <div class="aq-main-box" style="min-height:700px;">
                <div class="ld-blog">
                  <div class="clearfix blog-box">
                    <div id="content_blog" class="blog-con clearfix">
                      <pre><p></p><p></p><p style="text-align:left;text-indent:32px;background:white"><strong><span
                                style="font-size:16px;font-family: '微软雅黑',sans-serif;color:black"
                                >请务必认真阅读和理解本《用户服务协议》（以下简称《协议》）中规定的所有权利和限制。本协议确立您使用网络安全公共服务平台时享有的法律责任和权利。在本协议中，“您”指任何使用和访问本平台的个人。除非您接受本《协议》条款，否则您无权注册、登录或使用本协议所涉及的相关服务。您一旦注册、登录、使用或以任何方式使用本《协议》所涉及的相关服务将视为对本《协议》的接受，即表示您同意接受本《协议》各项条款的约束。如果您不同意本《协议》中的条款，请不要注册、登录或使用本《协议》相关服务。本《协议》是用户与360网络安全协同创新产业园及其关联企业之间的法律协议。</span></strong></p><p
                                style="text-align:left;text-indent:32px;background:white"
                                ><strong><span
                                style="font-size:16px;font-family: '微软雅黑',sans-serif;color:black"
                                >您明确声明和保证：您具备足够的法律权利或授权来签署和履行本协议；您对于本协议的签署和履行不会对您须履行的任何其他协议、安排造成冲突或导致违约。您也保证本协议对您具有法律效力，在必要的时候本协议具备执行力。</span></strong></p><p
                                class="MsoListParagraph"
                                style="margin-top:10px;margin-right:0;margin-bottom:10px;margin-left:28px;text-align:left;background:white"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">1.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span></strong><strong><span style="font-size:16px;font-family: '微软雅黑',sans-serif;color:black">服务内容</span></strong></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">1.1<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >360网络安全协同创新产业园及其关联公司为网络安全公共服务平台（以下简称“本网站”、“本平台”、“平台网站”）的所有者及经营者，完全按照其发布的服务条款和操作规则提供基于互联网以及移动互联网的相关服务（以下简称“网络服务”或“本服务”）。网络安全公共服务平台网络服务的具体内容由本公司根据实际情况提供，包括但不限于网络安全公共服务平台等。网络安全公共服务平台将向您提供本网站所展示的产品与服务，并将不断迭代更新产品服务内容，最新的平台服务以网站上的相关页面展示为准。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">1.2<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >用户理解并接受，网络安全公共服务平台仅提供相关的网络服务，除此之外与相关网络服务有关的设备（如个人电脑、手机、及其他与接入互联网或移动互联网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费）均应由用户自行负担。</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:10px;margin-right:0;margin-bottom:10px;margin-left:28px;text-align:left;background:white"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">2.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span></strong><strong><span style="font-size:16px;font-family: '微软雅黑',sans-serif;color:black">账号注册</span></strong></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">2.1<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您确认，在您完成注册程序或以其他网络安全公共服务平台允许的方式实际使用本服务时，您应当是具备完全民事权利能力和完全民事行为能力的自然人、法人或其他组织（以下统称为“法律主体”）。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">2.2<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >若您是未成年人或限制民事行为能力人，则您不具备前述主体资格，您及您的监护人应承担因您的不当注册而导致的一切后果，且网络安全公共服务平台有权注销（永久冻结）您的账户，并向您及您的监护人索偿。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">2.3<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >在您按照注册页面提示填写信息、阅读并同意本协议条款且完成全部注册程序后，或在您按照激活页面提示填写信息、阅读并同意本协议条款且完成全部激活程序后，或您以其他网络安全公共服务平台允许的方式实际使用本网站服务时，您即接受本协议条款约束。您可以使用您提供或确认的邮箱、手机号码或者网络安全公共服务平台允许的其它方式登录本网站。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">2.4<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您了解并同意，您在本网站完成的注册程序并注册成功后，您即已获得网络安全公共服务平台账户。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">2.5<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您一旦注册成功成为用户，您将得到一个密码和帐号，您需要对自己在帐户中的所有活动和操作负全责。如果由于您的过失导致您的帐号和密码脱离您的控制，则由此导致的针对您、网络安全公共服务平台或任何第三方造成的损害，您将承担全部责任。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">2.6<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >用户应输入帐号和密码登录平台账号。为了给您提供更便捷的登录服务，如果您使用手机通过平台账号已登录了一款网络安全公共服务平台网络服务时，可直接一键登录本机其他网络安全公共服务平台网络服务。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">2.7<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >在完成注册或激活账户流程后，您应当按照法律法规要求，按相应页面的提示准确提供并及时更新您的资料，以使资料的真实、及时，完整和准确。如有合理理由怀疑您提供的资料错误、不实、过时或不完整的，网络安全公共服务平台有权向您发出询问或要求改正的通知，并有权直接做出删除相应资料的处理，直至终止对您提供全部服务。网络安全公共服务平台对此不承担任何责任，您将承担因此产生的任何直接或间接损失及不利后果。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">2.8<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您应当准确填写并及时更新您提供的电子邮件地址、联系电话、联系地址、邮政编码等联系方式，以便网络安全公共服务平台或其他会员与您进行有效联系，如通过上述联系方式无法与您取得联系，导致您在使用网络安全公共服务平台服务时产生任何损失或费用的，须由您承担相关责任。您了解并同意，您有义务保证上述联系方式的有效性，如有变更，请您尽快按网络安全公共服务平台的操作流程进行更新。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">2.9<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您了解并同意，为保证账户和交易安全，网络安全公共服务平台有权随时要求您完成网络安全公共服务平台账户的实名认证；同时，网络安全公共服务平台可能会就某些产品或服务的开通，要求您提供更多的身份资料和信息，做进一步的身份认证或资格验证，您的账户只有在通过认证和验证之后，方可获得使用相关产品或服务的资格。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">2.10<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; &nbsp; &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >目前网络安全公共服务平台允许一个法律主体拥有多个网络安全公共服务平台账户，但一个网络安全公共服务平台账户仅能对应唯一的法律主体。在符合法律法规的情况下，如您需转让、赠与或让他人继承您网络安全公共服务平台的账户，网络安全公共服务平台有权要求您提供合格的文件材料并按照网络安全公共服务平台要求的操作流程办理。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">2.11<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; &nbsp; &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >通常情况下，您的网络安全公共服务平台账户是您在本网站进行一切活动的唯一身份识别依据，每一个网络安全公共服务平台账户都可以在本网站独立开展活动。但在下列情形下，网络安全公共服务平台有权对同一或关联法律主体拥有的多个网络安全公共服务平台账户进行统一处理，包括但不限于：</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(1)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >多个网络安全公共服务平台账户之间存在主账户与子账户、授权账户与被授权账户等关联关系，且根据法律法规、本协议条款、网络安全公共服务平台产品相关条款的规定，各账户之间互相承担连带责任的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(2)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >多个网络安全公共服务平台账户使用同一银行实名认证的，且其中两个或两个以上网络安全公共服务平台账户同时存在恶意欠费或违反法律法规、本协议条款、网络安全公共服务平台产品相关条款的行为的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(3)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >多个网络安全公共服务平台账户绑定同一银行账户付款，且其中两个或两个以上网络安全公共服务平台账户同时存在恶意欠费或违反法律法规、本协议条款、网络安全公共服务平台产品相关条款的行为的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(4)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >多个网络安全公共服务平台账户之间存在一项或多项注册信息相同、代为付款、购买的产品或服务用于同一目的，或存在恶意欠费或违反法律法规、网络安全公共服务平台相关条款的行为，且网络安全公共服务平台通过其他证据足以判断上述网络安全公共服务平台账户实际属于同一法律主体的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(5)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >其他网络安全公共服务平台有理由需对多个网络安全公共服务平台账户进行统一处理的情形。</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:10px;margin-right:0;margin-bottom:10px;margin-left:28px;text-align:left;background:white"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">3.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span></strong><strong><span style="font-size:16px;font-family: '微软雅黑',sans-serif;color:black">账户安全</span></strong></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">3.1<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您须对网络安全公共服务平台的账户和密码保密，且须对您在该登录账号和密码下所发生的操作和活动（包括但不限于信息披露、发布信息、网上点击同意或提交各类规则协议、网上续签协议或购买服务）承担责任。您同意：(a)如发现任何人未经授权使用您的网络安全公共服务平台账户和密码，或发生违反保密规定的任何其他情况，您会立即通知网络安全公共服务平台； (b)确保您在上网结束时，以正确步骤离开网站。网络安全公共服务平台不能也不会对因您未能遵守本款规定而发生的任何损失负责。您理解网络安全公共服务平台对您的请求采取行动需要合理时间，网络安全公共服务平台对在采取行动前已经产生的后果（包括但不限于您的任何损失）不承担任何责任。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">3.2<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您理解并同意，基于网站运行和交易安全的需要，网络安全公共服务平台有权暂时停止或者限制您账号下部分或全部资金的支付功能，网络安全公共服务平台将通过邮件、站内信、短信或电话等方式通知您，您应及时予以关注并按照程序进行申诉等后续操作。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">3.3<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您理解并同意，网络安全公共服务平台有权按照国家司法、行政、军事、安全等机关（包括但不限于公安机关、检察机关、法院、海关、税务机关、安全部门）的要求对您的个人信息及在本网站的资金、交易及账户等进行查询、冻结。</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:10px;margin-right:0;margin-bottom:10px;margin-left:28px;text-align:left;background:white"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">4.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span></strong><strong><span style="font-size:16px;font-family: '微软雅黑',sans-serif;color:black">服务使用守则</span></strong></p><p
                                class="MsoListParagraph"
                                style="margin-left:26px;text-align: left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">4.1 </span><strong><span
                                style="font-size:16px;font-family: '微软雅黑',sans-serif;color:black"
                                >平台账号的所有权归网络安全公共服务平台，用户完成注册申请手续后，获得平台账号的使用权。平台账号使用权仅属于初始申请注册人。</span></strong></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">4.2<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >如果您当前使用的平台账号并非您初始申请注册的或通过网络安全公共服务平台提供的其他途径获得的，但您却知悉该平台账号当前的密码，您不得使用该平台账号登录或进行任何操作，并请您在第一时间通知网络安全公共服务平台或者该平台账号的初始申请注册人。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">4.3<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >用户理解并接受网络安全公共服务平台提供的服务中可能包括广告，同意在使用网络服务的过程中显示网络安全公共服务平台和第三方供应商、合作伙伴提供的广告。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">4.4<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >为了便于用户使用网络安全公共服务平台相关服务，用户理解并接受，网络安全公共服务平台可以通过邮件、短信、电话、站内信、弹出消息、客户端推送等形式，向网络安全公共服务平台网络服务的注册用户、收货人等发送公示文案、订单信息、广告等各类通知。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">4.5<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您在使用本服务过程中，本协议条款内容、页面上出现的关于交易操作的提示或网络安全公共服务平台通知您的信息内容是您使用本服务的相关规则，您使用本服务即表示您同意接受本服务的相关规则。您了解并同意网络安全公共服务平台有权单方修改服务的相关规则，而无须征得您的同意，服务规则应以您使用服务时的页面提示为准，您同意并遵照服务规则是您使用本服务的前提。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">4.6<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台会以站内信等方式通知您服务进展情况以及提示您进行下一步的操作，但网络安全公共服务平台不保证您能够收到或者及时收到该信息内容，且不对此承担任何后果。因此，在服务过程中您应当及时登录到本网站查看和进行操作。因您没有及时查看和对服务状态进行修改或确认或未能提交相关申请而导致的任何纠纷或损失，网络安全公共服务平台不负任何责任。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">4.7<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您授权网络安全公共服务平台可以通过向第三方审核您的身份和资格，取得您使用本服务的相关资料。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">4.8<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >在您开始使用网络安全公共服务平台的某一产品或服务前，可能需要和网络安全公共服务平台就这一产品或服务签订单独的服务协议。您只有在接受该服务协议的全部内容后方可使用该产品或服务；如您不同意该服务协议的约定，请您停止后续的操作。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">4.9<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >在您使用网络安全公共服务平台服务时，网络安全公共服务平台有权依照相应的产品或服务的收费介绍、订单或相关协议向您收取服务费用的。网络安全公共服务平台有制订及调整相关服务费用的权利，具体服务费用以您使用该服务时页面上所列之收费方式公告或您与网络安全公共服务平台达成的书面协议为准。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">4.10<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; &nbsp; &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >在您使用网络安全公共服务平台服务的过程中，有可能因为存在本协议所列情形之一，而被网络安全公共服务平台采取了包括但不限于停止全部或部分服务、限制服务的全部或部分功能、冻结全部或部分账户资金等措施，网络安全公共服务平台将通过邮件、站内信、短信或电话等方式通知您按照相应的程序进行申诉。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><a><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">4.11<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; &nbsp; &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您通过申诉程序，向网络安全公共服务平台申请解除上述限制或冻结恢复相关服务的，应按照网络安全公共服务平台的要求，如实提供身份证明及相关资料，以便网络安全公共服务平台进行核实。网络安全公共服务平台有权依照法律法规或平台产品相关约定决定是否同意您的申诉请求。</span></a></p><p
                                class="MsoListParagraph"
                                style="margin-left:30px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">4.12<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; &nbsp; &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您理解并同意，如果您拒绝如实提供身份证明及相关资料的，或未能通过网络安全公共服务平台的审核，网络安全公共服务平台有权长期冻结您的账户且长期限制该等产品或服务的部分或全部功能。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">4.13<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; &nbsp; &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >如果您通过使用本平台获取使用来自第三方的任何产品或服务，您可能会受限于您与该第三方的相关约定，网络安全公共服务平台对此不承担任何责任。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">4.14<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; &nbsp; &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >用户在使用网络安全公共服务平台网络服务过程中，必须遵守《网络安全法》、《中华人民共和国英雄烈士保护法》等中华人民共和国相关法律法规的规定，包括但不限于下列行为：</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(1)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >反对宪法所确定的基本原则的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(2)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(3)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >损害国家荣誉和利益的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(4)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >煽动民族仇恨、民族歧视，破坏民族团结的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(5)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >破坏国家宗教政策，宣扬邪教和封建迷信的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(6)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >散布谣言，扰乱社会秩序，破坏社会稳定的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(7)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(8)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >侮辱或者诽谤他人，侵害他人合法权利的，包括但不限于侮辱、诽谤或者其他方式侵害英雄烈士的姓名、肖像、名誉、荣誉，或者亵渎、否定英雄烈士事迹和精神的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(9)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >含有法律、行政法规禁止的其他内容的。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">4.15<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; &nbsp; &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >如用户在使用网络服务时违反任何上述规定，网络安全公共服务平台或其授权的人有权要求用户改正或直接采取一切必要的措施（包括但不限于更改或删除用户收藏的内容等、暂停或终止用户使用网络服务的权利）以减轻用户不当行为造成的影响。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">4.16<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; &nbsp; &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >依法律、诉讼、司法机关或政府机关的要求或其他合理必要的情况下，网络安全公共服务平台可能会访问、使用、保存、和/或披露您的帐户信息和内容。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">5.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span></strong><strong><span style="font-size:16px;font-family: '微软雅黑',sans-serif;color:black">用户的权利和义务</span></strong></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">5.1<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您有权利享受网络安全公共服务平台提供的互联网技术和信息服务，并有权利在接受网络安全公共服务平台提供的服务时获得网络安全公共服务平台的技术支持、咨询等服务，服务内容详见本网站相关产品的介绍。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">5.2<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您保证不会破坏或扰乱网络安全公共服务平台的运行。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">5.3<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您应尊重网络安全公共服务平台及其他第三方的知识产权和合法权利，并保证在发生侵犯行为后尽力保证网络安全公共服务平台免于损失；网络安全公共服务平台保留终止向您提供服务且不退还任何款项的权利。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">5.4<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您在提交漏洞时，应该遵守包括但不限于以下要求：</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(1)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >对于您在网络安全公共服务平台发布的漏洞，您需要保证研究漏洞的方法、方式、工具及手段的合法性，网络安全公共服务平台对此不承担任何法律责任；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(2)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您不得通过漏洞信息或其他方式私自联系企业；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(3)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >未采取相关安全措施前，严禁对安全性极差，极不稳定的系统进行漏洞验证；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(4)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您可以根据页面相关漏洞提交的指引，向网络安全公共服务平台提交可能导致应用程序数据丢失和篡改、隐私泄露乃至财产损失的安全漏洞信息，供网络安全公共服务平台工作人员以及相关企业审核和确认；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(5)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您必须基于诚信原则向网络安全公共服务平台提交漏洞信息，您同意并确保该漏洞信息通过本服务网页提交时，您是依据您自身所的知识和技能，在公有领域通过合法正当的方式和途径发现该漏洞信息的存在，并没有采用窃取或任何不道德或非法的方式获得该等漏洞信息；简而言之，您对您所提交的漏洞信息所包含的全部权利的合法性做出保证。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">5.5<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您不得为任何非法目的而使用网络安全公共服务平台漏洞及网络安全公共服务平台漏洞提供的相关信息，具体要求包括但不限于：</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(1)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >遵守国家有关的法律和法规；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(2)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >遵守所有与网络服务有关的网络协议、规定和程序；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(3)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >不得为任何非法目的而使用网络服务系统；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(4)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >不得利用网络安全公共服务平台网络服务系统进行任何可能对互联网或移动网正常运行造成不利影响的行为；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(5)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >不得利用网络安全公共服务平台提供的网络服务上传、展示或传播任何虚假的、骚扰性的、侮辱诽谤他人的、辱骂性的、恐吓性的、庸俗淫秽的或其他任何非法的信息资料；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(6)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >不得侵犯网络安全公共服务平台和其他任何第三方的专利权、著作权、商标权、名誉权或其他任何合法权益；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(7)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >如发现任何非法使用平台账户或账户出现安全漏洞的情况，应立即通告网络安全公共服务平台。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">5.6<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您不得利用网络安全公共服务平台漏洞服务和网站相关信息从事以下活动：</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(1)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >未经允许进入计算机信息网络或者使用计算机信息网络资源；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(2)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >未经允许对计算机信息网络功能进行删除、修改或者增加；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(3)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >未经允许对进入计算机信息网络中存储、处理或者传输的数据和应用程序进行删除、修改或者增加；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(4)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >故意制作、传播计算机病毒等破坏性程序；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(5)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >其他危害计算机信息网络安全的行为。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">5.7<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >如您违反上述保证，网络安全公共服务平台有权根据相关服务条款采取删除信息、中止服务等措施，有权限制您账户如新购产品或服务、续费等部分或全部功能，如您因上述行为给网络安全公共服务平台造成损失的，您需承诺赔偿。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">5.8<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >若您使用网络安全公共服务平台的某项服务中包含可下载的软件，则网络安全公共服务平台仅授予您非独占性的、不可转让的、非商业运营目的的个人使用许可。除非网络安全公共服务平台另有明示或与您另有约定外，您不得复制、修改、发布、出售或出租所含软件的任何部分，也不得进行反向工程或试图提取该软件的源代码。</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:10px;margin-right:0;margin-bottom:10px;margin-left:28px;text-align:left;background:white"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">6.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span></strong><strong><span style="font-size:16px;font-family: '微软雅黑',sans-serif;color:black">网络安全公共服务平台的权利和义务</span></strong></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">6.1<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台承诺对您资料采取对外保密措施，不向第三方披露您资料，不授权第三方使用您的资料，以下情况除外：</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(1)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >依据本协议或者您与网络安全公共服务平台之间其他服务协议、合同、在线条款等规定可提供的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(2)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >依据法律法规应当提供的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(3)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >行政、司法等职权部门要求网络安全公共服务平台提供的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(4)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您同意网络安全公共服务平台向第三方提供的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(5)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台处理举报事件、提起诉讼而提交的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(6)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台为防止严重违法行为或涉嫌犯罪行为发生而采取必要合理行动所必须提交的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(7)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台为向您提供产品、服务、信息而向第三方提供的，包括网络安全公共服务平台通过第三方的技术及服务向您提供产品、服务、信息的情况。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">6.2<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >当存在如下情形之一时，网络安全公共服务平台有权对您名下账户资金的部分或全部进行冻结：</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(1)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >国家法律、法规、政策、法律的规定；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(2)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >国家权力机关要求进行冻结的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(3)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您使用网络安全公共服务平台服务的行为涉嫌违反国家法律法规及行政规定的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(4)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台认为您的账户操作、资金进出等存在异常时；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(5)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >他人向您账户错误汇入资金等导致您可能存在不当得利的情况；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(6)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您遭到他人投诉，且对方已经提供一定证据证明的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(7)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台根据自行合理判断，认为可能产生风险的其他情况。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">6.3<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台按照前述规定对您的账户资金进行冻结后，将通过邮件、站内信、短信或电话等方式通知您按照相应的程序进行申诉。如果您按照本协议进行申诉并经网络安全公共服务平台审核通过的，网络安全公共服务平台将立即解除资金冻结措施；如果您未在规定时间内进行申请，或您的申诉未能通过网络安全公共服务平台审核的，则您确认网络安全公共服务平台有权长期冻结该资金，或将相关冻结款项按原路退回来源账户（包括但不限于银行账户）。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">6.4<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台信息安全保护</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(1)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >对于在网络安全公共服务平台发布的漏洞，漏洞提交者需要保证研究漏洞的方法、方式、工具及手段的合法性，网络安全公共服务平台对此不承担任何法律责任。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(2)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台将会努力保证信息的可靠性，但是不能保证所有信息来源的可信，其中漏洞证明方法可能存在一定的攻击性，但都是为了说明漏洞的存在，网络安全公共服务平台对此不负担任何责任。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:56px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(3)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台将会努力保证用户提交信息的安全性。网络安全公共服务平台使用加密方案（HTTPS/TLS）来保护您在网络安全公共服务平台网站上的通信安全。但在互联网中没有任何通信是绝对安全的，网络安全公共服务平台也不能保证通信数据的绝对安全。您有责任采取合理措施保证您的帐号安全。</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:10px;margin-right:0;margin-bottom:10px;margin-left:28px;text-align:left;background:white"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">7.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span></strong><strong><span style="font-size:16px;font-family: '微软雅黑',sans-serif;color:black">用户个人信息保护及用户隐私政策</span></strong></p><p
                                style="margin-left:14px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">7.1</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >基于保护用户个人信息的基本原则，</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >将会采取合理的措施保护用户的个人信息。除法律法规规定的情形外，未经用户许可</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >不会向第三方公开、透露用户个人信息。</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >对相关信息采用专业加密存储与传输方式，保障用户个人信息的安全。</span></p><p
                                style="margin-left:14px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">7.2</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                ></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >平台将运用各种安全技术和程序建立完善的管理制度来保护您的个人信息，以免遭受未经授权的访问、使用或披露。</span></p><p
                                style="margin-top:3px;margin-right:0;margin-bottom:0;margin-left:14px;margin-bottom:0;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">7.3</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >未经您的同意，</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >不会向</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >以外的任何公司、组织和个人披露您的个人信息，但法律法规另有规定或本协议约定的除外。</span></p><p
                                style="margin-left: 14px; text-align: left; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;"
                                ><span
                                style="font-size: 16px; font-family: 微软雅黑, sans-serif; color: black; background-color: white;"
                                ></span><span
                                style="background-color: white; font-size: 16px; font-family: 微软雅黑, sans-serif; color: black;"
                                >7.4</span><span
                                style="font-size: 16px; font-family: 微软雅黑, sans-serif; color: black;"
                                ><span style="background-color: white;">请您详见《用户隐私政策》。</span></span><span
                                style="background-color: white; font-size: 16px; font-family: 微软雅黑, sans-serif; color: black;"
                                >。</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:10px;margin-right:0;margin-bottom:10px;margin-left:28px;text-align:left;background:white"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">8.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span></strong><strong><span style="font-size:16px;font-family: '微软雅黑',sans-serif;color:black">网络安全公共服务平台对您的授权</span></strong></p><p
                                style="margin-top:3px;text-align:left;text-indent:32px;background:white"
                                ><span
                                style="font-size:16px;font-family: '微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台特此授予您不可撤销的、非排他性的、不可转让的许可(以下简称“许可”)以依据本协议来使用网络安全公共服务平台网络服务，并请您承诺：</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:3px;margin-right: 0;margin-bottom:0;margin-left:28px;margin-bottom:0;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(1)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >不得复制任何作为本服务的一部分的内容，除非这种复制是根据本协议所授权的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:3px;margin-right: 0;margin-bottom:0;margin-left:28px;margin-bottom:0;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(2)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >不得出租、租赁、分许可、抵押、翻译、与任何其他产品或服务合并、调整、更改或修改本服务；</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:3px;margin-right: 0;margin-bottom:0;margin-left:28px;margin-bottom:0;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(3)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >不得对本服务的全部或任何部分进行分解、反编译、反向工程或创建任何衍生作品，也不尝试做任何这样的事情；</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:3px;margin-right: 0;margin-bottom:0;margin-left:28px;margin-bottom:0;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(4)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >未经网络安全公共服务平台书面同意的情况下，不得以任何方式向任何第三方提供，或让第三方使用全部或部分的服务(包括但不限于程序清单、对象和源程序清单、目标代码和源代码)；</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:3px;margin-right: 0;margin-bottom:0;margin-left:28px;margin-bottom:0;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(5)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >不得以欺诈方式或出于任何欺诈的目的使用本服务；</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:3px;margin-right: 0;margin-bottom:0;margin-left:28px;margin-bottom:0;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(6)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >不得删除本服务中出现的任何所有权声明或标签；</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:3px;margin-right: 0;margin-bottom:0;margin-left:28px;margin-bottom:0;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(7)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >不尝试禁用、绕过、修改、使失效、或以其他方式规避与本服务有关的或作为本服务的组成部分的任何数字版权管理系统。</span></p><p
                                style="margin-top:3px;text-align:left;background:white"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >尽管网络安全公共服务平台努力为您提供个性化服务，但您理解本服务不是为了也无法满足您所有的个人特殊需求。网络安全公共服务平台无法确保在任何文件中描述的本服务及其功能满足您的个人特殊需求。</span></p><p
                                style="margin-top:3px;text-align:left;background:white"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >本许可及条款对您与网络安全公共服务平台以及我们双方权利义务的继承人和受让人具有约束力。</span></p><p
                                style="margin-top:3px;text-align:left;background:white"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >未经网络安全公共服务平台书面同意，您不得转让、抵押或以其他方式处置本许可或条款约定的义务，以及因本许可和条款所产生的权利义务。</span></p><p
                                style="margin-top:3px;text-align:left;background:white"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >在本许可及条款有效期间内，网络安全公共服务平台可能以转移、分包、或其他方式处置本许可和条款约定的义务，以及因本许可和条款所产生的权利义务。</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:10px;margin-right:0;margin-bottom:10px;margin-left:28px;text-align:left;background:white"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">9.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span></strong><strong><span style="font-size:16px;font-family: '微软雅黑',sans-serif;color:black">保密</span></strong></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">9.1</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您充分知晓在网络安全公共服务平台中所接触的从公开渠道无法获知的信息均为保密信息。保密信息可能以任何形式（口头、书面等）披露，载于任何载体，包括但不限于：网络安全公共服务平台或其关联公司或其他第三方所有或合法拥有的任何计算机程序、代码（包括源代码和目标代码）、算法公式、技术秘密、硬件配置、系统结构、版权、商标、产品研发计划、预测、实际或潜在商业活动的信息、与第三方的协议、客户与供应商信息、财务信息、商务上的信息以及漏洞信息等。凡网络安全公共服务平台无相反意思表示，该等信息均被视为保密的信息。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">9.2</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您在任何时候均不公开漏洞及漏洞相关的任何细节，不向任何第三人( 包括法人、自然人和其他社会组织）披露、提供、泄露所掌握、知悉、管理的保密信息。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">9.3</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >如您知悉保密信息被未经授权的第三方使用或披露的，应立即通知网络安全公共服务平台，并配合网络安全公共服务平台采取补救措施。无论前述保密信息泄露是否系因您的原因，您都将尽其最大努力与网络安全公共服务平台共同采取补救措施，以尽可能减少网络安全公共服务平台和企业的损失。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">9.4</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >除非经网络安全公共服务平台和/或企业事先书面同意，您保证不以任何形式（包括但不限于口头、书面、影印、复制、摄影、电子传送、纸质发表或其他方式）向第三方披露保密信息，也不将保密信息进行复制修改、重组、逆向工程或试图从保密信息或任何相关之材料、软件导出原始程序或基础数据。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">9.5</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >在将漏洞提交到网络安全公共服务平台后的七（7）日内销毁载有保密信息的全部资料及其复印件等，并删除保存在计算机或其他设备中的保密信息。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">9.6</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您知悉网络安全公共服务平台向您披露的保密信息或其他信息，不构成授予任何商标权、专利等知识产权的许可行为，也不构成任何保证不会侵犯第三方知识产权的承诺行为；网络安全公共服务平台给您提供的任何预测不构成承诺行为。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">9.7</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >如您违反上述保密条款之保密义务，直接或间接的导致网络安全公共服务平台遭受损失，您应当依法向受损方赔偿实际以及可得利益的损失以及合理支出（包括但不限于补偿金、赔偿金、诉讼费、律师费、调查取证费等）。如您违反保密义务而取得收益的，则该等收益亦应作为违约金赔偿给受损方。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">9.8</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >从首次获知保密信息之日起，您都将承担永久的保密义务。</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:10px;margin-right:0;margin-bottom:10px;margin-left:28px;text-align:left;background:white"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">10.<span style="font:9px 'Times New Roman'"> &nbsp;</span></span></strong><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">服务变更、中断或终止</span></strong></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">10.1</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >鉴于网络服务的特殊性，用户同意网络安全公共服务平台有权根据业务发展情况随时变更、中断或终止部分或全部的网络服务而无需通知用户，也无需对任何用户或任何第三方承担任何责任；</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">10.2</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >用户理解，网络安全公共服务平台需要定期或不定期地对提供网络服务的平台（如互联网网站、移动网络等）或相关的设备进行检修或者维护，如因此类情况而造成网络服务在合理时间内的中断，网络安全公共服务平台无需为此承担任何责任，但网络安全公共服务平台应尽可能事先进行通告。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">10.3</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >如发生下列任何一种情形，网络安全公共服务平台有权随时中断或终止向用户提供本《协议》项下的网络服务（包括收费网络服务）而无需对用户或任何第三方承担任何责任：</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:3px;margin-right: 0;margin-bottom:0;margin-left:28px;margin-bottom:0;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(1)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >用户提供的个人资料不真实；</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:3px;margin-right: 0;margin-bottom:0;margin-left:28px;margin-bottom:0;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(2)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >用户违反本《协议》中规定的使用规则。</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:10px;margin-right:0;margin-bottom:10px;margin-left:28px;text-align:left;background:white"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">11.<span style="font:9px 'Times New Roman'"> &nbsp;</span></span></strong><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">知识产权</span></strong></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">11.1</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台提供的网络服务中包含的任何文本、图片、图形、音频和/或视频资料均受版权、商标和/或其它财产所有权法律的保护，未经相关权利人同意，上述资料均不得用于任何商业目的。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">11.2</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台为提供网络服务而使用的任何软件（包括但不限于软件中所含的任何图像、照片、动画、录像、录音、音乐、文字和附加程序、随附的帮助材料）的一切权利均属于该软件的著作权人，未经该软件的著作权人许可，用户不得对该软件进行反向工程（reverse engineering）、反向编译（decompile）或反汇编（disassemble）。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">11.3</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >除第三方产品或服务外，本网站上所有内容，包括但不限于著作、图片、档案、资讯、资料、架构、页面设计，已核发奖金的漏洞，均由网络安全公共服务平台或网络安全公共服务平台关联企业依法拥有其知识产权，包括但不限于商标权、专利权、著作权、商业秘密等。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">11.4</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >非经网络安全公共服务平台或网络安全公共服务平台关联企业书面同意，任何人不得擅自使用、修改、复制、公开传播、改变、散布、发行或公开发表本网站上程序或内容。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">11.5</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >尊重知识产权是您应尽的义务，如有违反，您应承担损害赔偿责任。</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:10px;margin-right:0;margin-bottom:10px;margin-left:28px;text-align:left;background:white"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">12.<span style="font:9px 'Times New Roman'"> &nbsp;</span></span></strong><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">账户注销</span></strong></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">12.1</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >如用户账户存在以下情形，网络安全公共服务平台有权采取暂停提供服务、封禁账户、直至注销账户的处理：</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(1)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >用户提交的注册信息不真实完整，经过网络安全公共服务平台通知后仍不改正的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(2)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >用户注册账户后，超过【365】日不使用账户；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(3)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >用户不具备注册账户所需具备的年龄等条件的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(4)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >用户存在违法情形或根据国家机关的要求必须注销账户的。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">12.2</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >如用户向网络安全公共服务平台提出账户注销申请，账户符合以下条件，经过网络安全公共服务平台同意可注销账户：</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(1)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >账户注册时间已满【7】日，并成功激活；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(2)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >账户无争议（如无交易纠纷、无账户归属权争议等）；</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">12.3</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >如用户向网络安全公共服务平台提出账户注销申请，经核实存在以下情形的，网络安全公共服务平台有权拒绝用户的注销申请：</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(1)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >账户有余额（包括资金、通过充值或参加活动取得的卡券、礼品等虚拟财物）；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(2)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >账户有尚未完成的交易；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(3)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >账户有正在进行的业务（如申请找密码、修改手机号等）；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(4)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >账户有其他不符合注销账户的情形。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">12.4</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >用户注销账户的，应按照网络安全公共服务平台要求的程序提出申请，经过网络安全公共服务平台审核确认后，予以注销。自网络安全公共服务平台通过用户预留的邮箱、短信等方式通知用户之日起，账户注销生效。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">12.5</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >用户已充分知晓并确认，账户注销后将用户将不再拥有账户相关的权益，包括但不限于：</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(1)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >账户注销后将无法在网络安全公共服务平台任何产品继续使用账户，且不可恢复；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(2)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >账户所绑定的邮箱或手机号等，10天内将不能再次用于注册或绑定其他网络安全公共服务平台账户；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(3)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >账户信息、账户中的现金、虚拟财物、会员权益、用户存储的信息资料等将被清空，且无法恢复；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(4)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >账户的交易记录将被清空且无法恢复；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(5)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >历史订单可能存在的退款或者中奖权益，将被视为自动放弃；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:28px;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">(6)<span style="font:9px 'Times New Roman'"> &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >账户注销后，网络安全公共服务平台有权不再为用户提供任何与账户有关的服务。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">12.6</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >因注销账户所带来的不便或不利后果，由用户自行承担，与网络安全公共服务平台无关。</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:10px;margin-right:0;margin-bottom:10px;margin-left:28px;text-align:left;background:white"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">13.<span style="font:9px 'Times New Roman'"> &nbsp;</span></span></strong><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">责任范围及责任限制</span></strong></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">13.1</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台仅对本协议条款中列明的责任承担范围负责。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">13.2</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >本服务之合作单位，所提供之服务品质及内容由该合作单位自行负责。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">13.3</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您了解并同意，因您使用本服务、违反本协议条款或在您的账户下采取的任何行动，而导致的任何第三方索赔，应且仅应由您本人承担。如果由此引起网络安全公共服务平台及其关联公司、员工、客户和合作伙伴被第三方索赔的，您应负责处理，并承担由此造成的全部责任。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">13.4</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >在法律允许的情况下，网络安全公共服务平台对于与本协议条款有关或由本协议条款引起的任何间接的、惩罚性的、特殊的、派生的损失（包括业务损失、收益损失、利润损失、使用数据、商誉或其他经济利益的损失），不论是如何产生的，也不论是由对本协议条款的违约（包括违反保证）还是由侵权造成的，均不负有任何责任，即使事先已被告知此等损失的可能性。另外即使本协议条款规定的排他性救济没有达到其基本目的，也应排除网络安全公共服务平台对上述损失的责任。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">13.5</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台不担保网络服务一定能满足用户的要求，也不担保网络服务不会中断，对网络服务的及时性、安全性、准确性也都不作担保。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">13.6</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台不保证为向用户提供便利而设置的外部链接的准确性和完整性，同时，对于该等外部链接指向的不由网络安全公共服务平台实际控制的任何网页上的内容，网络安全公共服务平台不承担任何责任。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">13.7</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >对于因电信系统或互联网网络故障、计算机故障或病毒、信息损坏或丢失、计算机系统问题或其它任何不可抗力原因而产生损失，网络安全公共服务平台不承担任何责任，但将尽力减少因此而给用户造成的损失和影响。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">13.8</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >除本协议条款另有规定或网络安全公共服务平台与您就某一具体产品或服务另有约定外，在任何情况下，您同意网络安全公共服务平台对本协议条款所承担的赔偿责任总额不超过向您收取的当次服务费用总额。</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:10px;margin-right:0;margin-bottom:10px;margin-left:28px;text-align:left;background:white"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">14.<span style="font:9px 'Times New Roman'"> &nbsp;</span></span></strong><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">通知送达</span></strong></p><p
                                style="margin-top:10px;margin-right:0;margin-bottom:10px;margin-left:0;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">14.1</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您理解并同意，网络安全公共服务平台可依据自行判断，通过网页公告、电子邮件、手机短信或站内信等方式向您发出通知，且网络安全公共服务平台可以信赖您所提供的联系信息是完整、准确且当前有效的；上述通知于发送之日视为已送达收件人。</span></p><p
                                style="margin-top:10px;margin-right:0;margin-bottom:10px;margin-left:0;text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">14.2</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"
                                >除非本协议条款另有约定或网络安全公共服务平台与您另行签订的协议明确规定了通知方式，您发送给网络安全公共服务平台的通知，应当通过网络安全公共服务平台对外正式公布的通信地址、传真号码、电子邮件地址等联系信息进行送达。</span></p><p
                                class="MsoListParagraph"
                                style="margin-top:10px;margin-right:0;margin-bottom:10px;margin-left:28px;text-align:left;background:white"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">15.<span style="font:9px 'Times New Roman'"> &nbsp;</span></span></strong><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">法律及争议解决</span></strong></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">15.1</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >本协议适用中华人民共和国法律。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">15.2</span><a><span
                                style="font-size:16px;font-family: '微软雅黑',sans-serif;color:black"
                                >因本协议引起的或与本协议有关的任何争议，各方应友好协商解决；协商不成的，任何一方均可将有关争议提交至北京仲裁委员会申请仲裁解决。</span></a></p><p
                                class="MsoListParagraph"
                                style="margin-top:10px;margin-right:0;margin-bottom:10px;margin-left:28px;text-align:left;background:white"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">16.<span style="font:9px 'Times New Roman'"> &nbsp;</span></span></strong><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">其他条款</span></strong></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">16.1</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >如果本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，或违反任何适用的法律，则该条款被视为删除，但本协议的其余条款仍应有效并且有约束力。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">16.2</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台有权随时根据有关法律、法规的变化以及公司经营状况和经营策略的调整等修改本协议，而无需另行单独通知用户。修改后的协议会在网络安全公共服务平台网站上公布。用户可随时通过网络安全公共服务平台网站浏览最新服务协议条款。当发生有关争议时，以最新的协议文本为准。如果不同意网络安全公共服务平台对本协议相关条款所做的修改，用户有权停止使用网络服务。如果用户继续使用网络服务，则视为用户接受网络安全公共服务平台对本协议相关条款所做的修改。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">16.3</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >本协议条款由本协议条款与本网站公示的各项规则组成，相关名词可互相引用参照，如有不同理解，以本协议条款为准。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">16.4</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >本协议条款的章节标题仅为行文方便而设，不具有法律或合同效力。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">16.5</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >您对本协议条款理解和认同，您即对本协议条款所有组成部分的内容理解并认同，一旦您使用本服务，您和网络安全公共服务平台即受本协议条款所有组成部分的约束。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">16.6</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >本协议条款部分内容被有管辖权的法院认定为违法的，不因此影响其他内容的效力。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black">16.7</span><span
                                style="font-size: 16px;font-family:'微软雅黑',sans-serif;color:black"
                                >网络安全公共服务平台在法律允许最大范围对本协议拥有解释权与修改权。</span></p><p
                                style="text-align:left;background:white"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:black"> </span></p></pre>
                    </div>
                  </div>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="用户隐私政策" name="5">
              <div class="clearfix blog-box">
                <div id="content_blog" class="blog-con clearfix">
                  <pre><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >网络安全公共服务平台（以下简称“平台”）是国内专注于漏洞响应的第三方平台。网络安全公共服务平台以守护企业网络安全为使命，是一个致力于企业网络漏洞发现与响应的安全平台。从解决企业网络安全中的漏洞入手，助力保护企业网络安全，在漏洞响应领域内建立公信力和权威性，成为企业漏洞响应的首席知识官。网络安全公共服务平台由360网络安全协同创新产业园及其关联企业（以下简称“我们”或“公司”）提供。</span></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >用户（以下又称“您”）信息除本白皮书第一章概述约定的以外，还包括可以以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种个人信息。个人信息包括姓名、出生日期、身份证件号码、住址、通信通讯联系方式、通信记录和内容、账号密码、交易信息等。非常感谢您对我们的信任。我们深知隐私对您的重要性，并会尽全力保护您的隐私。360网络安全协同创新产业园作为互联网安全公司，在为用户提供隐私保护的同时，对自身的安全产品提出了更高级别的标准，我们保证公司各产品（或服务）在使用用户信息的时候遵循“四不三必须”的七个规范，即：</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">第一、不该看的不看。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">第二、不该传的不传。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">第三、不该存的不存。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">四、不该用的不用。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">五、一切行为必须明示，尊重用户的知情权和选择权。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">六、必须经过用户许可。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">七、必须对收集的用户隐私信息负责。</span></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">本隐私政策将帮助您了解以下内容：</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">一、我们如何收集和使用用户信息</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">二、我们如何存储用户信息</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">三、我们如何共享、转让、公开披露用户信息</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">四、我们如何保护用户信息</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">五、隐私政策的适用范围</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">六、隐私政策的变更和修订</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">七、如何联系我们</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">八、 隐私政策的生效</span></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们希望通过本隐私政策向您说明，在使用网络安全公共服务平台时，我们如何收集、使用、存储、分享和转让用户信息，以及我们如何保护用户信息。<strong>请在使用网络安全公共服务平台前，务必仔细阅读并了解本隐私政策，在确认充分理解并同意后使用我们的产品或服务。一旦您开始使用网络安全公共服务平台，即表示您已充分理解并同意本政策，并同意我们按照本隐私政策收集、使用、储存和分享用户信息。</strong>如对本政策内容有任何疑问、意见或建议，您可通过本隐私政策提供的各种联系方式与我们联系。</span></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">一、我们如何收集和使用用户信息</span></strong></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们会出于本隐私政策所述的以下目的，收集和使用用户信息：</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">（一）实现网络安全公共服务平台的基本功能</span></strong></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">1</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >、通过注册帐号收集的信息。当您注册网络安全公共服务平台帐号时，网络安全公共服务平台会收集您的手机号码、邮箱、用户名、密码，收集上述信息是为了帮助您完成网络安全公共服务平台帐号的注册，保护您的帐号安全。如果您拒绝提供上述信息，您可能无法成功注册平台账号。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >在您完成平台账号注册后，您可以选择向我们提供您的性别、生日、爱好、婚姻状况、教育程度、职业、毕业院校、收入水平等信息，此类信息有助于我们向您提供个性化的服务，拒绝提供此类信息不影响您使用平台产品的其他功能。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">2</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >、间接收集的信息。为了方便您登录网络安全公共服务平台，您可以通过第三方帐号登录网络安全公共服务平台及网络安全公共服务平台的其他产品和服务。为实现前述目的，我们需要从第三方账号获取并收集您的第三方帐号信息，如昵称、头像等。如果网络安全公共服务平台开展业务所需的个人信息超出了您向第三方授权同意的范围，我们将在获取您个人信息前征得您的明示同意。我们也将严格遵守相关法律规定，要求第三方保障其提供的信息的合法性。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">3</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >、帐号安全。为保证您网络安全公共服务平台的帐号安全，我们会记录您在网络安全公共服务平台上所有产品的注册和登录，还有使用平台账号的具体时间、IP地址、城市区域、登录产品的名称等信息，此类信息用于平台帐号安全检测。同时，您也可以通过绑定手机号码等方式来进一步加强您对帐号的管理。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">（二）我们如何使用Cookie和同类技术</span></strong></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >当您通过网络安全公共服务平台注册或登录网络安全公共服务平台时，我们会在网站内使用Cookies技术。Cookies是我们存储在您计算机上的小数据文件，通常包含标识符、站点名称以及一些号码和字符。每个网站发给您的Cookies是唯一的，它只能被发给您Cookies的Web服务器读取，常用来简化重复登录的步骤、帮助我们记住您的设备和使用服务的偏好、分析您使用我们平台的情况，从而帮助您获得更轻松的访问体验。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们不会将Cookies用于本隐私政策所述目的之外的任何用途。您可以根据自己的偏好管理或清除本平台内保存的所有Cookies。如果您清除了这些Cookies，那在您每次登录平台账号时，都需要您重新登录并手动更改相关设置，而且您之前所记录的相应信息也均会被删除，这可能会影响到您使用服务的安全性和便捷性。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >除 Cookie 外，我们在平台网站上使用网站信标和像素标签等其他同类技术。网站信标通常是一种嵌入到网站或电子邮件中的透明图像。通过请求这个图片时携带的参数统计用户对当前页面的访问，方便平台网站的开发者了解自身平台网站的使用情况。网站信标技术仅用于简化网站开发者使用服务器日志进行分析的繁琐过程，不能获取除本平台网站以外的您的其他信息。</span></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">（三）改善我们的产品和服务</span></strong></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >您可以通过网络安全公共服务平台用户热线向我们反馈您使用本款平台产品或服务中遇到的问题。我们会努力解决问题。您在反馈意见中所提供的联系方式，仅用于我们的用户热线与您沟通与反馈，除征得用户明确同意和法律明确规定外，我们将不会向任何第三方提供您提供的上述信息。</span></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">（四）安全保障</span></strong></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >为提高您使用我们及我们关联公司、合作伙伴提供服务的安全性，保护您或其他用户或公众的人身财产安全免遭侵害，更好地预防钓鱼网站、欺诈、网络漏洞、计算机病毒、网络攻击、网络侵入等安全风险，更准确地识别违反法律法规或网络安全公共服务平台相关协议规则的情况。我们可能使用或整合您的账户信息、设备信息、软件使用信息以及我们关联公司、合作伙伴取得您授权或依据法律共享的信息，用于进行身份验证、检测及防范安全事件，并依法采取必要的记录、审计、分析、处置措施。</span></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">（五）其他用途</span></strong></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >在符合国家法律法规的前提下，我们可能会将您的个人信息匿名化、汇总、脱敏和加密处理后，形成统计信息或用户画像（但画像无法识别任何个人用户），为您展示和推送相关服务或产品。如果没有得到您事先的同意，我们不会将此类信息用于本隐私政策未载明的其他用途，或者将基于特定目的收集而来的信息用于其他目的。</span></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">（六）征得授权同意的例外</span></strong></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >根据相关法律法规规定，以下情形中收集您的用户信息无需征得您的授权同意：</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">1.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >与国家安全、国防安全有关的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">2.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >与公共安全、公共卫生、重大公共利益有关的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">3.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >与犯罪侦查、起诉、审判和判决执行等有关的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">4.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >出于维护信息主体或其他个人的生命、财产等重大合法权益但又很难得到您同意的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">5.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >所收集的用户信息是您自行向社会公众公开的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">6.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >从合法公开披露的信息中收集用户信息的，如合法的新闻报道、政府信息公开等渠道；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">7.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >根据您的要求签订合同所必需的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">8.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >用于维护所提供的产品或服务的安全稳定运行所必需的，例如发现、处置产品或服务的故障；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">9.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >为合法的新闻报道所必需的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">10.<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >学术研究机构基于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的信息进行去标识化处理的；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">11.<span style="font:9px 'Times New Roman'"> &nbsp;</span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >法律法规规定的其他情形。</span></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">二、我们如何存储用户信息</span></strong></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们在中华人民共和国境内收集和产生的用户信息将存储在中华人民共和国境内。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >若为处理跨境业务，确需向境外机构传输境内收集的相关用户信息的，我们会按照法律、行政法规和相关监管部门的规定执行。我们会确保用户信息得到足够的保护，例如匿名化、加密存储等。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们仅在本政策所属目的的所必须期间和法律法规要求的时限内存储用户信息。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >如我们停止运营网络安全公共服务平台的产品或服务，我们将及时停止继续收集用户信息，并将停止运营的通知以逐一送达或公告的形式通知您，并对我们存储的用户信息进行删除或匿名化处理。</span></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">三、我们如何共享、转让、公开披露用户信息</span></strong></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">（一）共享</span></strong></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们不会与任何公司、组织和个人共享用户信息，但以下情况除外：</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">1.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >在获取您明确同意的情况下，我们会与其他方共享用户信息。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">2.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们可能会根据法律法规规定、诉讼争议解决需要，或按行政、司法机关依法提出的要求，对外共享用户信息。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">3.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >在法律法规允许的范围内，为维护公司、公司的关联方或合作伙伴、您或其他平台用户或社会公众利益、财产或安全免遭损害而有必要共享用户信息。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">4.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >在我们的关联方向您或向我们提供服务的情况下，我们可能与我们的关联公司共享用户信息。但我们仅共享必要的用户信息，且关联方对您信息的处理受本隐私政策的约束。关联公司如要改变您用户信息的处理目的，将再次征求您的授权和同意。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">5.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >除非获得您的明确授权和同意，否则我们不会与第三方广告商、应用程序开发者、开放平台或其他合作伙伴共享用户信息。我们可能会为这些合作伙伴提供汇总后的信息、匿名化后的信息或者其他不会识别到您身份的信息。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">6.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >仅为实现本隐私政策中声明的目的，我们可能会与我们的供应商、服务提供商、顾问或代理人共享用户信息（或用户举报的短信或来电号码），以提供更好的用户服务和用户体验。这些供应商、服务提供商、顾问、代理人可能为我们提供技术基础设施服务，分析我们服务的使用方式，衡量广告和服务的有效性，提供客户服务和支付服务，进行学术研究和调查，或提供法律、财务与技术顾问服务。对我们与之共享用户信息的公司、组织和个人，我们会与其签署严格的数据保护协定，要求其按照我们的说明、本隐私政策以及其他任何相关的保密和安全措施来处理用户信息。</span></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">（二）转让</span></strong></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们不会将用户信息转让给其他任何公司、组织和个人，但以下情形除外：</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">1.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >随着公司业务的发展，我们及我们的关联公司有可能进行合并、收购、资产转让或其他类似的交易。如相关交易涉及到用户信息转让，我们会要求新持有用户信息的公司、组织和个人继续受此政策约束，否则我们将要求该公司、组织和个人重新征得您的授权同意。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">2.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >在获得您明确同意的情形下转让，亦即获得您明确同意后，我们会向其他方转让我们已经获取的用户信息。</span></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">（三）披露</span></strong></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">我们仅会在以下情况下，公开披露用户信息：</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">1.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >已经获得您明确同意。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">2.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >在法律、法律程序、诉讼或政府主管部门强制性要求的情况下，我们可能会公开披露用户信息。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">3.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >在法律法规允许的范围内，为公司、公司的关联方或合作伙伴、您或其他平台用户或社会公众利益、财产或安全免遭损害而有必要披露用户信息。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">4.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >法律法规规定的其他情形。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >根据法律规定，共享、转让经去标识化处理的用户信息，且确保数据接收方无法复原并重新识别信息主体的，不属于用户信息的对外共享、转让及公开披露行为。请您知悉对此类数据的保存及处理将无需另行向您通知并征得您的同意。</span></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">四、我们如何保护用户信息</span></strong></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们已采取符合业界标准的安全防护措施保护您提供的用户信息，防止数据遭到未经授权访问、公开披露、使用、修改、损坏或丢失。我们会采取一切合理可行的措施，保护您的用户信息。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">1.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们通过发布《用户隐私白皮书》，实现用户信息处理的透明化，并建立用户意见反馈渠道，接受社会公众监督。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">2.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们会对可识别的个人身份信息进行加密传输和存储，以确保数据的保密性。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">3.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >如果用户注册了平台账号，我们可能通过对平台用户的登录时间、IP、登录次数等信息进行分析，妥善做好风控管理。如有疑似非本人登录操作的情况，我们将提醒用户，避免平台账户被非本人登录操作。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">4.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >若我们的应用采用了WebView技术，我们会对在WebView中使用的所有file协议进行URL校验且限制访问本应用敏感数据以及SDCard数据，保障您个人信息的安全。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">5.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们在服务端部署访问控制机制，对可能接触到用户信息的工作人员采取最小够用授权原则，并定期核查访问人员名单和访问记录。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">6.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们存储用户信息的服务器系统均为安全加固后的操作系统。我们会对服务器操作进行账户审计及监控。如果发现外部公告有安全问题的服务器操作系统，网络安全公共服务平台会在第一时间会进行服务器安全升级，确保网络安全公共服务平台所有服务器系统及应用安全。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">7.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们为工作人员定期举办隐私保护相关法律法规培训，以加强工作人员的隐私保护意识。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">8.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >如果不幸发生我们的物理、技术或管理防护措施遭到破坏的事件，我们会及时启动应急预案，防止安全事件扩大，按照法律法规的要求上报国家主管机关，并及时采取推送、公告等合理、有效的方式向您告知安全事件的基本情况、可能的影响、已经采取的措施或将要采取的措施等。</span></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">五、用户管理个人信息的权利</span></strong></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >用户在使用网络安全公共服务平台期间，可以通过以下方式访问并管理您的个人信息：</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">（一）用户个人信息的访问和更正</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >您可以通过网络安全公共服务平台查询和更正您的账户信息，包括密码、性别、年龄、生日、爱好、婚姻状况等信息。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">（二）用户个人信息的删除</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">以下情况发生时，您有权要求我们删除您的个人信息：</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">1. &nbsp;</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们没有征求您的明确同意，收集了您的个人信息。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">2. &nbsp;</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们处理您的个人信息违反了法律法规规定。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">3. &nbsp;</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们违反了与您的约定使用和处理您的个人信息。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">4. &nbsp;</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >您注销了平台账号、卸载或者不再使用我们的平台产品（或服务）。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">5. &nbsp;</span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们停止对您提供服务。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >您可以通过本隐私政策第十条款提供的方式联系我们要求删除您的个人信息，我们会在15个工作日内给予答复。当我们从服务器中删除您的个人信息后，我们可能不会立即从备份系统中删除相应的数据，但会在备份更新的时候删除这些信息。但您在网络安全公共服务平台中形成的所有网络日志将保留不少于6个月。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">（三）用户个人账户的注销</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >您可以向网络安全公共服务平台申请注销您的平台账户。但请您注意，如果您选择注销平台账户，那平台账号将不可被使用且相关帐号信息也即将被删除，您将无法再通过平台账号登录网络安全公共服务平台。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >当您注销账户后，除法律法规要求我们保存的相关信息以外，我们将停止为您提供相应的平台产品（或服务），并在10个工作日内删除或匿名化您的个人信息。但您在网络安全公共服务平台中形成的所有网络日志将保留不少于6个月。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">（四）用户授权的撤回</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >请您理解，每项业务功能需要一些基本的个人信息才能得以完成，当您撤回同意或授权后，我们将无法继续为您提供相应的服务，也将不再处理您相应的个人信息。但您撤回同意或授权的决定，不会影响此前基于您的同意或授权而开展的个人信息处理。</span></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">六、未成年人个人信息保护</span></strong></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >未成年人在使用网络安全公共服务平台产品或服务时，需要监护人同意或授权。我们建议未成年父母或监护人为其阅读本隐私政策，并建议未成年人在提交个人信息之前寻求父母或监护人的同意和指导。若您是未成年人的监护人，当您对您所监护的未成年人的个人信息有疑问时，您可以通过本隐私政策第十条款的联系方式与我们联系。</span></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">七、第三方提供商及其服务</span></strong></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >为确保流畅的浏览体验，您可能会收到来自网络安全公共服务平台及其合作伙伴以外的第三方（以下简称“第三方”）提供的内容或网络链接。我们对此类第三方无控制权。您可选择是否访问第三方提供的链接、内容、产品或服务。</span></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们无法控制第三方的隐私和数据保护政策，此类第三方不受到本隐私政策的约束。请您慎重向第三方提交个人信息并建议您详细阅读第三方的隐私保护政策。</span></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">八、隐私政策的适用范围</span></strong></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >本隐私政策仅适用于网络安全公共服务平台。本隐私政策不适用以下情况：</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">1.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >将网络安全公共服务平台产品（或服务）嵌入到第三方产品（或服务）的情况，第三方产品（或服务）收集的信息。</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">2.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >在网络安全公共服务平台产品（或服务）中接入的第三方服务、广告或其他公司、组织或个人所收集的信息。</span></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><strong><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">九、隐私政策的变更和修订</span></strong></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们的隐私政策可能变更。未经您明确同意，我们不会限制您按照本隐私政策所应享有的权利。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">对于本隐私政策的重大变更，我们还会提供显著的通知。</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">本政策所指的重大变更包括但不限于：</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">1.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们的服务模式发生重大变化。如处理用户信息的目的、处理的用户信息类型、用户信息的使用方式等；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">2.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们在控制权等方面发生重大变化。如并购重组等引起的所有者变更等；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">3.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >用户信息共享、转让或公开披露的主要对象发生变化；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">4.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >您参与用户信息处理方面的权利及其行使方式发生重大变化；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">5.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >我们负责处理用户信息安全的责任部门、联络方式及投诉渠道发生变化时；</span></p><p
                                class="MsoListParagraph"
                                style="margin-left:60px;text-align:left;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">6.<span style="font:9px 'Times New Roman'"> &nbsp; &nbsp; </span></span><span
                                style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D"
                                >用户信息安全影响评估报告表明存在高风险时。</span></p><p
                                style="margin-top:20px;margin-right:0;margin-bottom:20px;margin-left:0;text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">十一、隐私政策的生效</span></p><p
                                style="text-align:left;text-indent:32px;line-height:36px"
                                ><span style="font-size:16px;font-family:'微软雅黑',sans-serif;color:#3D3D3D">本隐私政策版本上线及生效日期为2019年10月01日。</span></p></pre>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
    <home-footer/>
  </div>
</template>

<script>
import Header from '@/components/CommonHeader'
import HomeFooter from '../components/HomeFooter.vue'
export default {
  data: function() {
    return {
      options: [
        {
          value: '选项1',
          label: '最新悬赏'
        },
        {
          value: '选项2',
          label: '积分最高'
        }
      ],
      activeName: '3',
      input_title: '',
      total: 0,
      cur_page: 1,
      ps: 6,
      proTableData: [],
      searchType: ''
    }
  },
  components: {
    Header,
    HomeFooter
  },
  created() {
    
    // this.getList()
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      if (this.$route.query.name == 1) {
        this.activeName = '1'
      } else if (this.$route.query.name == 2) {
        this.activeName = '2'
      } else if (this.$route.query.name == 4) {
        this.activeName = '4'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.content-wrapper {
  padding-top: 140px;
  .rule-table {
    font-size: 16px;
    text-align: center;
    border: 1px solid black;
    margin: 0 auto;
    text-align: center;
    width: 500px;
    tr td {
      font-size: 16px;
      text-align: left;
      padding: 10px;
      width: 350px;
      border: 1px solid black;
    }
  }
}
</style>
<style>
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-select .el-input.is-focus .el-input__inner {
  border: 1px solid #01982c;
}
</style>
