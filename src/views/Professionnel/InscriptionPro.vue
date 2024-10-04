<template>
<main>
<div class="form">
  <div class="form1">
    <h1 id="titre">Pour les professionnels</h1>
      <p id="paragraphe">Créez un compte ou connectez-vous pour gérer votre entreprise.</p>
  <div class="block1">
  <div class="class">
    <input type="email" name="email" id="email" placeholder="Saisir votre email">
  </div>
  <div class="class">
    <button id="continuer">Continuer</button>
  </div>
  </div>
  <div class="block2">
    <div>
      <button id="buton">Continuer avec Google</button>
    </div>
    <div>
      <button id="buton">Continuer avec Facebook</button>
    </div>
    <div>
      <button id="buton">Continuer avec Apple</button>
    </div>
  </div>
  </div>
  
  <div class="imagepro">
    <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/proprietaire-salon-coiffure-latino-se-preparant-pour-clients_23-2150286080.svg" id="imagepro1">
  </div>
</div>
</main>
</template>
<script>
      export default {
    name: "AccueilPro",
    components: {
      
    },
  };
</script>
<style scoped>
.form{
  display: flex;
  width: 100%;
  
}

.form1{
  width: 50%;
}

.imagepro{
  width: 50%;
  height: 100%;
}

.block1{
  text-align: center;
  margin-top: 100px;
}

#paragraphe{
  font-size: 30px;
  text-align: center;
}

.block2{
  margin-top: 150px;
  text-align: center;
}

#titre{
  font-size: 60px;
  text-align: center;
}



#buton{
  width: 500px;
    height: 50px;
    font-size: 30px;
    border-radius: 10px;
    margin-top: 30px;
   
}

#continuer{
  width: 500px;
    height: 50px;
    font-size: 30px;
    border-radius: 10px;
    margin-top: 20px;
}

#email{
  width: 500px;
    height: 50px;
    font-size: 30px;
    border-radius: 10px;
    margin-top: 20px;
}
</style>