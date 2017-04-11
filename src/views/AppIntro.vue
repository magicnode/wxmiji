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
        title: '注册登录'
      }, {
        title: '站点管理 ("我")'
      }, {
        title: '集合设置'
      }, {
        title: '扫描操作'
      }, {
        title: '派件清单'
      }, {
        title: '补充操作'
      }, {
        title: '通讯清单'
      }, {
        title: '云通知'
      }, {
        title: '云电话'
      }, {
        title: '盘库清单'
      }, {
        title: '寄件付款'
      }, {
        title: '搜索查询'
      }, {
        title: '统计报表'
      }, {
        title: '社区 — 服务中心、锦囊、福利社、聚宝盆'
      }, {
        title: '钱包'
      }, {
        title: '首次登陆操作流程'
      }, {
        title: '日常操作流程'
      }, {
        title: '外接扫描头'
      }, {
        title: '一号多账户登录'
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
