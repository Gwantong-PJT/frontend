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
    <div class="header-line"></div>
    <main class="main">
      <RouterView />
    </main>
    <Footer v-if="authStore.isLoggedIn"></Footer>
  </div>
</template>

<style scoped>
.header-line {
  width: 100%;
  height: 2px; /* 라인의 두께 */
  background-color: #554f4f; /* 라인의 색상 */
}
</style>
