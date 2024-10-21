import axios from 'axios';
import { apiUrl } from '@/config/apiConfig';

export default {
  async getProprestationId(professionnelId, prestationIds) {
    try {
      const response = await axios.post(`${apiUrl}proprestations/${professionalId}`, {
        professionnel_id: professionnelId,
        prestation_ids: prestationIds
      });
      return response.data.proprestation_id; // Supposons que l'API renvoie l'ID proprestation
    } catch (error) {
      console.error('Erreur lors de la récupération du proprestation_id:', error);
      throw error;
    }
  }
};
