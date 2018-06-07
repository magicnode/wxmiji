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
           <div v-for="(item, index) in intro" :key="index">
             <cell
               :title="item.title" 
               is-link
               :link="'/store/chapter' + '?num=' + index + '&title=' + item.title"></cell>
           </div>
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
        title: '派件'
      }, {
        title: '寄件'
      }, {
        title: '投诉和问题件处理'
      }, {
        title: '门店安全及注意事项'
      }],
      intro2: [{
        title: '派件',
        content: [{
          title: '到店',
          num: 0
        }, {
          title: '到件',
          num: 1
        }, {
          title: '分拣',
          num: 2
        }, {
          title: '上架',
          num: 3
        }, {
          title: '分派',
          num: 4
        }, {
          title: '代收、到付处理',
          num: 5
        }, {
          title: '签收',
          num: 6
        }, {
          title: '规范服务话术',
          num: 7
        }]
      }, {
        title: '寄件',
        num: 8
      }, {
        title: '投诉和问题件处理',
        content: [{
          title: '圆通',
          num: 9
        }, {
          title: '中通',
          num: 10
        }, {
          title: '百世',
          num: 11
        }, {
          title: '韵达',
          num: 12
        }, {
          title: '顺丰、京东',
          num: 13
        }, {
          title: '注意事项',
          num: 14
        }]
      }, {
        title: '门店安全及注意事项',
        num: 15
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
          .cell-iitem {
            padding-right: 1.5rem;
          }
        }
      }
    }
 }
</style>
