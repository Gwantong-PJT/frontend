<script setup>
import { ref } from 'vue';
import LoginComponent from '@/components/Login/LoginComponent.vue';
import SignInComponent from '@/components/Login/SignInComponent.vue';

const showLogin = ref(true); // 로그인 화면을 기본으로 보여줌

const changeToSignUp = () => {
  showLogin.value = false; // 회원가입 화면으로 전환
};

const changeToLogin = () => {
  showLogin.value = true; // 로그인 화면으로 전환
};
</script>

<template>
  <div class="login-wrapper">
    <!-- 로그인 화면 -->
    <LoginComponent v-if="showLogin" @changeToSignUp="changeToSignUp" />
    
    <!-- 회원가입 화면 -->
    <SignInComponent v-if="!showLogin" @changeToLogin="changeToLogin" />
  </div>
</template>

<style scoped>
.login-wrapper {
  text-align: center;
}
</style>
