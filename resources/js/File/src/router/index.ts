import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import { useAuthStore } from '@/stores/authStore'

// @ts-ignore
const authGuard = (to, from, next) => {
  const authStore = useAuthStore();
  if (!authStore.isLoggedIn) {
    next({ name: `Login` });
  }
  else {
    next()
  }
}

// @ts-ignore
const initGuard = (to, from, next) => {
  const authStore = useAuthStore();
  if (authStore.isLoggedIn) {
    next({ name: `Start` });
  }
  else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },

    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
      beforeEnter: initGuard
    },

    {
      path: '/start_company',
      name: 'Start',
      component: () => import('../views/StartCompany/StartCompany_index.vue'),
      beforeEnter: authGuard
    },

    {
      path: '/account',
      component: () => import('../views/Account/Account_template.vue'),
      beforeEnter: authGuard,
      children: [
        { path: 'dashboard', name: 'Dashboard', alias: '/dashboard', component: () => import('../views/Account/Dashboard.vue') },
        { path: 'company/submitted_form', name: 'Sumitted Form', component: () => import('../views/Account/Company/submitted_form.vue') },
        { path: 'company/company_info', name: 'Company Details', component: () => import('../views/Account/Company/company_info.vue') },
      ],
    },


    {
      path: '/:pathMatch(.*)*',
      name: '404',
      // component: () => import('../views/PageNotFound.vue')
      component: HomePage
    },
  ]
})

export default router
