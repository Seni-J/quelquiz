import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import quiz from '@/components/quizzes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/:id',
      component: quiz
    }
  ]
})
