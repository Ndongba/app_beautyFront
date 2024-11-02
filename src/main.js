import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css';




import App from './App.vue'
import router from './router'
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
// import './assets/main.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';




const app = createApp(App);
app.provide('bootstrap', bootstrap);




app.use(VueSweetalert2);
app.use(createPinia())
app.use(router)

app.mount('#app')
