<template>
  <div class="dashboard-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <DashboardProfessionnel />
    </aside>

    <!-- Contenu principal -->
    <main class="main-content">
      <div class="form">
        <h2>Modifier une Prestation</h2>
        <div class="block1">
          <div class="class">
            <div>
              <label for="nom">Nom de la prestation</label>
            </div>
            <input type="text" id="nom" v-model="prestation.libelle" placeholder="Saisir le nom de la prestation">
          </div>
          <div class="class">
            <div>
              <label for="typePrestation">Type de Prestation</label>
            </div>
            <select id="typePrestation" v-model="prestation.type_prestation">
              <option value="">Sélectionner un type</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
            </select>
          </div>
        </div>
        <div class="blockdesc">
          <div>
            <label for="description">Description</label>
          </div>
          <textarea id="description" v-model="prestation.description" cols="30" rows="15"></textarea>
        </div>
        <div class="block2">
          <div>
            <div>
              <label for="categorie">Categorie de la prestation</label>
            </div>
            <select id="categorie" v-model="prestation.categorie_id">
              <option value="">Sélectionner une catégorie</option>
              <option v-for="categorie in categories" :key="categorie.id" :value="categorie.id">{{ categorie.libelle }}</option>
            </select>
          </div>
          <div>
            <div>
              <label for="duree">Durée</label>
            </div>
            <input type="time" id="duree" v-model="prestation.duree">
          </div>
        </div>
        <div class="block3">
          <div>
            <div>
              <label for="typePrix">Type de Prix</label>
            </div>
            <select id="typePrix" v-model="prestation.type_prix">
              <option value="">Sélectionner un type de prix</option>
              <option value="fixe">Fixe</option>
              <option value="variable">Variable</option>
            </select>
          </div>
          <div>
            <div>
              <label for="prix">Prix</label>
            </div>
            <input type="number" id="prix" v-model="prestation.prix">
          </div>
        </div>
        <div class="bouton">
          <div>
            <button id="bouton" @click="annuler">Annuler</button>
          </div>
          <div>
            <button id="bouton" @click="enregistrer">Enregistrer</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import DashboardProfessionnel from "../../components/professionnel/DashboardProfessionnel.vue";
import { getCategories } from "@/services/Categorie";
import { getPrestationById, updatePrestation } from "@/services/Prestation";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "ModifierPrestation",
  components: {
    DashboardProfessionnel
  },
  data() {
    return {
      prestation: {
        libelle: "",
        description: "",
        categorie_id: "",
        duree: "",
        type_prestation: "",
        type_prix: "",
        prix: null
      },
      categories: []
    };
  },
  mounted() {
    this.fetchCategories();
    this.fetchPrestation();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await getCategories();
        this.categories = response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories :", error);
      }
    },
    async fetchPrestation() {
      const route = useRouter();
      const prestation = route.params.id; // Récupérer l'ID de la prestation depuis l'URL
      try {
        const response = await getPrestationById(prestation);
        this.prestation = response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération de la prestation :", error);
      }
    },
    async enregistrer() {
      try {
        const response = await updatePrestation(this.prestation.id, this.prestation);
        console.log("Prestation mise à jour avec succès :", response.data);
        this.$router.push("/Professionnel/Prestations"); // Rediriger après la mise à jour
      } catch (error) {
        console.error("Erreur lors de la mise à jour de la prestation :", error);
      }
    },
    annuler() {
      this.$router.push("/Professionnel/Prestations"); // Rediriger vers la liste des prestations
    }
  }
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
  background-color: #B4838D;
  color: #fff;
  padding: 20px;
}

/* Contenu principal */
.main-content {
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
  font-size: 32px;
}

#search, #filter {
  width: 150px;
  height: 55px;
  border-radius: 20px;
  font-size: 32px;
}

.recherche {
  display: flex;
  gap: 30px;
}

#input {
  width: 500px;
  height: 50px;
  border-radius: 10px;
  font-size: 30px;
}

#bouton {
  width: 200px;
  height: 50px;
  font-size: 30px;
  border-radius: 10px;
}

.blockdesc {
  margin-top: 40px;
}

.form {
  width: 1300px;
  margin: 0 auto;
}

#description {
  width: 1050px;
  height: 300px;
  font-size: 30px;
  border-radius: 10px;
}

.block1, .block2, .block3 {
  display: flex;
  gap: 50px;
  margin-top: 40px;
}

.bouton {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}
</style>
