import { createRouter, createWebHistory } from 'vue-router';
import AddBebidas from './components/AddBebidas.vue';
import AddHamburguer from './components/AddHamburguer.vue'
import AddPorcoes from './components/AddPorcoes.vue'
import AtualizaBebidas from './components/AtualizaBebidas.vue'
import AtualizaHamburguer from './components/AtualizaHamburguer.vue'
import AtualizaPorcoes from './components/AtualizaPorcoes.vue'
import Cadastro from './components/Cadastro.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Nav from './components/Nav.vue'
import Gerenciar  from './components/gerenciarPedidos.vue'



const routes = [
  {
    path: '/',
    component: Login, 
    meta: { requiresAuth: false }, 
  },
  {
    path: '/home',
    component: Home,
    meta: { requiresAuth: true }, 
  },
  {
    path: '/atualiza-hamburguer',
    component: AtualizaHamburguer,
    meta: { requiresAuth: true },
  },
  {
    path: '/atualiza-porcoes',
    component: AtualizaPorcoes,
    meta: { requiresAuth: true },
  },
  {
    path: '/atualiza-bebidas',
    component: AtualizaBebidas,
    meta: { requiresAuth: true },
  },
  {
    path: '/add-hamburguer',
    component: AddHamburguer,
    meta: { requiresAuth: true },
  },
  {
    path: '/add-bebidas',
    component: AddBebidas,
    meta: { requiresAuth: true },
  },
  {
    path: '/add-porcoes',
    component: AddPorcoes,
    meta: { requiresAuth: true },
  },
  {
    path: '/cadastro',
    component: Cadastro,
    meta: { requiresAuth: false },
  },
  {
    path: '/gerenciar',
    component: Gerenciar,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth) {
    const token = localStorage.getItem('token'); 

    if (token) {
      
      next(); 
    } else {
      
      next('/');
    }
  } else {
    next(); 
  }
});

export default router;




