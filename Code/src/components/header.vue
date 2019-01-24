/*eslint-disable */
<template>
<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-black fixed-top">
    <div class="container">
        <a class="navbar-brand" href="/"><img style="width: 100px;" src="./assets/logo.png"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a class="nav-link" href="/login">Connexion</a></li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    props: {
        header: {
            type: Object,
        }
    }
}
</script>

<style>

</style>
