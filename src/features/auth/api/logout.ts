import { api } from '@/lib/axios'

export function logout() {
  return api.delete('/auth/logout')
  // send cookie with the request, to send the refresh token so the backend can expire it
}
