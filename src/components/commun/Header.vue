<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div>
        <img src="@/assets/images/Black Yellow Illustration Beauty and Spa  Logo 1.svg" class="logo" />
      </div>
      <!-- Bouton pour basculer le menu -->
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleMenu"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div :class="['collapse navbar-collapse', { show: isMenuOpen }]" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Accueil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Clients</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Professionnels</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Nous Contacter</a>
          </li>
          <a href="/Home/Login">
            <button type="submit" class="btn">Connexion</button>
          </a>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      isMenuOpen: false, // État pour contrôler l'affichage du menu
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Inverse l'état du menu
    },
  },
};
</script>

<style scoped>
header {
  background-color: white;
  color: #fff;
  padding: 15px;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin-left: 300px;
}

nav ul li {
  display: inline;
  margin-right: 10px;
}

nav ul li a {
  color: black;
  text-decoration: none;
}

.btn {
  background-color: #FFCDB3;
}

.navbar-toggler {
  border: none;
  background-color: #FFCDB3;
  padding: 5px 10px;
  border-radius: 4px;
}

.navbar-toggler-icon {
  width: 25px;
  height: 3px;
  background-color: black;
  display: block;
  margin: 5px 0;
}

/* Responsiveness for tablet screens */
@media (max-width: 768px) {
  .container-fluid {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  nav ul {
    margin-left: 0;
    text-align: center;
  }

  nav ul li {
    display: block;
    margin-bottom: 10px;
  }

  .btn {
    width: 100%;
    max-width: 200px;
    margin-top: 10px;
  }

  .logo {
    max-width: 200px;
    margin-bottom: 15px;
  }
}

/* Responsiveness for mobile screens */
@media (max-width: 420px) {
  .container-fluid {
    padding: 10px;
    gap: 10px;
  }

  nav ul {
    margin-left: 0;
    padding: 0;
    text-align: center;
  }

  nav ul li {
    display: block;
    margin-bottom: 5px;
  }

  .btn {
    width: 100%;
    max-width: 150px;
    margin-top: 10px;
  }

  .logo {
    max-width: 150px;
    margin-bottom: 10px;
  }
}
</style>
