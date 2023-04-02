import { api } from '@/lib/axios'

export async function deleteTask(id: number) {
  return await api.delete(`/tasks/${id}`)
}
