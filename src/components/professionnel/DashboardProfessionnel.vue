<template>
    <main>
        <div class="container">
            <div class="navigation">
                <aside class="sidebar">
                    <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/Black Yellow Illustration Beauty and Spa  Logo 1.svg" alt="" id="logo">
                    <ul>
                        <li>
                            <a href="/Professionnel/Acceuil">
                                <span class="icon">
                                    <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/ic_baseline-home.svg" alt="">
                                </span>
                                <span class="title">Acceuil</span>
                            </a>
                        </li>
                        <li>
                            <a href="/Professionnel/Rendez-vous">
                                <span class="icon">
                                    <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/ph_calendar.svg" alt="">
                                </span>
                                <span class="title">Rendez-Vous</span>
                            </a>
                        </li>
                        <li>
                            <a href="/Professionnel/Client">
                                <span class="icon">
                                    <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/Vector.svg" alt="">
                                </span>
                                <span class="title">Clients</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon">
                                    <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/tdesign_money.svg" alt="">
                                </span>
                                <span class="title">Paiements</span>
                            </a>
                        </li>
                        <li>
                            <span class="icon">
                                <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/bi_book.svg" alt="">
                            </span>
                            <span class="title">Catalogue</span>
                            <a href="#"> 
                                <div>
                                    <span class="icon">
                                        <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/simple-icons_producthunt.svg" alt="">
                                    </span>
                                    <span class="title">Produits</span>
                                </div>
                            </a>
                            <a href="/Professionnel/Prestation">   
                                <div>
                                    <span class="icon">
                                        <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/map_beauty-salon _1.svg">
                                    </span>
                                    <span class="title">Prestations</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon">
                                    <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/bag-2.svg" alt="">
                                </span>
                                <span class="title">Ventes</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon">
                                    <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/material-symbols_settings.svg" alt="">
                                </span>
                                <span class="title">Settings</span>
                            </a>
                        </li>
                        <!-- Déconnexion -->
                        <li>
                            <a href="#" @click="handleLogout">
                                <span class="icon">
                                    <img src="/home/ndongba/app_beautyFront/src/assets/professionnel/ion_log-out-outline.svg" alt="">
                                </span>
                                <span class="title">Sign out</span>
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    </main>
</template>

<script>
import { logout } from "@/services/AuthService";
import { useRouter } from "vue-router"; // Importation du router

export default {
    name: "Dashboard",
    setup() {
        const router = useRouter();

        const handleLogout = async () => {
            try {
                // Appel au service pour déconnecter l'utilisateur
                await logout();
                // Redirection vers la page de connexion après la déconnexion
                router.push("/login");
            } catch (error) {
                console.error("Erreur lors de la déconnexion:", error);
            }
        };

        return {
            handleLogout,
        };
    },
};
</script>

<style scoped>
/* .container{
    background-color: #B4838D;
    font-size: 36px;
    width: 400px;
    height: 1180px;
    
} */

.sidebar{
    width: 400px;
    background:#B4838D;
    color: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;  
    height: 1180px; 
    font-size: 36px;
}

li{
    list-style: none;
}

a{
    text-decoration: none;
}

.title{
    color: white;
    margin-bottom: 10px;
}

#logo{
    margin: 20px 100px;
    width: 180px;
}
</style>
