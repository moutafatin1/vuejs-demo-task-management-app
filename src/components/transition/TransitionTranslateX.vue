<script lang="ts" setup>
import { TransitionChild } from '@headlessui/vue'
</script>
<template>
  <TransitionChild
    as="template"
    enter="transition ease-in-out duration-300 transform"
    enter-from="-translate-x-full"
    enter-to="translate-x-0"
    leave="transition ease-in-out duration-300 transform"
    leave-from="translate-x-0"
    leave-to="-translate-x-full"
  >
    <slot
  /></TransitionChild>
</template>
