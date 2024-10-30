import axios from 'axios';
import { apiUrl } from '../config/apiConfig'; // Importation de l'URL de base

export async function register(user) {
  try {
    const response = await axios.post(`${apiUrl}register`, user);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
}

export async function login(credentials) {
  try {
    const response = await axios.post(`${apiUrl}login`, credentials);
    // Sauvegarder le token dans le localStorage
    if (response.data.access_token) {
      localStorage.setItem('token', response.data.access_token);
      
    }
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
}

// export function logout() {
//   localStorage.removeItem('token');
//   return axios.post(`${apiUrl}logout`);
// }

export async function logout() {
  const token = localStorage.getItem('token');

  // Si le token n'existe pas, avertir l'utilisateur et quitter la fonction
  if (!token) {
    console.warn("Aucun token trouvé dans le localStorage.");
    return Promise.reject(new Error("Token non trouvé"));
  }

  try {
    const response = await axios.post(`${apiUrl}logout`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  
    // Retirer le token après la déconnexion réussie
    localStorage.removeItem('token');
    return response;
  } catch (error) {
    console.error("Erreur lors de la déconnexion :", error);
    throw error;
  }

}
export function isLoggedIn() {
  return !!localStorage.getItem('token');
}

export async function getUserProfile() {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }
    const response = await axios.get(`${apiUrl}me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch user profile');
  }
}

// Fonction pour obtenir tous les utilisateurs
export async function getAllUsers() {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${apiUrl}roles`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch users');
  }
}
