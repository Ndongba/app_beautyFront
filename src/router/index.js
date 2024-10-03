import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '@/views/Home/Acceuil.vue'
import Header from '@/components/commun/Header.vue'
import Footer from '@/components/commun/Footer.vue'
import Client from '@/views/Home/Client.vue'
import Professionnel from '@/views/Home/Professionnel.vue'
import AcceuilPro from '@/views/Professionnel/AcceuilPro.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/',
      name: 'Footer',
      component: Footer
    },
    {
      path:'/Acceuil',
      name: 'Acceuil',
      component: Acceuil
    },

    {
      path:'/Client',
      name:'Client',
      component: Client
    },
    {
      path:'/Professionnel',
      name: 'Professionnel',
      component: Professionnel
    },
    // {
    //   path: '/Dashboardprofessionnel',
    //   name:'DashboardProfesionnel',
    //   component: DashboardProfessionnel
    // },
    {
      path:'/Professionnel/Acceuil',
      name:'AcceuilProfessionnel',
      component: AcceuilPro
    }

      
   
  ]

  
})

export default router
