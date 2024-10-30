<template>
  <HeaderConnect />
  <main>
    <h2>Mes Rendez-Vous</h2>
    <div class="block">
      <table class="container">
        <thead>
          <tr>
            <th scope="col">Nom du Professionnel</th>
            <th scope="col">Prestations Choisies</th>
            <th scope="col">Date Prévue</th>
            <th scope="col">Heure Prévue</th>
            <th scope="col">Montant</th>
            <th scope="col">Status</th>
            <!-- <th scope="col">Actions</th> -->
          </tr>
        </thead>
        <tbody v-if="reservations.length" v-for="reservation in reservations" :key="reservation.id">
          <tr>
            <td>{{ reservation.proprestation.professionnel.user?.name || '' }}</td>
            <td>{{ reservation.proprestation.prestation.libelle }}</td>
            <td>{{ reservation.date_prévue }}</td>
            <td>{{ reservation.heure_prévue }}</td>
            <td>{{ reservation.montant }}</td>
            <td>{{ reservation.status }}</td>
            <!-- <td>
              <button class="btn btn-primary" @click="goToEditPage(Id)">Modifier</button>
            </td>
            <td>
              <button class="btn btn-danger">Supprimer</button>
            </td> -->
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="6">Aucune réservation trouvée.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script>
import HeaderConnect from '@/components/commun/HeaderConnect.vue';
import { getClientReservations } from '@/services/Reservation';
export default {
  name: "Rendezvous",
  components: { HeaderConnect },
  data() {
    return {
      reservations: [],
      selectedReservation: null,
      proprestationDetails: null,
    };
  },
  methods: {
    async fetchReservations() {
      try {
        const response = await getClientReservations();
        this.reservations = response.data;
        
        console.log(this.reservations);
        
      } catch (error) {
        console.error("Erreur lors de la récupération des réservations:", error);
      }
    },
    toggleDetail(reservationId) {
      this.selectedReservation = this.selectedReservation === reservationId ? null : reservationId;
    },
  },
  mounted() {
    this.fetchReservations();
  },
};
</script>

<style scoped>
.block {
  display: flex;
  justify-content: center; /* Center the content for better mobile viewing */
  padding: 20px;
}

h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
  color: #333;
}

.container {
  width: 95%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-collapse: collapse;
  font-size: 18px;
}

table th {
  background-color: #f8f9fa;
  padding: 15px; /* Adjusted padding for mobile */
  text-align: left;
  font-weight: 600;
  color: #2c3e50;
  border-bottom: 2px solid #dee2e6;
}

table td {
  padding: 10px; /* Adjusted padding for mobile */
  border-bottom: 1px solid #eee;
  color: #4a5568;
}

/* Hide certain columns on mobile */
@media (max-width: 480px) {
  table {
    display: block; /* Allows for better layout control on mobile */
    overflow-x: auto; /* Allows horizontal scrolling */
    white-space: nowrap; /* Prevents wrapping */
    
  }

  thead {
    display: none; /* Hide headers on small screens */
  }

  tbody tr {
    display: block; /* Stack table rows vertically */
    margin-bottom: 10px; /* Space between rows */
    border: 1px solid #ddd; /* Add border to rows */
    border-radius: 8px; /* Round the corners */
    padding: 10px; /* Add padding */
    background: #f8f9fa; /* Light background for rows */
  }

  tbody tr td {
    display: flex; /* Use flexbox for better layout */
    justify-content: space-between; /* Space out items */
    padding: 5px; /* Less padding for smaller screens */
  }

  tbody tr td::before {
    content: attr(data-label); /* Use the data-label attribute for mobile */
    font-weight: bold; /* Make label bold */
    margin-right: 10px; /* Space between label and value */
  }
}

/* Style pour les messages d'erreur ou vide */
tbody tr td[colspan] {
  text-align: center;
  padding: 20px;
  color: #666;
  font-style: italic;
}
</style>
