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

export function logout() {
  localStorage.removeItem('token');
  return axios.post(`${apiUrl}logout`);
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
