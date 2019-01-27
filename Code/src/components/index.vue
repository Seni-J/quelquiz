<template>
    <div>
        <div class="container">
            <Header/>
            <!-- Welcome header -->
            <div class="row" style="margin-top:40px">
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
                            <img class="card-img-top" src="http://placehold.it/700x400" alt="">
                            <div class="card-body">
                                <h4 class="card-title">
                                    <router-link :to="'/quiz/' + quiz.id">{{quiz.title}}</router-link>
                                </h4>
                                <small>Crée par: {{quiz.created_by}}</small>
                                <p><br/>{{quiz.description}}</p>
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
.portfolio-item {
    margin-bottom: 30px;
}

.pagination {
    margin-bottom: 30px;
}
</style>
