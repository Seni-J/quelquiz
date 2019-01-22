import Vue from 'vue'
import Index from './index.vue'
import quizz from './components/quizzes.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

const routes = [{
    path: '/',
    component: Index
  },
  {
    path: '/:id',
    component: quizz
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(Index),
}).$mount('#app')

