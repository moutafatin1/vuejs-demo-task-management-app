<script lang="ts" setup>
import ButtonGeneric from '@/components/elements/ButtonGeneric.vue'
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
</template>
