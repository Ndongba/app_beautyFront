<template>
    <HeaderConnect />
    <main>
      <div class="images-container">
      <div v-if="professionnel?.images && professionnel.images.length > 0">
        <!-- Conteneur principal des images -->
        <div class="images-grid">
          <!-- Grande image -->
          <div class="main-image">
            <img 
              :src="getImageUrl(professionnel.images[0].image_path)" 
              alt="Image principale du professionnel" 
              class="professional-image"
            />
          </div>
          
          <!-- Conteneur des images secondaires -->
          <div class="secondary-images">
            <div v-for="(image, index) in professionnel.images.slice(1, 3)" 
                 :key="image.id"
                 class="secondary-image">
              <img 
                :src="getImageUrl(image.image_path)" 
                alt="Image secondaire du professionnel" 
                class="professional-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Aucune image disponible</p>
      </div>
    </div>
  
  
      <div class="class">
        <h1>{{ professionnel?.nom }}</h1>
        <h3>Liste des Prestations</h3>
        <h3>Choisir le ou les Prestations Souhaitées</h3>
  
        <div class="block2">
          <div class="block2_1">
            <div
              v-for="prestation in prestations"
              :key="prestation.id"
              class="Prestation"
              @click="togglePrestation(prestation)"
              :class="{ selected: selectedPrestations.includes(prestation) }"
            >
              <div class="card" style="width: 30rem;">
                <h5 class="card-header">{{ prestation.libelle }}</h5>
                <div class="card-body">
                  <p>Durée: {{ prestation.duree }}</p>
                  <p>Prix: {{ prestation.prix }} FCFA</p>
                </div>
              </div>
            </div>
          </div>
  
          <div class="card" style="width: 50rem;">
            <div class="card-body">
              <h4 class="card-title">Résumé des prestations choisies</h4>
              <p class="card-text">
                Prestations : 
                {{ selectedPrestations.length > 0 
                  ? selectedPrestations.map(p => p.libelle).join(', ') 
                  : 'Aucune prestation sélectionnée' 
                }}
              </p>
              <button class="btn btn-primary" @click="goToNextPage">Continuer</button>
            </div>
          </div>
        </div>
  
        <div>
          <h2>Description</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dicta sint consequuntur repudiandae veritatis dolore...
          </p>
        </div>
  
        <div class="disponibilites-section">
          <h2>Horaires</h2>
          <div v-if="disponibilites.length > 0">
            <div v-for="disponibilite in disponibilites" :key="disponibilite.id" class="Jour">
              <div class="horaire">
                <div><p>{{ disponibilite.jour }}</p></div>
                <div>
                  <p>{{ disponibilite.heure_ouverture }}</p>
                  <p>{{ disponibilite.heure_fermeture }}</p>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <p>Aucune disponibilité trouvée</p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </template>
  
  <script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const selectedReservationId = ref(null); // Stocke l'ID de la réservation sélectionnée

    // Fonction pour définir l'ID de la réservation à modifier
    const setSelectedReservation = (reservationId) => {
      selectedReservationId.value = reservationId;
    };

    // Redirige vers la page de modification avec l'ID de la réservation
    const goToEditPage = () => {
      if (selectedReservationId.value) {
        router.push({ name: 'EditReservation', params: { id: selectedReservationId.value } });
      } else {
        console.error("Aucune réservation sélectionnée pour modification");
      }
    };

    return {
      selectedReservationId,
      setSelectedReservation,
      goToEditPage, // Assurez-vous que cette fonction est bien retournée
    };
  },
};



  </script>
  
  <style scoped>
  .selected {
    border: 2px solid blue;
  }
  
  .block2_1 {
    display: flex;
    flex-direction: column; /* Alignement vertical */
    gap: 20px; /* Ajuster l'espacement entre les éléments */
    justify-content: center;
    align-items: center;
  }
  
  
  
  .Jour {
    margin-bottom: 20px;
  }
  
  .block2 {
    display: flex;
    gap: 70px;
    justify-content: center;
  }
  
  .horaire {
    display: flex;
    gap: 150px;
    padding: 10px;
    background-color: #f8f9fa;
    border-radius: 5px;
  }
  
  .btn {
    background-color: #FFCDB3;
    color: black;
  }
  
  .disponibilites-section {
    margin-top: 30px;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    font-size: 20px;
  }
  
  .images-container {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .images-grid {
    display: flex;
    gap: 20px;
    height: 600px; /* Hauteur fixe pour le conteneur */
  }
  
  .main-image {
    flex: 2;
    width: 500px;
    height: 100%;
  }
  
  
  
  h2{
    margin-left: 100px;
  }
  
  h3{
    margin-left: 100px;
  }
  
  p{
    margin-left: 100px;
  }
  
  
  .secondary-images {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .secondary-image {
    height: calc(50% - 10px); /* La moitié de la hauteur moins la moitié du gap */
  }
  
  .professional-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* Responsive design */
  /* Responsive design pour mobile */
  @media (max-width: 480px) {
    .images-container {
      padding: 10px;
    }
  
    .images-grid {
      flex-direction: column;
      gap: 10px;
    }
  
    .main-image {
      height: 250px;
      width: 370px;
    }
  
    .secondary-images {
      flex-direction: row;
      height: auto;
    }
  
    .secondary-image {
      width: calc(50% - 5px);
      height: auto;
    }
  
    .block2 {
      flex-direction: column;
      gap: 20px;
      width: 200px;
      
      
    }
  
    .block2_1 .card {
      width: 50px;
    }
  
    .block2 .card{
      width: 50px;
    }
    .btn {
      width: 40%;
      text-align: center;
    }
  
    .disponibilites-section {
      margin-top: 20px;
      padding: 15px;
    }
  
    .horaire {
      flex-direction: column;
      gap: 10px;
    }
  
    .Jour p,
    .class h1,
    .class h2,
    .class h3,
    .class p {
      margin-left: 0;
      text-align: center;
    }
  
    .professional-image {
      border-radius: 6px;
    }
  
   
  
   
  }
  
  
  
  
  
  </style>
  