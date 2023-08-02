import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/ContasAPagar', name: 'ContasAPagar', component: ()=> import('../views/ContasAPagar/AppContasAPagar.vue') },
    { path: '/Documentos', name: 'Documentos', component: ()=> import('../views/Documentos/AppDocumentos.vue') },
  ]
})

export default router
