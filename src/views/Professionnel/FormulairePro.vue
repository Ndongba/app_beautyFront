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
    <div class="form">
        <h2>Ajouter une Prestation</h2>
       <div class="block1">
        <div class="class">
            <div>
            <label for="">Nom de la prestation</label>
            </div>
            <input type="text" id="input" name="" placeholder="Saisir le nom de la prestation">
        </div>
        <div class="class">
            <div>
                <label for="">Type de Prestation</label>
            </div>
           <select name="" id="input">
            <option value="">Type de Prestation</option>
           </select>
        </div>
        </div>
        <div class="blockdesc">
            <div>
            <label for="">Description</label>
            </div>
            <textarea name="" id="description" cols="30" rows="15"></textarea>
        </div>
        <div class="block2">
            <div>
                <div>
                    <label for="">Categorie de la prestation</label>
                </div>
                <select name="" id="input">
                    <option value="">Categorie</option>
                </select>
            </div>
            <div>
                <div>
                <label for="">Durée</label>
                </div>
                <input type="time" name="" id="input">
            </div>
        </div>
        <div class="block3">
            <div>
                <div>
                    <label for="">Type de Prix</label>
                </div>
                <select name="" id="input">
                    <option value="">Type de prix</option>
                </select>
            </div>
            <div>
                <div>
                <label for="">Prix</label>
                </div>
                <input type="number" name="" id="input">
            </div>
        </div>
        <div class="bouton">
            <div>
                
                <button id="bouton">Annuler</button>
            </div>
            <div>
                <button id="bouton">Enregistrer</button>
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
  
  #search{
    width: 750px;
    height: 60px;
    border-radius: 20px;
    font-size: 32px;

  }
  
  #filter{
    width: 150px;
    height: 55px;
    border-radius: 20px;
    font-size: 32px;
  }
 
  .recherche{
    display: flex;
    gap: 30px;
    
  }

  #input{
    width: 500px;
    height: 50px;
    border-radius: 10px;
    font-size: 30px;
  }

  #bouton{
    width: 200px;
    height: 50px;
    font-size: 30px;
    border-radius: 10px;
  }

  .blockdesc{
margin-top: 40px;
  }

  .form{
   width: 1300px;
   margin: 0 auto;
  }

  #description{
    width: 1050px;
    height: 300px;
    font-size: 30px;
    border-radius: 10px;
   
  }

  .block1{
    display: flex;
    gap: 50px;
    margin-top: 10px;
  }

  .block2{
    display: flex;
    gap: 50px;
    margin-top: 40px;
  }

  .block3{
    display: flex;
    gap:50px;
    margin-top: 40px;
  }

  .bouton{
    display: flex;
    gap: 20px;
    margin-top: 40px;
    
  }
  </style>
  