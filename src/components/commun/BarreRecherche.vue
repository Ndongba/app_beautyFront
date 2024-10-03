<template>
    <div class="search-bar">
      <!-- Barre de recherche avec plusieurs champs -->
      <form @submit.prevent="onSearch">
        <div class="search-field">
          
          <input id="input" type="text" v-model="filters.name" placeholder="Etablissement" />
        </div>
  
        <div class="search-field">
          
          <input id="input" type="text" v-model="filters.category" placeholder="Position actuelle" />
        </div>
  
        <div class="search-field">
          
          <input id="input" type="date" v-model="filters.location" placeholder="Date " />
        </div>
  
        <div class="search-field">
          
          <input id="input" type="time" v-model="filters.rating" placeholder="Heure" min="0" max="5" />
        </div>
  
        <button type="submit">Rechercher</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'MultiSearchBar',
    setup() {
      // Définir les filtres comme un objet réactif
      const filters = ref({
        name: '',
        category: '',
        location: '',
        rating: ''
      });
  
      // Méthode pour gérer la soumission du formulaire
      const onSearch = () => {
        console.log('Valeurs de recherche :', filters.value);
        // Vous pouvez utiliser ces valeurs pour déclencher une recherche ou filtrer vos données
      };
  
      return {
        filters,
        onSearch
      };
    }
  };
  </script>
  
  <style scoped>
  /* Ajouter du style basique pour la barre de recherche */
  .search-bar {
    display: flex;
    justify-content: center;
    margin: 20px;
    
    
  }
  
  form {
    display: flex;
    flex-wrap: wrap;
    gap: 0;
    
  }
  
  .search-field {
    display: flex;
    flex-direction: column;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  button {
    align-self: flex-start;
    padding: 5px 10px;
    cursor: pointer;
    width: 250px;
    height: 70px;
    font-size: 32px;
    border-radius: 10px;
    background-color: #FFCDB3;
  }

  #input{
    width: 400px;
    height: 70px;
    font-size: 32px;
    
  }
  </style>
  