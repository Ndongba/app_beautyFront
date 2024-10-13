// src/services/prestation.js
import axios from 'axios';
import { apiUrl } from '../config/apiConfig'; // Assurez-vous que l'URL de votre API est bien définie dans apiConfig.js

// Fonction pour récupérer toutes les prestations
// export const getCategories = () => {
//   return axios.get(`${apiUrl}categories`);
// };

export const getCategories = () => {
    console.log('Fetching categories from API...');
    return axios.get(`${apiUrl}categories`)
      .then(response => {
        console.log('API Response:', response.data); // Affiche les données reçues
        return response;
      })
      .catch(error => {
        console.error('Error fetching categories:', error); // En cas d'erreur
        throw error;
      });
  };
  
  
// Fonction pour récupérer une prestation par ID
export const getCategorieById = (categorie) => {
  return axios.get(`${apiUrl}categories/${categorie}`);
};

// Fonction pour ajouter une nouvelle prestation
export const addCategorie = (categorie) => {
  return axios.post(`${apiUrl}categories`, categorie);
};

// Fonction pour mettre à jour une prestation existante
export const updateCategorie = (categorie) => {
  return axios.put(`${apiUrl}categories/${categorie}`, categorie);
};

// Fonction pour supprimer une prestation par ID
export const deleteCategorie = (categorie) => {
  return axios.delete(`${apiUrl}categories/${categorie}`);
};