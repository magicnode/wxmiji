<template>
   <mh-container>
     <div class="introchapter" slot="container">
       <p class="introchapter-title">Chapter.{{num | addOne}}{{' ' + title}}</p>
       <article class="article" num="0">
         <p class="article-content">
           给到加盟门店操作手册及相关资料
         </p>
         <p class="article-content">
           根据门店性质、场地大小及布局进行合理化布置，包括门店VI形象整体布局设计，门店配套的设施设备的完善，按门店性质进行补充
         </p>
         <p class="article-content">
           双方迅速对接对应的快递公司，并将合作的快递公司对接人联系方式给到门店负责人
         </p>
         <p class="article-content">
           软件安装、操作及使用培训
         </p>
         <p class="article-content">
           当日快递会在前一天由快递公司将快件送至门店，门店负责人则对包裹进行整理并放至货架进行入库上架操作
         </p>
         <p class="article-content">
          （注：上架同时软件将以短信形式通知收件人进行取件）
         </p>
         <p class="article-content">
           当日剩余快件进行盘库，并整理放置一处，次日进行二次派送
         </p>
         <p class="article-content">
           遇问题件，或要求上门取件等特殊要求时，可及时通知相应合作的快递公司业务员进行解决
         </p>
         <p class="article-content">
           遇软件问题、门店推广、加盟门店的请及时联系客服人员
         </p>
         <p class="article-content">
           服务热线：400-820-1563
         </p>
       </article>

       <article class="article" num="1">
         <p class="article-content">
           当日快递会在前一天由快递公司将快件送至门店。然后门店登录“妙寄”APP进行上架操作上架。一般在上架同时，短信则同时发送到收件人手机上。
         </p>
         <p class="article-content">
           操作步骤：登录软件 — 点击扫描操作 — 页面提示“允许”— 查看设置并保存 — 选择品牌及类型 — 输入手机号 — 扫描操作入库上架（可支持在上架同时发送短信/云呼）
         </p>
       </article>

       <article class="article" num="2">
         <p class="article-content">
           派件涵盖的辅助功能有云通知与云电话。在派件时通过信息/电话形式通知收件人。
         </p>
         <p class="article-content">
           云通知——云通知是通过短信和云呼群发模式来通知收件人进行取件。当短信或云呼未发送成功时，可返回主界面点击派件清单功能按需求进行重新发送通知到收件人。（短信/云呼：0.05元/条）
         </p>
         <p class="article-content">
           操作步骤：登录 — 云通知 — 查看设置并保存 — 选择短信/云呼 — 模板选择 — 云呼加短信（勾选） — 手机号/扫描优先模式 — 录入 — 发送通知收件人
         </p>
         <p class="article-content">云电话——云电话是妙寄主要语音通讯功能，电话直接通知收件人进行取件，回拨则是通过第三方语音转接通知到收件人进行取件，使用云电话会比您自主拨打更方便更便宜（直拨：0.06元/条，回拨：0.08元/条）。</p>
         <p class="article-content">
           操作步骤：登录 — 云电话—输入号码—选择直拨/回拨通知收件人
         </p>
         <p class="article-content">注意事项：</p>
         <p class="article-content">a.电话记录/录音记录在电话挂断后2分钟内显示</p>
         <p class="article-content">b.录音在拨打电话前点击，通话完后关闭，且回拨目前不支持录音功能</p>
         <p class="article-content">C.录音直接保存在云服务，实名认证后可保存7个工作日</p>
       </article>

       <article class="article" num="3">
         <p class="article-content">
           签收功能是妙寄APP成型后新增的一个功能模块，主要用于站点快递小哥签收使用，一般是以集合设置功能内的基本信息所设置的品牌为准。按照站点需求，选择是否签收拍照功能，扫描后单号可在扫描列表查看。单号扫描成功后进行签收。
         </p>
         <p class="article-content">
           注意事项：
         </p>
         <p class="article-content">
            a.切换扫描器功能需配备软件合作品牌的扫描头为准
         </p>
         <p class="article-content">
           b.因扫描头插头是安插在手机语音孔内，故使用时，云呼及语音功能暂不可用
         </p>
       </article>

       <article class="article" num="4">
         <p class="article-content">
           盘库是针对每日剩余快件盘点操作。以便站点及时了解快递的实际库存与系统库存的数据对应，形成清单。盘库清单是多出和缺少个主要功能合成；如果盘库清单上有红点显示表示盘库有问题还没有处理；点击盘库清单进行处理；
         </p>
         <p class="article-content">
           操作步骤：登录—扫描操作—设置保存—需求选择—输入手机号扫描操作—盘库
         </p>
         <p class="article-content">
           注意事项：
         </p>
         <p class="article-content">
            在盘库后多出或缺少的，可在主页面盘库清单功能内显示，然后根据需求进行操作。
         </p>
       </article>

       <article class="article" num="5">
         <p class="article-content">
           社区门店在遇问题件情况下，当日下午业务员来店送快件应及时将当日问题件告知业务员以便及时处理问题件。同时登录软件进行问题件上报。
         </p>
         <p class="article-content">
           快递业务员在当日分发快递同时，门店管理人员应及时查看快件是否有误，若发现问题件应及时告知快递业务员。
         </p>
         <p class="article-content">
         注意事项：
         </p>
         <p class="article-content">
           a.切勿乱摆乱放，妥善保管
         </p>
         <p class="article-content">
           b. 通过信息发送成功的，收件人上门取件时却发现丢件，费用由店铺负责人承担
         </p>
       </article>

       <article class="article" num="6">
         <p class="article-content">
           以短信形式发送或电话通知到收件人，收件人在当日时间内未上门进行取件，次日将直接电话联系收件人告知取件相关信息达到进行二次派送
         </p>
         <p class="article-content">
         电话无人接听时，将以短信形式通知收件人通知取件
         </p>
         <p class="article-content">
           电话短信都无法联系到收件人情况下，做问题件处理
         </p>
       </article>

       <article class="article" num="7">
         <p class="article-content">
         社区门店在开张后期，可能涉及到的例如客户要求进行上门派送、上门取件寄件等特殊要求的，原则是不提供送货上门的。打电话跟客户沟通好让客户到店自提，提供门店的客流量。
         </p>
         <p class="article-content">
         除特殊原因需要送货上门的跟客户协商好时间，选择店内不忙的时间送货。
         </p>
         <p class="article-content">
           1、电话协商    2、告知店内情况    3、通知快递业务员   4、突发状况及时联系业务员
         </p>
       </article>

       <article class="article" num="8">
         <p class="article-content">
         阅读快递面单背面条款了解情况再填写运单
         </p>
         <p class="article-content">
         贵重物品需提醒寄件人是否保价，并告知承担后果
         </p>
         <p class="article-content">
         交接快件时，务必订单签名，告知寄件人妥善保存底单以防止查询
         </p>
         <p class="article-content">
         快件外包装完好，由收件人签字确认后验货。遇破损、短缺状况需拒收退回，或让快递业务员书面材料证明拍照。并电话通知寄件人或快递公司客服人员进行处理。
         </p>
       </article>
     </div>
   </mh-container>
</template>
<script>
import window from 'window'
import {addOne} from '../filters'

export default {
  name: 'introchapter',
  created () {
    const route = this.$route.query
    const title = route.title || '下载、安装、升级'
    const num = route.num || 0
    this.num = num
    this.title = title
    this.$store.commit('SET_TITLE', {title})
  },
  filters: {
    addOne
  },
  mounted () {
    const articles = window.document.getElementsByTagName('article')
    for (let key in articles) {
      if (key === this.num) {
        articles[key].className += ' show-important'
        break
      }
    }
  },
  computed: {
  },
  data () {
    return {
      num: 0,
      title: '下载、安装、升级'
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  @import '../assets/styles/colors.less';
  .introchapter {
    &-title {
      color: @dark-yellow;
      background-color: white;
      padding: 1rem;
      font-size: 1.2rem;
      text-align: left;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    article {
      display: none;
      min-height: 10rem;
    }
    .article-video {
      font-size: 1.4rem;
      text-align: justify;
      background-color: white;
      padding-bottom: 3rem;
      a {
        color: @dark-yellow;
      }
    }
  }
</style>
