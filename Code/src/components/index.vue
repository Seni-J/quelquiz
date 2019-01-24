
<template>
  <div>
    <header/>
    <!-- Page Content -->
    <div class="container">
      <div class="row" style="margin-top:40px">
        <div class="col text-center">
          <h1 style="fontSize:70px">Bienvenue sur QuelQuiz!</h1>
        </div>
      </div>
      
      <!-- Team Members Row -->
      <div class="row">
        <div class="col-lg-12">
          <h2 class="my-4">Tous les quizz</h2>
        </div>
        <div v-for="quiz of datas.quizzes" :key="quiz.id" class="col-lg-3 col-md-4 col-sm-6 portfolio-item">
          <div>
            <div class="card h-100">
              <img class="card-img-top" src="http://placehold.it/700x400" alt="">
              <div class="card-body">
                <h4 class="card-title">
                  <router-link :to="'/quiz/' + quiz.id">{{quiz.title}}</router-link>
                </h4>
                <small>{{quiz.created_by}}</small>
                <p>{{quiz.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>

import json from '../api/quizlist.json'
import header from './header.vue'

export default {
  name: 'index',
  components:{
    header
  },
  data () {
    return {
      datas: json
    }
  }
}
</script>
<style>
body {
  padding-top: 54px;
}

@media (min-width: 992px) {
  body {
    padding-top: 56px;
  }
}

.portfolio-item {
  margin-bottom: 30px;
}

.pagination {
  margin-bottom: 30px;
}
</style>
