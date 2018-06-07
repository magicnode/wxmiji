<template>
   <div class="intro">
      <group class="intro-cell">
        <cell v-for="(item, index) in intro" :title="item.title" :link="'intro/chapter' + '?num=' + index + '&title=' + item.title"  :key="item.title" is-link></cell>
      </group>
   </div>
</template>
<script>
export default {
  name: 'intro',
  created () {
    this.$store.commit('SET_TITLE', {title: '操作说明'})
  },
  computed: {
  },
  data () {
    return {
      intro: [{
        title: '下载、安装、升级'
      }, {
        title: '门店基本设置'
      }, {
        title: '门店操作设置、管理'
      }, {
        title: '钱包功能'
      }, {
        title: '分配子账号'
      }, {
        title: '分配业务员号'
      }, {
        title: '对接快递公司'
      }, {
        title: '寄件品牌设置'
      }, {
        title: '点货操作'
      }, {
        title: '入库操作'
      }, {
        title: '问题件操作'
      }, {
        title: '签收操作'
      }, {
        title: '揽收操作'
      }, {
        title: '遗留件操作'
      }, {
        title: '查询功能'
      }, {
        title: '录音电话'
      }, {
        title: '收款到账提醒'
      }, {
        title: '妙寄微信用户端'
      }]
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  @import '../assets/styles/colors.less';
  .intro {
    &-cell {
      .weui-cell {
        color: #999;
        text-align: left;
        font-size: 1.4rem;
      }
    }
  }
</style>
