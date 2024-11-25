<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth' // Pinia의 authStore import
import { ref } from 'vue'
import axios from 'axios';

const router = useRouter()
const authStore = useAuthStore() // authStore 사용

const userId = ref('')
const password = ref('')

// 로그인 코드
const handleLogin = async () => {

  const loginUser = {
    userId: userId.value,
    userPassword: password.value
  }


  try {
    let response
    const formData = new FormData()
    formData.append('userId', userId.value)
    formData.append('userPassword', password.value)


    response = await axios.post('http://localhost:8520/user/login', JSON.stringify(loginUser), {
      headers: {'Content-Type': 'application/json'},
    })
    
      if (response.status === 200) {
        console.log("로그인 성공")
        const refreshToken = response.data.jwt;
        const userdto = response.data.userDto;

        sessionStorage.setItem('refreshToken', refreshToken)
        sessionStorage.setItem('userNo', userdto.userNo)
        sessionStorage.setItem('userId', userdto.userId)
        sessionStorage.setItem('userName', userdto.userName)
        authStore.login()
        router.push('/main')
      } else {
        alert('아이디 또는 비밀번호가 잘못되었습니다.')
      }
  } catch (error) {
    console.error('API 요청 오류', error)
  }
}
</script>

<template>
  <div class="content">
    <img src="@/assets/img/logo.png" alt="Logo" class="logo-image" />
    <div class="login-box">
      <input type="text" v-model="userId" placeholder="아이디" required />
      <input type="password" v-model="password" placeholder="비밀번호" required /><br /><br />

      <input class="chk" type="checkbox" id="stay-login" />
      <label for="chk">로그인 유지</label>
      <input class="chk" type="checkbox" id="remind-id" />
      <label for="chk">아이디 저장</label>
      <button class="custom-btn login-btn" @click="handleLogin">LogIn</button>
    </div>
    <div class="etc-box">
      <a class="signup-link">비밀번호 찾기</a> |
      <a class="signup-link" @click="$emit('changeToSignUp')">회원가입</a>
    </div>
  </div>
</template>

<style scoped>
.content {
  align-self: center;
}
.custom-btn {
  width: 270px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow:
    inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}
button {
  margin: 20px;
}

.chk {
  width: 15px;
  height: 15px;
}

.login-box {
  padding: 20px;
  width: 300px;
  height: 200px;
  margin: 5px auto;
  text-align: center;
  background: rgb(112, 87, 135);
  background: linear-gradient(#b4bde2 15%, #9ea6c6 28%, #f0aab4 86%, #906a74 100%, #8288a3 100%);
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
}
input {
  width: 270px;
  margin-top: 7px;
  height: 40px;
  border-radius: 5px;
  border: none; /* 테두리 없애기 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 아래쪽으로 그림자 추가 */
}

.login-btn {
  background: #866497;
  border: none;
  z-index: 1;
}
.login-btn:after {
  position: absolute;
  content: '';
  width: 0;
  height: 100%;
  top: 0;
  right: 0;
  z-index: -1;
  background-color: #4b1ef0;
  border-radius: 5px;
  box-shadow:
    inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
.login-btn:hover {
  color: #fff;
}
.login-btn:hover:after {
  left: 0;
  width: 100%;
}
.login-btn:active {
  top: 2px;
}

.signup-link {
  cursor: pointer;
  /* margin-top: 10px; */
  display: block;
}
.etc-box {
  display: flex;
  margin-top: 20px;
  width: 300px;
  align-items: center;
  gap: 5px;
  justify-self: center;
  justify-content: end;
}
</style>
