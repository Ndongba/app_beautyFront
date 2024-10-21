import axios from 'axios';
import { apiUrl } from '../config/apiConfig'; // Assurez-vous que l'URL de votre API est bien définie dans apiConfig.js

// Fonction pour récupérer le token d'accès
const getAccessToken = () => {
  return localStorage.getItem('access_token');
};

// Fonction pour récupérer toutes les prestations
export const getPrestations = () => {
  return axios.get(`${apiUrl}prestations`, {
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  });
};

// Fonction pour récupérer une prestation par ID
export const getPrestationById = (id) => {
  return axios.get(`${apiUrl}prestations/${id}`, {
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  });
};

// Fonction pour récupérer les prestations d'un professionnel par ID
export const getPrestationByProfessionnel = (id) => {
  return axios.get(`${apiUrl}professionnel/prestations/${id}`, {
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  });
};

// Fonction pour ajouter une nouvelle prestation
export const addPrestation = (prestation) => {
  return axios.post(`${apiUrl}prestations`, prestation, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  });
};

// Fonction pour mettre à jour une prestation existante
export const updatePrestation = (id, prestation) => {
  return axios.put(`${apiUrl}prestations/${id}`, prestation, {
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  });
};

// Fonction pour supprimer une prestation par ID
export const deletePrestation = (id) => {
  return axios.delete(`${apiUrl}prestations/${id}`, {
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  });
};
