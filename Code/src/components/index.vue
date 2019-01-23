/*eslint-disable */
<template>
  <div id="quizlist">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#"><img style="width: 100px;" src="../assets/logo.png"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
              <li class="nav-item"><a class="nav-link" href="#">Connexion</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Page Content -->
    <div class="container">
      <!-- Introduction Row -->
      <h1 class="my-4" style="padding-top: 20px;">
        Bienvenue sur QuelQuiz !
      </h1>
      <p>Ce site a été créé en Vue.js !</p>
      <!-- Team Members Row -->
      <div class="row">
        <div class="col-lg-12">
          <h2 class="my-4">Tous les quizz</h2>
        </div>
        <div v-for="quiz of datas.quizzes" :key="quiz.id">
              <div class="col-lg-4 col-sm-6 text-center mb-4">
              <img class="rounded-circle img-fluid d-block mx-auto" src="http://placehold.it/200x200" alt="">
              <h3><router-link :to="'/quiz/' + quiz.id">{{quiz.title}}</router-link>
              <small>{{quiz.created_by}}</small>
              </h3>
              <p>{{quiz.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import json from '../api/quizlist.json'

export default {
  name: 'quizlist',
  data () {
    return {
      datas: json
    }
  }
}
</script>
<style>
</style>
