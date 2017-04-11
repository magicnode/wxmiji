<template>
   <mh-container>
     <div class="introchapter" slot="container">
       <p class="introchapter-title">Question.{{num | addOne}}{{' ' + title}}</p>
       <article class="article" num="0">
         <p class="article-content">
           我们可以不合作多家可以一家一家开展，你可以根据货量和场地大小来承接快递
         </p>
       </article>

       <article class="article" num="1">
         <p class="article-content">
         保底：每天50个包裹  
         </p>
         <p class="article-content">
           一月：快递每月收入50*0.6*30=900元+增值收入500=1400元
         </p>
         <p class="article-content">
           基本：每天100个包裹 
         </p>
         <p class="article-content">
           一月：（快递每月收入100*0.6*30=1800元+增值收入500）=2300元
         </p>
         <p class="article-content">
         注明:此利润不含揽收费用。其中0.6为快递公司给予的派费。
         </p>
       </article>

       <article class="article" num="2">
         <p class="article-content">
         参考第二个问题，我们收取加盟费是为了保证双方合作关系。而且加盟费是完成可以赚出来的。
         </p>
       </article>

       <article class="article" num="3">
         <p class="article-content">
           不使用系统无法保证与快递公司交接责任划分，使用系统可以清晰的知道你今天快递有多少取走多少。同时也需要给客户发短信。月底结算费用和其他增值服务都需要涉及到系统使用。
         </p>
       </article>

       <article class="article" num="4">
         <p class="article-content">
           我们原则是不提供送货上门的。打电话跟客户沟通好让客户到店自提，提供门店的客流量。除特殊原因需要送货上门的跟客户协商好时间，选择店内不忙的时间送货。
         </p>
       </article>

       <article class="article" num="5">
         <p class="article-content">
         我们在合作初期对你有全方面的培训，包括系统操作，快递流程以及日常遇到的一些问题同时有固定的QQ、微信客服解决你在日常操作的问题，后期我们也会不定期的进行巡店。
         </p>
       </article>

       <article class="article" num="6">
         <p class="article-content">
           使用我们的系统，按照我们的操作可以有效的避免罚款。所谓的规章制度只是让你按照要求操作，前期你觉得可能不习惯，慢慢习惯了也就觉得操作简单。
         </p>
       </article>

       <article class="article" num="7">
         <p class="article-content">
         我们可以尝试的先可以看看。
         </p>
       </article>

       <article class="article" num="8">
         <p class="article-content">
         我们的系统跟快递公司都进行了系统对接，解决了不需要使用多家系统操作的繁琐。收费是为了更好的服务于你们。我们帮你们引入快递公司省去了你们自己洽谈。同时我们都做好快递业务知道洽谈中一些漏洞和罚款。为你省去了麻烦和节省了资金和时间。派费和揽收费用也能提高。
         </p>
       </article>

       <article class="article" num="8">
         <p class="article-content">
         可以的
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
