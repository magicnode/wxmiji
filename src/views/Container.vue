<template>
  <mh-container>
    <div class="mj-container" slot="container">
      <div class="index">
         <div class="index-img">
           <img src="../assets/images/miaoji.png" alt="">
           <span></span>
         </div>
         <p class="index-logo">MIJI</p>
         <p class="index-intro">锦囊妙寄</p>
         <group class="index-cell">
           <cell title="门店指南" value="" is-link link="/store"></cell>
           <cell title="APP操作" value="" is-link link="/app/index"></cell>
           <cell title="在线客服" value="" is-link link="/service"></cell>
         </group>
      </div>
    </div>
  </mh-container>
</template>
<script>

export default {
  name: 'index',
  created () {
    this.$store.commit('SET_TITLE', {title: '锦囊妙寄'})
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import '../assets/styles/colors.less';
  @import '../assets/styles/helpers.less';
 .mj {
    &-container {
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
    }
 }
</style>
