<template>
    <div>
        <div class="container">
            <Header/>
            <!-- Welcome header -->
            <div class="row" style="margin-top:75px">
                <div class="col text-center">
                    <h1 style="fontSize:70px">Bienvenue sur QuelQuiz!</h1>
                </div>
            </div>

            <!-- List of quizzes -->
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="my-4">Tous les quizz</h2>
                </div>
                <div v-for="quiz of datas.quizzes" :key="quiz.id" class="col-lg-3 col-md-4 col-sm-6 portfolio-item">
                    <div>
                        <div class="card h-100">
                            <img class="card-img-top" :src="quiz.image" alt="">
                            <div class="card-body">
                                <h4 class="card-title">
                                    {{quiz.title}}
                                </h4>
                                <small>Crée par: {{quiz.created_by}}</small>
                                <p style="padding-top: 20px;">{{quiz.description}}</p>
                                <router-link :to="'/quiz/' + quiz.id"><button type="button" class="btn btn-primary">Aller au quiz</button></router-link>
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
import Header from './header.vue'

export default {
    name: 'index',
    components: {
        Header
    },
    data() {
        return {
            datas: json
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Dosis:600');

.card {
  font-family: 'Dosis', sans-serif;
  background-color: #ffba42;
}
.portfolio-item {
    margin-bottom: 30px;
}
.card-img-top{
    width: 100%;
    height: auto; 
    padding-left: 1px;
    padding-right: 1px;
    padding-top: 1px; 
}

.pagination {
    margin-bottom: 30px;
}
.col{
    font-family: 'Dosis', sans-serif;
    color:#ffba42;
}
.my-4{
    font-family: 'Dosis', sans-serif;
    color:#ffba42;
}
.btn-primary {
    color: #fff;
    background-color: #382c7e;
    border-color: #382c7e; 
}
.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open>.dropdown-toggle.btn-primary {
    color: #fff;
    background-color: #4431b3;
    border-color: #382c7e; 
}
</style>
