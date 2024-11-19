<template>
  <div class="dashboard-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <DashboardProfessionnel />
    </aside>

    <!-- Contenu principal -->
    <main class="main-content">
      <div class="premier">
        <div class="class1">
          <h2>Nbre Total de Rendez-Vous</h2>
          <p id="para">{{ totalReservations }}</p>
        </div>
      
        <div class="class1">
          <h2>Nbre total de Clients</h2>
          <p id="para">{{ totalClients }}</p>
        </div>
      </div>

      <div class="section2">
        <div class="prestation">
          <h2>Prestations les Plus Populaire</h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Prestation</th>
                  <th>Ce mois-ci</th>
                  <th>Le mois dernier</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="prestation in popularPrestations" :key="prestation.id">
                  <td>{{ prestation.libelle }}</td>
                  <td>{{ prestation.current_month }}</td>
                  <td>{{ prestation.last_month }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="rendez">
          <h2>Rendez-Vous À Venir</h2>
          <div v-if="upcomingReservations.length > 0">
            <div v-for="reservation in upcomingReservations" :key="reservation.id">
              <div class="ligne1">
                <div>
                  <p>{{ reservation.date_prévue }}</p>
                </div>
                <div>
                  <p>{{ reservation.heure_prévue }}</p>
                </div>
              </div>
              <div>
                <div class="ligne2">
                  <div>
                    <p>{{ reservation.prestation_libelle }}</p>
                  </div>
                  <div>
                    <p>{{ reservation.montant }}F</p>
                  </div>
                </div>
                <p>{{ reservation.client_nom }}</p>
              </div>
            </div>
          </div>
          <p v-else>Vous n'avez pas de rendez-vous à venir pour le moment.</p>
        </div>
      </div>

      <div class="section2">
        <div class="historique">
          <h2>Historique des Rendez-Vous</h2>
          <div v-if="pastReservations.length > 0">
            <div v-for="reservation in pastReservations" :key="reservation.id">
              <div class="ligne1">
                <div>
                  <p>{{ reservation.date_prévue }}</p>
                </div>
                <div>
                  <p>{{ reservation.heure_prévue }}</p>
                </div>
              </div>
              <div>
                <div class="ligne2">
                  <div>
                    <p>{{ reservation.prestation_libelle }}</p>
                  </div>
                  <div>
                    <p>{{ reservation.montant }}F</p>
                  </div>
                </div>
                <p>{{ reservation.client_nom }}</p>
              </div>
            </div>
          </div>
          <p v-else>Aucun historique de rendez-vous pour le moment.</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import DashboardProfessionnel from "../../components/professionnel/DashboardProfessionnel.vue";
import { getReservationsByProfessionnel } from "@/services/Reservation";
//import { getPopularPrestations } from "@/services/Prestation"; // Nouvelle importation

export default {
  name: "AccueilPro",
  components: {
    DashboardProfessionnel,
  },
  data() {
    return {
      reservations: [],
      totalReservations: 0,
      completedReservations: 0,
      totalClients: 0,
      upcomingReservations: [],
      pastReservations: [],
      popularPrestations: [], // Nouveau tableau pour stocker les prestations populaires
    };
  },
  async created() {
    await this.fetchReservations();
    await this.fetchPopularPrestations(); // Appel à la nouvelle méthode
  },
  methods: {
    async fetchReservations() {
      try {
        const response = await getReservationsByProfessionnel();
        this.reservations = response;
        this.processReservations();
      } catch (error) {
        console.error("Erreur lors de la récupération des réservations:", error);
      }
    },
    processReservations() {
      const now = new Date();

      this.upcomingReservations = this.reservations.filter(
        (res) => new Date(res.date_prévue) > now
      );
      this.pastReservations = this.reservations.filter(
        (res) => new Date(res.date_prévue) <= now
      );
      this.totalReservations = this.reservations.length;
      this.completedReservations = this.pastReservations.length;
      this.totalClients = new Set(
        this.reservations.map((res) => res.client_nom)
      ).size;
    },
    async fetchPopularPrestations() {
      try {
        const response = await getPopularPrestations(); // Appel au service API
        this.popularPrestations = response; // Mise à jour des données locales
      } catch (error) {
        console.error("Erreur lors de la récupération des prestations populaires:", error);
      }
    },
  },
};
</script>



<style scoped>
/* Disposition de la page */
.dashboard-layout {
  display: flex; /* Utilisation de flexbox pour créer un layout à deux colonnes */
 /* height: 100vh; /* Prend la hauteur de la fenêtre */
}

/* Styles de la sidebar */
.sidebar {
  width: 350px;
  background-color:#B4838D; /* Couleur de fond sombre */
  color: #fff; /* Couleur de texte */
  padding: 20px;
 /* box-shadow: 2px 0 5px rgba(0,0,0,0.1); /* Ajout d'une ombre à droite de la sidebar */
}

.class1{
  border:solid 2px black;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 40px;

}
#para{
  text-align: center;
}
.premier{
  display: flex;
  gap: 50px;
}

.ligne1{

  display: flex;
  gap: 20px;
}

.ligne2{
  display: flex;
  gap: 250px;
}

/* Contenu principal */
.main-content {
  flex: 1; /* Prend tout l'espace restant */
  padding: 20px;
  background-color: #f5f5f5; /* Couleur de fond pour différencier le contenu */
  font-size: 32px;
}

.section1{
  display: flex;
  justify-content: space-around;
}

.section2{
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.prestation{
  border: solid black 3px;
  padding: 30px;
  border-radius: 20px;
  width: 620px;
  height: 400px;
}

.vente{
  border: solid black 3px;
  padding: 30px;
  border-radius: 20px;
  width: 620px;
  height: 400px;
}

.rendez{
  border: solid black 3px;
  padding: 30px;
  border-radius: 20px;
  width: 620px;
  height: 400px;
}

.historique{
  border: solid black 3px;
  padding: 30px;
  border-radius: 20px;
  width: 620px;
  height: 400px;
}

</style>
