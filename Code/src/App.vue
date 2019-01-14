<template>
  <div id="app">
    <div id="header">
      <div class="col-12 col-lg-10">
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
          <div class="container">
          <a class="navbar-brand" href="#"><img style="width: 150px;" src="./assets/logo.png"></a>
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
      </div>
    </div>
    <div id="main">
      <h1>QuelQuiz!</h1>
      <b-alert show>Une alerte</b-alert>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header{
  display: block;
  float: inherit;
}

#main{
  display: block;
  margin: 0 auto;
  clear: both;
}
</style>