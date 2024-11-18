<script setup>
import { RouterView } from 'vue-router'
import Header from "./components/Generic/Header.vue";
import Footer from "./components/Generic/Footer.vue";
</script>

<template>
    <div class="wrapper">
      <Header />
      <main>
        <RouterView />
      </main>
      <Footer />
    </div>
</template>

<style scoped>
main {
  padding-top: 60px; /* 헤더 높이만큼 패딩 추가 */
}

</style>
