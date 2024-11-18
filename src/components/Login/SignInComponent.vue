<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits();

let name = '';
let userId = '';
let password = '';
let email = '';

const handleSignUp = () => {
  if (name && userId && password && email) {
    alert('회원가입이 완료되었습니다!');
    emit('changeToLogin'); // 회원가입 후 로그인 화면으로 전환
  } else {
    alert('모든 필드를 입력해주세요.');
  }
};
</script>

<template>
  <div class="signup-box">
    <h2>Sign Up</h2>
    <input type="text" v-model="name" placeholder="Name" required />
    <input type="text" v-model="userId" placeholder="ID" required />
    <input type="password" v-model="password" placeholder="Password" required />
    <input type="email" v-model="email" placeholder="Email" required />
    <button @click="handleSignUp">회원가입</button>
  </div>
</template>

<style scoped>
.signup-box {
  border: 1px solid #ccc;
  padding: 20px;
  width: 300px;
  margin: 100px auto;
  text-align: center;
}
</style>
