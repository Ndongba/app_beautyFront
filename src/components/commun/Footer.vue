<template>
    <footer>
      <div>
        <img src="/home/ndongba/app_beautyFront/src/assets/images/Black Yellow Illustration Beauty and Spa  Logo 1.svg" alt="">
        <p>Prenez soin de vous en toute simplicité. <br>Réservez, gérez vos rendez-vous,<br> et découvrez les meilleurs professionnels <br>de la beauté près de chez vous.<br> Votre bien-être est notre priorité.

</p>
      </div>
      <div>
        <h2>A Propos</h2>
        <p>Aide</p>
        <p>Bloc</p>
        <p>Plan du Site</p>
      </div>
      <div>
        <h2>Pour les Professionnels</h2>
        <p>Pour les Partenaires</p>
        <p>Tarifs</p>
        <p>Aide</p>
      </div>
      <div>
        <h2>Mentions Legales</h2>
        <p>Politique de Confidentialité</p>
        <p>Conditions d'Utilisation</p>
        <input type="email" id="input">
        <button id="buton">S'abonner</button>
      </div>

     
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComponent",
  };
  </script>
  
  <style scoped>
  footer {
    background-color: #B4838D;
    color: #fff;
    text-align: center;
    padding: 15px;
   
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  p{
    font-size: 20px;
    justify-content: space-between;
  }

  #input{
    font-size: 20px;
    border-radius: 10px;
  }

  #buton{
    font-size: 20px;
    border-radius: 10px;
  }
  </style>
  