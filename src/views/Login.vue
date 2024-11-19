<script setup>
import { ref } from 'vue'
import LoginComponent from '@/components/Login/LoginComponent.vue'
import SignInComponent from '@/components/Login/SignInComponent.vue'

const showLogin = ref(true)
const changeToSignUp = () => {
  showLogin.value = false // 회원가입 화면 전환
}

const changeToLogin = () => {
  showLogin.value = true // 로그인 화면 전환
}
</script>

<template>
  <div class="login-wrapper">
    <div class="background"></div>
    <!-- 로그인 화면 -->
    <LoginComponent v-if="showLogin" @changeToSignUp="changeToSignUp" />

    <!-- 회원가입 화면 -->
    <SignInComponent v-if="!showLogin" @changeToLogin="changeToLogin" />
  </div>
</template>

<style scoped>
.background {
  background-image: url(../assets/img/image.png);
}
.login-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  height: 100vh;
  justify-content: center;
}
</style>
