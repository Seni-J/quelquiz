import Vue from 'vue'
import Index from './index.vue'
import Router from 'vue-router'
import router from './router'

Vue.use(Router)

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }]
})

new Vue({
  el: '#app',
  router,
})

