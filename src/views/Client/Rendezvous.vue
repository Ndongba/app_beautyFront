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
            <th scope="col">Actions</th> 
          </tr>
        </thead>
        <tbody v-if="reservations.length">
          <tr v-for="reservation in reservations" :key="reservation.id">
            <td>{{ reservation.proprestation.professionnel.user?.name || '' }}</td>
            <td>{{ reservation.proprestation.prestation.libelle }}</td>
            <td>{{ reservation.date_prévue }}</td>
            <td>{{ reservation.heure_prévue }}</td>
            <td>{{ reservation.montant }}</td>
            <td>{{ reservation.status }}</td>
            <td>
              <i class="bi bi-pencil" @click="openEditModal(reservation)"></i>
            </td>
            <td>
              <i class="bi bi-trash3-fill" @click="cancelReservation(reservation.id)"></i>
            </td> 
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="6">Aucune réservation trouvée.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Utilisation du composant modal pour l'édition -->
    <ModalEditReservation
      :isVisible="showEditModal"
      :reservationData="selectedReservation"
      @update-reservation="updateReservation"
      @close="showEditModal = false"
    />
  </main>
</template>

<script>
import HeaderConnect from '@/components/commun/HeaderConnect.vue';
import ModalEditReservation from '@/views/Client/ModalEditReservation.vue';
import { getClientReservations, cancelReservation, updateReservation } from '@/services/Reservation';

export default {
  name: "Rendezvous",
  components: { HeaderConnect, ModalEditReservation },
  data() {
    return {
      reservations: [],
      selectedReservation: null,
      showEditModal: false,
    };
  },
  methods: {
    async fetchReservations() {
      try {
        const response = await getClientReservations();
        this.reservations = response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des réservations:", error);
      }
    },
    async cancelReservation(id) {
      try {
        await cancelReservation(id);
        this.reservations = this.reservations.filter(reservation => reservation.id !== id);
        alert('Réservation annulée avec succès.');
      } catch (error) {
        console.error("Erreur lors de l'annulation de la réservation:", error);
        alert('Erreur lors de l’annulation de la réservation.');
      }
    },
    openEditModal(reservation) {
      this.selectedReservation = reservation;
      this.showEditModal = true;
    },
    async updateReservation(updatedReservation) {
      try {
        await updateReservation(updatedReservation.id, updatedReservation);
        this.reservations = this.reservations.map(reservation =>
          reservation.id === updatedReservation.id ? updatedReservation : reservation
        );
        alert('Réservation modifiée avec succès.');
      } catch (error) {
        console.error("Erreur lors de la modification de la réservation:", error);
        alert('Erreur lors de la modification de la réservation.');
      }
    }
  },
  mounted() {
    this.fetchReservations();
  }
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
    width: 100%;
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
