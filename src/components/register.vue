<template>
  <div class="container">
    <Header/>
    
      <div class="card card-register mx-auto mt-5" style="background-color: #ffba42;">
        <div class="card-header">Créer un compte</div>
        <div class="card-body">
          <form action="/">
            <div class="form-group">
              <div class="form-row">
                <div class="col-md-6">
                  <div class="form-label-group">
                    <input type="text" id="fullname" name="fullname" class="form-control" placeholder="Nom complet" required="required" autofocus="autofocus">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-label-group">
                    <input type="text" id="username" name="username" class="form-control" placeholder="Nom d'utilisateur" required="required">
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="form-label-group">
                <input type="email" id="email" name="email" class="form-control" placeholder="Adresse email" required="required">
              </div>
            </div>
            <div class="form-group">
              <div class="form-row">
                <div class="col-md-6">
                  <div class="form-label-group">
                    <input type="password" id="password" name="password" class="form-control" placeholder="Mot de passe" required="required">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-label-group">
                    <input type="password" id="confirmPassword" class="form-control" placeholder="Répeter le mot de passe" required="required">
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block">S'inscrire</button>
          </form>
          <div class="text-center">
            <a class="d-block small mt-3" href="/login">Se connecter</a>
          </div>
        </div>
      </div>

  </div>
</template>
<script>
import Header from './header.vue'
export default {
  components: {
        Header
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Dosis:600');

.card {
    font-family: 'Dosis', sans-serif;
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
@media screen and (max-width: 768px){
  .form-label-group{
    margin-top: 10px;
  }
}
</style>
