<template>
  <main>
    <div>
      <img src="@/assets/images/latino-hair-salon-owner-taking-care-client.jpg" id="proclient">
    </div>
    <div class="form-container mt-4">
      
      <div class="role-selection">
        <label for="role" id="role">Choisissez votre profil :</label>
        <select class="form-select" aria-label="Default select example" id="role" v-model="user.role" @change="handleRoleChange">
          <option value="">-- Sélectionner --</option>
          <option value="client">Client</option>
          <option value="professionnel">Professionnel</option>
        </select>
      </div>

      <!-- Formulaire d'inscription Client -->
      <form v-if="user.role === 'client'">
        <h2>Pour les clients</h2>
        <p id="para">Créez un compte et connectez-vous pour réserver et gérer vos rendez-vous.</p>
        <div class="formclient" style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
        <div class="mb-3">
          <label for="input-name" class="form-label">Nom</label>
          <input type="text" class="form-control" placeholder="Entrer votre nom et votre Prénom" v-model="user.name" id="input1" required>
          <div v-if="errors.name" class="text-danger">{{ errors.name }}</div>
        </div>
        <div class="mb-3">
          <label for="input-address" class="form-label">Adresse</label>
          <input type="text" class="form-control" placeholder="Entrez votre adresse" v-model="user.adresse" id="input1" required>
          <div v-if="errors.adresse" class="text-danger">{{ errors.adresse }}</div>
        </div>
        <div class="mb-3">
          <label for="input-address" class="form-label">Téléphone</label>
          <input type="number" class="form-control" v-model="user.telephone" id="input1" placeholder="Entrer votre numéro de téléphone" required>
          <div v-if="errors.telephone" class="text-danger">{{ errors.telephone }}</div>
        </div>
        <div class="mb-3">
          <label for="input-email" class="form-label">Email</label>
          <input type="email" class="form-control" v-model="user.email" placeholder="Veuillez entrer votre Email" id="input1" required>
          <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
        </div>
        <div class="mb-3">
          <label for="input-password" class="form-label">Mot de Passe</label>
          <input type="password" class="form-control" v-model="user.password" id="input1" placeholder="Entrer votre mot de passe" required>
          <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
        </div>
        <div class="navigation-buttons">
          <button type="button" class="btn btn-primary" @click="validateClientForm">S'inscrire</button>
        </div>
      </div>
      </form>

      <!-- Formulaire d'inscription Professionnel avec étapes -->
      <form v-if="user.role === 'professionnel'">
        <div v-if="currentStep === 1">
          <h2>Pour les professionnels</h2>
          <p>Créez un compte et connectez-vous pour gérer votre entreprise.</p>
          <div class="formpro" style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
          <div class="mb-3">
            <label for="input-email" class="form-label">Email</label>
            <input type="email" class="form-control" v-model="user.email" placeholder="Veuillez entrer votre Email" id="input" required>
            <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
          </div>
          <div class="mb-3">
            <label for="input-password" class="form-label">Mot de Passe</label>
            <input type="password" class="form-control" v-model="user.password" id="input" placeholder="Entrer votre mot de passe" required>
            <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
          </div>
          <div class="mb-3">
            <label for="input-name" class="form-label">Nom de l'entreprise</label>
            <input type="text" class="form-control" v-model="user.name" placeholder="Nom de l'entreprise" id="input" required />
            <div v-if="errors.name" class="text-danger">{{ errors.name }}</div>
          </div>
          <div class="mb-3">
            <label for="input-address" class="form-label">Adresse</label>
            <input type="text" class="form-control" placeholder="Entrez votre adresse" v-model="user.adresse" id="input" required>
            <div v-if="errors.adresse" class="text-danger">{{ errors.adresse }}</div>
          </div>
          <div class="mb-3">
            <label for="input-address" class="form-label">Téléphone</label>
            <input type="number" class="form-control" v-model="user.telephone" id="input" placeholder="Entrer votre numéro de téléphone" required>
            <div v-if="errors.telephone" class="text-danger">{{ errors.telephone }}</div>
          </div>
          <div class="mb-3">
            <label for="formFileMultiple" class="form-label">Image de Votre Salon</label>
            <input class="form-control" type="file" multiple @change="handleFileUpload($event, 'images')" id="input2" accept="image/*">
            <div v-if="errors.images" class="text-danger">{{ errors.images }}</div>
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">REGISTRE DE COMMERCE</label>
            <input class="form-control" type="file" @change="handleFileUpload($event, 'registre_commerce')" id="input2" required>
            <div v-if="errors.registre_commerce" class="text-danger">{{ errors.registre_commerce }}</div>
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">NINEA</label>
            <input class="form-control" type="file" @change="handleFileUpload($event, 'ninea')" id="input2" required>
            <div v-if="errors.ninea" class="text-danger">{{ errors.ninea }}</div>
          </div>
          <div class="navigation-buttons">
            <button type="button" class="btn btn-primary" @click="validateProfessionalForm">Suivant</button>
          </div>
        </div>
        </div>

        <div v-if="currentStep === 2">
          <h2>Configuration des Jours et Horaires d'Ouverture</h2>
          <div class="opening-hours">
            <div v-for="(day, index) in weekDays" :key="index" class="day-config">
              <label>
                <input type="checkbox" v-model="day.open" />
                {{ day.name }}
              </label>
              <div v-if="day.open" class="time-select">
                <label>Ouverture</label>
                <input type="time" v-model="day.openingTime" id="datetime" />
                <label>Fermeture</label>
                <input type="time" v-model="day.closingTime" id="datetime" />
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

const errors = ref({});

