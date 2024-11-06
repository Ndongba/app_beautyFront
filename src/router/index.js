import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '@/views/Home/Acceuil.vue'
import Header from '@/components/commun/Header.vue'
import Footer from '@/components/commun/Footer.vue'
import Client from '@/views/Home/Client.vue'
import Professionnel from '@/views/Home/Professionnel.vue'
import AcceuilPro from '@/views/Professionnel/AcceuilPro.vue'
import ReservationPro from '@/views/Professionnel/ReservationPro.vue'
import ClientPro from '@/views/Professionnel/ClientPro.vue'
import PrestationPro from '@/views/Professionnel/PrestationPro.vue'
import FormulairePro from '@/views/Professionnel/FormulairePro.vue'
import FormulaireProupdate from '@/views/Professionnel/FormulaireProupdate.vue'

import LoginClient from '@/views/Home/Login.vue'
import AcceuilClient from '@/views/Client/AcceuilClient.vue'
import DetailPro from '@/views/Client/DetailPro.vue'
import Inscription from '@/views/Home/Inscription.vue'

import Planification from '@/views/Client/Planification.vue'
import Rendezvous from '@/views/Client/Rendezvous.vue'



// const routes = [
//   { path: '/Acceuil/Authchoice', component: AuthChoice },
  
// ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    
  
    {
      path:'/',
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
   
    {
      path:'/Professionnel/Acceuil',
      name:'AcceuilProfessionnel',
      component: AcceuilPro
    },
    {
      path:'/Professionnel/Rendez-vous',
      name:'ReservationProfessionnel',
      component: ReservationPro
    },
    {
      path:'/Professionnel/Client',
      name:'ClientPro',
      component: ClientPro
    },
    {
      path: '/Professionnel/Prestation',
      name:'PrestationPro',
      component: PrestationPro
    },
   {
    path:'/Professionnel/Formulaire',
    name:'ProfessionnelPro',
    component: FormulairePro
   },
   {
    path:'/Professionnel/Formulaireupdate/:id',
    name:'ProfessionnelProupdate',
    component: FormulaireProupdate
   },

  //  {
  //   path:'/Professionnel/Listeprestation',
  //   name:'ListeprestationPro',
  //   component: ListeprestationPro
  //  },
   {
    path: '/professionnel/:id',
    name: 'DetailPro',
    component: () => import('@/views/Client/DetailPro.vue'),
    props: true
  },
  

 
   {
    path:'/Home/Login',
    name:'LoginClient',
    component: LoginClient
   },
  
   {
    path: '/Acceuil/Client',
    name:'AcceuilClient',
    component: AcceuilClient
   },

  //  {
  //   path:'/Acceuil/DetailPro',
  //   name: 'DetailProfessionnl',
  //   component: DetailPro
  //  },
   {
    path:'/Home/Inscription',
    name:'Inscription',
    component: Inscription
   },


   {
    path: '/Home/Client/Planification',
    name:'Planification',
    component: Planification
   },

   {
    path:'/Home/Client/Rendezvous',
    name:'Rendezvous',
    component: Rendezvous
   },
   {
    path: '/reservations/edit/:id',
    name: 'EditReservation',
    component: () => import('../views/Client/ModalEditReservation.vue') // Remplacez par le bon composant
  }
   
      
   
  ]

  
})

export default router
