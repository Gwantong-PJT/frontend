<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Generic/Header.vue'
import Footer from './components/Generic/Footer.vue'
import { useAuthStore } from './stores/auth'

const authStore = useAuthStore()
authStore.initializeAuth()
</script>

<template>
  <div class="wrapper">
    <Header v-if="authStore.isLoggedIn"> </Header>
    <main class="main">
      <RouterView />
    </main>
    <Footer v-if="authStore.isLoggedIn"></Footer>
  </div>
</template>

<style scoped>

</style>
