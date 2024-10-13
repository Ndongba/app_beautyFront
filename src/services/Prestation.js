// src/services/prestation.js
import axios from 'axios';
import { apiUrl } from '../config/apiConfig'; // Assurez-vous que l'URL de votre API est bien définie dans apiConfig.js

// Fonction pour récupérer toutes les prestations
export const getPrestations = () => {
  return axios.get(`${apiUrl}prestations`);
};

// Fonction pour récupérer une prestation par ID
export const getPrestationById = (id) => {
  return axios.get(`${apiUrl}prestations/${id}`);
};

// Fonction pour ajouter une nouvelle prestation
export const addPrestation = (prestation) => {
  return axios.post(`${apiUrl}prestations`, prestation, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
// Fonction pour mettre à jour une prestation existante
export const updatePrestation = (id, prestation) => {
  return axios.put(`${apiUrl}prestations/${id}`, prestation);
};

// Fonction pour supprimer une prestation par ID
export const deletePrestation = (id) => {
  return axios.delete(`${apiUrl}prestations/${id}`);
};
