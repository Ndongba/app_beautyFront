<template>
    <HeaderConnect />
    <main>
        <div class="banniere">
            <h1>Prenez soin de vous en toute simplicité.<br />
                Réservez, gérez vos rendez-vous,
                et<br /> découvrez les meilleurs professionnels
                de <br />beauté près de chez vous.</h1>
        </div>
        <div class="container">
            <div class="block1">
                <h1>Salons et Instituts de Beauté</h1>
            </div>

            <!-- Utilisation de CSS Grid pour répartir les professionnels sur toute la page -->
            <div class="grid-professionnels">
                <div class="card" v-for="professionnel in professionnels" :key="professionnel.id">
                    <!-- Si l'image existe, l'afficher sinon afficher une image par défaut -->
                    <!-- <img :src="image_url+`professionnels/1729570529_0_image1_3.jpg`" class="card-img-top" :alt="professionnel.name"> -->
                    <!-- Vérifiez si le personnel a des images avant de les afficher -->
                    <div v-if="professionnel.professionnel.images && professionnel.professionnel.images.length">
                        <img :src="getImageUrl(professionnel.professionnel.images[0].image_path)" alt="Image du personnel"
                            class="personnel-image" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ professionnel.name }}</h5>
                        <p class="card-text">{{ professionnel.description }}</p>
                        <a v-if="professionnel.professionnel" :href="'/professionnel/' + professionnel.professionnel.id"
                            class="btn btn-primary">Voir Profil</a>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </main>
</template>

<script>
import BarreRecherche from '@/components/commun/BarreRecherche.vue';
import Footer from '@/components/commun/Footer.vue';
import HeaderConnect from '@/components/commun/HeaderConnect.vue';
import { getProfessionnels } from '@/services/Professionnel'; // Importation du service
import { IMG_URL } from '@/config/apiConfigImage';

export default {
    name: "AcceuilClient",
    components: {
        BarreRecherche,
        Footer,
        HeaderConnect
    },
    data() {
        return {
            professionnels: [], // Liste des professionnels
        };
    },

    mounted() {
        this.getProfessionnels();
    },
    methods: {
    async getProfessionnels() {
        try {
            const response = await getProfessionnels();
            this.professionnels = response.data;

            console.log(this.professionnels); // Affiche les données complètes des professionnels
  
        } catch (error) {
            console.error("Erreur lors du chargement des professionnels", error);
        }
    },
    getImageUrl(imagePath) {
        return IMG_URL + imagePath;
    },
}




};
</script>

<style scoped>
/* Container global pour centrer et contrôler la mise en page */
.container {
    max-width: 1200px;
    margin: 0 auto;
}

/* Utilisation de CSS Grid pour disposer les cartes */
.grid-professionnels {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    /* Les cartes s'adaptent automatiquement */
    gap: 20px;
    margin-top: 40px;
}

/* Style des cartes */
.card {
    width: 100%;
    /* Les cartes prennent 100% de la largeur de la cellule */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

.banniere {
    background: url("/src/assets/images/Rectangle 2.svg");
    background-size: cover;
    height: 300px;
}

.card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
    /* Assure que l'image soit bien cadrée */
}

.card-body {
    padding: 20px;
}

.card-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.card-text {
    font-size: 1rem;
    margin-bottom: 20px;
}

.block1 {
    margin-top: 30px;
}

.grid-professionnels {
    margin-bottom: 200px;
}

h1 {
    text-align: center;
    padding-top: 50px;
}

.personnel-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    /* Assure que les coins de l'image suivent les coins arrondis de la carte */
}




/* Ajustement pour les petits écrans */
@media (max-width: 768px) {
    .grid-professionnels {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        /* Plus petit pour les mobiles */
    }
}
</style>
