<template>
  <div class="dashboard-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      
        <DashboardProfessionnel/>
      
    </aside>

    <!-- Contenu principal -->
    
    <main class="main-content">
      
      

      <div class="section1">
        <div class="vente">
          <h2>Ventes Recentes</h2>
          <table>
              <thead>
                <th>Produit</th>
                <th>Ce mois-ci</th>
                <th>Le mois dernier</th>
              </thead>
              <tbody>
                <tr>
                  <td>Parfums</td>
                  <td>1</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Lait de Corps</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Masque de Visage</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Vernis</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>

        </div>
        <div class="rendez">
          <h2>Rendez-Vous À Venir</h2>
          <div>
            <div class="ligne1">
            <div>
            <p>04 Sept</p>
          </div>
          <div>
            <p>mer 13h00</p>
          </div>
        </div>
          <div>
            <div class="ligne2">
            <div>
            <p>Couleur 1h30</p>
          </div>
          <div>
            <p>3 000F</p>
          
          </div>
        </div>
            <p>Bassine NIANG</p>
          </div>
          </div>
          
        </div>
      </div>
      <div class="section2">
        <div class="prestation">
          <h2>Prestations les Plus Populaire</h2>
          <div>
            <table>
              <thead>
                <th>Prestation</th>
                <th>Ce mois-ci</th>
                <th>Le mois dernier</th>
              </thead>
              <tbody>
                <tr>
                  <td>Coiffure</td>
                  <td>1</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Couleur</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Pedicure</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Manicure</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
        <div class="historique">
          
          <div>
          <h2>Rendez-Vous À Venir</h2>
          <div>
            <div class="ligne1">
            <div>
            <p>04 Sept</p>
          </div>
          <div>
            <p>mer 13h00</p>
          </div>
        </div>
          <div>
            <div class="ligne2">
            <div>
            <p>Couleur 1h30</p>
          </div>
          <div>
            <p>3 000F</p>
          
          </div>
        </div>
            <p>Bassine NIANG</p>
          </div>
          </div>
          
        </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import DashboardProfessionnel from "../../components/professionnel/DashboardProfessionnel.vue";

export default {
  name: "AccueilPro",
  components: {
    DashboardProfessionnel
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
