<template>
  <main>
    <div>
    <img src="/home/ndongba/app_beautyFront/src/assets/images/latino-hair-salon-owner-taking-care-client.jpg" id="proclient">
  </div>
    <div class="form-container mt-4">
      <!-- Sélection du rôle -->
      <div class="role-selection">
        <label for="role" id="role">Choisissez votre profil :</label>
        <select id="role" v-model="user.role" @change="handleRoleChange">
          <option value="">-- Sélectionner --</option>
          <option value= "client">Client</option>
          <option value= "professionnel">Professionnel</option>
        </select>
       
      </div>
     

      <!-- Formulaire d'inscription Client -->
      <form v-if="user.role === 'client'">
        <h1>Pour les clients</h1>
        <p id="para">Créez un compte ou connectez-vous pour réserver et gérer vos rendez-vous.</p>
        <div class="input-group">
          <label for="input-name">Nom</label>
          <input type="text" placeholder="Entrer votre nom et votre Prenom" v-model="user.name" id="input" required>
        </div>
        <div class="input-group">
          <label for="input-address">Adresse</label>
          <input type="text" placeholder="Entrez votre adresse" v-model="user.adresse" id="input" required>
        </div>
        <div class="input-group">
          <label for="input-phone">Téléphone</label>
          <input type="number" v-model="user.telephone" id="input" placeholder="Entrer votre numéro de téléphone" required>
        </div>
        <div class="input-group">
          <label for="input-email">Email</label>
          <input type="email" v-model="user.email" placeholder="Email" id="input" required>
        </div>
        <div class="input-group">
          <label for="input-password">Mot de Passe</label>
          <input type="password" v-model="user.password" id="input" placeholder="Entrer votre mot de passe" required>
        </div>
        <div class="navigation-buttons">
          <button type="button" class="btn btn-primary" @click="register">S'inscrire</button>
        </div>
      </form>

      <!-- Formulaire d'inscription Professionnel avec étapes -->
      <form v-if="user.role === 'professionnel'">
        <div v-if="currentStep === 1">
          <h1>Pour les professionnels</h1>
          <p>Créez un compte ou connectez-vous pour gérer votre entreprise.</p>
          <div class="input-group">
            <label>Email</label>
            <input type="email" v-model="user.email" placeholder="Saisir votre email" id="input" required />
          </div>
          <div class="input-group">
            <label>Mot de Passe</label>
            <input type="password" v-model="user.password" placeholder="Saisir votre mot de passe" id="input" required />
          </div>
          <div class="input-group">
            <label>Nom de l'entreprise</label>
            <input type="text" v-model="user.name" placeholder="Nom de l'entreprise" id="input"required />
          </div>
          <div class="input-group">
            <label for="input-address">Adresse</label>
            <input type="text" placeholder="Entrez votre adresse" v-model="user.adresse" id="input" required>
        </div>
          <div class="input-group">
          <label for="input-phone">Téléphone</label>
          <input type="number" v-model="user.telephone" id="input" placeholder="Entrer votre numéro de téléphone" required>
        </div>
        <div class="input-group">
          <label>Image de Votre Salon</label>
          <input type="file" multiple @change="handleFileUpload($event, 'images')" id="input2" accept="image/*" />
        </div>

          <div class="input-group">
            <label>Registre de Commerce</label>
            <input type="file" @change="handleFileUpload($event, 'registre_commerce')" id="input2"required />
          </div>
          <div class="input-group">
            <label>Ninea</label>
            <input type="file" @change="handleFileUpload($event, 'ninea')" id="input2" required />
          </div>
          <div class="navigation-buttons">
            <button type="button" class="btn btn-primary" @click="nextStep">Suivant</button>
          </div>
        </div>

        <!-- <div v-if="currentStep === 2">
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
        </div> -->

        <div v-if="currentStep === 2">
          <h1>Configuration des Jours et Horaires d'Ouverture</h1>
          <div class="opening-hours">
            <div v-for="(day, index) in weekDays" :key="index" class="day-config">
              <label>
                <input type="checkbox" v-model="day.open" />
                {{ day.name }}
              </label>
              <div v-if="day.open" class="time-select">
              
                <label>Ouverture</label>
              
                <input type="time" v-model="day.openingTime" id="datetime"/>
                
                <label>Fermeture</label>
              
                <input type="time" v-model="day.closingTime" id="datetime"/>
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
  role: '',
  registre_commerce: null,
  ninea: null,
  images: [], // Ajout de cette ligne
  disponibilites: [] // Doit contenir les jours et heures sélectionnés
});

// Étape actuelle du formulaire pour les professionnels
const currentStep = ref(1);

// Méthodes pour la gestion des étapes
const nextStep = () => { if (currentStep.value < 3) currentStep.value++; };
const previousStep = () => { if (currentStep.value > 1) currentStep.value--; };

// Gestion des fichiers uploadés
const handleFileUpload = (event, fileType) => {
if (fileType === 'images') {
  // Stocker les fichiers d'images sélectionnés
  user.value.images = Array.from(event.target.files).slice(0, 3); // Limite à 3 images
} else {
  const file = event.target.files[0];
  if (fileType === 'registre_commerce') user.value.registre_commerce = file;
  else if (fileType === 'ninea') user.value.ninea = file;
}
};




