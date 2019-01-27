/*eslint-disable */
<template>
  <div class="container-fluid">
    <Header/>
    <div class="row">
      <div v-for="(quiz, index) of data.quizzes"  style="display:flex" :key="quiz.id">
        <div v-if="quiz.id == $route.params.id" style="text-align:center">
          {{quiz.title}}
          {{setQuizIndex(index)}}
        </div>   
      </div>
    </div>
    
    <!-- Result -->
    <transition name="fade">
    <div class="result" v-show="end">
      Voici votre Résulat:
      <div v-if="this.points > 1">
      {{this.points}} Questions correctes sur {{this.data.quizzes[this.quizindex].questions.length}}
      </div>
      <div v-else>
        {{this.points}} Question correcte sur {{this.data.quizzes[this.quizindex].questions.length}}
      </div>
      <br><router-link :to="'/'"><b-button>Retour à l'accueil</b-button></router-link>
    </div>
    </transition>

    <!-- Question -->
    <div class="questions" v-show="!end">
      
      <div class="row col-lg-12 center" id="header">
        <transition mode="out-in" appear enter-active-class="animated fadeInLeftBig" leave-active-class="animated fadeOutRight">
        <div :key="this.data.quizzes[this.quizindex].questions[this.questionindex].question">
        {{this.data.quizzes[this.quizindex].questions[this.questionindex].question}}
        </div>
        </transition>
      </div>

      <!-- Answers -->
      <section class="py-5">
        <div class="flex-container">
        <div class="col-lg-4" button v-for="(item, index) in this.data.quizzes[this.quizindex].questions[this.questionindex].answers" :key="item.id" @click="nextquestion(index)">
            <div v-if="index == 0">
              <div class="card">
                  <div class="reponse">
                    {{item.name}}
                  </div>
              </div>
            </div>
            <div v-else-if="index == 1 || index == 3">
              <div class="card">
                  <div class="reponse">
                    {{item.name}}
                  </div>
              </div>
            </div>
            <div  v-if="index == 2">
              <div class="card">
                  <div class="reponse">
                    {{item.name}}
                  </div>
              </div>
            </div>
        </div>
        </div>
      </section>

      <!-- Answers v2 (list)
      <section class="py-5">
        <div class="container">
        <b-list-group>
          <b-list-group-item button v-for="(item, index) in this.data.quizzes[this.quizindex].questions[this.questionindex].answers" :key="item.id" @click="nextquestion(index)">
            {{item.name}}
          </b-list-group-item> 
        </b-list-group>
        </div>
      </section>
      -->
    </div>
  </div>

</template>

<script>
import json from '../api/quizlist.json'
import Header from './header.vue'

export default {
  name: 'quiz',
  components: {
    Header
  },
  data () {
    return {
      data: json,
      question: null,
      quizindex: 0,
      questionindex: 0,
      points: 0,
      end: false
    }
  },
  methods:{
    //Set the index to define where the quiz is in json
    setQuizIndex: function(index){
    this.quizindex = index;
    },
    //Method to go on the next question
    nextquestion: function(index){
      //Scoring
      if(this.data.quizzes[this.quizindex].questions[this.questionindex].answers[index].value == 'true'){
        this.points++
      }
      //Check if it's the last question or not
      if(this.questionindex == this.data.quizzes[this.quizindex].questions.length - 1) {
        this.end = true;
      } else {
        this.questionindex++
      }
    }
  }
}
</script>
<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.2";

#header{
  display: flex; 
  align-items: center;
  justify-content: center;
  padding: 100px;
  background-color: darkgrey;
  width: 57.7%;
  margin: auto;
  margin-top: 100px;
}
.reponse {
  display: flex; 
  align-items: center; 
  justify-content: center; 
  padding-top: 50px; 
  padding-bottom: 50px;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;     /* make main axis horizontal (default setting) */
  justify-content: center; /* center items horizontally, in this case */
  align-items: center; 
}
.flex-container > div {
  flex: 0 50%;
  margin: 10px;
  padding: 20px;
  font-size: 30px;
}
.fade-enter-active, .fade-leave-active {
        transition: opacity 1s
}
.fade-enter, .fade-leave-to  {
  opacity: 0
}

</style>