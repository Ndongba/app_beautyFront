<template>
  <main>
    <div class="principal">
      <div>
        <img src="@/assets/client/surprised-african-woman-covering-her-mouth-by-hand-while-looking-smartphone-screen.svg" id="image">
      </div>
      <div class="form">
        <h1 id="titre">Connectez-vous</h1>
        <div class="form1" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="input" aria-describedby="emailHelp" v-model="credentials.email" placeholder="Entrer votre email">
          <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Mot de Passe</label>
          <input type="password" class="form-control" id="input2" v-model="credentials.password" placeholder="Entrer votre mot de passe">
          <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
        </div>
        <div>
          <button id="button" @click="performLogin">Se Connecter</button>
        </div>
        <p id="inscrire">Vous n'avez-pas de compte 
          <a href="/Home/Inscription">S'inscrire</a>
        </p>
      </div>
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

const errors = ref({
  email: '',
  password: ''
});

const router = useRouter();

const validateInputs = () => {
  errors.value = {}; // Réinitialiser les erreurs
  let isValid = true;

  // Validation de l'email
  if (!credentials.value.email) {
    errors.value.email = 'L\'email est requis.';
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(credentials.value.email)) {
    errors.value.email = 'L\'email doit être valide.';
    isValid = false;
  }

  // Validation du mot de passe
  if (!credentials.value.password) {
    errors.value.password = 'Le mot de passe est requis.';
    isValid = false;
  }

  return isValid; // Retourne vrai si tout est valide
};

async function performLogin() {
  if (!validateInputs()) {
    console.log('Erreurs dans le formulaire:', errors.value);
    return; // Ne pas continuer si les validations échouent
  }

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
  font-size: 20px;
  border-radius: 10px;
}

#titre{
  text-align: center;
}

label {
  font-size: 21px;
  margin-top: 50px;
}

.principal {
  display: flex;
  gap: 100px;
}

#button {
  width: 650px;
  height: 50px;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 100px;
  background-color: #ffcdb3;
}

#input2{
  width: 650px;
  height: 50px;
  font-size: 20px;
  border-radius: 10px;
}

#inscrire{
  margin-top: 30px;
  font-size: 20px;
}

.text-danger {
  font-size: 20px;
  color: red;
}

.form{
  margin-top: 50px;
  margin-left: 70px;
}

.form1{
  margin-top: 50px;
  
 padding: 30px;
 border-radius: 30px;
}
@media screen and (max-width: 420px) {
  .principal{
    display: block;
  }

  #image{
    width: 400px;
  }

  #input{
    width: 250px;
    font-size: 21px;
  }

  #input2{
    width: 250px;
    margin-left: 25px;
    font-size: 21px;
  }

  label{
    font-size: 24px;
    margin-left: 25px
  }

  #button{
    width: 250px;
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
