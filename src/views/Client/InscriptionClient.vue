<template>
    <main>
<div class="page">
    
    <div class="image">
        <img src="/home/ndongba/app_beautyFront/src/assets/client/surprised-african-woman-covering-her-mouth-by-hand-while-looking-smartphone-screen.svg" alt="">
    </div>
    <div class="formulaire">
        <div class="class">
            <h1>Fresha pour les clients</h1>
                <p>Créez un compte ou connectez-vous pour réserver et gérer vos rendez-vous.</p>
        </div>
        <div>
            <div>
              <input type="text" placeholder="Email" id="input">
            </div>
            <div>
                <button id="continuer">Continuer</button>
            </div>
        </div>

        <div>
            <button id="button">Continuer avec Google</button>
        </div>
        <div>
            <button id="button">Continuer avec Apple</button>
        </div>
        <div>
            <button id="button">Continuer avec Facebook</button>
        </div>
           
        <p>Vous avez un compte professionnel ?
            Inscrivez-vous en tant que professionnel</p>
        </div>

    
</div>
</main>
</template>
<script setup>

</script>

<style scoped>

.page{
    display: flex;
    gap: 250px;
}

#input{
    width: 650px;
    height: 50px;
    font-size: 30px;
    border-radius: 10px;
}

#button{
    width: 650px;
    height: 50px;
    font-size: 30px;
    border-radius: 10px;
    margin-top: 30px;
}

#continuer{
    width: 650px;
    height: 50px;
    font-size: 30px;
    border-radius: 10px;
    margin-top: 50px;
    background-color:#FFCDB3;
}
</style>