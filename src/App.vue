<script setup>
import { RouterView } from 'vue-router'
import Header from "./components/Generic/Header.vue";
import Footer from "./components/Generic/Footer.vue";
import { useAuthStore } from './stores/auth';

const authStore = useAuthStore();
</script>

<template>
  <div class="wrapper">
    <Header v-if="authStore.isLoggedIn" />
    <main>
      <RouterView />
    </main>
    <Footer v-if="authStore.isLoggedIn" />
  </div>
</template>

<style scoped>
main {
  padding-top: 60px;
}
</style>
