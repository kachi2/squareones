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
    if (authStore.twofactorEnabled && !authStore.twofactorAttendedTo) {
      next({ name: `TwoFactorAuthentication` });
    }
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

// @ts-ignore
const twoFaGuard = (to, from, next) => {
  const authStore = useAuthStore();
  if (authStore.twofactorEnabled && authStore.twofactorAttendedTo) {
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
      path: '/two_factor_auth',
      name: 'TwoFactorAuthentication',
      component: () => import('../views/TwoFaAuthPage.vue'),
      beforeEnter: twoFaGuard
    },

    {
      path: '/user',
      component: () => import('../views/Account/User/Account_template.vue'),
      beforeEnter: authGuard,
      children: [
        { path: 'dashboard', name: 'User-Dashboard', alias: '/user', component: () => import('../views/Account/User/UserDashboard.vue') },
        { path: 'users', name: 'User-Users', component: () => import('../views/Account/User/UserUsers.vue') },
        { path: 'company', name: 'User-Company', component: () => import('../views/Account/User/CompanyDetails/Company.vue') },
        { path: 'account', name: 'User-Settings', component: () => import('../views/Account/User/UserAccount.vue') },
        { path: 'billings', name: 'User-Billings', component: () => import('../views/Account/User/UserBillings.vue') },
        { path: 'tasks', name: 'User-Tasks', component: () => import('../views/Account/User/UserTasks.vue') },

      ],
    }, {
      path: '/admin',
      component: () => import('../views/Account/Admin/Account_template.vue'),
      beforeEnter: authGuard,
      children: [
        { path: 'dashboard', name: 'Admin-Dashboard', alias: '/admin', component: () => import('../views/Account/Admin/AdminDashboard.vue') },
        { path: 'companies', name: 'Admin-Companies', component: () => import('../views/Account/Admin/AdminCompanies.vue') },
        { path: 'company', name: 'Admin-Company', component: () => import('../views/Account/Admin/CompanyDetails/Company.vue') },
        { path: 'company-edit', name: 'Admin-Company-Edit', component: () => import('../views/Account/Admin/CompanyDetails/StartCompany_edit/StartCompany_index.vue') },
        { path: 'users', name: 'Users-Admin', component: () => import('../views/Account/Admin/AdminUsers.vue') },
        { path: 'account', name: 'Admin-Settings', component: () => import('../views/Account/Admin/AdminAccount.vue') },
        { path: 'billings', name: 'Admin-Billings', component: () => import('../views/Account/Admin/AdminBillings.vue') },
        { path: 'tasks', name: 'Admin-Tasks', component: () => import('../views/Account/Admin/AdminTasks.vue') },
        { path: 'tasks-assign', name: 'Admin-Tasks-Assign', component: () => import('../views/Account/Admin/AdminTasks_assign.vue') },
      ],
    },



    {
      path: '/kyc/verifications',
      name: 'KYC',
      component: () => import('../views/StartCompany/pages/Kyc.vue'),
      beforeEnter: authGuard,
    },

    {
      path: '/sign-document/:company_id/:founder_id',
      name: 'SIGN DOCUMENT',
      component: () => import('../views/StartCompany/SignDocument_founder.vue'),
    },

    {
      path: '/complete-kyc/:company_id/:founder_id',
      name: 'FOUNDERKYC',
      alias: '/complete-kyc/:company_id/:founder_id',
      component: () => import('../views/StartCompany/Kyc_founder.vue'),
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
