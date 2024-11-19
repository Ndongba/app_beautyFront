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
            <input 
              type="search" 
              name="search" 
              id="search" 
              placeholder="Rechercher" 
              v-model="searchQuery" 
            />
          </div>
          <div>
            <input 
              type="text" 
              id="filter" 
              name="filter" 
              placeholder="Filtrer" 
              v-model="filterQuery" 
            />
          </div>
          <div>
            <img src="@/assets/professionnel/filter 1.svg" alt="Filter icon" />
          </div>
        </div>
        <div>
          <table class="table">
            <thead>
              <tr>
                <th>N°</th>
                <th>Client</th>
                <th>Prestation Choisie</th>
                <th>Date Prévue</th>
                <th>Prix</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(reservation, index) in filterReservations()" :key="reservation.id">
                <td>{{ index + 1 }}</td>
                <td>{{ reservation.client_nom || "N/A" }}</td>
                <td>{{ reservation.prestation_libelle || "N/A" }}</td>
                <td>{{ reservation.date_prévue || "Non définie" }}</td>
                <td>{{ reservation.montant || "0 €" }}</td>
                <td>{{ reservation.status || "Indisponible" }}</td>
                <td>
                  <button>
                    <i class="bi bi-eye"></i>
                  </button>
                  <button @click="openEditModal(reservation)">
                    <i class="bi bi-pencil"></i>
                  </button>
                  <button @click="cancelReservation(reservation.id)">
                    <i class="bi bi-trash3-fill"></i>
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
import { getReservationsByProfessionnel } from "@/services/Reservation";

export default {
  name: "ReservationPro",
  components: {
    DashboardProfessionnel,
  },
  data() {
    return {
      reservations: [],
      searchQuery: "",
      filterQuery: "",
    };
  },
  async created() {
    await this.fetchReservations();
  },
  methods: {
    async fetchReservations() {
      try {
        const response = await getReservationsByProfessionnel();
        console.log("Données récupérées :", response);
        this.reservations = response;
      } catch (error) {
        console.error("Erreur lors de la récupération des réservations:", error);
      }
    },
    filterReservations() {
      return this.reservations.filter((reservation) => {
        const clientNom = reservation.client_nom || ""; // Valeur par défaut : chaîne vide
        const prestationLibelle = reservation.prestation_libelle || ""; // Valeur par défaut : chaîne vide

        const matchesSearch = clientNom
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());

        const matchesFilter = prestationLibelle
          .toLowerCase()
          .includes(this.filterQuery.toLowerCase());

        return matchesSearch && matchesFilter;
      });
    },
    openEditModal(reservation) {
      console.log("Édition de la réservation :", reservation);
    },
    async cancelReservation(reservationId) {
      try {
        // Appeler la méthode pour supprimer la réservation
        await deleteReservation(reservationId);
        this.reservations = this.reservations.filter(
          (res) => res.id !== reservationId
        );
      } catch (error) {
        console.error("Erreur lors de la suppression de la réservation:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Disposition de la page */
.dashboard-layout {
  display: flex;
}

/* Styles de la sidebar */
.sidebar {
  width: 350px;
  background-color: #b4838d;
  color: #fff;
  font-size: 21px;
}

/* Contenu principal */
.main-content {
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
  font-size: 21px;
}

.table {
  width: 100%;
}

.recherche {
  display: flex;
  gap: 30px;
}

#search {
  width: 750px;
  height: 75px;
  border-radius: 20px;
  font-size: 32px;
}

#filter {
  width: 150px;
  height: 70px;
  border-radius: 20px;
  font-size: 32px;
}
</style>
