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
        <div>
            <button>Options</button>
        </div>
        <div>
            <button>Ajouter un client</button>
        </div>
    </div>
    <div>
        <table class="table">
            
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Noms</th>
                    <th>Email</th>
                    <th>Telephone</th>
                    <th>Nbre de Rendez-vous</th>
                    <th>Dernier RV</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    
                    <td>1</td>
                    <td>Bassine NIANG</td>
                    <td>niangbassine@example.com</td>
                    <td>770000000</td>
                    <td>5</td>
                    <td>21/08/2024</td>
                    <td>
                        <button>
                            <i class="bi bi-eye"></i>
                        </button>
                        <button>
                            <i class="bi bi-pencil" @click="openEditModal(reservation)"></i>
                        </button>
                        <button>
                            <i class="bi bi-trash3-fill" @click="cancelReservation(reservation.id)"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    
                    <td>1</td>
                    <td>Bassine NIANG</td>
                    <td>niangbassine@example.com</td>
                    <td>770000000</td>
                    <td>5</td>
                    <td>21/08/2024</td>
                    <td>
                        <button>
                            <i class="bi bi-eye"></i>
                        </button>
                        <button>
                            <i class="bi bi-pencil" @click="openEditModal(reservation)"></i>
                        </button>
                        <button>
                            <i class="bi bi-trash3-fill" @click="cancelReservation(reservation.id)"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    
                    <td>2</td>
                    <td>Bassine NIANG</td>
                    <td>niangbassine@example.com</td>
                    <td>770000000</td>
                    <td>5</td>
                    <td>21/08/2024</td>
                    <td>
                        <button>
                            <i class="bi bi-eye"></i>
                        </button>
                        <button>
                            <i class="bi bi-pencil" @click="openEditModal(reservation)"></i>
                        </button>
                        <button>
                            <i class="bi bi-trash3-fill" @click="cancelReservation(reservation.id)"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    
                    <td>3</td>
                    <td>Bassine NIANG</td>
                    <td>niangbassine@example.com</td>
                    <td>770000000</td>
                    <td>5</td>
                    <td>21/08/2024</td>
                    <td>
                        <button>
                            <i class="bi bi-eye"></i>
                        </button>
                        <button>
                            <i class="bi bi-pencil" @click="openEditModal(reservation)"></i>
                        </button>
                        <button>
                            <i class="bi bi-trash3-fill" @click="cancelReservation(reservation.id)"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    
                    <td>4</td>
                    <td>Bassine NIANG</td>
                    <td>niangbassine@example.com</td>
                    <td>770000000</td>
                    <td>5</td>
                    <td>21/08/2024</td>
                    <td>
                        <button>
                            <i class="bi bi-eye"></i>
                        </button>
                        <button>
                            <i class="bi bi-pencil" @click="openEditModal(reservation)"></i>
                        </button>
                        <button>
                            <i class="bi bi-trash3-fill" @click="cancelReservation(reservation.id)"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    
                    <td>5</td>
                    <td>Bassine NIANG</td>
                    <td>niangbassine@example.com</td>
                    <td>770000000</td>
                    <td>5</td>
                    <td>21/08/2024</td>
                    <td>
                        <button>
                            <i class="bi bi-eye"></i>
                        </button>
                        <button>
                            <i class="bi bi-pencil" @click="openEditModal(reservation)"></i>
                        </button>
                        <button>
                            <i class="bi bi-trash3-fill" @click="cancelReservation(reservation.id)"></i>
                        </button>
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
    font-size: 21px;
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
 
  .recherche{
    display: flex;
    gap: 30px;
    
  }
  </style>
  