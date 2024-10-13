<template>
  <div class="dashboard-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <DashboardProfessionnel />
    </aside>

    <!-- Contenu principal -->
    <main class="main-content">
      <div class="recherche">
        <div>
          <input type="search" id="search" placeholder="Rechercher">
        </div>
        <div>
          <input type="text" id="filter" placeholder="Filtrer">
        </div>
        <div>
          <!-- <img src="@/assets/professionnel/filter.svg" alt="Filtre"> -->
        </div>
        <div>
          <button class="btn btn-primary" @click="goToForm">Ajouter</button>
        </div>
      </div>

      <div class="cateprest">
        <!-- Catégories -->
        <div class="categorie">
          <div v-for="categorie in categories" :key="categorie.id" class="categorie1">
            <div>
              <p>{{ categorie.libelle }}</p>
            </div>
            <div>
              <p>{{ getPrestationCount(categorie.id) }}</p>
            </div>
          </div>
          <div class="ajoutcategorie" @click="addCategory">
            <div>
              <!-- <img src="@/assets/professionnel/simple-line-icons_plus.svg" alt="Ajouter une catégorie"> -->
            </div>
            <div>
              <p>Ajouter une catégorie </p> 
            </div>
          </div>
        </div>

        <!-- Prestations liées aux catégories -->
        <div class="block2">
          <div class="prelist">
            <div v-for="categorie in categories" :key="categorie.id">
              <h1>{{ categorie.libelle }}</h1>
              <div v-for="prestation in getPrestationsByCategory(categorie.id)" :key="prestation.id" class="prestation">
               <div class="header">
                  <div>
                    <p>{{ prestation.libelle }}</p>
                  </div>
                  <div>
                    <p>{{ prestation.prix }} F</p>
                  </div>
               </div>
                <div class="boutons" style="gap: 20px;"> 
                  <button class="btn btn-primary" @click="editPrestation(prestation)">Modifier</button>
                  <button class="btn btn-danger" @click="deletePrestation(prestation.id)">Supprimer</button>
                </div>
              </div>
          
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import DashboardProfessionnel from "../../components/professionnel/DashboardProfessionnel.vue";
import { deletePrestation, getPrestations } from "@/services/Prestation";
import { getCategories } from "@/services/Categorie";


export default {
  name: "AccueilPro",
  components: {
    DashboardProfessionnel
  },
  data() {
    return {
      categories: [],
      prestations: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const categoriesResponse = await getCategories();
        this.categories = categoriesResponse.data;

        const prestationsResponse = await getPrestations();
        this.prestations = prestationsResponse.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    },
    getPrestationCount(categorieId) {
      return this.prestations.filter(p => p.categorie_id === categorieId).length;
    },
    getPrestationsByCategory(categorieId) {
      return this.prestations.filter(p => p.categorie_id === categorieId);
    },
    goToForm() {
      this.$router.push("/Professionnel/Formulaire");
    },
    addCategory() {
      console.log("Ajouter une catégorie");
    },

    // Méthode pour éditer une prestation
    editPrestation(prestation) {
      this.$router.push({ name: "FormulaireProupdate", params: { id: prestation.id } });
    },

    // Méthode pour supprimer une prestation
    async deletePrestation(prestationId) {
      try {
        await deletePrestation(prestationId);
        this.prestations = this.prestations.filter(p => p.id !== prestationId);
      } catch (error) {
        console.error("Erreur lors de la suppression de la prestation :", error);
      }
    },
  },
};
</script>

<style scoped>
.dashboard-layout {
  display: flex;
}

.sidebar {
  width: 350px;
  background-color: #B4838D;
  color: white;
  padding: 20px;
}

.main-content {
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
}

.recherche {
  display: flex;
  gap: 30px;
}

#search, #filter {
  height: 70px;
  border-radius: 20px;
  font-size: 32px;
}

.cateprest {
  display: flex;
  gap: 100px;
}

.categorie {
  border: solid black 2px;
  width: 550px;
  margin-top: 50px;
  border-radius: 20px;
  height: 550px;
}

.categorie1 {
  display: flex;
  gap: 150px;
  padding: 20px;
}

.ajoutcategorie {
  display: flex;
  padding: 20px;
}

.prestation {
  display: flex;
  flex-direction: column;
 
  border: solid black 2px;
  width: 750px;
  padding: 30px;
  border-radius: 10px;
  margin-top: 20px;
}
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;

}
.boutons {
 display: flex;
 align-items: center;
 justify-content: space-between;
}

p{
  font-size: 32px;
}
</style>
