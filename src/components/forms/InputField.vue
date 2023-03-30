<script setup lang="ts">
import { useField } from 'vee-validate'
import type { InputHTMLAttributes } from 'vue'

interface Props extends InputHTMLAttributes {
  name: string
}

const props = defineProps<Props>()
const { value, errorMessage } = useField(() => props.name, 'name')
</script>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<template>
  <label>
    <input type="text" v-model="value" v-bind="$attrs" />
    <p v-show="errorMessage">{{ errorMessage }}</p>
  </label>
</template>
