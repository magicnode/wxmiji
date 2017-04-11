<template>
   <div class="foreword">
     <article class="article">
       <p class="article-content">
         感谢使用妙寄•智慧社区站点版APP 端。
       </p>
       <p class="article-content">
         妙寄•智慧社区APP端作为站点的业务操作工具，终端站点开通妙寄工作台权限后，即可使用该工具进行妙寄•智慧社区相关快递站点业务操作，对包裹进行管理、操作以提高站点日常工作效率和减少错误率；通过“聚宝盆”体系可以得到更多的服务和收入来源。
       </p>
       <p class="article-content">
         在使用过程中，如遇到问题时，请阅读本手册，以便掌握正确的使用方法。
       </p>
     </article>
   </div>
</template>
<script>
export default {
  name: 'intro',
  created () {
    this.$store.commit('SET_TITLE', {title: '前言'})
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
