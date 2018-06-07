<template>
  <mh-container>
    <div class="mj-container" slot="container">
      <div class="index">
         <p class="index-title">门店加盟指南</p>
         <group class="index-cell">
           <cell v-for="(item, index) in intro" :title="item.title" :link="'/joinprocess/chapter' + '?num=' + index + '&title=' + item.title"  :key="item.title" is-link></cell>
         </group>
      </div>
    </div>
  </mh-container>
</template>
<script>

export default {
  name: 'JoinProcess',
  created () {
    this.$store.commit('SET_TITLE', {title: '加盟指南'})
  },
  data () {
    return {
      intro: [{
        title: '了解妙寄'
      }, {
        title: '提交申请'
      }, {
        title: '运营评估'
      }, {
        title: '签订合同'
      }, {
        title: '参观培训'
      }, {
        title: '装修考核'
      }, {
        title: '开业指导'
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
}

</style>
