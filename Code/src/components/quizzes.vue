/*eslint-disable */
<template>
  <div class="hello">
    <h1>QuelQuiz!</h1>
    <div style="display:flex">
        {{this.$route.params.id }}
    </div>

    <header>
      <div class="col-lg-12 center" id="header">
        test
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
                  reponse 1
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <a href="#">
                <div class="reponse">
                  reponse 2
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
import json from '../api/questions.json'

export default {
  name: 'quiz',
  data () {
    return {
      data: json,
      question: null,
      index: 0
    }
  }
}
</script>
