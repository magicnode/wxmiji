<template>
   <div class="foreword">
     <article class="article">
       <p class="article-title">
         系统概述
       </p>
       <p class="article-content">
         妙寄•智慧社区终端站点版是基于快递服务终端站点的操作工具软件，目前开通android系统版；IOS版本将在2017年2月份开通请等待、（WIN暂不支持）。
       </p>
     </article>
   </div>
</template>
<script>
export default {
  name: 'intro',
  created () {
    this.$store.commit('SET_TITLE', {title: '概述'})
  },
  computed: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
</style>
