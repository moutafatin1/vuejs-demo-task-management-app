import { useAuthStore } from '@/stores/auth'
import Axios from 'axios'

export const api = Axios.create({
  baseURL: 'http://127.0.0.1:8000',
  withCredentials: true
})

api.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  if (authStore.state?.access_token) {
    console.log('auth', authStore.state.access_token)
    config.headers.Authorization = `bearer ${authStore.state?.access_token}`
  }

  return config
})
