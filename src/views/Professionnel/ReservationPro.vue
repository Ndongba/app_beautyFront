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
            <img src="@/assets/professionnel/filter 1.svg">
        </div>
    </div>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Client</th>
                    <th>Date Creation</th>
                    <th>Date Prévue</th>
                    <th>Durée</th>
                    <th>Prix</th>
                    <th>Statut</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Bassine NIANG</td>
                    <td>12/05/2024</td>
                    <td>12/10/2024</td>
                    <td>1h30</td>
                    <td>15 000</td>
                    <td>Reservé</td>
                    <td>
                        <button>Voir detail</button>
                        <button>Modifier</button>
                        <button>Supprimer</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Bassine NIANG</td>
                    <td>12/05/2024</td>
                    <td>12/10/2024</td>
                    <td>1h30</td>
                    <td>15 000</td>
                    <td>Reservé</td>
                    <td>
                        <button>Voir detail</button>
                        <button>Modifier</button>
                        <button>Supprimer</button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Bassine NIANG</td>
                    <td>12/05/2024</td>
                    <td>12/10/2024</td>
                    <td>1h30</td>
                    <td>15 000</td>
                    <td>Reservé</td>
                    <td>
                        <button>Voir detail</button>
                        <button>Modifier</button>
                        <button>Supprimer</button>
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Bassine NIANG</td>
                    <td>12/05/2024</td>
                    <td>12/10/2024</td>
                    <td>1h30</td>
                    <td>15 000</td>
                    <td>Reservé</td>
                    <td>
                        <button>Voir detail</button>
                        <button>Modifier</button>
                        <button>Supprimer</button>
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Bassine NIANG</td>
                    <td>12/05/2024</td>
                    <td>12/10/2024</td>
                    <td>1h30</td>
                    <td>15 000</td>
                    <td>Reservé</td>
                    <td>
                        <button>Voir detail</button>
                        <button>Modifier</button>
                        <button>Supprimer</button>
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Bassine NIANG</td>
                    <td>12/05/2024</td>
                    <td>12/10/2024</td>
                    <td>1h30</td>
                    <td>15 000</td>
                    <td>Reservé</td>
                    <td>
                        <button>Voir detail</button>
                        <button>Modifier</button>
                        <button>Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
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
  </style>
  