import HomePage from '@/features/home/HomePage.vue'
import { useAuthStore } from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/features/auth/pages/LoginPage.vue'),
      meta: {
        requireGuest: true
      }
    },
    {
      path: '/protected',
      name: 'protected',
      component: () => import('@/features/auth/pages/ProtectedPage.vue'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('@/features/tasks/pages/TasksPage.vue'),
      meta: {
        requireAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (!authStore.isLoggedIn && to.meta.requireAuth) {
    authStore.logout()
    return next({ name: 'login' })
  }
  if (authStore.isLoggedIn && to.meta.requireGuest) {
    return next({ name: 'protected' })
  }

  return next()
})

export default router
