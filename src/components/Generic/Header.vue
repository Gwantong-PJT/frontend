<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <img src="@/assets/img/logo.png" alt="" />
        <RouterLink to="/main">홈</RouterLink><br />
        <RouterLink to="/hotplace">핫플</RouterLink><br />
        <RouterLink to="/search">검색</RouterLink><br />
        <RouterLink to="/notice">공지사항</RouterLink><br />
        <RouterLink to="/mypage">마이 페이지</RouterLink><br />
        <button @click="handleLogout" v-if="authStore.isLoggedIn">logout</button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #f8f9fa;
  z-index: 10;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-around;
}

.wrapper nav {
  display: flex;
  gap: 25px;
}

/* .menu {
  text-align: center;
  padding: 20px;
} */
</style>