// Validation des formulaires
const validateClientForm = () => {
  errors.value = {};
  if (!user.value.name) errors.value.name = 'Nom est requis.';
  if (!user.value.adresse) errors.value.adresse = 'Adresse est requise.';
  if (!user.value.telephone) {
    errors.value.telephone = 'Téléphone est requis.';
  } else if (!/^\+?[1-9]\d{1,14}$/.test(user.value.telephone)) {
    errors.value.telephone = 'Numéro de téléphone invalide.';
  }
  if (!user.value.email) {
    errors.value.email = 'Email est requis.';
  } else if (!/\S+@\S+\.\S+/.test(user.value.email)) {
    errors.value.email = 'Email invalide.';
  }
  if (!user.value.password) errors.value.password = 'Mot de passe est requis.';

  if (Object.keys(errors.value).length === 0) {
    register();
  }
};

const validateProfessionalForm = () => {
  errors.value = {};
  if (!user.value.name) errors.value.name = 'Nom de l\'entreprise est requis.';
  if (!user.value.adresse) errors.value.adresse = 'Adresse est requise.';
  if (!user.value.telephone) {
    errors.value.telephone = 'Téléphone est requis.';
  } else if (!/^\+?[1-9]\d{1,14}$/.test(user.value.telephone)) {
    errors.value.telephone = 'Numéro de téléphone invalide.';
  }
  if (!user.value.email) {
    errors.value.email = 'Email est requis.';
  } else if (!/\S+@\S+\.\S+/.test(user.value.email)) {
    errors.value.email = 'Email invalide. ';
  }
  if (!user.value.password) errors.value.password = 'Mot de passe est requis.';
  if (!user.value.registre_commerce) errors.value.registre_commerce = 'Le registre de commerce est requis.';
  if (!user.value.ninea) errors.value.ninea = 'Le numéro NINEA est requis.';
  if (!user.value.images.length) errors.value.images = 'Au moins une image est requise.';

  if (Object.keys(errors.value).length === 0) {
    nextStep();
  }
};

const handleRoleChange = () => {
  user.value.name = '';
  user.value.adresse = '';
  user.value.telephone = '';
  user.value.email = '';
  user.value.password = '';
};

// Fonction pour gérer l'upload des fichiers
const handleFileUpload = (event, field) => {
  const files = event.target.files;
  if (files.length > 0) {
    if (field === 'images') {
      user.value.images = Array.from(files); // Stockage des images
    } else {
      user.value[field] = files[0]; // Stockage du fichier unique
    }
  }
};

const weekDays = ref([
  { name: 'Lundi', open: false, openingTime: '', closingTime: '' },
  { name: 'Mardi', open: false, openingTime: '', closingTime: '' },
  { name: 'Mercredi', open: false, openingTime: '', closingTime: '' },
  { name: 'Jeudi', open: false, openingTime: '', closingTime: '' },
  { name: 'Vendredi', open: false, openingTime: '', closingTime: '' },
  { name: 'Samedi', open: false, openingTime: '', closingTime: '' },
  { name: 'Dimanche', open: false, openingTime: '', closingTime: '' }
]);

const currentStep = ref(1);

const nextStep = () => {
  currentStep.value++;
};

const previousStep = () => {
  currentStep.value--;
};

const register = async () => {
  // Logique d'inscription
  const formData = new FormData();
  for (const key in user.value) {
    formData.append(key, user.value[key]);
  }

  // Suppression de user.value.registre_commerce et user.value.ninea
  formData.append('registre_commerce', user.value.registre_commerce);
  formData.append('ninea', user.value.ninea);

  try {
    const response = await fetch(`${apiUrl}register`, {
      method: 'POST',
      body: formData
    });
    if (response.ok) {
      // Inscription réussie
      const data = await response.json();
      console.log(data);
      router.push('/'); // Redirection après l'inscription
    } else {
      // Gérer les erreurs ici
      console.error('Erreur lors de l\'inscription', response);
    }
  } catch (error) {
    console.error('Erreur lors de l\'inscription', error);
  }
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
  font-size: 20px;
}

.time-select{
  display: flex;
}

.formclient{
  padding: 40px;
 border-radius: 30px;
}

.formpro{
  padding: 40px;
  border-radius: 30px;
  
}

#input1{
   width: 550px;
  height: 50px;
  font-size: 21px;
  border-radius: 10px;
}
  #input {
  width: 550px;
  height: 50px;
  font-size: 21px;
  border-radius: 10px;
}
.opening-hours {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Répartir en colonnes flexibles */
  gap: 15px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
}

.day-config {
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.day-config label {
  font-size: 1.7rem;
  color: #333;
  font-weight: 500;
}

input[type="checkbox"] {
  margin-right: 8px;
}

.time-select {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 10px;
}

.time-select label {
  font-size: 1.5rem;
  color: #555;
  text-align: left;
}

.time-select input[type="time"] {
  padding: 8px;
  font-size: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

#input2{
  font-size: 20px;
}

#role{
  font-size: 20px;
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

.btn{
  margin-top: 50px;
  gap: 30px;
}


#proclient{
  width: 700px;
}

label{
  font-size: 18px;
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
.text-danger {
  font-size: 20px;
  color: red; /* Couleur rouge pour les messages d'erreur */
  margin-top: 5px; /* Espacement au-dessus des messages d'erreur */
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
    width: 300px;
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

/* .formpro{
  width: 22rem;
  padding: 40px;
  border-radius: 30px;
 
  
} */
#input1{
   width: 250px;
  height: 50px;
  font-size: 21px;
  border-radius: 10px;
}


label{
  font-size: 18px;
}
}



</style>