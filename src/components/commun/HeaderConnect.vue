<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <img src="/home/ndongba/app_beautyFront/src/assets/images/Black Yellow Illustration Beauty and Spa  Logo 1.svg">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/Acceuil/Client">Accueil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Home/Client/Rendezvous">Mes Réservations</a>
          </li>
          
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="text" placeholder="Recherchez un Salon " aria-label="Search" v-model="searchQuery" >
            <button class="btn btn-outline-success" type="submit">Rechercher</button>
          </form>
          <div>
            <div class="search-container">
     
    </div>
            <li class="nav-item dropdown" v-if="user">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ user.name }}
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li><a class="dropdown-item" @click="logoutUser">Déconnexion</a></li>
                </ul>
              </li>

          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { logout, getUserProfile } from "@/services/AuthService"; // Assurez-vous que le chemin est correct
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderConnect",
  
  data() {
    return {
      user: null,
    };
  },
  
  async mounted() {
    try {
      this.user = await getUserProfile();
    } catch (error) {
      console.error("Erreur lors de la récupération du profil :", error);
    }
  },
  methods: {
    async logoutUser() {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Vous êtes déjà déconnecté.");
        this.$router.push("/Home/Login");
        return;
      }
      
      try {
        await logout();
        this.$router.push("/Home/Login");
      } catch (error) {
        console.error("Erreur lors de la déconnexion :", error);
        alert(error.message || "Erreur lors de la déconnexion.");
      }
    }
  }
});
</script>


<style scoped>
.container-fluid {
  gap: 550px;
  
}

.btn {
  background-color: #FFCDB3;
  border-color: black;
  color: black;
}

#connect {
  gap: 250px;
}

@media(max-width: 420px) {
  .container-fluid {
    gap: 80px;
  }
}
</style>
