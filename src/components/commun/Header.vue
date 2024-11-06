<template>
   
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div>
   
    <img src="/home/ndongba/app_beautyFront/src/assets/images/Black Yellow Illustration Beauty and Spa  Logo 1.svg">
    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
  </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Acceuil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Clients</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Professionnels</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Nous Contacter</a>
        </li>
        <a href="/Home/Login">
        <button type="submit" class="btn">Connexion</button>
        </a>
      </ul>
     
    </div>
  </div>
</nav>
    
  </template>
  
  <script>
  export default {
    name: "HeaderComponent",
  };
  </script>
  
  <style scoped>
  header {
    background-color: white;
    color: #fff;
    padding: 15px;
  }

  .container-fluid{
    gap: 600px;
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
    color: black;
    text-decoration: none;
  }

  /* .topbar{
    display: flex;
    
    gap: 800px;
    font-size: 20px;
    color: #fff;
  } */
.navbar{
 gap: 100px;
}
  .menu{
    display: flex;
    gap: 50px;
    margin-right: 50px;
    margin-top: 20px;
    
  }

  .btn{
    background-color: #FFCDB3;
  }

  @media(max-width: 420px) {
  .container-fluid {
    gap: 10px;
  }
}
  </style>
  