<script lang="ts" setup>
import type { TaskDto } from '../api/getTasks'
import DeleteTask from './DeleteTask.vue'
import ToggleCompleted from './ToggleCompleted.vue'

defineProps<{
  task: TaskDto
}>()
</script>

<template>
  <li class="flex items-center gap-4 rounded-lg bg-white p-2 font-medium text-slate-700">
    <ToggleCompleted :task="task" />
    <span>{{ task.body }}</span>
    <DeleteTask :id="task.id" />
  </li>
</template>
