<template>
     <div class="index">
        <div class="index-img">
          <img src="../assets/images/miaoji.png" alt="">
          <span></span>
        </div>
        <p class="index-logo">MIJI</p>
        <p class="index-intro">APP使用说明手册</p>
        <group class="index-cell">
          <cell title="前言" value="" is-link link="/app/foreword"></cell>
          <cell title="概述" value="" is-link link="/app/overview"></cell>
          <cell title="妙寄-miji 智慧社区APP具体操作说明" value="" is-link link="/app/intro"></cell>
        </group>
     </div>
</template>
<script>
import { Group, Cell } from 'vux'

export default {
  name: 'index',
  created () {
    this.$store.commit('SET_TITLE', {title: '使用指南'})
  },
  components: {
    Group,
    Cell
  },
  computed: {
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  @import '../assets/styles/colors.less';
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

    &-logo {
      min-height: 1rem;
      color: @dark-yellow;
      padding-top: 2rem;
      font-size: 3.6rem;
      font-weight: 600;
    }

    &-intro {
      font-size: 1.6rem;
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
