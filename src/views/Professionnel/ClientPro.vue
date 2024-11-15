<template>
    <div class="dashboard-layout">
      <!-- Sidebar -->
      <aside class="sidebar">
        <DashboardProfessionnel />
      </aside>
  
      <!-- Contenu principal -->
      <main class="main-content">
        <div>
          <div class="recherche">
            <div>
              <input type="search" name="search" id="search" placeholder="Rechercher" />
            </div>
            <div>
              <input type="text" id="filter" name="filter" placeholder="Filtrer" />
            </div>
            <div>
              <img src="@/assets/professionnel/filter 1.svg" />
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
                <tr v-for="(reservation, index) in reservations" :key="reservation.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ reservation.client_name }}</td>
                  <td>{{ reservation.client_email }}</td>
                  <td>{{ reservation.client_phone }}</td>
                  <td>{{ reservation.num_appointments }}</td>
                  <td>{{ reservation.last_appointment }}</td>
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
  import { getReservationsByProfessionnel } from "@/services/Reservation"; // Importation de la méthode
  
  export default {
    name: "AccueilPro",
    components: {
      DashboardProfessionnel,
    },
    data() {
      return {
        reservations: [], // Tableau pour stocker les réservations
      };
    },
    async created() {
      // Récupère les réservations lors de la création du composant
      try {
        const reservationsData = await getReservationsByProfessionnel();
        this.reservations = reservationsData; // Assigne les réservations récupérées à la variable "reservations"
      } catch (error) {
        console.error("Erreur lors de la récupération des réservations:", error);
      }
    },
    methods: {
      openEditModal(reservation) {
        // Logic to open the edit modal
        console.log("Edit reservation", reservation);
      },
      cancelReservation(id) {
        // Logic to cancel the reservation
        console.log("Cancel reservation", id);
      },
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
  