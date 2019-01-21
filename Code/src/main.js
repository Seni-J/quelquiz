import Vue from 'vue'
import Index from './index.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
new Vue({
  render: h => h(Index),
}).$mount('#app')

new Vue({
  el: '#example-1',
  data: {
    items: [{
        message: 'Foo'
      },
      {
        message: 'Bar'
      }
    ]
  }
})