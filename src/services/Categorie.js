import axios from 'axios';
import { apiUrl } from '../config/apiConfig'; // Assurez-vous que l'URL de votre API est bien définie dans apiConfig.js

// Fonction pour récupérer le token d'accès
const getAccessToken = () => {
  return localStorage.getItem('access_token');
};

// Fonction pour récupérer toutes les catégories
export const getCategories = () => {
  console.log('Fetching categories from API...');
  return axios.get(`${apiUrl}categories`, {
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  })
  .then(response => {
    console.log('API Response:', response.data); // Affiche les données reçues
    return response;
  })
  .catch(error => {
    console.error('Error fetching categories:', error); // En cas d'erreur
    throw error;
  });
};

// Fonction pour récupérer une catégorie par ID
export const getCategorieById = (categorie) => {
  return axios.get(`${apiUrl}categories/${categorie}`, {
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  });
};

// Fonction pour ajouter une nouvelle catégorie
export const addCategorie = (categorie) => {
  return axios.post(`${apiUrl}categories`, categorie, {
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
      'Content-Type': 'application/json',
    },
  });
};

// Fonction pour mettre à jour une catégorie existante
export const updateCategorie = (categorie) => {
  return axios.put(`${apiUrl}categories/${categorie.id}`, categorie, {
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
      'Content-Type': 'application/json',
    },
  });
};

// Fonction pour supprimer une catégorie par ID
export const deleteCategorie = (categorie) => {
  return axios.delete(`${apiUrl}categories/${categorie}`, {
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  });
};
