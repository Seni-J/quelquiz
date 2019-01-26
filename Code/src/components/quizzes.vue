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

    <div class="result" v-show="end">
      Bonjour
      </div>
      <div class="questions" v-show="!end">
    <div class="row col-lg-12 center" id="header">
      {{this.data.quizzes[this.quizindex].questions[this.questionindex].question}}
    </div>
    <!-- Page Content -->
    <section class="py-5">
      <div class="container">
        <b-list-group>
        <b-list-group-item button v-for="(item, index) in this.data.quizzes[this.quizindex].questions[this.questionindex].answers" :key="item.id" @click="nextquestion(index)">
            {{item.name}}
      </b-list-group-item>
      </b-list-group>
       </div>
    </section>
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
    setQuizIndex: function(index){
    this.quizindex = index;
    },
    nextquestion: function(index){
      if(this.data.quizzes[this.quizindex].questions[this.questionindex].answers[index].value == 'true'){
        this.points++
        alert(this.points)
      }

      if(this.index == this.data.quizzes[this.quizindex].questions - 1) {
        this.end = true;
      } else {
        this.questionindex++
      }
      
    }
  }
}
</script>
<style>


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

</style>