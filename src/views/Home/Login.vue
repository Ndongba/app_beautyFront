<template>
    <main>
      <div class="principal">
        <div>
          <img src="/home/ndongba/app_beautyFront/src/assets/client/surprised-african-woman-covering-her-mouth-by-hand-while-looking-smartphone-screen.svg" id="image">
        </div>
        <div class="form">
          <h1 id="titre">Connectez-vous</h1>
          <div>
            <div>
            <label for="email">Email</label>
          </div>
            <input type="email" id="input" v-model="credentials.email" placeholder="Entrer votre email" required />
          </div>
          <div>
            <div>
            <label for="password">Mot de Passe</label>
          </div>
            <input type="password" id="input2" v-model="credentials.password" placeholder="Entrer votre mot de passe" required />
          </div>
          <div>
            <button id="button" @click="performLogin">Se Connecter</button>
          </div>
          <p>Vous n'avez-pas de compte 
            <a href="/Home/Inscription">S'inscrire</a>
          </p>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { login as apiLogin } from '@/services/AuthService'; // Renommage de l'importation pour éviter le conflit
  
  const credentials = ref({
    email: '',
    password: '',
  });
  
  const router = useRouter();
  
  async function performLogin() { // Renommé ici
    try {
      const response = await apiLogin(credentials.value); // Utilisation de l'import renommé
      console.log('Réponse de l\'API:', response);
  
      // Récupérer le token d'accès
      const accessToken = response.access_token;
  
      // Stocker le token dans le local storage
      localStorage.setItem('access_token', accessToken);
  
      alert('Connexion réussie');
  
      // Récupérer les noms de rôle
      const userRoles = response.user.roles.map(role => role.name); // Récupérer les noms des rôles
  
      // Redirection basée sur le rôle de l'utilisateur
      if (userRoles.includes("admin")) {
        router.push('/admin-dashboard');
      } else if (userRoles.includes("professionnel")) {
        router.push('/Professionnel/Acceuil');
      } else if (userRoles.includes("client")) {
        router.push('/Acceuil/Client');
      } else {
        throw new Error('Rôle non supporté');
      }
    } catch (error) {
      alert('Erreur lors de la connexion. Veuillez vérifier vos informations.');
      console.error(error); // Afficher l'erreur dans la console pour le débogage
    }
  }
  </script>
  
  
  <style scoped>
  #image {
    width: 700px;;
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

  @media screen and (max-width: 420px) {
    .principal{
      display: block;
    
    }

    #image{
      width: 400px;
    }

    #input{
      width: 350px;
      margin-left: 25px;
      font-size: 21px;
      
    }

    #input2{
      width: 350px;
      margin-left: 25px;
      font-size: 21px;
    }

    label{
      font-size: 24px;
      margin-left: 25px
    }

    #button{
      width: 350px;
      margin-top: 50px;
      margin-left: 25px;
      font-size: 21px;
      margin-bottom: 30px;
    }

    #titre{
      text-align: center;
      margin-top: 30px;
    }
  }
  </style>
  