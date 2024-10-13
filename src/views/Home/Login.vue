<template>
    <main>
      <div class="principal">
        <div>
          <!-- <img src=""/> -->
        </div>
        <div class="class">
          <h1>Connectez-vous</h1>
          <div>
            <label for="email">Email</label>
            <input type="email" id="input" v-model="credentials.email" placeholder="Entrer votre email" required />
          </div>
          <div>
            <label for="password">Mot de Passe</label>
            <input type="password" id="input2" v-model="credentials.password" placeholder="Entrer votre mot de passe" required />
          </div>
          <div>
            <button id="button" @click="login">Se Connecter</button>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AuthService from '@/services/AuthService';


// import AuthService from '../../services/AuthService';
  
  const credentials = ref({
    email: '',
    password: '',
  });
  
  const router = useRouter();
  
  async function login() {
    try {
      const response = await AuthService.login(credentials.value);
      console.log('rrrr', response);
      
      alert('Connexion réussie');
      
      
      // Redirection basée sur le rôle de l'utilisateur
      if (response.user.role_id === 1) {
        router.push('/admin-dashboard');
      } else if (response.user.role_id === 3) {
        router.push('/Professionnel/Acceuil');
      } else if (response.user.role_id === 2) {
        router.push('/Acceuil/Client');

      } else {
        throw new Error('Rôle non supporté');
      }
    } catch (error) {
      alert('Erreur lors de la connexion. Veuillez vérifier vos informations.');
     
      
    }
  }
  </script>
  
  <style scoped>
  #image {
    height: 100%;
  }
  
  #input {
    width: 650px;
    height: 50px;
    font-size: 30px;
    border-radius: 10px;
  }
  
  label {
    font-size: 32px;
    margin-top: 50px;
  }
  
  .principal {
    display: flex;
    gap: 100px;
  }
  
  #button {
    width: 650px;
    height: 50px;
    font-size: 30px;
    border-radius: 10px;
    margin-top: 100px;
    background-color: #ffcdb3;
  }

  #input2{
    width: 650px;
    height: 50px;
    font-size: 30px;
    border-radius: 10px;
  }
  </style>
  