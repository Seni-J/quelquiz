/*eslint-disable */
<template>
  <div class="hello">
    <h1>QuelQuiz!</h1>
    <div  v-for="(quiz, index) of data.quizzes"  style="display:flex" :key="quiz.id">
      <div v-if="quiz.id == $route.params.id">
        {{quiz.title}}
        {{setQuizIndex(index)}}
      </div>   
    </div>
    

    <header>
      <div class="col-lg-12 center" id="header">
        {{this.data.quizzes[this.quizindex].questions[0].question}}
      </div>
    </header>

    <!-- Page Content -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="card">
              <a href="#">
                <div class="reponse">
                  {{this.data.quizzes[this.quizindex].questions[0].answers[0].name}}
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <a href="#">
                <div class="reponse">
                  {{this.data.quizzes[this.quizindex].questions[0].answers[1].name}}
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="row" style="padding-top: 50px;">
          <div class="col-lg-6">
            <div class="card">
              <a href="#">
                <div class="reponse">
                  reponse 3
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <a href="#">
                <div class="reponse">
                  reponse 4
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import json from '../api/quizlist.json'

export default {
  name: 'quiz',
  data () {
    return {
      data: json,
      question: null,
      quizindex: 0,
      questionindex: 0,
      points: 0
    }
  },
  methods:{
    setQuizIndex: function(index){
    this.quizindex = index
    },
    nextquestion: function(){
      this.questionindex = this.json.quizzes[quizindex].questions[questionindex]
    }
  },
  mounted(){
    this.question = "Slt"
  }
}
</script>
