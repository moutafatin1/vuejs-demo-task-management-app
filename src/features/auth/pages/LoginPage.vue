<script lang="ts" setup>
import ButtonGeneric from '@/components/elements/ButtonGeneric.vue'
import InputField from '@/components/forms/InputField.vue'
import { useAuthStore } from '@/stores/auth'
import { useMutation } from '@tanstack/vue-query'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import { z } from 'zod'
import { login } from '../api/login'
const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      username: z.string().min(4, 'The username must be at least 4 characters long'),
      password: z.string().min(3, 'The password must be at least 3 characters long')
    })
  )
})

const authStore = useAuthStore()
const router = useRouter()

const loginMutation = useMutation({
  mutationFn: login,
  onSuccess: (response) => {
    authStore.login(response)
    console.log(response)
    router.push({ name: 'protected' })
  }
})

const onSubmit = handleSubmit((data) => {
  loginMutation.mutateAsync(data)
})
</script>
<template>
  <h1 class="my-8 text-center text-5xl font-bold text-indigo-600">LoginPage</h1>
  <form @submit="onSubmit" class="mx-auto flex max-w-2xl flex-col gap-4">
    <InputField name="username" placeholder="Username" />
    <InputField name="password" type="password" placeholder="Password" />
    <ButtonGeneric class="w-full">Submit</ButtonGeneric>
  </form>
</template>
