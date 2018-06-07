<template>
   <mh-container>
     <div class="introchapter" slot="container">
       <p class="introchapter-title">Question.{{num | addOne}}{{' ' + title}}</p>
       <article class="article" num="0">
         <p class="article-content">
            1.小测试<br>
            给自己1-5分的评价哦~<br>
            ①　我看好快递行业的发展前景。（ ）<br>
            ②　我对市场上的快递公司有所了解。（ ）<br>
            ③　我所对周边社区的布局比较了解。（ ）<br>
            ④　我认为社区的快递配送比较杂乱。（ ）<br>
            ⑤　我可以接受自己到社区里较近的地方取快递。（ ）<br>
            ⑥　我在社区有一定的人脉。（ ）<br>
            ⑦　我了解社区的店面市价。（ ）<br>
            ⑧　我可以接受每天营业时间到22:00 。（ ）<br>
            ⑨　我想创业，具有经营头脑。（ ）<br>
            ⑩　我可以接受门店加盟费用及购买公司专业设备。（ ）<br>
            以上小测试只是为了给你打开妙寄的大门，不管分数如何，想在快递末端服务行业拥有自己的一片小天地，妙寄智慧社区都欢迎你的加入！<br>
         </p>
         <p class="article-content">
            2.关于门店选址：<br>
            1．注意小区建造年份，年轻的社区线上消费能力较高。<br>
            2．社区是否已经有快递驿站或者智能柜。<br>
            3．社区的门店租金价格情况可根据社区的快递量来进行判断是否合适。<br>
            4．社区周边是大马路还是小路，这关系到社区周边居民是否愿意来站取快递。<br>
            5．建议先自己考察一下是否有合适的门店选址。<br>
         </p>
       </article>

       <article class="article" num="1">
         <p class="article-content">
            打开妙寄智慧社区，点击加盟合作→我要加盟。输入你的基本信息，申请提交之后由客服小姐姐进行初步审核，结果会在7个工作日内以电话形式通知到您。<br>
            或者拨打公司客服热线：400-820-1563
         </p>
       </article>

       <article class="article" num="2">
         <p class="article-content">
         审核通过之后妙寄会派专业运营人员与您联系，对社区及门店选址等进行全面评估，并进行各个快递公司的合作洽谈，具体内容会由运营人员与您详谈。通过专业评估之后您就可以正式加入我们妙寄大家庭啦~
         </p>
       </article>

       <article class="article" num="3">
         <p class="article-content">
          在前两个阶段，公司与您洽谈具体合作事项及加盟费用等，洽谈完毕需签订合同并缴纳加盟费用及押金。
         </p>
       </article>

       <article class="article" num="4">
        <p class="article-content">
        妙寄是一支专业的服务团队，具有高素质、高专业性等特点，经营人员需要经过专业培训。
        培训基本安排如下：
        </p>
        <p class="article-content">
        1.到总部进行1天的理论培训及产品、网点、APP的操作方法。
        </p>
        <p class="article-content">
        2.到各个门店进行实际操作培训，为期3天。包括学习门店老员工的处理各种突发状况的方法等。
        </p>
       </article>

        <article class="article" num="5">
            <p class="article-content">
            在培训阶段同时开展门店的装修工作。<br>
            装修的具体标准按照公司制定的装修标准，由自己安排具体装修事项。<br>
            具体要求会由运营人员给您制定具体方案，参考示例如下：<br>
            </p>
            <div class="horizontal-img">
                <img src="../assets/images/store_pic.png" alt="">
                <img src="../assets/images/store_view.png" alt="">
            </div>
        </article>

        <article class="article" num="5">
            <p class="article-content">
            装修及培训结束后，门店正式开业。
            </p>
            <p class="article-content">
            1.开业前一周：合作至少两家快递公司，运营人员在店一周，包括实际操作的指导和监督；
            </p>
            <p class="article-content">
            2.如无问题，一周后门店独立运营；
            </p>
            <p class="article-content">
            3.开业一月后：快递合作覆盖率达60%，运营人员进行回访，检查运营状况是否符合公司要求。
            </p>
        </article>
     </div>
   </mh-container>
</template>
<script>
import window from 'window'
import {addOne} from '../filters'

export default {
  name: 'joinprocesschapter',
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

    .horizontal-img {
        display: flex;
        align-items: baseline;
        justify-content: space-around;
        img {
            margin-right: 1rem;
            flex: 1;
            width: 40%;
            height: 40%;
        }
    }
  }
</style>
