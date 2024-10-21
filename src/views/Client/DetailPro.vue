<template>
  <HeaderConnect/>
  <main>
    <div class="images">
    <div>
    <img src="/home/ndongba/app_beautyFront/src/assets/images/Group 118.svg" id="img1">
    </div>
    <div>
      <div>
    <img src="/home/ndongba/app_beautyFront/src/assets/images/Group 118.svg">
  </div> 
  <div>
    <img src="/home/ndongba/app_beautyFront/src/assets/images/Group 118.svg">
  </div>
  </div>
  </div>
    
    <div class="class">
      <h1>{{ professionnel?.nom }}</h1>
      <h2> Liste des Prestations</h2>
      <h2>Choisir le ou les Prestations Souhaitées</h2>
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
            <h5 class="card-title">Résumé des prestations choisies</h5>
            <p class="card-text">
              Prestations :
              {{ selectedPrestations.length > 0 ? selectedPrestations.map(p => p.libelle).join(', ') : 'Aucune prestation sélectionnée' }}
            </p>
            <button class="btn btn-primary" @click="goToNextPage">Continuer</button>
          </div>
        </div>
      </div>
      <div>
        <h2>Desciption</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dicta sint consequuntur repudiandae veritatis dolore sapiente aut consequatur, quod, quaerat, nemo recusandae suscipit itaque. Eveniet laudantium necessitatibus culpa quis aspernatur!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quis sapiente ipsam quos quae incidunt rerum ratione maiores vero tenetur distinctio debitis, in est placeat magni amet atque veniam ex!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos voluptate illum dolorem doloribus aut ex, laborum ab expedita id quas cum quisquam saepe similique dolorum hic nostrum, architecto eaque distinctio?

        </p>
      </div>
      <div clas="Jour">
        <h2>Horaires</h2>
        <div class="horaire">
          <div>
            <p>Mardi</p>
          </div>
          <div>
            
          <p>09H00-18H00</p>
          </div>
        </div> 
      <div class="horaire">
       <div>
        <p>Mercredi</p>
       </div>
       <div>
        
        <P>09H00-18H00</P>
       </div>
      </div> 
      <div class="horaire">
       <div>
        <p>Jeudi</p>
       </div>
       <div>
        
        <P>09H00-18H00</P>
       </div>
       
      </div> 
      <div class="horaire"> 
       <div>
        <p>Vendredi</p>
        
       </div>
       <div>
        <P>09H00-18H00</P>
       </div>
       
      </div> 
      <div  class="horaire"> 
        <div>
          <p>Samedi</p>
          
        </div>
        <div>
          <P>09H00-18H00</P>
        </div>
       
      </div> 
      <div class="horaire"> 
       <div>
        <p>Dimanche</p>
       </div>
       <div>
        
        <P>09H00-18H00</P>
       </div>
        
      </div>
      </div>
    </div>
    
  </main>
  <Footer/> 
</template>

<script>
import { ref, onMounted } from 'vue';
import { getPrestationByProfessionnel } from '@/services/Prestation';
import { getProfessionnelById } from '@/services/Professionnel';
import { useRoute, useRouter } from 'vue-router';
import HeaderConnect from '@/components/commun/HeaderConnect.vue';
import Footer from '@/components/commun/Footer.vue';

export default {
  name: "DetailPro",
  components:{
    HeaderConnect,
    Footer
  },
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
.images{
  display: flex;
 
}

#img1{
  width: 750px;
}

.Jour{
margin-bottom: 150px
}
.block2{
  display: flex;
  gap:70px;
  justify-content: center;
}

.horaire{
  display: flex;
  gap: 150px;
}

</style>
