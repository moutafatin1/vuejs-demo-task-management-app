<script lang="ts" setup>
import type { TaskDto } from '../api/getTasks'
import DeleteTask from './DeleteTask.vue'

defineProps<{
  task: TaskDto
}>()
</script>

<template>
  <li class="flex items-center gap-4 rounded-lg bg-white p-2 font-medium text-slate-700">
    <input
      type="checkbox"
      class="h-5 w-5 rounded-full text-violet-500 focus:ring-violet-500"
      :checked="task.completed"
    />
    <span>{{ task.body }}</span>
    <DeleteTask :id="task.id" />
  </li>
</template>
