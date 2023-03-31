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

  // const refreshToken = async () => {
  //   try {
  //     const response = await apiWithCredential.put<AuthResponse>('/auth/tokens')
  //     login(response.data)
  //   } catch (error) {
  //     console.log(error)
  //     logout()
  //   }
  // }

  return { state, isLoggedIn, login, logout }
})
