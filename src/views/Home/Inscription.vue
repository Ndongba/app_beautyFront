<template>
    <main>
      <div class="form-container mt-4">
        <!-- Sélection du rôle -->
        <div class="role-selection">
          <label for="role">Choisissez votre rôle :</label>
          <select id="role" v-model="user.role_id" @change="handleRoleChange">
            <option value="">-- Sélectionner --</option>
            <option value= "2">Client</option>
            <option value= "3">Professionnel</option>
          </select>
        </div>
  
        <!-- Formulaire d'inscription Client -->
        <form v-if="user.role_id === '2'">
          <h1>Pour les clients</h1>
          <p>Créez un compte ou connectez-vous pour réserver et gérer vos rendez-vous.</p>
          <div class="input-group">
            <label for="input-name">Nom</label>
            <input type="text" placeholder="Entrer votre nom et votre Prenom" v-model="user.name" id="input-name" required>
          </div>
          <div class="input-group">
            <label for="input-address">Adresse</label>
            <input type="text" placeholder="Entrez votre adresse" v-model="user.adresse" id="input-address" required>
          </div>
          <div class="input-group">
            <label for="input-phone">Téléphone</label>
            <input type="number" v-model="user.telephone" id="input-phone" placeholder="Entrer votre numéro de téléphone" required>
          </div>
          <div class="input-group">
            <label for="input-email">Email</label>
            <input type="email" v-model="user.email" placeholder="Email" id="input-email" required>
          </div>
          <div class="input-group">
            <label for="input-password">Mot de Passe</label>
            <input type="password" v-model="user.password" id="input-password" placeholder="Entrer votre mot de passe" required>
          </div>
          <div class="navigation-buttons">
            <button type="button" class="btn btn-primary" @click="register">S'inscrire</button>
          </div>
        </form>
  
        <!-- Formulaire d'inscription Professionnel avec étapes -->
        <form v-if="user.role_id === '3'">
          <div v-if="currentStep === 1">
            <h1>Pour les professionnels</h1>
            <p>Créez un compte ou connectez-vous pour gérer votre entreprise.</p>
            <div class="input-group">
              <label>Email</label>
              <input type="email" v-model="user.email" placeholder="Saisir votre email" required />
            </div>
            <div class="input-group">
              <label>Mot de Passe</label>
              <input type="password" v-model="user.password" placeholder="Saisir votre mot de passe" required />
            </div>
            <div class="input-group">
              <label>Nom de l'entreprise</label>
              <input type="text" v-model="user.name" placeholder="Nom de l'entreprise" required />
            </div>
            <div class="input-group">
              <label>Registre de Commerce</label>
              <input type="file" @change="handleFileUpload($event, 'registre_commerce')" required />
            </div>
            <div class="input-group">
              <label>Ninea</label>
              <input type="file" @change="handleFileUpload($event, 'ninea')" required />
            </div>
            <div class="navigation-buttons">
              <button type="button" class="btn btn-primary" @click="nextStep">Suivant</button>
            </div>
          </div>
  
          <div v-if="currentStep === 2">
            <h1>Sélectionnez les prestations que vous proposez</h1>
            <div class="prestations-list">
              <div
                v-for="(prestation, index) in prestations"
                :key="index"
                :class="['prestation-item', { selected: isSelected(prestation.name) }]"
                @click="togglePrestation(prestation.name)"
              >
                <img :src="prestation.image" :alt="prestation.name" class="prestation-image">
                <div class="prestation-name">{{ prestation.name }}</div>
                <span v-if="isSelected(prestation.name)" class="choice-number">{{ getSelectionNumber(prestation.name) }}</span>
              </div>
            </div>
            <div class="navigation-buttons">
              <button type="button" class="btn btn-secondary" @click="previousStep">Précédent</button>
              <button type="button" class="btn btn-primary" @click="nextStep">Suivant</button>
            </div>
          </div>
  
          <div v-if="currentStep === 3">
            <h1>Configuration des Jours et Horaires d'Ouverture</h1>
            <div class="opening-hours">
              <div v-for="(day, index) in weekDays" :key="index" class="day-config">
                <label>
                  <input type="checkbox" v-model="day.open" />
                  {{ day.name }}
                </label>
                <div v-if="day.open" class="time-select">
                  <label>Ouverture</label>
                  <input type="time" v-model="day.openingTime" />
                  <label>Fermeture</label>
                  <input type="time" v-model="day.closingTime" />
                </div>
              </div>
            </div>
            <div class="navigation-buttons">
              <button type="button" class="btn btn-secondary" @click="previousStep">Précédent</button>
              <button type="button" class="btn btn-primary" @click="register">Terminer</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  import { apiUrl } from '@/config/apiConfig';
  
  const router = useRouter();
  
  // Variable de rôle sélectionné
  const user = ref({
    name: '',
    adresse: '',
    telephone: '',
    email: '',
    password: '',
    role_id: '',
    registre_commerce: null,
    ninea: null,
  });
  
  // Étape actuelle du formulaire pour les professionnels
  const currentStep = ref(1);
  
  // Méthodes pour la gestion des étapes
  const nextStep = () => { if (currentStep.value < 3) currentStep.value++; };
  const previousStep = () => { if (currentStep.value > 1) currentStep.value--; };
  
  // Gestion des fichiers uploadés
  const handleFileUpload = (event, fileType) => {
    const file = event.target.files[0];
    if (fileType === 'registre_commerce') user.value.registre_commerce = file;
    else if (fileType === 'ninea') user.value.ninea = file;
  };
  
  // Liste des prestations
  const prestations = ref([
    { name: 'Salon de Coiffure', image: '/path/to/image1.svg' },
    { name: 'Salon Manucure', image: '/path/to/image2.svg' },
    { name: 'Salon Pédicure', image: '/images/pedicure.svg' },
    { name: 'Soins du Visage', image: '/images/soins_visage.svg' },
    { name: 'Maquillage', image: '/images/maquillage.svg' },
    { name: 'Soins Capillaires', image: '/images/soins_capillaires.svg' },
    { name: 'Massage', image: '/images/massage.svg' },
    { name: 'Spa', image: '/images/spa.svg' },
    { name: 'Épilation', image: '/images/epilation.svg' },
    { name: 'Barbier', image: '/images/barbier.svg' },
    { name: 'Tatouage', image: '/images/tatouage.svg' },
  ]);
  
  // Sélection de prestation
  const selectedPrestations = ref([]);
  
  // Ajout ou retrait d'une prestation sélectionnée
  const togglePrestation = (prestationName) => {
    const index = selectedPrestations.value.findIndex(p => p.name === prestationName);
    if (index === -1) {
      selectedPrestations.value.push({ name: prestationName, count: 1 });
    } else {
      selectedPrestations.value.splice(index, 1);
    }
  };
  
  // Vérifie si une prestation est sélectionnée
  const isSelected = (prestationName) => selectedPrestations.value.some(p => p.name === prestationName);
  
  // Obtenir le nombre de fois qu'une prestation est sélectionnée
  const getSelectionNumber = (prestationName) => selectedPrestations.value.find(p => p.name === prestationName)?.count || 0;
  
  // Gestion des jours
  const weekDays = ref([
    { name: 'Lundi', open: false, openingTime: '09:00', closingTime: '18:00' },
    { name: 'Mardi', open: false, openingTime: '09:00', closingTime: '18:00' },
    { name: 'Mercredi', open: false, openingTime: '09:00', closingTime: '18:00' },
    { name: 'Jeudi', open: false, openingTime: '09:00', closingTime: '18:00' },
    { name: 'Vendredi', open: false, openingTime: '09:00', closingTime: '18:00' },
    { name: 'Samedi', open: false, openingTime: '09:00', closingTime: '18:00' },
    { name: 'Dimanche', open: false, openingTime: '09:00', closingTime: '18:00' },
  ]);
  
  // Inscription
  // const register = async () => {
  //   try {
  //     const formData = new FormData();
  //     Object.keys(user.value).forEach(key => {
  //       formData.append(key, user.value[key]);
  //     });

      
  //     formData.append('prestations', JSON.stringify(selectedPrestations.value));
  //     formData.append('openingHours', JSON.stringify(weekDays.value));
  
  //     await axios.post(`${apiUrl}register`, formData);
  //     alert("Inscription réussie !");
  //     router.push('/Home/login');
  //   } catch (error) {
  //     console.error(error);
  //     alert("Erreur lors de l'inscription. Veuillez réessayer.");
  //   }
  // };

  const register = async () => {
  try {
    const formData = new FormData();
    formData.append('email', user.value.email);
    formData.append('password', user.value.password);
    formData.append('name', user.value.name);
    formData.append('telephone', user.value.telephone);
    formData.append('adresse', user.value.adresse);
    formData.append('role_id', user.value.role_id);

    if (user.value.role_id === '3') { // Si c'est un professionnel
      if (user.value.registre_commerce) {
        formData.append('registre_commerce', user.value.registre_commerce);
      }
      if (user.value.ninea) {
        formData.append('ninea', user.value.ninea);
      }
      formData.append('prestations', JSON.stringify(selectedPrestations.value));
      formData.append('openingHours', JSON.stringify(weekDays.value));
    }

    await axios.post(`${apiUrl}register`, formData);
    alert("Inscription réussie !");
    router.push('/Home/login');
  } catch (error) {
    console.error(error);
    alert("Erreur lors de l'inscription. Veuillez réessayer.");
  }
};

  
  // Gérer le changement de rôle
  const handleRoleChange = () => {
    // Réinitialiser l'état à chaque changement de rôle
    user.value = { name: '', addresse: '', telephone: '', email: '', password: '', role_id: user.value.role_id, registre_commerce: null, ninea: null };
    selectedPrestations.value = [];
    currentStep.value = 1; // Remettre à l'étape 1
  };
  </script>
  
  <style scoped>
  .form-container {
    max-width: 600px;
    margin: auto;
  }
  
  .input-group {
    margin-bottom: 1em;
  }
  
  .prestations-list {
    display: flex;
    flex-wrap: wrap;
  }
  
  .prestation-item {
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 0.5em;
    padding: 1em;
    width: 150px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .prestation-item:hover {
    transform: scale(1.05);
  }
  
  .selected {
    background-color: #4CAF50;
    color: white;
  }
  
  .choice-number {
    position: absolute;
    top: 10px;
    right: 10px;
    font-weight: bold;
  }
  </style>
  