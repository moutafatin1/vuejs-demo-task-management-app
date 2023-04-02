<script lang="ts" setup>
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { deleteTask } from '../api/deleteTask'

defineProps<{
  id: number
}>()

const queryClient = useQueryClient()
const mutation = useMutation({
  mutationFn: deleteTask,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['tasks'] })
  }
})
</script>

<template>
  <button
    @click="mutation.mutateAsync(id)"
    class="ml-auto inline-flex rounded-lg text-3xl transition hover:text-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 active:scale-95"
  >
    <iconify-icon icon="ic:baseline-delete" />
  </button>
</template>
