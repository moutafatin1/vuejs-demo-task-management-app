import { api } from '@/lib/axios'
import type { TaskDto } from './getTasks'

export type TaskUpdateDto = {
  id: number
  body?: string
  completed?: boolean
}

export async function updateTask(data: TaskUpdateDto) {
  const { id, ...updateData } = data
  return await api.put<TaskDto>(`tasks/${id}`, updateData)
}
