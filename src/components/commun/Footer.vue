<template>
  <footer class="bg-custom text-white text-center py-4">
    <div class="container">
      <div class="row">
        <!-- Section logo et description -->
        <div class="col-lg-3 col-md-6 mb-4">
          <img src="@/assets/images/Black Yellow Illustration Beauty and Spa  Logo 1.svg" alt="Logo" class="img-fluid mb-3">
          <p>Prenez soin de vous en toute simplicité. <br>Réservez, gérez vos rendez-vous,<br> et découvrez les meilleurs professionnels <br>de la beauté près de chez vous.<br> Votre bien-être est notre priorité.</p>
        </div>
        <!-- Section A Propos -->
        <div class="col-lg-3 col-md-6 mb-4">
          <h2>A Propos</h2>
          <p><a href="#" class="footer-link">Aide</a></p>
          <p><a href="#" class="footer-link">Bloc</a></p>
          <p><a href="#" class="footer-link">Plan du Site</a></p>
        </div>
        <!-- Section Pour les Professionnels -->
        <div class="col-lg-3 col-md-6 mb-4">
          <h2>Pour les Professionnels</h2>
          <p><a href="#" class="footer-link">Pour les Partenaires</a></p>
          <p><a href="#" class="footer-link">Tarifs</a></p>
          <p><a href="#" class="footer-link">Aide</a></p>
        </div>
        <!-- Section Mentions Legales et abonnement -->
        <div class="col-lg-3 col-md-6 mb-4">
          <h2>Mentions Légales</h2>
          <p><a href="#" class="footer-link">Politique de Confidentialité</a></p>
          <p><a href="#" class="footer-link">Conditions d'Utilisation</a></p>
          <div class="input-group mt-3">
            <input type="email" class="form-control" placeholder="Votre email" aria-label="Votre email">
            <button class="btn" type="button">S'abonner</button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
footer {
  background-color: #B4838D;
  margin-top: 150px;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
}

.footer-link {
  color: #fff;
  text-decoration: none; /* Retirer le soulignement */
}

.footer-link:hover {
  text-decoration: underline; /* Ajoute un soulignement uniquement au survol */
}

.btn{
  background-color: #FFCDB3;
}
</style>
