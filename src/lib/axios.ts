import type { AuthResponse } from '@/features/auth/api/login'
import { useAuthStore } from '@/stores/auth'
import { default as Axios, AxiosError } from 'axios'

export const api = Axios.create({
  baseURL: 'http://127.0.0.1:8000'
})

api.interceptors.request.use(async (request) => {
  const authStore = useAuthStore()

  if (authStore.state?.access_token) {
    request.headers.Authorization = `bearer ${authStore.state?.access_token}`
  }
  return request
})

const refreshToken = async () => {
  const authStore = useAuthStore()

  try {
    const response = await api.put<AuthResponse>('/auth/tokens', null, {
      withCredentials: true
    })
    authStore.login(response.data)
  } catch (error) {
    authStore.logout()
    throw error
  }
}

api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        const authStore = useAuthStore()
        await authStore.refreshToken()
      }
    }
    return Promise.reject(error)
  }
)
