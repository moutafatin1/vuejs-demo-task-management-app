import { api } from '@/lib/axios'
import type { TaskDto } from './getTasks'

export type TaskCreateDto = {
  body: string
  completed?: boolean
}

export async function newTask(data: TaskCreateDto) {
  const res = await api.post<TaskDto>('/tasks/', data)
  return res.data
}
