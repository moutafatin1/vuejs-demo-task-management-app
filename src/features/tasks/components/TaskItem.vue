<script lang="ts" setup>
import type { TaskDto } from '../api/getTasks'

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
    <button
      class="ml-auto inline-flex rounded-lg text-3xl transition hover:text-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 active:scale-95"
    >
      <iconify-icon icon="ic:baseline-delete" />
    </button>
  </li>
</template>
