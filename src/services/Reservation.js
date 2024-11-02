// src/services/prestation.js
import axios from 'axios';
import { apiUrl } from '../config/apiConfig'; // Assurez-vous que l'URL de votre API est bien définie dans apiConfig.js

// Fonction pour récupérer le token d'accès
const getAccessToken = () => {
  return localStorage.getItem('access_token');
};

// Fonction pour récupérer toutes les prestations
export const getReservations = () => {
  return axios.get(`${apiUrl}reservations`, {
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  });
};

// Fonction pour récupérer une prestation par ID
export const getReservationById = (id) => {
  return axios.get(`${apiUrl}reservations/${id}`, {
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  });
};

// Fonction pour récupérer les réservations d'un client
export const getClientReservations = () => {
  return axios.get(`${apiUrl}reservations/client`, {
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  });
};


// Fonction pour ajouter une nouvelle prestation
export const addReservation = (reservation) => {
  return axios.post(`${apiUrl}reservations`, reservation, {
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  });
};

// Fonction pour mettre à jour une prestation existante
export const updateReservation = (id, reservation) => {
  return axios.put(`${apiUrl}reservations/${id}`, reservation, {
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  });
};

// Fonction pour supprimer une prestation par ID
export const cancelReservation = (reservationId) => {
  return axios.delete(`${apiUrl}reservations/${reservationId}`, {
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  });
};