// Sélection de prestation
const selectedPrestations = ref([]);



// Gestion des jours
const weekDays = ref([
  { name: 'lundi', open: false, openingTime: '09:00', closingTime: '18:00' },
  { name: 'mardi', open: false, openingTime: '09:00', closingTime: '18:00' },
  { name: 'mercredi', open: false, openingTime: '09:00', closingTime: '18:00' },
  { name: 'jeudi', open: false, openingTime: '09:00', closingTime: '18:00' },
  { name: 'vendredi', open: false, openingTime: '09:00', closingTime: '18:00' },
  { name: 'samedi', open: false, openingTime: '09:00', closingTime: '18:00' },
  { name: 'dimanche', open: false, openingTime: '09:00', closingTime: '18:00' },
]);

// Fonction pour formater les disponibilités
const formatDisponibilites = () => {
  return weekDays.value
    .filter(day => day.open) // Ne garde que les jours où le salon est ouvert
    .map(day => ({
      jour: day.name,
      heure_ouverture: day.openingTime,
      heure_fermeture: day.closingTime
    }));
};



// const register = async () => {
// try {
//   const formData = new FormData();
//   formData.append('email', user.value.email);
//   formData.append('password', user.value.password);
//   formData.append('name', user.value.name);
//   formData.append('telephone', user.value.telephone);
//   formData.append('adresse', user.value.adresse);
//   formData.append('role', user.value.role);

//   if (user.value.role === 'professionnel') { // Si c'est un professionnel
//     if (user.value.registre_commerce) {
//       formData.append('registre_commerce', user.value.registre_commerce);
//     }
//     if (user.value.ninea) {
//       formData.append('ninea', user.value.ninea);
//     }
//      // Ajouter jusqu'à 3 images dans FormData
//      user.value.images.forEach((image, index) => {
//       formData.append('images[${index}]', image);
//     });

//      // Ajouter les disponibilités formatées
//  const disponibilites = formatDisponibilites();
//       formData.append('disponibilites', JSON.stringify(disponibilites));
//     // formData.append('prestations', JSON.stringify(selectedPrestations.value));
//     // formData.append('openingHours', JSON.stringify(weekDays.value));

    
//   }

//   await axios.post(`${apiUrl}register`, formData);
//   alert("Inscription réussie !");
//   router.push('/Home/login');
// } catch (error) {
//   console.error(error);
//   alert("Erreur lors de l'inscription. Veuillez réessayer.");
// }
// };

const register = async () => {
  try {
    const formData = new FormData();
    formData.append('email', user.value.email);
    formData.append('password', user.value.password);
    formData.append('name', user.value.name);
    formData.append('telephone', user.value.telephone);
    formData.append('adresse', user.value.adresse);
    formData.append('role', user.value.role);

    if (user.value.role === 'professionnel') {
      if (user.value.registre_commerce) {
        formData.append('registre_commerce', user.value.registre_commerce);
      }
      if (user.value.ninea) {
        formData.append('ninea', user.value.ninea);
      }
      
      // Ajouter les images
      user.value.images.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });

      // Formater et ajouter les disponibilités
      const disponibilites = weekDays.value
        .filter(day => day.open)
        .map(day => ({
          jour: day.name,
          heure_ouverture: day.openingTime,
          heure_fermeture: day.closingTime
        }));

      // Important: Ajouter chaque disponibilité individuellement dans le formData
      disponibilites.forEach((dispo, index) => {
        formData.append(`disponibilites[${index}][jour]`, dispo.jour);
        formData.append(`disponibilites[${index}][heure_ouverture]`, dispo.heure_ouverture);
        formData.append(`disponibilites[${index}][heure_fermeture]`, dispo.heure_fermeture);
      });
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
  user.value = { name: '', adresse: '', telephone: '', email: '', password: '', role: user.value.role, registre_commerce: null, ninea: null };
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

#para{
  font-size: 24px;
}

.time-select{
  display: flex;
}
  #input {
  width: 650px;
  height: 50px;
  font-size: 21px;
  border-radius: 10px;
}

#input2{
  font-size: 32px;
}
#datetime{
  width: 200px;
  font-size: 32px;
}
#role{
  font-size: 28px;
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



#proclient{
  width: 700px;
}

label{
  font-size: 32px;
}

.prestation-item:hover {
  transform: scale(1.05);
}

.selected {
  background-color: #4CAF50;
  color: white;
}

main{
  display: flex;
  margin-left: 50px;
  margin-right: 50px;
}

.choice-number {
  position: absolute;
  top: 10px;
  right: 10px;
  font-weight: bold;
}

@media screen and (max-width: 420px) {
  main{
    display: block;
  }

  #proclient{
    width: 350px;
    margin-right: 10px;
    margin-left: 0;
    
  }

  #input{
    width: 320px;
    font-size: 21px;
  }

#input2{
  font-size: 21px;
  width: 300px;
}

.time-select{
  display: block;
  
}
#role{
  font-size: 24px;
}


label{
  font-size: 18px;
}
}



</style>