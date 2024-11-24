<template>
  <header>
    <div class="wrapper">
      <nav>
        <img src="@/assets/img/logo.png" alt="" />
        <RouterLink to="/main" class="router-link">홈</RouterLink><br />
        <RouterLink to="/search" class="router-link">검색</RouterLink><br />
        <RouterLink to="/notice" class="router-link">커뮤니티</RouterLink><br />
        <RouterLink to="/mypage" class="router-link">마이 페이지</RouterLink><br />
        <button @click="handleLogout" v-if="authStore.isLoggedIn">logout</button>
      </nav>
    </div>
  </header>
</template>

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

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 10;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-around;
  background-color: white;
}

.wrapper nav {
  display: flex;
  gap: 25px;
}

/* RouterLink 스타일 */
.router-link {
  color: black; /* 글자색 검정으로 설정 */
  font-weight: bold; /* 글씨 두껍게 설정 */
  text-decoration: none; /* 아래줄 없애기 */
}

.router-link:hover {
  color: #3498db; /* 마우스 hover 시 글자색 바뀌게 */
}
</style>
