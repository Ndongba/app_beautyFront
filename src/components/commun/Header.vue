<template>
    <header class="topbar">
      <img src="/home/ndongba/app_beautyFront/src/assets/images/Black Yellow Illustration Beauty and Spa  Logo 1.svg">
      <nav class="menu">
        
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Prestations</a></li>
          <li><a href="#">Boutique</a></li>
          <li><a href="#">Contact</a></li>
         
        </ul>
        <div>
          <a href="/Home/Inscription">
        <button>Connexion</button>
      </a>
      </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderComponent",
  };
  </script>
  
  <style scoped>
  header {
    background-color: #333;
    color: #fff;
    padding: 15px;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  
  nav ul li {
    display: inline;
    margin-right: 10px;
  }
  
  nav ul li a {
    color: #fff;
    text-decoration: none;
  }

  .topbar{
    display: flex;
    justify-content: space-around;
    font-size: 20px;
    color: #fff;
  }

  .menu{
    display: flex;
    gap: 50px;
    margin-right: 50px;
    margin-top: 20px;
    
  }
  </style>
  