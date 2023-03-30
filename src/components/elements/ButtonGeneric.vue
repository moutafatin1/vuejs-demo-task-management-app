<script lang="ts" setup>
import type { ButtonHTMLAttributes } from 'vue'

interface Props extends ButtonHTMLAttributes {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default'
})
const variants = {
  default: 'bg-slate-900 text-white hover:bg-slate-700'
}
const sizes = {
  default: 'h-10 py-2 px-4'
}
</script>

<template>
  <button
    class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50"
    :class="[variants[variant], sizes[size]]"
  >
    <slot />
  </button>
</template>
