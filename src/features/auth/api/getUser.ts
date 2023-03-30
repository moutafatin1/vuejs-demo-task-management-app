import { api } from '@/lib/axios'

type User = {
  id: number
  username: string
}

export async function getUser() {
  const response = await api.get<User>('/auth/me')
  return response.data
}
