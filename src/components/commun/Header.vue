<template>
    <header>
      <nav>
        <h1>Bienvenue sur notre site</h1>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Prestations</a></li>
          <li><a href="#">Boutique</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button>Connexion</button>
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
  </style>
  