import axios from 'axios';
import { apiUrl } from '../config/apiConfig'; // Assurez-vous que l'URL de votre API est bien définie dans apiConfig.js

// Fonction pour récupérer le token d'accès
const getAccessToken = () => {
  return localStorage.getItem('access_token');
};

// Fonction pour récupérer toutes les prestations
export const getDisponibiltes = () => {
  return axios.get(`${apiUrl}disponibiltes`, {
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  });
};

// Fonction pour récupérer une prestation par ID
export const getDisponibiliteById = (id) => {
  return axios.get(`${apiUrl}disponibilites/${id}`, {
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  });
};


// Fonction pour récupérer les disponibilités d'un professionnel par ID
export const getDisponibilteByProfessionnel = (professionnelId) => {
  console.log(`Récupération des disponibilités pour le professionnel ID : ${professionnelId}`);
  return axios.get(`${apiUrl}disponibilites/professionnel/${professionnelId}`, {
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  });
};

// Fonction pour ajouter une nouvelle prestation
export const addDisponibilte = (prestation) => {
  return axios.post(`${apiUrl}disponibilte`, prestation, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  });
};

// Fonction pour mettre à jour une prestation existante
export const updateDisponibilte = (id, disponibilte) => {
  return axios.put(`${apiUrl}disponibiltes/${id}`, disponibilte, {
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  });
};

// Fonction pour supprimer une prestation par ID
export const deleteDisponibilte = (id) => {
  return axios.delete(`${apiUrl}disponibiltes/${id}`, {
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  });
};
