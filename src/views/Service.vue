<template>
  <mh-container>
    <div class="mj-container" slot="container">
      <div class="index">
         <p class="index-title">常见问题</p>
         <group class="index-cell">
           <cell v-for="(item, index) in intro" :title="item.title" :link="'/service/chapter' + '?num=' + index + '&title=' + item.title"  :key="item.title" is-link></cell>
         </group>
         <!-- <p class="index-service">还未解惑? 点击<strong>在线客服</strong>与客服进行沟通</p> -->
      </div>      
    </div>
  </mh-container>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'index',
  created () {
    this.$store.commit('SET_TITLE', {title: '在线客服'})
  },
  data () {
    return {
      intro: [{
        title: '包裹嫌多，没有足够的地方'
      }, {
        title: '嫌包裹量少不赚钱'
      }, {
        title: '加盟费高'
      }, {
        title: '系统操作繁琐，不想使用系统可以'
      }, {
        title: '要求送件，没有时间送'
      }, {
        title: '系统不会使用，滞留件操作麻烦'
      }, {
        title: '罚款责任要承担，规章制度太多 '
      }, {
        title: '没有接触过，不感兴趣'
      }, {
        title: '我们没有优势还要输入手机号，还要收费'
      }, {
        title: '如果我只做增值业务和寄件可以不'
      }]
    }
  },
  methods: {
  },
  computed: {
    ...mapState(['title'])
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
}

</style>
