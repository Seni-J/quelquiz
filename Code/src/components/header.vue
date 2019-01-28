/*eslint-disable */
<template>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" style="background-color: #e64b77;">
        <div class="container">
            <a class="navbar-brand" href="/"><img style="width: 100px;" :src="logo"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link " href="/">Accueil</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="/login">Connexion</a></li>
                    <li class="nav-item"><a class="nav-link" href="/register">Inscription</a></li>
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
    },
    data() {
        return {
            logo: require('@/assets/logo.png')
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Dosis:800');

.navbar{
    font-family: 'Dosis', sans-serif;
}

.nav-link{
    font-size: 28px;
}

</style>
