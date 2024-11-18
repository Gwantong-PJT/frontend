<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth'; // Pinia의 authStore import

const router = useRouter();
const authStore = useAuthStore(); // authStore 사용

let userId = '';
let password = '';
const handleLogin = () => {
  if (userId === 'ssafy' && password === '1234') {
    authStore.login(); // 상태 업데이트: 로그인 성공 시 isLoggedIn = true
    router.push('/main'); // 메인 페이지로 이동
  } else {
    alert('아이디 또는 비밀번호가 잘못되었습니다.');
  }
};
</script>

<template>
  <div class="login-box">
    <h2>Login</h2>
    <input 
      type="text" 
      v-model="userId" 
      placeholder="ID" 
      required 
    />
    <input 
      type="password" 
      v-model="password" 
      placeholder="Password" 
      required 
    />
    <button @click="handleLogin">로그인</button>
    <p class="signup-link" @click="$emit('changeToSignUp')">회원가입</p>
  </div>
</template>

<style scoped>
.login-box {
  border: 1px solid #ccc;
  padding: 20px;
  width: 300px;
  margin: 100px auto;
  text-align: center;
}
.signup-link {
  color: blue;
  cursor: pointer;
  margin-top: 10px;
  display: block;
}
</style>
