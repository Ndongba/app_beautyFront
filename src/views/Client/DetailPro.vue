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
      <h3>Choisir la Prestation Souhaitée</h3>

      <div class="block2">
        <div class="block2_1">
        <div style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"
          v-for="prestation in prestations"
            :key="prestation.id"
            class="Prestation"
            @click="togglePrestation(prestation)"
            :class="{ selected: selectedPrestations.includes(prestation) }"
          >
            <div class="card l-bg-orange-dark">
                <div class="card-statistic-3 p-4">
                    <div class="card-icon card-icon-large"><i class="fas fa-dollar-sign"></i></div>
                    <div class="mb-4">
                        <h5 class="card-title mb-0 fs-4">{{ prestation.libelle }}</h5>
                    </div>
                    <div class="row align-items-center mb-2 d-flex" >
                        <div class="col-8">
                            <h2 class="d-flex align-items-center mb-0 fs-4">
                            Prix:{{ prestation.prix }}FCFA
                            </h2>
                        </div>
                        
                    </div>
                    <div class="col-4 text-right">
                            <span>{{ prestation.duree }}<i class="fa fa-arrow-up"></i></span>
                        </div>
                    <div class="progress mt-1 " data-height="8" style="height: 8px;">
                        <div class="progress-bar l-bg-cyan " role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 100%; background-color:#B4838D"></div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div class="card" style="width: 20rem; height: 30rem;">
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
import { ref, onMounted } from 'vue';
import { getPrestationByProfessionnel } from '@/services/Prestation';
import { getProfessionnelById } from '@/services/Professionnel';
import { useRoute, useRouter } from 'vue-router';
import HeaderConnect from '@/components/commun/HeaderConnect.vue';
import Footer from '@/components/commun/Footer.vue';
import { getDisponibilteByProfessionnel } from '@/services/Disponibilte';
import { IMG_URL } from '@/config/apiConfigImage';

export default {
  name: "DetailPro",
  components: {
    HeaderConnect,
    Footer
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const professionnel = ref(null);
    const prestations = ref([]);
    const selectedPrestations = ref([]);
    const disponibilites = ref([]);
    const error = ref(null);

    const fetchDetails = async () => {
      const professionnelId = route.params.id;
      try {
        // Récupération des données du professionnel
        const responsePro = await getProfessionnelById(professionnelId);
        professionnel.value = responsePro.data; // Assurez-vous que la réponse contient les images
        console.log(professionnel.value);
        
        // Récupération des prestations
          const responsePrest = await getPrestationByProfessionnel(professionnelId);
          prestations.value = responsePrest.data.data;
          console.log('Prestations récupérées', prestations.value);

                  

        // Récupération des disponibilités avec gestion d'erreur
        try {
          const responseDisponibilites = await getDisponibilteByProfessionnel(professionnelId);
          if (responseDisponibilites.data && responseDisponibilites.data.données) {
            disponibilites.value = responseDisponibilites.data.données;
            console.log('Disponibilités récupérées:', disponibilites.value);
          } else {
            console.error('Format de réponse invalide pour les disponibilités');
            disponibilites.value = [];
          }
        } catch (dispError) {
          console.error('Erreur lors de la récupération des disponibilités:', dispError);
          disponibilites.value = [];
          error.value = 'Impossible de récupérer les disponibilités';
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des détails:', error);
      }
    };

    const togglePrestation = (prestation) => {
      if (selectedPrestations.value.includes(prestation)) {
        selectedPrestations.value = selectedPrestations.value.filter(p => p.id !== prestation.id);
      } else {
        selectedPrestations.value.push(prestation);
      }
    };

    const goToNextPage = () => {
      if (selectedPrestations.value.length === 0) {
        alert("Veuillez sélectionner au moins une prestation.");
      } else {
        localStorage.setItem('selectedPrestations', JSON.stringify(selectedPrestations.value));
        router.push({ name: 'Planification' });
      }
    };
    

    const getImageUrl = (images) => {
      if (images && images.length > 0) {
        return IMG_URL + images; // Retourne le chemin de la première image
      } else {
        return '/path/to/default-image.jpg'; // Remplacez par une image par défaut si aucune image n'est disponible
      }
    };

    onMounted(fetchDetails);

    return {
      professionnel,
      prestations,
      selectedPrestations,
      disponibilites,
      error,
      togglePrestation,
      goToNextPage,
      getImageUrl
    };
  }
};
</script>

<style scoped>
.selected {
  border: 3px solid #B4838D;
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
  margin-left: 120px;
}

h3{
  margin-left: 140px;
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
@media (max-width: 420px) {
  .images-container {
    padding: 10px;
  }

  .images-grid {
    flex-direction: column;
    gap: 10px;
  }

  .main-image {
    height: 250px;
    width: 400px;
  }

  .secondary-images {
    flex-direction: row;
    height: auto;
  }

  .secondary-image {
    width: calc(50% - 5px);
    height: auto;
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

  .block2 {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .block2_1 {
    width: 100%;
    gap: 15px;
  }

  .Prestation {
    width: 80%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 12px;
    border-radius: 8px;
  }

  .card {
    width: 100%;
    margin-top: 20px;
    text-align: center;
  }
 
}
</style>
