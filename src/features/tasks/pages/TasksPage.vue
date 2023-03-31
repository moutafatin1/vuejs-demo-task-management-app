<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import { getTasks } from '../api/getTasks'
import TaskItem from '../components/TaskItem.vue'

const { data, isError, error } = useQuery({ queryKey: ['tasks'], queryFn: getTasks })
</script>

<template>
  <p v-if="isError">{{ error.message }}</p>
  <h1 class="my-8 text-center text-5xl font-bold text-violet-600">Tasks</h1>
  <ul class="mx-auto max-w-2xl space-y-4 rounded-lg bg-violet-100 p-4">
    <TaskItem v-for="task in data" :task="task" :key="task.id" />
  </ul>
</template>
