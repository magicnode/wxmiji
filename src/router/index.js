import Vue from 'vue'
import Router from 'vue-router'

import Container from '@/views/Container'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Container',
    component: Container
  }, {
    path: '/store',
    name: 'Store',
    component: require('@/views/Store')
  }, {
    path: '/store/chapter',
    name: 'StoreChapter',
    component: require('@/views/StoreChapter')
  }, {
    path: '/app',
    name: 'AppContainer',
    component: require('@/views/AppContainer'),
    children: [{
      path: 'index',
      name: 'AppIndex',
      component: require('../views/AppIndex')
    }, {
      path: 'foreword',
      name: 'Foreword',
      component: require('../views/AppForeword')
    }, {
      path: 'overview',
      name: 'Overview',
      component: require('../views/AppOverview')
    }, {
      path: 'intro',
      name: 'Intro',
      component: require('../views/AppIntro')
    }, {
      path: 'intro/chapter',
      name: 'IntroChapter',
      component: require('../views/AppIntroChapter')
    }]
  }, {
    path: '/service',
    name: 'Service',
    component: require('@/views/Service')
  }, {
    path: '/service/chapter',
    name: 'ServiceChapter',
    component: require('@/views/ServiceChapter')
  }, {
    path: '/joinprocess',
    name: 'JoinProcess',
    component: require('@/views/JoinProcess')
  }, {
    path: '/joinprocess/chapter',
    name: 'JoinProcessChapter',
    component: require('@/views/JoinProcessChapter')
  }, {
    path: '/pic',
    name: 'Pic',
    component: require('@/views/Pic')
  }]
})
