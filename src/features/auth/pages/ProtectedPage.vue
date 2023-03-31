<script lang="ts" setup>
import ButtonGeneric from '@/components/elements/ButtonGeneric.vue'
import { useAuthStore } from '@/stores/auth'
import { useMutation, useQuery } from '@tanstack/vue-query'
import { getUser } from '../api/getUser'
import { logout } from '../api/logout'
const authStore = useAuthStore()

const { data } = useQuery({ queryFn: getUser, queryKey: ['user'] })
const logoutMutation = useMutation({
  mutationFn: logout,
  onSuccess: () => {
    const authStore = useAuthStore()
    authStore.logout()
    console.log('LOOGED OUT')
  }
})

const refresh = async () => await authStore.refreshToken()
</script>

<template>
  <h1>Protected Route</h1>
  <h2>Hello {{ data?.username }}</h2>
  <ButtonGeneric @click="logoutMutation.mutateAsync()">Logout</ButtonGeneric>
  <ButtonGeneric @click="refresh">REFRESH token</ButtonGeneric>
</template>
