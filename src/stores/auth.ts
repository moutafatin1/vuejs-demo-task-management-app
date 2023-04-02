import type { AuthResponse } from '@/features/auth/api/login'
import router from '@/router'
import { StorageSerializers, useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const state = useLocalStorage<AuthResponse | null>('user', null, {
    serializer: StorageSerializers.object
  })
  const isLoggedIn = computed(() => !!state.value?.access_token)

  const login = (data: AuthResponse) => {
    localStorage.setItem('user', JSON.stringify(data))
    state.value = data
  }
  const logout = () => {
    state.value = null
    router.push({ name: 'home' })
  }

  const refreshToken = async () => {
    const response = await fetch('http://127.0.0.1:8000/auth/tokens', {
      method: 'PUT',
      headers: {
        Accept: 'application/json'
      },
      credentials: 'include'
    })
    if (response.ok) {
      login((await response.json()) as AuthResponse)
    }
    if (response.status === 401) {
      console.log('response', response)
      logout()
    }
  }

  return { state, isLoggedIn, login, logout, refreshToken }
})
