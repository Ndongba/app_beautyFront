<template>
  <div class="dashboard-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <DashboardProfessionnel />
    </aside>

    <!-- Contenu principal -->
    <main class="main-content">
      <div>
        <div class="recherche">
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Rechercher"
              v-model="searchQuery"
            />
          </div>
          <div>
            <input
              type="text"
              id="filter"
              name="filter"
              placeholder="Filtrer"
              v-model="filter"
            />
          </div>
          <div>
            <img
              src="/home/ndongba/app_beautyFront/src/assets/professionnel/filter 1.svg"
              alt="Filter icon"
            />
          </div>
        </div>

        <div class="form">
          <h2>Ajouter une Prestation</h2>
          <div class="block1">
            <div class="class">
              <div>
                <label for="">Nom de la prestation</label>
              </div>
              <input
                type="text"
                id="input"
                v-model="libelle"
                name="libelle"
                placeholder="Saisir le nom de la prestation"
              />
            </div>
            <div class="class">
              <div>
                <label for="">Type de Prestation</label>
              </div>
              <select id="input" v-model="typePrestation">
                <option value="">Type de Prestation</option>
                <option value="massage">Massage</option>
                <option value="coiffure">Coiffure</option>
              </select>
            </div>
          </div>
          <div class="blockdesc">
            <div>
              <label for="">Description</label>
            </div>
            <textarea
              id="description"
              v-model="description"
              cols="30"
              rows="15"
            ></textarea>
          </div>
          <div class="block2">
            <div>
              <div>
                <label for="">Categorie de la prestation</label>
              </div>
              <select id="input" v-model="categorie_id">
                <option v-for="categorie in categories" :key="categorie.id" :value="categorie.id">
                  {{ categorie.libelle }}
                </option>
              </select>
            </div>
            <div>
              <div>
                <label for="">Durée</label>
              </div>
              <input type="time" v-model="duree" id="input" />
            </div>
          </div>
          <div class="block3">
            <div>
              <div>
                <label for="">Type de Prix</label>
              </div>
              <select id="input" v-model="typePrix">
                <option value="">Type de prix</option>
                <option value="fixe">Fixe</option>
                <option value="variable">Variable</option>
              </select>
            </div>
            <div>
              <div>
                <label for="">Prix</label>
              </div>
              <input type="number" v-model="prix" name="" id="input" />
            </div>
          </div>
          <div class="bouton">
            <div>
              <button id="bouton" @click="resetForm">Annuler</button>
            </div>
            <div>
              <button id="bouton" @click="submitForm">Enregistrer</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import DashboardProfessionnel from "../../components/professionnel/DashboardProfessionnel.vue";
import axios from "axios"; // Import Axios pour envoyer les données
import { getCategories } from '@/services/Categorie';
import { addPrestation } from '@/services/Prestation';
import { getPrestationById } from "@/services/Prestation";

export default {
  name: "AccueilPro",
  components: {
    DashboardProfessionnel,
  },
  data() {
    return {
     /* searchQuery: "",
      filter: "",*/
      nom: "",
      typePrestation: "",
      description: "",
      categorie_id: "",
      categories: [], // Liste des catégories
      duree: "",
      typePrix: "",
      prix: null,
    };
  },
  mounted() {
    this.fetchCategories(); 
  },
  methods: {
    // Méthode pour récupérer les catégories depuis l'API
    async fetchCategories() {
      try {
        const response = await getCategories(); // Appel à la méthode getCategories
        console.log('Catégories récupérées:', response.data); // Affiche la réponse dans la console
        this.categories = response.data; // Assigne les catégories à la variable "categories"
      } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
      }
    },

    
    
    // Méthode pour soumettre le formulaire en JSON
    async submitForm() {
      // Données de la prestation récupérées du formulaire
      const prestation = {
        libelle: this.libelle,
        type_prestation: this.typePrestation,
        description: this.description,
        categorie_id: this.categorie_id, // Envoi de l'ID de la catégorie
        duree: this.duree,
        type_prix: this.typePrix,
        prix: this.prix,
      };

      try {
        // Envoyer les données sous format JSON via une requête POST à l'API
        const response = await addPrestation(prestation);
        console.log("Réponse de l'API:", response.data);
        alert("Prestation ajoutée avec succès !");
        this.resetForm(); // Réinitialiser le formulaire après soumission
      } catch (error) {
        console.error("Erreur lors de la soumission de la prestation:", error);
      }
    },

    // Réinitialiser le formulaire
    resetForm() {
      this.libelle = "";
      this.typePrestation = "";
      this.description = "";
      this.categorie_id = ""; // Réinitialiser l'ID de la catégorie
      this.duree = "";
      this.typePrix = "";
      this.prix = null;
    },
  },

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
  background-color: #b4838d;
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

#search {
  width: 750px;
  height: 60px;
  border-radius: 20px;
  font-size: 32px;
}

#filter {
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

.block1,
.block2,
.block3 {
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
