<script lang="ts" setup>
import InputField from '@/components/forms/InputField.vue'
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'
import { newTask } from '../api/newTask'
const { handleSubmit, handleReset } = useForm({
  validationSchema: toTypedSchema(z.object({ body: z.string().min(1, 'Task must not be empty') }))
})

const queryClient = useQueryClient()

const mutation = useMutation({
  mutationFn: newTask,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['tasks'] })
  }
})
const newTaskSubmit = handleSubmit((data) => {
  mutation.mutateAsync(data)
  handleReset()
})
</script>
<template>
  <form @submit="newTaskSubmit">
    <InputField name="body" placeholder="What you want to do today?" />
  </form>
</template>
