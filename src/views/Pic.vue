<template>
  <mh-container>
    <div class="mj-container" slot="container">
      <div class="pic">
        <input type="" name="pic" placeholder="输入图片所在网址开始下载">
      </div>
    </div>
  </mh-container>
</template>
<script>

export default {
  name: 'index',
  created () {
    this.$store.commit('SET_TITLE', {title: 'Pic'})
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
</style>
