<template>
  <mh-container>
    <div class="mj-container" slot="container">
      <div class="index">
         <div class="index-img">
           <img src="../assets/images/miaoji.png" alt="">
           <span></span>
         </div>
         <p class="index-logo">MIJI</p>
         <p class="index-intro">门店指南</p>
         <group class="index-cell">
           <cell v-for="(item, index) in intro" :title="item.title" :link="'/store/chapter' + '?num=' + index + '&title=' + item.title"  :key="item.title" is-link></cell>
         </group>
      </div>      
    </div>
  </mh-container>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'index',
  created () {
    this.$store.commit('SET_TITLE', {title: '门店指南'})
  },
  data () {
    return {
      intro: [{
        title: '交接'
      }, {
        title: '上架'
      }, {
        title: '派件'
      }, {
        title: '签收'
      }, {
        title: '盘库'
      }, {
        title: '问题件处理'
      }, {
        title: '电话联系'
      }, {
        title: '特殊要求'
      }, {
        title: '寄件细节'
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
 .mj {
    .header {
      &-left {
        height: 2rem;
        background: url('../assets/images/back.png') no-repeat;
        background-size: 1.6rem 1.6rem;
        background-position: 1rem .2rem;
      }
    }

    &-container {
      min-height: 93vh;
      background-color: @bg-grey;
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
    }
 }
</style>
