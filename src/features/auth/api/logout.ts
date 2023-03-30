import { api } from '@/lib/axios'

export function logout() {
  return api.delete('/auth/logout')
}
