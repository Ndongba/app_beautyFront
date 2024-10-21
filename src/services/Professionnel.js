import axios from 'axios';
import { apiUrl } from '@/config/apiConfig'; // Assurez-vous que le chemin est correct

// Fonction pour récupérer le token d'accès
const getAccessToken = () => {
    return localStorage.getItem('access_token');
};


// Fonction pour récupérer les prestations d'un professionnel par ID
export const getProfessionnelById = (id) => {
    return axios.get(`${apiUrl}professionnels/${id}`, {
      headers: {
        'Authorization': `Bearer ${getAccessToken()}`,
      },
    });
  };


// Fonction pour récupérer les prestations d'un professionnel par ID
export const getProfessionnels =  () => {
    return axios.get(`${apiUrl}professionnels`, {
      headers: {
        'Authorization': `Bearer ${getAccessToken()}`,
      },
    });
  };



