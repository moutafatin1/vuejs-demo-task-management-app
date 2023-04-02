<script lang="ts" setup>
import { useQueryClient, useMutation } from '@tanstack/vue-query'
import type { TaskDto } from '../api/getTasks'
import { updateTask } from '../api/updateTask'

const props = defineProps<{
  task: TaskDto
}>()
const queryClient = useQueryClient()
const mutation = useMutation({
  mutationFn: updateTask,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['tasks'] })
  }
})

const handleToggle = () => {
  mutation.mutateAsync({ id: props.task.id, completed: !props.task.completed })
}
</script>

<template>
  <input
    @change="handleToggle"
    type="checkbox"
    class="h-5 w-5 rounded-full text-violet-500 focus:ring-violet-500"
    :checked="task.completed"
  />
</template>
