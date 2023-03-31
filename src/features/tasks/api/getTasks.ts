import { api } from '@/lib/axios'

export type TaskDto = {
  id: number
  body: string
  completed: false
  user_id: number
}

export async function getTasks() {
  const response = await api.get<TaskDto[]>('/tasks')
  return response.data
}
