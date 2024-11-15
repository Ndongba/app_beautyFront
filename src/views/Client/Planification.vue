<template>
  <HeaderConnect/>
    <main>
      <h2 class="mt-5 ml">Choisir la date et l'heure du Rendez-Vous</h2>
  
      <div class="block">
        <div class="block1">
          <div>
            <input v-model="selectedDate" type="date" name="date" id="date" />
          </div>
          <div class="hours-grid">
          <div 
            v-for="(heure, index) in heures"
            :key="index"
            :class="['card', 'w-2550', 'mb-3', { selected: selectedHour === heure }]"
            @click="selectHour(heure)"
          >
            <div class="card-body">
              <h5 class="card-title fs-4">{{ heure }}</h5>
            </div>
          </div>
        </div>
        </div>
  
        <div class="block2">
          <div class="card" id="carte2">
            <div class="card-body">
              <h5 class="card-title">Détails du Rendez-vous</h5>
              <p class="card-text fs-4">
                Date choisie : {{ selectedDate || 'Non sélectionnée' }} <br />
                Heure choisie : {{ selectedHour || 'Non sélectionnée' }} <br />
                Prestations : {{ selectedPrestations.map(p => p.libelle).join(', ') || 'Aucune prestation choisie' }} <br />
                Total : {{ calculateTotal() }} FCFA
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li v-for="(prestation, index) in selectedPrestations" :key="index" class="list-group-item">
                {{ prestation.libelle }} - {{ prestation.prix }} FCFA
              </li>
            </ul>
            <div class="card-body">
              <button class="btn btn-primary" @click="finalizeAppointment">Terminer</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import { addReservation } from '@/services/Reservation';
  import { getUserProfile } from '@/services/AuthService';
  import proprestationService from '@/services/Proprestation'; // Ajout du service
import HeaderConnect from '@/components/commun/HeaderConnect.vue';

  export default {
    name: "Planification",
    components: {
      HeaderConnect
    },
    data() {
      return {
        selectedDate: null,
        selectedHour: null,
        heures: ["09:00", "09:30", "10:00","10:30","11:00","11h30","12h00","12h30","13h00","13h30","14h00","15h00","15h30","16h00","16h30","17h00","17h30","18h00"],
        selectedPrestations: [],
        total: 0,
        client_id: null,
        proprestationId: 1 , // Ajouter la propriété pour stocker proprestation_id
      };
    },
    async mounted() {
      try {
        // Récupération du profil utilisateur pour obtenir l'ID du client
        const userProfile = await getUserProfile();
        this.client_id = userProfile.user.id;
  
        // Vérifiez l'ID du client dans la console
        console.log('Client ID:', this.client_id);
  
        // Récupérer les prestations depuis le localStorage
        const storedPrestations = localStorage.getItem('selectedPrestations');
        if (storedPrestations) {
          this.selectedPrestations = JSON.parse(storedPrestations);
          console.log('Selected Prestations IDs:', this.selectedPrestations.map(p => p.id)); // Vérifiez les IDs des prestations
        }

        // Récupérer l'ID du professionnel et les prestations associées
        const professionnelId = this.selectedPrestations[0]?.professionnel_id;
        if (professionnelId) {
          await this.fetchProprestations(professionnelId);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération du profil utilisateur:', error);
      }
    },
    methods: {
      selectHour(heure) {
        this.selectedHour = this.selectedHour === heure ? null : heure;
      },
      
      calculateTotal() {
        return this.selectedPrestations.reduce((total, prestation) => total + prestation.prix, 0);
      },

      async fetchProprestations(professionalId) {
        try {
          const response = await proprestationService.getProprestationsByProfessionalId(professionalId);
          // Traitez les prestations récupérées ici
          console.log('Prestations récupérées:', response.data);
          // Vous pouvez ajouter les prestations récupérées à selectedPrestations si nécessaire
        } catch (error) {
          console.error('Erreur lors de la récupération des prestations:', error);
        }
      },



async finalizeAppointment() {
      if (!this.selectedDate || !this.selectedHour) {
        alert("Veuillez sélectionner une date et une heure.");
        return;
      }

      if (!this.client_id) {
        alert("Impossible de récupérer l'ID du client.");
        return;
      }

      // Récupérer les IDs des prestations sélectionnées
      const prestationIds = this.selectedPrestations.map(p => p.id);

      if (!prestationIds.length) {
        alert("Veuillez sélectionner au moins une prestation.");
        return;
      }

      try {
        // Récupérer proprestation_id avant de finaliser la réservation
        const professionnelId = this.selectedPrestations[0]?.professionnel_id;
        if (professionnelId) {
          this.proprestationId = await proprestationService.getProprestationId(professionnelId, prestationIds);
          console.log('Proprestation ID:', this.proprestationId); // Vérifier si proprestation_id est récupéré correctement
        }

        const appointmentData = {
          client_id: this.client_id,
          date_prévue: this.selectedDate,
          heure_prévue: this.selectedHour,
          prestations: prestationIds,
          proprestation_id: this.proprestationId, // Inclure proprestation_id dans les données de réservation
          montant: this.calculateTotal()
        };

        console.log(appointmentData);

        // Appel à la méthode pour ajouter la réservation
        await addReservation(appointmentData);
        
         alert(`Rendez-vous fixé le ${this.selectedDate} à ${this.selectedHour}.`);
        // Rediriger vers la page des réservations
    this.$router.push('/Home/Client/Rendezvous');
      } catch (error) {
        if (error.response && error.response.status === 422) {
          alert("Erreur de validation : " + error.response.data.message);
        } else {
          alert('Erreur lors de la création du rendez-vous. Veuillez réessayer.');
        }
        console.error(error);
      }
    }
  }
    };
  
  </script>
  
  <style scoped>
  main{
    margin-bottom: 50px;
  }
  .block {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  #date {
    margin-bottom: 50px;
    margin-top: 50px;
  }
  
  .card {
    cursor: pointer;
    transition: 0.3s;
  }
  
  .card.selected {
    border: 2px solid #007bff;
  }

  .hours-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
  
}
  
  .w-750 {
    width: 18rem;
  }
  
  .block2 {
    margin-top: 20px;
  }

  @media (max-width: 480px) {
.block{
  display: block;
}
.hours-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 300px;
  margin: 0 auto;
  }
#carte2{
  width: 250px;
  margin:0 auto;
}

#date{
  width: 150px;
  
}

h2{
  text-align: center;
}
  
}
  </style>