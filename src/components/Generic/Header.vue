<template>
  <header>
    <div class="wrapper">
      <nav>
        <img src="@/assets/img/logo_sky.png" alt="" />
        <RouterLink to="/main" class="router-link">홈</RouterLink><br />
        <RouterLink to="/search" class="router-link">검색</RouterLink><br />
        <RouterLink to="/notice" class="router-link">커뮤니티</RouterLink><br />
        <RouterLink to="/mypage" class="router-link"
          >{{ userName }} 님, 오늘도 떠나볼까요?</RouterLink
        ><br />
        <button class="logout-button" @click="handleLogout" v-if="authStore.isLoggedIn">
          logout
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()
const userName = ref('')

const handleLogout = () => {
  authStore.logout()
  router.push('/')
}

onMounted(() => {
  userName.value = sessionStorage.getItem('userName') || '사용자'
})
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
  background-color: #EAFAFF;
  font-size: 20px;
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
  color: #711871; /* 마우스 hover 시 글자색 바뀌게 */
}
img {
  width: 160px;
}

.logout-button {
  background: rgb(6, 14, 131);
  background: linear-gradient(0deg, rgb(148, 114, 145) 0%, rgb(218, 184, 226) 100%);
  border: none;
  width: 60px;
  height: 30px;
  border-radius: 8px;
  color: white;
}

.logout-button:hover {
  background: rgb(0, 3, 255);
  background: linear-gradient(0deg, rgb(117, 53, 114) 0%, rgb(60, 15, 73) 100%);
}
</style>
