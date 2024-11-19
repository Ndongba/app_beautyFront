<template>
    <main>
        <div class="container">
            <div class="navigation">
                <aside class="sidebar">
                    <img src="@/assets/professionnel/Black Yellow Illustration Beauty and Spa  Logo 1.svg" id="logo">
                    <ul>
                        <!-- <li>
                            <a href="/Professionnel/Acceuil">
                                <span class="icon">
                                    <img src="@/assets/professionnel/ic_baseline-home.svg">
                                </span>
                                <span class="title">Acceuil</span>
                            </a>
                        </li> -->
                        <li>
                            <a href="/Professionnel/Rendez-vous">
                                <span class="icon">
                                    <img src="@/assets/professionnel/ph_calendar.svg">
                                </span>
                                <span class="title">Rendez-Vous</span>
                            </a>
                        </li>
                        <li>
                            <a href="/Professionnel/Client">
                                <span class="icon">
                                    <img src="@/assets/professionnel/Vector.svg">
                                </span>
                                <span class="title">Clients</span>
                            </a>
                        </li>
                        <!-- <li>
                            <a href="#">
                                <span class="icon">
                                    <img src="@/assets/professionnel/tdesign_money.svg">
                                </span>
                                <span class="title">Paiements</span>
                            </a>
                        </li> -->
                        <li>
                            <!-- <span class="icon">
                                <img src="@/assets/professionnel/bi_book.svg">
                            </span>
                            <span class="title">Catalogue</span>
                            <a href="#"> 
                                <div>
                                    <span class="icon">
                                        <img src="@/assets/professionnel/simple-icons_producthunt.svg">
                                    </span>
                                    <span class="title">Produits</span>
                                </div>
                            </a> -->
                            <a href="/Professionnel/Formulaire">   
                                <div>
                                    <span class="icon">
                                        <img src="@/assets/professionnel/map_beauty-salon _1.svg">
                                    </span>
                                    <span class="title">Prestations</span>
                                </div>
                            </a>
                        </li>
                        <!-- <li>
                            <a href="#">
                                <span class="icon">
                                    <img src="@/assets/professionnel/bag-2.svg">
                                </span>
                                <span class="title">Ventes</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="icon">
                                    <img src="@/assets/professionnel/material-symbols_settings.svg">
                                </span>
                                <span class="title">Settings</span>
                            </a>
                        </li> -->
                        <!-- Déconnexion -->
                        <li>
                            <a href="#" @click="handleLogout">
                                <span class="icon">
                                    <img src="@/assets/professionnel/ion_log-out-outline.svg">
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
import { useRouter } from "vue-router";

export default {
    name: "Dashboard",
    setup() {
        const router = useRouter();

        const handleLogout = async () => {
            try {
                await logout();
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
.sidebar ul li a {
    display: flex;
    align-items: center;
    border-radius: 8px;
    transition: background-color 0.3s, color 0.3s;
}

.sidebar ul li a:hover {
    background-color: #9C6C76;
    color: #fff;
}

.sidebar ul li a.active {
    background-color: #8A5C64;
    color: #fff;
    font-weight: bolder;
}

.sidebar {
    width: 400px;
    background: #B4838D;
    color: #fff;
    display: flex;
    flex-direction: column;
    height: 1180px;
    font-size: 30px;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

.title {
    color: white;
    margin-bottom: 10px;
}

#logo {
    margin: 20px 100px;
    width: 180px;
}
</style>
