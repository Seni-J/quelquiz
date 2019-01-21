<template>
<router-link :to="'/' + quizzes.id">
    <div class="col-lg-4 col-sm-6 text-center mb-4">
    <img class="rounded-circle img-fluid d-block mx-auto" src="http://placehold.it/200x200" alt="">
    <h3>{{quizzes.title}}
    <small>{{quizzes.created_by}}</small>
    </h3>
    <p>{{quizzes.description}}</p>
</div>
</router-link>
</template>

<script>
export default {
    props:{
        quizzes:{
            type: Object,
        }
    }
}
</script>
<style lang="css"scoped>
</style>
