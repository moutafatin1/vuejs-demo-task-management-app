<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import type { AxiosError } from 'axios'
import { getTasks } from '../api/getTasks'
import NewTask from '../components/NewTask.vue'
import TaskItem from '../components/TaskItem.vue'

const { data, isError, error } = useQuery({
  queryKey: ['tasks'],
  queryFn: getTasks,
  onError: (err: AxiosError) => err
})
</script>

<template>
  <p v-if="isError">{{ error?.message }}</p>
  <h1 class="my-8 text-center text-5xl font-bold text-violet-600">Tasks</h1>
  <div class="mx-auto my-4 max-w-2xl">
    <NewTask />
  </div>
  <ul class="mx-auto max-w-2xl space-y-4 rounded-lg bg-violet-100 p-4">
    <TaskItem v-for="task in data" :task="task" :key="task.id" />
  </ul>
</template>
