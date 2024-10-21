<template>
    <div class="search-bar">
      <!-- Barre de recherche avec plusieurs champs -->
      <form @submit.prevent="onSearch">
        <div class="search-field">
          
          <input id="input" type="text" v-model="filters.name" placeholder="Etablissement" />
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
    margin-top: 200px;
    
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
    width: 350px;
    height: 70px;
    font-size: 32px;
    border-radius: 20px
    
  }

  @media screen and (max-width: 420px){
    #input{
      margin-top: 5px;
    }

    button{
      margin-top: 20px;
      width: 125px;
      font-size: 21px;
      height: 40px;
      padding-top: none;
    }
  }
  </style>
  