<template>
  <main>
    <div class="class">
      <div class="block2">
        <h1>{{ professionnel?.nom }} - Liste des Prestations</h1>
        <h2>Choisir le ou les Prestations Souhaitées</h2>
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
            <h5 class="card-title">Résumé des prestations choisies</h5>
            <p class="card-text">
              Prestations :
              {{ selectedPrestations.length > 0 ? selectedPrestations.map(p => p.libelle).join(', ') : 'Aucune prestation sélectionnée' }}
            </p>
            <button class="btn btn-primary" @click="goToNextPage">Continuer</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getPrestationByProfessionnel } from '@/services/Prestation';
import { getProfessionnelById } from '@/services/Professionnel';
import { useRoute, useRouter } from 'vue-router';

export default {
  name: "DetailPro",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const professionnel = ref(null);
    const prestations = ref([]);
    const selectedPrestations = ref([]);

    const fetchDetails = async () => {
      const professionnelId = route.params.id;
      try {
        const responsePro = await getProfessionnelById(professionnelId);
        professionnel.value = responsePro;
        const responsePrest = await getPrestationByProfessionnel(professionnelId);
        prestations.value = responsePrest.data.données;
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du professionnel:', error);
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
        // Stocker les prestations sélectionnées dans le localStorage
        localStorage.setItem('selectedPrestations', JSON.stringify(selectedPrestations.value));
        router.push({ name: 'Planification' });
      }
    };

    onMounted(fetchDetails);

    return {
      professionnel,
      prestations,
      selectedPrestations,
      togglePrestation,
      goToNextPage,
    };
  }
};
</script>

<style scoped>
.selected {
  border: 2px solid blue;
}

.block2_1 {
  display: flex;
  gap: 100px;
  justify-content: center;
}
</style>
