<template>
    <div class="dashboard-layout">
      <!-- Sidebar -->
      <aside class="sidebar">
        
          <DashboardProfessionnel/>
        
      </aside>
  
      <!-- Contenu principal -->
      
      <main class="main-content">
        
        
  <div>
 
    <div class="recherche">
        <div>
            <input type="search" name="search" id="search" placeholder="Rechercher">
        </div>
        <div>
            <input type="text" id="filter" name="filter" placeholder="Filtrer">
        </div>
        <div>
            <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/filter 1.svg">
        </div>
    </div>
    </div>  

<div class="cateprest">
    <div class="categorie">
        <div class="categorie1">
        <div>
            <p>Hair & Style</p>
        </div>
        <div>
            <p>2</p>
        </div>
        </div>
        <div class="categorie1">
        <div>
            <p>Coiffure</p>
        </div>
        <div>
            <p>3</p>
        </div>
        </div>
        <div class="categorie1">
        <div>
            <p>Couleur</p>
        </div>
        <div>
            <p>1</p>
        </div>
        </div>
        <div class="ajoutcategorie">
        <div>
            <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/simple-line-icons_plus.svg" alt="">
        </div>
        <div>
            <p>Ajouter une categorie</p>
        </div>
        </div>
        
    </div>
    <div class="block2"> 
    <div class="prelist">

        <h2>Hair & Style</h2>
        <div class="prestation">
        <div>
            <p>Coupe</p>
        </div>
        <div>
            <p>5 000F</p>
        </div>
        </div>
        <div class="prestation">
        <div>
            <p>Coupe</p>
        </div>
        <div>
            <p>5 000F</p>
        </div>
        </div>
       
        </div>
        <div class="prelist">
        <h2>Coiffure</h2>
        <div class="prestation">
        <div>
            <p>Coupe</p>
        </div>
        <div>
            <p>5 000F</p>
        </div>
        </div>
        <div class="prestation">
        <div>
            <p>Coupe</p>
        </div>
        <div>
            <p>5 000F</p>
        </div>
        </div>
        <div class="prestation">
        <div>
            <p>Coupe</p>
        </div>
        <div>
            <p>5 000F</p>
        </div>
        </div>
        </div>
       
        </div>
    </div>

      </main>
    </div>
  </template>
  
  <script>
  import DashboardProfessionnel from "../../components/professionnel/DashboardProfessionnel.vue";
  
  export default {
    name: "AccueilPro",
    components: {
      DashboardProfessionnel
    },
  };
  </script>
  
  <style scoped>
  /* Disposition de la page */
  .dashboard-layout {
    display: flex; /* Utilisation de flexbox pour créer un layout à deux colonnes */
   /* height: 100vh; /* Prend la hauteur de la fenêtre */
  }
  
  /* Styles de la sidebar */
  .sidebar {
    width: 350px;
    background-color:#B4838D; /* Couleur de fond sombre */
    color: #fff; /* Couleur de texte */
    padding: 20px;
   /* box-shadow: 2px 0 5px rgba(0,0,0,0.1); /* Ajout d'une ombre à droite de la sidebar */
  }
  
  
  
  /* Contenu principal */
  .main-content {
    flex: 1; /* Prend tout l'espace restant */
    padding: 20px;
    background-color: #f5f5f5; /* Couleur de fond pour différencier le contenu */
    font-size: 32px;
  }
  
  .table{
    width: 100%;
  }
  
  .recherche{
    display: flex;
    gap: 30px;
    
  }

  #search{
    width: 750px;
    height: 75px;
    border-radius: 20px;
    font-size: 32px;

  }
  
  #filter{
    width: 150px;
    height: 70px;
    border-radius: 20px;
    font-size: 32px;
  }

  .categorie{
    border: solid black 2px;
    width: 550px;
    margin-top: 50px;
    border-radius: 20px;
    height: 550px;
  }
  .categorie1{
    display: flex;
    gap: 150px;
    padding: 20px;
    
  }

  .ajoutcategorie{
display:flex;
padding: 20px;
}

.prestation{
    display: flex;
    gap: 500px;
    border: solid black 2px;
    width: 750px;
    padding: 30px;
    border-radius: 10px;
    margin-top: 20px;
    
}

.cateprest{
    display: flex;
    gap: 100px;
}
  </style>
  