<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink><br />
        <RouterLink to="/login">Login</RouterLink><br />
        <RouterLink to="/hotplace">Hotplace</RouterLink><br />
        <RouterLink to="/notice">Notice</RouterLink><br />
        <RouterLink to="/mypage">Mypage</RouterLink><br />
        <button>logout</button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f8f9fa;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
  padding: 10px 20px;
}

.wrapper nav {
  display: flex;
  gap: 15px;
}
</style>
