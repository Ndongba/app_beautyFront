<template>
  <main>
    <h1>Mes Rendez-Vous</h1>
    <div class="block">
      <div v-if="reservations.length > 0">
        <ul>
          <li v-for="reservation in reservations" :key="reservation.id">
            <h5>{{ reservation.proprestation.name }}</h5>
            <p>Date: {{ reservation.date_prévue }}</p>
            <p>Heure: {{ reservation.heure_prévue }}</p>
            <p>Montant: {{ reservation.montant }} FCFA</p>
            <button @click="toggleDetail(reservation.id)">Voir Détails</button>
            <div v-if="selectedReservation === reservation.id">
              <p>Status: {{ reservation.status }}</p>
              <p>Client: {{ reservation.client.name }}</p>
              <!-- Ajouter d'autres détails si nécessaire -->
            </div>
          </li>
        </ul>
      </div>
      <div v-else>
        <p>Aucune réservation trouvée.</p>
      </div>
    </div>
  </main>
  </template>
  
  <script>
  import { getClientReservations } from '@/services/Reservation';
  
  export default {
    name: "Rendezvous",
    data() {
      return {
        reservations: [],
        selectedReservation: null,
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
    justify-content: space-around;
  }
  </style>
  