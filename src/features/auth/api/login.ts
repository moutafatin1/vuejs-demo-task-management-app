import { api } from '@/lib/axios'

type LoginDto = {
  username: string
  password: string
}

export type AuthResponse = {
  access_token: string
}

export async function login(data: LoginDto) {
  const formData = new FormData()
  formData.append('username', data.username)
  formData.append('password', data.password)
  const response = await api.post<AuthResponse>('/auth/login', formData, { withCredentials: true })
  return response.data
}
