<template>
  <mh-container>
    <div class="mj-container" slot="container">
      <div class="index">
         <p class="index-title">常见问题</p>
         <group class="index-cell">
           <cell v-for="(item, index) in intro" :title="item.title" :link="'/service/chapter' + '?num=' + index + '&title=' + item.title"  :key="item.title" is-link></cell>
         </group>
         <p class="index-service">还未解惑? 长按识别下方<strong>二维码</strong>与客服进行沟通</p>
         <div class="qr-code">
           <img src="../assets/images/service_qrcode.png" alt="">
         </div>
      </div>
    </div>
  </mh-container>
</template>
<script>

export default {
  name: 'index',
  created () {
    this.$store.commit('SET_TITLE', {title: '在线客服'})
  },
  data () {
    return {
      intro: [{
        title: '我已经报名加盟妙寄了，什么时候能知道结果呢？'
      }, {
        title: '妙寄的社区选址有规定在哪些省份或区域吗？'
      }, {
        title: '一家妙寄所管辖的社区大小有怎样的要求呢？'
      }, {
        title: '一家社区中既有智能柜，又有代收点，还可以开妙寄门店吗？'
      }, {
        title: '原来没有门店，可以申请加盟妙寄吗？'
      }, {
        title: '广告及生活服务是指什么？'
      }, {
        title: '冷链末端体系是什么呢？'
      }, {
        title: '妙寄的主要收益来源是快递吗？'
      }, {
        title: '我要加盟妙寄的话，每个月的利润是怎样的情况呢?'
      }, {
        title: '妙寄的所有设备需要全部一次性购买吗?'
      }, {
        title: '加盟妙寄除了加盟费每月还要缴纳其他费用吗？'
      }, {
        title: '门店遇到投诉的情况该怎么处理呢？'
      }, {
        title: '装修是公司统一装修还是自己装修呢？'
      }]
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../assets/styles/colors.less';
@import '../assets/styles/helpers.less';

.index {
  &-img {
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 26%;
      border-radius: 15%;
    }
    span {
      width: 23%;
      height: 6px;
      color: transparent;
      box-shadow: 0px 12px 7px #333;
      margin-top: -10px;
    }
  }

  &-title {
    padding: 1rem 1rem;
    padding-bottom: 0;
    text-align: left;
    font-size: 1.6rem;
  }

  &-service {
    padding: 1rem;
    font-size: 1.4rem;
    strong {
      color: @dark-yellow;
    }
  }

  &-cell {
    .weui-cell {
      color: #999;
      text-align: left;
      font-size: 1.4rem;
    }
  }

  .qr-code {
    text-align: text-center;
    padding-bottom: 2rem;
    img {
      width: 16rem;
    }
  }
}

</style>
