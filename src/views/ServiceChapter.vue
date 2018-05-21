<template>
   <mh-container>
     <div class="introchapter" slot="container">
       <p class="introchapter-title">Question.{{num | addOne}}{{' ' + title}}</p>
       <article class="article" num="0">
         <p class="article-content">
           我们的客服小姐姐已经在加紧审核了，7个工作日之内会尽快与您电话联系详细结果哦~感谢您的理解。
         </p>
       </article>

       <article class="article" num="1">
         <p class="article-content">
         快递遍布全国各地，有快递的地方就有妙寄发展的意义。只要是符合妙寄门店运营要求的门店，不管你在全国任何地方，妙寄欢迎您报名加入我们。
         </p>
       </article>

       <article class="article" num="2">
         <p class="article-content">
         妙寄的主营业务是快递，所以业务普及的社区快递量越大，盈利越大。所以社区的年轻人越多，可承接的快递业务越多，当然会更好。妙寄门店的大小也要根据社区具体情况进行选择。
         </p>
       </article>

       <article class="article" num="3">
         <p class="article-content">
           当然可以，妙寄较快递柜的优势是可以代收更多快递和大件的快递，具有更大的灵活性；妙寄较其他代收点增加了特殊情况专人派送的服务，而且对消费者个人不存在收费行为。
         </p>
       </article>

       <article class="article" num="4">
         <p class="article-content">
           新开一家门店也是可以的，但必须满足以下条件：
         </p>
         <p class="article-content">
          1、门店所处社区具有一定流量的快递，并且门店居于社区便捷的位置；
         </p>
         <p class="article-content">
          2、门店的租金和员工成本与可承接快递量匹配；
         </p>
         <p class="article-content">
          3、申请人具有店面启动资金和能力，包括装修费用和使用工具；
         </p>
         <p class="article-content">
          4、接受公司总部的统一管理、培训和监督；
         </p>
         <p class="article-content">
          5、缴纳加盟费和押金。
         </p>
       </article>

       <article class="article" num="5">
         <p class="article-content">
         广告服务是指与其他品牌合作，在妙寄门店的门厅商品展示柜引入适合该社区人群的产品介绍及体验服务；生活服务是指借助妙寄的位置和人流量优势，为社区提供有较大需求的生活便利产品的租赁或者代售。
         </p>
       </article>

       <article class="article" num="6">
         <p class="article-content">
           现代人的生活模式有所改变，买新鲜蔬果、生鲜肉类或冷冻速食多以线上购买的方式直接送至家里。但也经常会出现突然外出或者意外情况不能及时接收，妙寄的冷链末端体系服务的对象就是社区中的这部分人群，代收并暂存商品，减少顾客线上购买冷链商品的后顾之忧。
         </p>
       </article>

       <article class="article" num="7">
         <p class="article-content">
         快递是妙寄开始的起点，给门店带来的是人流量，对其他业务而言起的是基础作用。门店起步阶段的主要收入一定是快递带来的，但后期的广告业务和冷链等业务的引入会给门店收益带来更大的改变。
         </p>
       </article>

       <article class="article" num="8">
         <p class="article-content">
         每月利润是与派件数量和计件数量直接相关的。派件和寄件的利润加上商业利润即为运营收入；运营成本由每月房租、人力成本、水电费、短信费构成；前期投资的装修费、加盟费和设备费平摊至每个月。第一年的每月利润=运营收入-运营成本-前期投资/12；第二年开始的每月利润=运营收入-运营成本。
         </p>
       </article>

       <article class="article" num="9">
         <p class="article-content">
         妙寄提供的都是一流的设备，在工作中起着很好的辅助作用。并非全部设备需要在开业前购买，只需要购买公司规定的设备即可。但妙寄建议合伙人一次性购买全套设备可以更快上手，帮助开业更加顺利哦~同时妙寄提供优惠套餐供您选择，后期也可以购买哦~
         </p>
       </article>
       <article class="article" num="10">
         <p class="article-content">
         除了加盟费和向公司购买设备的费用，以及押金之外，公司后续不收取其他费用。
         </p>
       </article>
       <article class="article" num="11">
         <p class="article-content">
         收到顾客的投诉信息，公司会第一时间与门店进行沟通处理，例如遇到催单的情况，公司会联系门店加紧处理该订单；遇到快递破损的情况，及时拍照留证并跟快递公司和顾客联系。具体的处理方法公司会进行统一培训。
         </p>
       </article>
       <article class="article" num="12">
         <p class="article-content">
         装修是自己进行装修，公司提供装修意见并指导监督。门店在装修过程中要按照公司指定的标准进行，有任何问题及时与公司沟通。
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
