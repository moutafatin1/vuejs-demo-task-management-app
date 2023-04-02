<script lang="ts" setup>
import { TransitionChild } from '@headlessui/vue'
</script>
<template>
  <TransitionChild
    as="template"
    enter="ease-in-out duration-300"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="ease-in-out duration-300"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <slot
  /></TransitionChild>
</template>
