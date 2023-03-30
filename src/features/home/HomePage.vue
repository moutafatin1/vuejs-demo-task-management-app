<script lang="ts" setup>
import InputField from '@/components/forms/InputField.vue'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'
const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      username: z.string().min(4, 'The username must be at least 4 characters long'),
      password: z.string().min(3, 'The password must be at least 3 characters long')
    })
  )
})

const onSubmit = handleSubmit((data) => {
  console.log(data)
})
</script>
<template>
  <h1 class="pt-8 text-center text-5xl font-bold text-teal-500">Home Page</h1>
  <form @submit="onSubmit">
    <InputField name="username" placeholder="Username" />
    <InputField name="password" type="password" placeholder="Password" />
    <button
      class="px-6p rounded-lg bg-teal-600 py-2 font-bold text-white transition hover:opacity-75 active:scale-90"
    >
      Submit
    </button>
  </form>
</template>
