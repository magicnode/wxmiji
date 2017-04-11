<template>
  <mh-container>
    <div class="mj-container" slot="container">
      <router-view></router-view>
    </div>
  </mh-container>
</template>
<script>

export default {
  name: 'index',
  created () {
    this.$store.commit('SET_TITLE', {title: '使用指南'})
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
</style>
