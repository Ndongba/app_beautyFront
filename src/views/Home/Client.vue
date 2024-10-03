<template>
    <div>
      <Header/>
      <main>
        <h2>Page d'accueil</h2>
        <p>Ceci est le contenu principal de la page d'accueil.</p>
      </main>
      <Footer/>
    </div>
  </template>
  
  <script>
  import Header from "../../components/commun/Header.vue";
  import Footer from "../../components/commun/Footer.vue";
  
  export default {
    name: "Acceuil",
    components: {
      Header,
      Footer,
    },
  };
  </script>
  
  <style scoped>
  main {
    padding: 20px;
  }
  </style>
  