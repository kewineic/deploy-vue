import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index';

const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: () => import('../views/Gerentes.vue')
  },
  {
    path: '/cadastro',
    name: 'register',
    component: () => import('../views/Register.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      public: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((routeTo, routeForm, next) => {
  if(!routeTo.meta.public && !store.state.token) {
    return next({ path: '/login' });
  }

  next();
})

export default router
